import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Button,
  Drawer,
  AppBar,
  Toolbar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Rating,
  Avatar,
  Badge,
  Fab,
  Slide,
  Fade,
  Zoom,
  Paper,
  Stack,
  alpha,
  useTheme,
  Divider,
  ButtonGroup
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  ArrowBack as ArrowBackIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  AccessTime as AccessTimeIcon,
  Restaurant as RestaurantIcon,
  Clear as ClearIcon,
  ExpandMore as ExpandMoreIcon,
  LocalFireDepartment as FireIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  AutoAwesome as SparkleIcon
} from '@mui/icons-material';

const PantallaBusqueda = ({ navigation }) => {
  const theme = useTheme();
  const [busqueda, setBusqueda] = useState('');
  const [recetas, setRecetas] = useState([]);
  const [filtrosVisibles, setFiltrosVisibles] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [tiempoFiltro, setTiempoFiltro] = useState('');
  const [dificultadFiltro, setDificultadFiltro] = useState('');

  const recetasData = [
    {
      id: '1',
      nombre: 'Pasta Carbonara Clásica',
      categoria: 'Italiana',
      tiempo: '30 min',
      dificultad: 'Media',
      imagen: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
      favorito: true,
      ingredientes: ['pasta', 'huevo', 'queso parmesano', 'panceta'],
      rating: 4.8,
      calorias: 450,
      trending: true
    },
    {
      id: '2',
      nombre: 'Tacos al Pastor Auténticos',
      categoria: 'Mexicana',
      tiempo: '45 min',
      dificultad: 'Media',
      imagen: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop',
      favorito: false,
      ingredientes: ['tortilla', 'cerdo adobado', 'piña', 'cebolla morada'],
      rating: 4.9,
      calorias: 380,
      trending: false
    },
    {
      id: '3',
      nombre: 'Ensalada César Gourmet',
      categoria: 'Ensaladas',
      tiempo: '15 min',
      dificultad: 'Fácil',
      imagen: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
      favorito: true,
      ingredientes: ['lechuga romana', 'pollo grillado', 'crutones', 'queso parmesano'],
      rating: 4.6,
      calorias: 320,
      trending: true
    },
    {
      id: '4',
      nombre: 'Risotto de Hongos Porcini',
      categoria: 'Italiana',
      tiempo: '35 min',
      dificultad: 'Difícil',
      imagen: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop',
      favorito: false,
      ingredientes: ['arroz arborio', 'hongos porcini', 'vino blanco', 'queso parmesano'],
      rating: 4.7,
      calorias: 420,
      trending: false
    }
  ];

  const categorias = ['Todas', 'Italiana', 'Mexicana', 'Asiática', 'Postres', 'Vegetariana', 'Rápida', 'Saludable'];
  const tiempos = ['Cualquiera', '15 min', '30 min', '45 min', '1h+'];
  const dificultades = ['Cualquiera', 'Fácil', 'Media', 'Difícil'];

  useEffect(() => {
    filtrarRecetas();
  }, [busqueda, categoriaSeleccionada, tiempoFiltro, dificultadFiltro]);

  const filtrarRecetas = () => {
    let resultados = recetasData;

    if (busqueda) {
      resultados = resultados.filter(receta =>
        receta.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        receta.ingredientes.some(ing => ing.toLowerCase().includes(busqueda.toLowerCase()))
      );
    }

    if (categoriaSeleccionada && categoriaSeleccionada !== 'Todas') {
      resultados = resultados.filter(receta => receta.categoria === categoriaSeleccionada);
    }

    if (tiempoFiltro && tiempoFiltro !== 'Cualquiera') {
      resultados = resultados.filter(receta => receta.tiempo === tiempoFiltro);
    }

    if (dificultadFiltro && dificultadFiltro !== 'Cualquiera') {
      resultados = resultados.filter(receta => receta.dificultad === dificultadFiltro);
    }

    setRecetas(resultados);
  };

  const limpiarFiltros = () => {
    setCategoriaSeleccionada('');
    setTiempoFiltro('');
    setDificultadFiltro('');
    setBusqueda('');
  };

  const RecetaCard = ({ item, index }) => (
    <Zoom in timeout={300 + index * 100}>
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'visible',
          borderRadius: 3,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.shadows[12],
            '& .recipe-image': {
              transform: 'scale(1.05)'
            }
          }
        }}
      >
        {item.trending && (
          <Chip
            icon={<TrendingUpIcon />}
            label="Trending"
            color="error"
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              zIndex: 2,
              fontWeight: 600,
              borderRadius: 2
            }}
          />
        )}
        
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="200"
            image={item.imagen}
            alt={item.nombre}
            className="recipe-image"
            sx={{
              transition: 'transform 0.3s ease-in-out',
              borderRadius: '12px 12px 0 0'
            }}
          />
          
          <IconButton
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: 'white',
              boxShadow: theme.shadows[2],
              '&:hover': { 
                bgcolor: 'white',
                transform: 'scale(1.1)',
                boxShadow: theme.shadows[4]
              }
            }}
          >
            {item.favorito ? (
              <FavoriteIcon sx={{ color: 'error.main' }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: 'text.secondary' }} />
            )}
          </IconButton>

          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              bgcolor: alpha(theme.palette.common.black, 0.7),
              color: 'white',
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              backdropFilter: 'blur(10px)'
            }}
          >
            <Typography variant="caption" fontWeight={600}>
              {item.calorias} cal
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
            <Rating
              value={item.rating}
              precision={0.1}
              size="small"
              readOnly
              sx={{ mr: 1 }}
            />
            <Typography variant="body2" color="text.secondary" fontWeight={500}>
              ({item.rating})
            </Typography>
          </Box>

          <Typography
            variant="h6"
            component="h3"
            fontWeight={700}
            sx={{ 
              mb: 1,
              color: 'text.primary',
              lineHeight: 1.3
            }}
          >
            {item.nombre}
          </Typography>

          <Chip
            label={item.categoria}
            color="primary"
            variant="outlined"
            size="small"
            sx={{ mb: 2, fontWeight: 600 }}
          />

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5, color: 'primary.main' }} />
              <Typography variant="body2" fontWeight={500}>
                {item.tiempo}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <RestaurantIcon sx={{ fontSize: 16, mr: 0.5, color: 'secondary.main' }} />
              <Typography variant="body2" fontWeight={500}>
                {item.dificultad}
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 0.5 }}>
            {item.ingredientes.slice(0, 3).map((ingrediente, index) => (
              <Chip
                key={index}
                label={ingrediente}
                size="small"
                variant="outlined"
                sx={{ 
                  fontSize: '0.7rem',
                  height: 24,
                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                  borderColor: alpha(theme.palette.primary.main, 0.2)
                }}
              />
            ))}
            {item.ingredientes.length > 3 && (
              <Chip
                label={`+${item.ingredientes.length - 3}`}
                size="small"
                color="primary"
                sx={{ fontSize: '0.7rem', height: 24, fontWeight: 600 }}
              />
            )}
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
          borderColor: 'divider',
          backdropFilter: 'blur(10px)'
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
              Buscar Recetas
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descubre sabores increíbles
            </Typography>
          </Box>

          <Badge
            badgeContent={Object.values({categoriaSeleccionada, tiempoFiltro, dificultadFiltro}).filter(Boolean).length}
            color="error"
          >
            <IconButton
              onClick={() => setFiltrosVisibles(!filtrosVisibles)}
              sx={{ 
                border: 1,
                borderColor: filtrosVisibles ? 'primary.main' : 'divider',
                borderRadius: 2,
                bgcolor: filtrosVisibles ? alpha(theme.palette.primary.main, 0.1) : 'transparent'
              }}
            >
              <FilterIcon color={filtrosVisibles ? 'primary' : 'inherit'} />
            </IconButton>
          </Badge>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Barra de búsqueda */}
        <Paper 
          elevation={3}
          sx={{ 
            p: 2,
            mb: 4,
            borderRadius: 3,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.02)} 0%, ${alpha(theme.palette.secondary.main, 0.02)} 100%)`
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Busca recetas deliciosas o ingredientes..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: busqueda && (
                <InputAdornment position="end">
                  <IconButton onClick={() => setBusqueda('')} size="small">
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderRadius: 3,
                bgcolor: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: alpha(theme.palette.primary.main, 0.2)
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.main
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.primary.main,
                  borderWidth: 2
                }
              }
            }}
          />
        </Paper>

        {/* Panel de filtros */}
        <Slide direction="down" in={filtrosVisibles} mountOnEnter unmountOnExit>
          <Paper 
            elevation={4}
            sx={{ 
              p: 4, 
              mb: 4, 
              borderRadius: 3,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <FilterIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h5" fontWeight={700}>
                Filtros de Búsqueda
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                variant="outlined"
                size="small"
                onClick={limpiarFiltros}
                startIcon={<ClearIcon />}
                sx={{ borderRadius: 2 }}
              >
                Limpiar
              </Button>
            </Box>

            <Stack spacing={3}>
              <Accordion defaultExpanded sx={{ borderRadius: 2, '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" fontWeight={600}>Categoría</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {categorias.map((categoria) => (
                      <Chip
                        key={categoria}
                        label={categoria}
                        clickable
                        variant={categoriaSeleccionada === categoria ? "filled" : "outlined"}
                        color={categoriaSeleccionada === categoria ? "primary" : "default"}
                        onClick={() => setCategoriaSeleccionada(categoria)}
                        sx={{ 
                          borderRadius: 2,
                          fontWeight: 600,
                          '&:hover': { transform: 'scale(1.05)' }
                        }}
                      />
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ borderRadius: 2, '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" fontWeight={600}>Tiempo de preparación</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {tiempos.map((tiempo) => (
                      <Chip
                        key={tiempo}
                        label={tiempo}
                        clickable
                        variant={tiempoFiltro === tiempo ? "filled" : "outlined"}
                        color={tiempoFiltro === tiempo ? "secondary" : "default"}
                        onClick={() => setTiempoFiltro(tiempo)}
                        icon={<AccessTimeIcon />}
                        sx={{ 
                          borderRadius: 2,
                          fontWeight: 600,
                          '&:hover': { transform: 'scale(1.05)' }
                        }}
                      />
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ borderRadius: 2, '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6" fontWeight={600}>Dificultad</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {dificultades.map((dificultad) => (
                      <Chip
                        key={dificultad}
                        label={dificultad}
                        clickable
                        variant={dificultadFiltro === dificultad ? "filled" : "outlined"}
                        color={dificultadFiltro === dificultad ? "success" : "default"}
                        onClick={() => setDificultadFiltro(dificultad)}
                        icon={<RestaurantIcon />}
                        sx={{ 
                          borderRadius: 2,
                          fontWeight: 600,
                          '&:hover': { transform: 'scale(1.05)' }
                        }}
                      />
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Stack>

            <Divider sx={{ my: 3 }} />
            
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="outlined"
                onClick={limpiarFiltros}
                startIcon={<ClearIcon />}
                sx={{ borderRadius: 2, px: 3 }}
              >
                Limpiar Filtros
              </Button>
              <Button
                variant="contained"
                onClick={() => setFiltrosVisibles(false)}
                startIcon={<SparkleIcon />}
                sx={{ borderRadius: 2, px: 3 }}
              >
                Aplicar Filtros
              </Button>
            </Stack>
          </Paper>
        </Slide>

        {/* Resultados */}
        <Fade in timeout={500}>
          <Box>
            <Paper 
              elevation={2}
              sx={{ 
                p: 3, 
                mb: 3, 
                borderRadius: 3,
                background: `linear-gradient(135deg, ${alpha(theme.palette.success.main, 0.05)} 0%, ${alpha(theme.palette.info.main, 0.05)} 100%)`
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar sx={{ bgcolor: 'success.main' }}>
                  <SparkleIcon />
                </Avatar>
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    {recetas.length} recetas encontradas
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Seleccionadas especialmente para ti
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            {recetas.length > 0 ? (
              <Grid container spacing={3}>
                {recetas.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    <RecetaCard item={item} index={index} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Paper 
                elevation={2}
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
                    mb: 2, 
                    bgcolor: 'grey.200' 
                  }}
                >
                  <SearchIcon sx={{ fontSize: 40, color: 'grey.400' }} />
                </Avatar>
                <Typography variant="h5" fontWeight={600} sx={{ mb: 1 }}>
                  No se encontraron recetas
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Intenta con otros términos de búsqueda o filtros
                </Typography>
              </Paper>
            )}
          </Box>
        </Fade>
      </Container>

      {/* FAB */}
      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          boxShadow: theme.shadows[8]
        }}
      >
        <SparkleIcon />
      </Fab>
    </Box>
  );
};

export default PantallaBusqueda;