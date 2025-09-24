import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Chip,
  Button,
  TextField,
  InputAdornment,
  Avatar,
  Stack,
  Divider,
  Paper,
  Fab,
  Slide,
  Fade,
  Zoom,
  alpha,
  useTheme,
  Grid,
  Switch,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Badge,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  ShoppingCart as ShoppingCartIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  Clear as ClearIcon,
  FilterList as FilterIcon,
  CheckCircle as CheckCircleIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  LocalGroceryStore as GroceryIcon,
  Restaurant as RestaurantIcon,
  ExpandMore as ExpandMoreIcon,
  TrendingUp as TrendingUpIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@mui/icons-material';

const PantallaListaCompras = ({ navigation }) => {
  const theme = useTheme();
  const [listaCompras, setListaCompras] = useState([
    {
      id: '1',
      nombre: 'Pasta spaghetti',
      cantidad: '200g',
      categoria: 'Pastas y Granos',
      comprado: false,
      esencial: true,
      precio: 2.50
    },
    {
      id: '2',
      nombre: 'Panceta italiana',
      cantidad: '150g',
      categoria: 'Carnes',
      comprado: false,
      esencial: true,
      precio: 8.90
    },
    {
      id: '3',
      nombre: 'Queso parmesano',
      cantidad: '100g',
      categoria: 'Lácteos',
      comprado: true,
      esencial: true,
      precio: 6.75
    },
    {
      id: '4',
      nombre: 'Ajo fresco',
      cantidad: '2 dientes',
      categoria: 'Verduras',
      comprado: false,
      esencial: false,
      precio: 1.20
    },
    {
      id: '5',
      nombre: 'Lechuga romana',
      cantidad: '1 unidad',
      categoria: 'Verduras',
      comprado: false,
      esencial: false,
      precio: 2.30
    },
    {
      id: '6',
      nombre: 'Aceite de oliva',
      cantidad: '500ml',
      categoria: 'Aceites y Vinagres',
      comprado: true,
      esencial: true,
      precio: 4.50
    }
  ]);
  
  const [nuevoIngrediente, setNuevoIngrediente] = useState('');
  const [mostrarSoloPendientes, setMostrarSoloPendientes] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, id: null });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const toggleComprado = (id) => {
    setListaCompras(prevLista =>
      prevLista.map(item =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
    setSnackbarMessage('Estado actualizado');
    setSnackbarOpen(true);
  };

  const toggleEsencial = (id) => {
    setListaCompras(prevLista =>
      prevLista.map(item =>
        item.id === id ? { ...item, esencial: !item.esencial } : item
      )
    );
  };

  const agregarIngrediente = () => {
    if (nuevoIngrediente.trim()) {
      const nuevoItem = {
        id: Date.now().toString(),
        nombre: nuevoIngrediente.trim(),
        cantidad: '1 unidad',
        categoria: 'Varios',
        comprado: false,
        esencial: false,
        precio: 0.00
      };
      setListaCompras(prev => [nuevoItem, ...prev]);
      setNuevoIngrediente('');
      setSnackbarMessage('Ingrediente agregado');
      setSnackbarOpen(true);
    }
  };

  const eliminarIngrediente = (id) => {
    setListaCompras(prevLista => prevLista.filter(item => item.id !== id));
    setDeleteDialog({ open: false, id: null });
    setSnackbarMessage('Ingrediente eliminado');
    setSnackbarOpen(true);
  };

  const limpiarLista = () => {
    setListaCompras(prevLista => prevLista.filter(item => !item.comprado));
    setSnackbarMessage('Lista limpiada');
    setSnackbarOpen(true);
  };

  const marcarTodosComprados = () => {
    setListaCompras(prevLista =>
      prevLista.map(item => ({ ...item, comprado: true }))
    );
    setSnackbarMessage('Todos marcados como comprados');
    setSnackbarOpen(true);
  };

  const ingredientesFiltrados = mostrarSoloPendientes 
    ? listaCompras.filter(item => !item.comprado)
    : listaCompras;

  const ingredientesPorCategoria = ingredientesFiltrados.reduce((acc, item) => {
    if (!acc[item.categoria]) {
      acc[item.categoria] = [];
    }
    acc[item.categoria].push(item);
    return acc;
  }, {});

  const categorias = Object.keys(ingredientesPorCategoria);

  const totalPendientes = listaCompras.filter(item => !item.comprado).length;
  const totalComprados = listaCompras.filter(item => item.comprado).length;
  const totalEsenciales = listaCompras.filter(item => item.esencial).length;
  const costoTotal = listaCompras.reduce((sum, item) => sum + (item.comprado ? 0 : item.precio), 0);

  const IngredienteItem = ({ item, index }) => (
    <Zoom in timeout={300 + index * 50}>
      <Card
        sx={{
          mb: 1,
          borderRadius: 2,
          border: 1,
          borderColor: item.comprado ? 'success.light' : 'divider',
          bgcolor: item.comprado ? alpha(theme.palette.success.main, 0.05) : 'background.paper',
          opacity: item.comprado ? 0.7 : 1,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateX(4px)',
            boxShadow: theme.shadows[4]
          }
        }}
      >
        <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Checkbox
              checked={item.comprado}
              onChange={() => toggleComprado(item.id)}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
              sx={{
                color: item.comprado ? 'success.main' : 'primary.main',
                '&.Mui-checked': { color: 'success.main' }
              }}
            />

            <Box sx={{ flexGrow: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    textDecoration: item.comprado ? 'line-through' : 'none',
                    color: item.comprado ? 'text.secondary' : 'text.primary'
                  }}
                >
                  {item.nombre}
                </Typography>
                {item.esencial && (
                  <StarIcon sx={{ color: 'warning.main', fontSize: 20 }} />
                )}
              </Stack>
              
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="body2" color="text.secondary">
                  {item.cantidad}
                </Typography>
                <Chip
                  label={item.categoria}
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: '0.7rem' }}
                />
                {item.precio > 0 && (
                  <Typography variant="body2" fontWeight={600} color="success.main">
                    ${item.precio.toFixed(2)}
                  </Typography>
                )}
              </Stack>
            </Box>

            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                onClick={() => toggleEsencial(item.id)}
                sx={{
                  color: item.esencial ? 'warning.main' : 'text.secondary',
                  '&:hover': { bgcolor: alpha(theme.palette.warning.main, 0.1) }
                }}
              >
                {item.esencial ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
              
              <IconButton
                size="small"
                onClick={() => setDeleteDialog({ open: true, id: item.id })}
                sx={{
                  color: 'error.main',
                  '&:hover': { bgcolor: alpha(theme.palette.error.main, 0.1) }
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Zoom>
  );

  return (
    <Box sx={{ bgcolor: 'grey.50', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          bgcolor: 'white',
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Toolbar sx={{ px: 3 }}>
          <IconButton
            edge="start"
            sx={{ 
              mr: 2,
              border: 1,
              borderColor: 'divider',
              borderRadius: 2
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          
          <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography 
              variant="h5" 
              component="h1" 
              fontWeight={800}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 0.5
              }}
            >
              Lista de Compras
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Organiza tu compra inteligente
            </Typography>
          </Box>

          <IconButton
            onClick={limpiarLista}
            sx={{ 
              border: 1,
              borderColor: 'divider',
              borderRadius: 2
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 3 }}>
        {/* Estadísticas */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={6} sm={3}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(theme.palette.warning.main, 0.1)} 0%, ${alpha(theme.palette.warning.main, 0.05)} 100%)`
              }}
            >
              <Avatar sx={{ bgcolor: 'warning.main', mx: 'auto', mb: 2 }}>
                <GroceryIcon />
              </Avatar>
              <Typography variant="h4" fontWeight={800} color="warning.main">
                {totalPendientes}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontWeight={600}>
                Pendientes
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={6} sm={3}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(theme.palette.success.main, 0.1)} 0%, ${alpha(theme.palette.success.main, 0.05)} 100%)`
              }}
            >
              <Avatar sx={{ bgcolor: 'success.main', mx: 'auto', mb: 2 }}>
                <CheckCircleIcon />
              </Avatar>
              <Typography variant="h4" fontWeight={800} color="success.main">
                {totalComprados}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontWeight={600}>
                Comprados
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={6} sm={3}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(theme.palette.error.main, 0.1)} 0%, ${alpha(theme.palette.error.main, 0.05)} 100%)`
              }}
            >
              <Avatar sx={{ bgcolor: 'error.main', mx: 'auto', mb: 2 }}>
                <StarIcon />
              </Avatar>
              <Typography variant="h4" fontWeight={800} color="error.main">
                {totalEsenciales}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontWeight={600}>
                Esenciales
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={6} sm={3}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 3, 
                textAlign: 'center', 
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`
              }}
            >
              <Avatar sx={{ bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <TrendingUpIcon />
              </Avatar>
              <Typography variant="h4" fontWeight={800} color="primary.main">
                ${costoTotal.toFixed(2)}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontWeight={600}>
                Total estimado
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Controles */}
        <Paper elevation={3} sx={{ p: 3, borderRadius: 3, mb: 4 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={mostrarSoloPendientes}
                    onChange={(e) => setMostrarSoloPendientes(e.target.checked)}
                    color="primary"
                  />
                }
                label={
                  <Stack direction="row" alignItems="center" spacing={1}>
                    {mostrarSoloPendientes ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    <Typography variant="body1" fontWeight={600}>
                      Mostrar solo pendientes
                    </Typography>
                  </Stack>
                }
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
                <Button
                  variant="outlined"
                  startIcon={<CheckCircleIcon />}
                  onClick={marcarTodosComprados}
                  sx={{ borderRadius: 2 }}
                >
                  Marcar todos
                </Button>
                <Button
                  variant="contained"
                  startIcon={<ClearIcon />}
                  onClick={limpiarLista}
                  color="error"
                  sx={{ borderRadius: 2 }}
                >
                  Limpiar lista
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        {/* Agregar ingrediente */}
        <Paper 
          elevation={3}
          sx={{ 
            p: 3, 
            mb: 4, 
            borderRadius: 3,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Agregar nuevo ingrediente..."
              value={nuevoIngrediente}
              onChange={(e) => setNuevoIngrediente(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && agregarIngrediente()}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AddIcon color="primary" />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 3,
                  bgcolor: 'white'
                }
              }}
            />
            <Button
              variant="contained"
              onClick={agregarIngrediente}
              disabled={!nuevoIngrediente.trim()}
              sx={{ 
                minWidth: 60,
                height: 56,
                borderRadius: 3,
                background: nuevoIngrediente.trim() 
                  ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
                  : undefined
              }}
            >
              <AddIcon />
            </Button>
          </Stack>
        </Paper>

        {/* Lista por categorías */}
        {categorias.length > 0 ? (
          <Stack spacing={3}>
            {categorias.map((categoria) => (
              <Fade in timeout={500} key={categoria}>
                <Accordion 
                  defaultExpanded
                  elevation={3}
                  sx={{ 
                    borderRadius: 3,
                    '&:before': { display: 'none' },
                    overflow: 'hidden'
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                      borderBottom: 1,
                      borderColor: 'divider',
                      '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.08) }
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                        <RestaurantIcon sx={{ fontSize: 20 }} />
                      </Avatar>
                      <Typography variant="h6" fontWeight={700}>
                        {categoria}
                      </Typography>
                      <Chip
                        label={ingredientesPorCategoria[categoria].length}
                        size="small"
                        color="primary"
                        sx={{ fontWeight: 600 }}
                      />
                    </Stack>
                  </AccordionSummary>
                  
                  <AccordionDetails sx={{ p: 3 }}>
                    <Stack spacing={1}>
                      {ingredientesPorCategoria[categoria].map((item, index) => (
                        <IngredienteItem key={item.id} item={item} index={index} />
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Fade>
            ))}
          </Stack>
        ) : (
          <Paper 
            elevation={3}
            sx={{ 
              p: 6, 
              textAlign: 'center', 
              borderRadius: 3,
              bgcolor: 'grey.50'
            }}
          >
            <Avatar 
              sx={{ 
                width: 80, 
                height: 80, 
                mx: 'auto', 
                mb: 3, 
                bgcolor: 'grey.200' 
              }}
            >
              <ShoppingCartIcon sx={{ fontSize: 40, color: 'grey.400' }} />
            </Avatar>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
              Lista vacía
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Agrega ingredientes manualmente o desde las recetas
            </Typography>
            <Button
              variant="contained"
              startIcon={<RestaurantIcon />}
              size="large"
              sx={{ borderRadius: 3 }}
            >
              Explorar Recetas
            </Button>
          </Paper>
        )}
      </Container>

      {/* Dialog de confirmación */}
      <Dialog
        open={deleteDialog.open}
        onClose={() => setDeleteDialog({ open: false, id: null })}
        PaperProps={{
          sx: { borderRadius: 3 }
        }}
      >
        <DialogTitle>
          <Typography variant="h5" fontWeight={700}>
            Eliminar ingrediente
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            ¿Estás seguro de que quieres eliminar este ingrediente de la lista?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={() => setDeleteDialog({ open: false, id: null })}
            sx={{ borderRadius: 2 }}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => eliminarIngrediente(deleteDialog.id)}
            variant="contained"
            color="error"
            sx={{ borderRadius: 2 }}
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity="success"
          sx={{ borderRadius: 2 }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* FAB para agregar desde recetas */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          boxShadow: theme.shadows[8],
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
      >
        <RestaurantIcon />
      </Fab>
    </Box>
  );
};

export default PantallaListaCompras;