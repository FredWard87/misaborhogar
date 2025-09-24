import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  AppBar,
  Toolbar,
  Chip,
  Button,
  Avatar,
  Stack,
  Divider,
  Paper,
  Step,
  Stepper,
  StepLabel,
  StepContent,
  Rating,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fab,
  Slide,
  Fade,
  Zoom,
  alpha,
  useTheme,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  AccessTime as AccessTimeIcon,
  People as PeopleIcon,
  Restaurant as RestaurantIcon,
  ShoppingCart as ShoppingCartIcon,
  Share as ShareIcon,
  Remove as RemoveIcon,
  Add as AddIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Star as StarIcon,
  LocalFireDepartment as CaloriesIcon,
  Grain as GrainIcon,
  Opacity as FatIcon,
  Check as CheckIcon,
  PlayArrow as PlayIcon,
  Timer as TimerIcon,
  Info as InfoIcon,
  TrendingUp as TrendingIcon
} from '@mui/icons-material';
import { FitnessCenter as FitnessIcon } from '@mui/icons-material';


const PantallaDetalleReceta = ({ route, navigation }) => {
  const theme = useTheme();
  const [porciones, setPorciones] = useState(4);
  const [pasoActual, setPasoActual] = useState(0);
  const [esFavorito, setEsFavorito] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const recetaCompleta = {
    id: '1',
    nombre: 'Pasta Carbonara Clásica',
    categoria: 'Italiana',
    tiempo: '30 min',
    dificultad: 'Media',
    imagen: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop',
    porciones: 4,
    rating: 4.8,
    reviews: 284,
    chef: 'Chef Marco Rossi',
    descripcion: 'Una auténtica receta italiana que combina la cremosidad perfecta con sabores intensos. Ideal para una cena especial.',
    ingredientes: [
      { nombre: 'Pasta spaghetti', cantidad: 200, unidad: 'g', categoria: 'Carbohidratos', disponible: true },
      { nombre: 'Panceta italiana', cantidad: 150, unidad: 'g', categoria: 'Proteínas', disponible: false },
      { nombre: 'Huevos frescos', cantidad: 2, unidad: 'unidades', categoria: 'Proteínas', disponible: true },
      { nombre: 'Queso parmesano', cantidad: 100, unidad: 'g', categoria: 'Lácteos', disponible: true },
      { nombre: 'Pimienta negra recién molida', cantidad: 1, unidad: 'cucharadita', categoria: 'Especias', disponible: true },
      { nombre: 'Sal marina', cantidad: 1, unidad: 'cucharadita', categoria: 'Especias', disponible: true },
      { nombre: 'Ajo fresco', cantidad: 2, unidad: 'dientes', categoria: 'Aromáticos', disponible: false }
    ],
    pasos: [
      { 
        titulo: 'Preparar el agua',
        descripcion: 'Poner a hervir agua con sal generosa en una olla grande. El agua debe estar bien salada para dar sabor a la pasta.',
        tiempo: '5 min',
        tips: 'El agua debe saber como el mar',
        completado: false
      },
      { 
        titulo: 'Preparar ingredientes',
        descripcion: 'Cortar la panceta en cubos pequeños uniformes y el ajo en láminas finas. Esto asegura una cocción pareja.',
        tiempo: '5 min',
        tips: 'Mantén los cubos del mismo tamaño',
        completado: false
      },
      { 
        titulo: 'Dorar la panceta',
        descripcion: 'Dorar la panceta en una sartén grande hasta que esté dorada y crujiente. No uses aceite, la panceta tiene grasa propia.',
        tiempo: '6 min',
        tips: 'La panceta debe estar crujiente pero no quemada',
        completado: false
      },
      { 
        titulo: 'Preparar la mezcla cremosa',
        descripcion: 'Batir los huevos con el queso parmesano rallado hasta obtener una mezcla homogénea y cremosa.',
        tiempo: '3 min',
        tips: 'Usa queso recién rallado para mejor textura',
        completado: false
      },
      { 
        titulo: 'Cocinar la pasta',
        descripcion: 'Cocinar la pasta según las instrucciones del paquete hasta que esté al dente. Reserva una taza del agua de cocción.',
        tiempo: '8 min',
        tips: 'La pasta al dente es clave para el resultado final',
        completado: false
      }
    ],
    nutricion: {
      calorias: 485,
      proteinas: 28,
      carbohidratos: 52,
      grasas: 18,
      fibra: 3,
      azucares: 2
    }
  };

  const ajustarPorciones = (nuevasPorciones) => {
    if (nuevasPorciones > 0 && nuevasPorciones <= 20) {
      setPorciones(nuevasPorciones);
    }
  };

  const calcularCantidad = (cantidadBase) => {
    return ((cantidadBase * porciones) / recetaCompleta.porciones).toFixed(1);
  };

  const toggleFavorito = () => {
    setEsFavorito(!esFavorito);
    setSnackbarOpen(true);
  };

  const agregarListaCompras = () => {
    setShowIngredients(true);
  };

  const siguientePaso = () => {
    if (pasoActual < recetaCompleta.pasos.length - 1) {
      setPasoActual(pasoActual + 1);
    }
  };

  const pasoAnterior = () => {
    if (pasoActual > 0) {
      setPasoActual(pasoActual - 1);
    }
  };

  const IngredienteItem = ({ ingrediente, index }) => (
    <Zoom in timeout={300 + index * 100}>
      <Paper
        elevation={2}
        sx={{ 
          p: 2,
          mb: 2,
          borderRadius: 2,
          border: 1,
          borderColor: ingrediente.disponible ? 'success.light' : 'warning.light',
          bgcolor: ingrediente.disponible ? alpha(theme.palette.success.main, 0.02) : alpha(theme.palette.warning.main, 0.02),
          '&:hover': { 
            elevation: 4,
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease-in-out'
          }
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar 
            sx={{ 
              bgcolor: ingrediente.disponible ? 'success.main' : 'warning.main',
              width: 40,
              height: 40
            }}
          >
            {ingrediente.disponible ? <CheckIcon /> : <ShoppingCartIcon />}
          </Avatar>
          
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" fontWeight={600}>
              {ingrediente.nombre}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h6" color="primary.main" fontWeight={700}>
                {calcularCantidad(ingrediente.cantidad)} {ingrediente.unidad}
              </Typography>
              <Chip 
                label={ingrediente.categoria}
                size="small"
                variant="outlined"
                sx={{ fontSize: '0.75rem' }}
              />
            </Stack>
          </Box>

          <IconButton 
            color="primary"
            sx={{ 
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.2) }
            }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Stack>
      </Paper>
    </Zoom>
  );

  return (
    <Box sx={{ bgcolor: 'grey.50', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          bgcolor: alpha(theme.palette.common.white, 0.9),
          backdropFilter: 'blur(10px)',
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Toolbar>
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
          
          <Typography 
            variant="h6" 
            component="h1" 
            fontWeight={700}
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
            Detalle de Receta
          </Typography>

          <IconButton
            onClick={toggleFavorito}
            sx={{ 
              border: 1,
              borderColor: esFavorito ? 'error.main' : 'divider',
              borderRadius: 2,
              bgcolor: esFavorito ? alpha(theme.palette.error.main, 0.1) : 'transparent'
            }}
          >
            {esFavorito ? (
              <FavoriteIcon sx={{ color: 'error.main' }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 3 }}>
        {/* Hero Image */}
        <Paper 
          elevation={6}
          sx={{ 
            borderRadius: 4,
            overflow: 'hidden',
            mb: 4,
            position: 'relative'
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              height="400"
              image={recetaCompleta.imagen}
              alt={recetaCompleta.nombre}
              sx={{ objectFit: 'cover' }}
            />
            
            {/* Overlay con información */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: `linear-gradient(transparent, ${alpha(theme.palette.common.black, 0.8)})`,
                color: 'white',
                p: 4
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                <Chip
                  icon={<TrendingIcon />}
                  label="Receta Destacada"
                  color="warning"
                  size="small"
                  sx={{ fontWeight: 600 }}
                />
                <Rating value={recetaCompleta.rating} precision={0.1} size="small" readOnly />
                <Typography variant="body2" fontWeight={500}>
                  ({recetaCompleta.reviews} reseñas)
                </Typography>
              </Stack>
              
              <Typography variant="h3" component="h1" fontWeight={800} sx={{ mb: 1 }}>
                {recetaCompleta.nombre}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                por {recetaCompleta.chef}
              </Typography>
            </Box>
          </Box>
        </Paper>

        <Grid container spacing={4}>
          {/* Información principal */}
          <Grid item xs={12} md={8}>
            {/* Descripción y métricas */}
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                {recetaCompleta.descripcion}
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                  <Paper 
                    elevation={1}
                    sx={{ 
                      p: 2, 
                      textAlign: 'center', 
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.primary.main, 0.05)
                    }}
                  >
                    <AccessTimeIcon sx={{ color: 'primary.main', mb: 1 }} />
                    <Typography variant="h6" fontWeight={700}>
                      {recetaCompleta.tiempo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tiempo total
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={6} sm={3}>
                  <Paper 
                    elevation={1}
                    sx={{ 
                      p: 2, 
                      textAlign: 'center', 
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.secondary.main, 0.05)
                    }}
                  >
                    <RestaurantIcon sx={{ color: 'secondary.main', mb: 1 }} />
                    <Typography variant="h6" fontWeight={700}>
                      {recetaCompleta.dificultad}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Dificultad
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={6} sm={3}>
                  <Paper 
                    elevation={1}
                    sx={{ 
                      p: 2, 
                      textAlign: 'center', 
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.success.main, 0.05)
                    }}
                  >
                    <PeopleIcon sx={{ color: 'success.main', mb: 1 }} />
                    <Typography variant="h6" fontWeight={700}>
                      {porciones}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Porciones
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={6} sm={3}>
                  <Paper 
                    elevation={1}
                    sx={{ 
                      p: 2, 
                      textAlign: 'center', 
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.warning.main, 0.05)
                    }}
                  >
                    <CaloriesIcon sx={{ color: 'warning.main', mb: 1 }} />
                    <Typography variant="h6" fontWeight={700}>
                      {recetaCompleta.nutricion.calorias}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Calorías
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>

            {/* Ajuste de porciones */}
            <Paper elevation={3} sx={{ p: 3, borderRadius: 3, mb: 4 }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                Ajustar Porciones
              </Typography>
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={3}>
                <IconButton
                  onClick={() => ajustarPorciones(porciones - 1)}
                  disabled={porciones <= 1}
                  size="large"
                  sx={{ 
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': { bgcolor: 'primary.dark' },
                    '&.Mui-disabled': { bgcolor: 'grey.300' }
                  }}
                >
                  <RemoveIcon />
                </IconButton>
                
                <Paper 
                  elevation={2}
                  sx={{ 
                    px: 4, 
                    py: 2, 
                    borderRadius: 3,
                    bgcolor: alpha(theme.palette.primary.main, 0.1)
                  }}
                >
                  <Typography variant="h4" fontWeight={800} textAlign="center" color="primary.main">
                    {porciones}
                  </Typography>
                  <Typography variant="body2" textAlign="center" color="text.secondary">
                    personas
                  </Typography>
                </Paper>
                
                <IconButton
                  onClick={() => ajustarPorciones(porciones + 1)}
                  disabled={porciones >= 20}
                  size="large"
                  sx={{ 
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': { bgcolor: 'primary.dark' },
                    '&.Mui-disabled': { bgcolor: 'grey.300' }
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Stack>
            </Paper>

            {/* Botones de acción */}
            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                startIcon={<ShoppingCartIcon />}
                onClick={agregarListaCompras}
                sx={{ 
                  borderRadius: 3,
                  py: 1.5,
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
                }}
              >
                Agregar a Lista de Compras
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<ShareIcon />}
                sx={{ 
                  borderRadius: 3,
                  py: 1.5,
                  fontWeight: 600,
                  minWidth: 140
                }}
              >
                Compartir
              </Button>
            </Stack>

            {/* Ingredientes */}
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
              <Typography variant="h4" fontWeight={700} sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <ShoppingCartIcon sx={{ mr: 2, color: 'primary.main' }} />
                Ingredientes
              </Typography>
              
              {recetaCompleta.ingredientes.map((ingrediente, index) => (
                <IngredienteItem key={index} ingrediente={ingrediente} index={index} />
              ))}
            </Paper>

            {/* Preparación paso a paso */}
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h4" fontWeight={700} sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <PlayIcon sx={{ mr: 2, color: 'secondary.main' }} />
                Preparación Paso a Paso
              </Typography>
              
              <Stepper activeStep={pasoActual} orientation="vertical">
                {recetaCompleta.pasos.map((paso, index) => (
                  <Step key={index}>
                    <StepLabel
                      StepIconComponent={() => (
                        <Avatar 
                          sx={{ 
                            bgcolor: index <= pasoActual ? 'secondary.main' : 'grey.300',
                            width: 32,
                            height: 32,
                            fontSize: '0.875rem',
                            fontWeight: 700
                          }}
                        >
                          {index + 1}
                        </Avatar>
                      )}
                    >
                      <Typography variant="h6" fontWeight={600}>
                        {paso.titulo}
                      </Typography>
                      <Chip 
                        label={paso.tiempo}
                        icon={<TimerIcon />}
                        size="small"
                        color="secondary"
                        variant="outlined"
                        sx={{ mt: 0.5 }}
                      />
                    </StepLabel>
                    <StepContent>
                      <Paper 
                        elevation={1}
                        sx={{ 
                          p: 3, 
                          mt: 2, 
                          borderRadius: 2,
                          bgcolor: alpha(theme.palette.secondary.main, 0.02)
                        }}
                      >
                        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                          {paso.descripcion}
                        </Typography>
                        
                        <Box
                          sx={{ 
                            p: 2, 
                            borderRadius: 2, 
                            bgcolor: alpha(theme.palette.info.main, 0.1),
                            border: 1,
                            borderColor: alpha(theme.palette.info.main, 0.2)
                          }}
                        >
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <InfoIcon sx={{ color: 'info.main', fontSize: 20 }} />
                            <Typography variant="body2" fontWeight={600} color="info.main">
                              Consejo:
                            </Typography>
                          </Stack>
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            {paso.tips}
                          </Typography>
                        </Box>
                        
                        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                          <Button
                            variant="outlined"
                            startIcon={<ChevronLeftIcon />}
                            onClick={pasoAnterior}
                            disabled={pasoActual === 0}
                            sx={{ borderRadius: 2 }}
                          >
                            Anterior
                          </Button>
                          <Button
                            variant="contained"
                            endIcon={<ChevronRightIcon />}
                            onClick={siguientePaso}
                            disabled={pasoActual === recetaCompleta.pasos.length - 1}
                            sx={{ borderRadius: 2 }}
                          >
                            {pasoActual === recetaCompleta.pasos.length - 1 ? 'Finalizar' : 'Siguiente'}
                          </Button>
                        </Stack>
                      </Paper>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Paper>
          </Grid>

          {/* Sidebar con información nutricional */}
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={4}
              sx={{ 
                p: 4, 
                borderRadius: 3,
                position: 'sticky',
                top: 100,
                background: `linear-gradient(135deg, ${alpha(theme.palette.success.main, 0.05)} 0%, ${alpha(theme.palette.primary.main, 0.05)} 100%)`
              }}
            >
              <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                Información Nutricional
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Por porción ({porciones} personas)
              </Typography>
              
              <Stack spacing={3}>
                <Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                    <Typography variant="h6" fontWeight={600}>Calorías</Typography>
                    <Typography variant="h5" fontWeight={800} color="warning.main">
                      {Math.round(recetaCompleta.nutricion.calorias * porciones / recetaCompleta.porciones / porciones)}
                    </Typography>
                  </Stack>
                  <LinearProgress 
                    variant="determinate" 
                    value={70} 
                    color="warning"
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>

                <Divider />

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Paper elevation={1} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                      <FitnessIcon sx={{ color: 'success.main', mb: 1 }} />
                      <Typography variant="h6" fontWeight={700}>
                        {recetaCompleta.nutricion.proteinas}g
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Proteínas
                      </Typography>
                    </Paper>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Paper elevation={1} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                      <GrainIcon sx={{ color: 'primary.main', mb: 1 }} />
                      <Typography variant="h6" fontWeight={700}>
                        {recetaCompleta.nutricion.carbohidratos}g
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Carbohidratos
                      </Typography>
                    </Paper>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Paper elevation={1} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                      <FatIcon sx={{ color: 'warning.main', mb: 1 }} />
                      <Typography variant="h6" fontWeight={700}>
                        {recetaCompleta.nutricion.grasas}g
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Grasas
                      </Typography>
                    </Paper>
                  </Grid>
                  
                  <Grid item xs={6}>
                    <Paper elevation={1} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                      <GrainIcon sx={{ color: 'success.main', mb: 1 }} />
                      <Typography variant="h6" fontWeight={700}>
                        {recetaCompleta.nutricion.fibra}g
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Fibra
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Dialog para lista de compras */}
      <Dialog 
        open={showIngredients} 
        onClose={() => setShowIngredients(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Typography variant="h5" fontWeight={700}>
            Agregar a Lista de Compras
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Selecciona los ingredientes que necesitas comprar:
          </Typography>
          <List>
            {recetaCompleta.ingredientes.map((ingrediente, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Avatar sx={{ bgcolor: ingrediente.disponible ? 'success.main' : 'warning.main' }}>
                    {ingrediente.disponible ? <CheckIcon /> : <ShoppingCartIcon />}
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={ingrediente.nombre}
                  secondary={`${calcularCantidad(ingrediente.cantidad)} ${ingrediente.unidad}`}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowIngredients(false)} sx={{ borderRadius: 2 }}>
            Cancelar
          </Button>
          <Button 
            variant="contained" 
            onClick={() => {
              setShowIngredients(false);
              setSnackbarOpen(true);
            }}
            sx={{ borderRadius: 2 }}
          >
            Agregar Todo
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
          {esFavorito ? 'Receta agregada a favoritos' : 'Ingredientes agregados a la lista de compras'}
        </Alert>
      </Snackbar>

      {/* FAB para temporizador */}
      <Fab
        color="secondary"
        onClick={() => setTimerActive(!timerActive)}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          background: timerActive 
            ? `linear-gradient(135deg, ${theme.palette.error.main} 0%, ${theme.palette.error.dark} 100%)`
            : `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
      >
        <TimerIcon />
      </Fab>
    </Box>
  );
};

export default PantallaDetalleReceta;
