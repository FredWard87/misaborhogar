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
  Switch,
  Chip,
  Button,
  Avatar,
  Stack,
  Paper,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fab,
  Zoom,
  alpha,
  useTheme
} from '@mui/material';
import {
  Edit as EditIcon,
  Logout as LogoutIcon,
  Favorite as FavoriteIcon,
  ListAlt as ListIcon,
  Schedule as ClockIcon,
  EmojiEvents as TrophyIcon,
  Notifications as BellIcon,
  DarkMode as MoonIcon,
  Calculate as CalculatorIcon,
  Analytics as BarChartIcon,
  Help as HelpCircleIcon,
  Feedback as MessageCircleIcon,
  Info as InfoIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
  AutoAwesome as SparklesIcon
} from '@mui/icons-material';

const PantallaPerfil = ({ navigation }) => {
  const theme = useTheme();
  const [usuario, setUsuario] = useState({
    nombre: 'Ana García',
    email: 'ana.garcia@email.com',
    foto: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    miembroDesde: 'Enero 2024',
    recetasGuardadas: 24,
    listasCreadas: 8,
    recetasCocinadas: 156
  });

  const [configuraciones, setConfiguraciones] = useState({
    notificaciones: true,
    modoOscuro: false,
    autoAjustePorciones: true,
    metricas: true
  });

  const [logoutDialog, setLogoutDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const recetasRecientes = [
    {
      id: '1',
      nombre: 'Pasta Carbonara',
      fecha: 'Hace 2 días',
      imagen: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=100',
      dificultad: 'Fácil',
      tiempo: '25 min'
    },
    {
      id: '2',
      nombre: 'Tacos al Pastor',
      fecha: 'Hace 1 semana',
      imagen: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=100',
      dificultad: 'Media',
      tiempo: '45 min'
    },
    {
      id: '3',
      nombre: 'Ensalada César',
      fecha: 'Hace 3 días',
      imagen: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=100',
      dificultad: 'Fácil',
      tiempo: '15 min'
    },
    {
      id: '4',
      nombre: 'Sushi Roll',
      fecha: 'Hace 5 días',
      imagen: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=100',
      dificultad: 'Difícil',
      tiempo: '60 min'
    }
  ];

  const toggleConfiguracion = (key) => {
    setConfiguraciones(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    setSnackbarMessage('Configuración actualizada');
    setSnackbarOpen(true);
  };

  const handleLogout = () => {
    setLogoutDialog(false);
    setSnackbarMessage('Sesión cerrada correctamente');
    setSnackbarOpen(true);
    // navigation.navigate('Login')
  };

  // Función segura para obtener colores del tema
  const getSafeColor = (color) => {
    const safeColors = ['primary', 'secondary', 'error', 'warning', 'info', 'success'];
    return safeColors.includes(color) ? color : 'primary';
  };

  const EstadisticaCard = ({ valor, label, color, icon: Icon }) => {
    const safeColor = getSafeColor(color);
    return (
      <Paper 
        elevation={3}
        sx={{ 
          p: 3, 
          textAlign: 'center', 
          borderRadius: 3,
          background: `linear-gradient(135deg, ${alpha(theme.palette[safeColor].main, 0.1)} 0%, ${alpha(theme.palette[safeColor].main, 0.05)} 100%)`,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.shadows[6]
          }
        }}
      >
        <Avatar sx={{ bgcolor: `${safeColor}.main`, mx: 'auto', mb: 2 }}>
          <Icon />
        </Avatar>
        <Typography variant="h4" fontWeight={800} color={`${safeColor}.main`}>
          {valor}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight={600}>
          {label}
        </Typography>
      </Paper>
    );
  };

  const RecetaCard = ({ receta, index }) => (
    <Zoom in timeout={300 + index * 50}>
      <Card
        sx={{
          flexShrink: 0,
          width: 160,
          borderRadius: 3,
          border: 2,
          borderColor: 'divider',
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: theme.shadows[8]
          }
        }}
      >
        <Box sx={{ position: 'relative', height: 100 }}>
          <img 
            src={receta.imagen} 
            alt={receta.nombre}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Chip
            label={receta.dificultad}
            size="small"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: 'primary.main',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.7rem'
            }}
          />
        </Box>
        <CardContent sx={{ p: 2 }}>
          <Typography variant="subtitle2" fontWeight={600} noWrap sx={{ mb: 1 }}>
            {receta.nombre}
          </Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="caption" color="text.secondary">
              {receta.fecha}
            </Typography>
            <Chip
              label={receta.tiempo}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.6rem' }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Zoom>
  );

  const OpcionPerfil = ({ icon: Icon, titulo, onPress, color = 'primary' }) => {
    const safeColor = getSafeColor(color);
    return (
      <ListItem
        button
        onClick={onPress}
        sx={{
          mb: 1,
          borderRadius: 2,
          border: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateX(4px)',
            bgcolor: alpha(theme.palette[safeColor].main, 0.05),
            borderColor: theme.palette[safeColor].main
          }
        }}
      >
        <ListItemIcon>
          <Avatar sx={{ bgcolor: `${safeColor}.main`, width: 40, height: 40 }}>
            <Icon />
          </Avatar>
        </ListItemIcon>
        <ListItemText 
          primary={
            <Typography variant="h6" fontWeight={600}>
              {titulo}
            </Typography>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end">
            <ExpandMoreIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  };

  const ConfiguracionItem = ({ icon: Icon, titulo, descripcion, valor, onToggle, color = 'primary' }) => {
    const safeColor = getSafeColor(color);
    return (
      <ListItem
        sx={{
          mb: 1,
          borderRadius: 2,
          border: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        <ListItemIcon>
          <Avatar sx={{ bgcolor: `${safeColor}.main`, width: 40, height: 40 }}>
            <Icon />
          </Avatar>
        </ListItemIcon>
        <ListItemText 
          primary={
            <Typography variant="h6" fontWeight={600}>
              {titulo}
            </Typography>
          }
          secondary={descripcion}
        />
        <ListItemSecondaryAction>
          <Switch
            checked={valor}
            onChange={onToggle}
            color={safeColor}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  };

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
          <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
            <SparklesIcon />
          </Avatar>
          
          <Box sx={{ flexGrow: 1 }}>
            <Typography 
              variant="h5" 
              component="h1" 
              fontWeight={800}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Mi Perfil
            </Typography>
          </Box>

          <IconButton
            onClick={() => setLogoutDialog(true)}
            sx={{ 
              border: 1,
              borderColor: 'divider',
              borderRadius: 2
            }}
          >
            <LogoutIcon color="error" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 3 }}>
        {/* Información del usuario */}
        <Paper 
          elevation={6}
          sx={{ 
            p: 4, 
            mb: 4, 
            borderRadius: 3,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, bgcolor: 'white', opacity: 0.1, borderRadius: '50%' }} />
          <Box sx={{ position: 'absolute', bottom: -30, left: -30, width: 150, height: 150, bgcolor: 'white', opacity: 0.1, borderRadius: '50%' }} />
          
          <Stack direction="row" alignItems="center" spacing={3}>
            <Avatar
              src={usuario.foto}
              sx={{ 
                width: 100, 
                height: 100, 
                border: 4, 
                borderColor: 'white',
                boxShadow: theme.shadows[8]
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" fontWeight={800} gutterBottom>
                {usuario.nombre}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }} gutterBottom>
                {usuario.email}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Miembro desde {usuario.miembroDesde}
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                fontWeight: 600,
                borderRadius: 2,
                '&:hover': {
                  bgcolor: 'grey.100',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Editar
            </Button>
          </Stack>
        </Paper>

        {/* Estadísticas */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={6} md={3}>
            <EstadisticaCard
              valor={usuario.recetasGuardadas}
              label="Recetas guardadas"
              color="primary"
              icon={FavoriteIcon}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <EstadisticaCard
              valor={usuario.listasCreadas}
              label="Listas creadas"
              color="secondary"
              icon={ListIcon}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <EstadisticaCard
              valor={usuario.recetasCocinadas}
              label="Recetas cocinadas"
              color="success"
              icon={CheckCircleIcon}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <EstadisticaCard
              valor="12"
              label="Logros obtenidos"
              color="warning"
              icon={TrophyIcon}
            />
          </Grid>
        </Grid>

        {/* Recetas recientes */}
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mb: 4 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <Typography variant="h5" fontWeight={700}>
              Recetas Recientes
            </Typography>
            <Button variant="text" color="primary">
              Ver todas
            </Button>
          </Stack>
          
          <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, pb: 2, scrollbarWidth: 'thin' }}>
            {recetasRecientes.map((receta, index) => (
              <RecetaCard key={receta.id} receta={receta} index={index} />
            ))}
          </Box>
        </Paper>

        {/* Opciones de perfil */}
        <Accordion 
          elevation={3}
          sx={{ 
            mb: 3, 
            borderRadius: 3,
            '&:before': { display: 'none' }
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" fontWeight={700}>
              Mi Cuenta
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <List>
              <OpcionPerfil
                icon={FavoriteIcon}
                titulo="Mis favoritos"
                onPress={() => setSnackbarMessage('Navegando a favoritos')}
                color="error"
              />
              <OpcionPerfil
                icon={ListIcon}
                titulo="Mis listas de compras"
                onPress={() => setSnackbarMessage('Navegando a listas')}
                color="success"
              />
              <OpcionPerfil
                icon={ClockIcon}
                titulo="Historial de recetas"
                onPress={() => setSnackbarMessage('Navegando a historial')}
                color="info"
              />
              <OpcionPerfil
                icon={TrophyIcon}
                titulo="Logros y metas"
                onPress={() => setSnackbarMessage('Navegando a logros')}
                color="warning"
              />
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Configuraciones */}
        <Accordion 
          elevation={3}
          sx={{ 
            mb: 3, 
            borderRadius: 3,
            '&:before': { display: 'none' }
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" fontWeight={700}>
              Configuraciones
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <List>
              <ConfiguracionItem
                icon={BellIcon}
                titulo="Notificaciones"
                descripcion="Recibe alertas sobre tus recetas"
                valor={configuraciones.notificaciones}
                onToggle={() => toggleConfiguracion('notificaciones')}
                color="primary"
              />
              <ConfiguracionItem
                icon={MoonIcon}
                titulo="Modo oscuro"
                descripcion="Activar interfaz oscura"
                valor={configuraciones.modoOscuro}
                onToggle={() => toggleConfiguracion('modoOscuro')}
                color="secondary"
              />
              <ConfiguracionItem
                icon={CalculatorIcon}
                titulo="Ajuste automático"
                descripcion="Ajustar ingredientes por porciones"
                valor={configuraciones.autoAjustePorciones}
                onToggle={() => toggleConfiguracion('autoAjustePorciones')}
                color="success"
              />
              <ConfiguracionItem
                icon={BarChartIcon}
                titulo="Métricas"
                descripcion="Ver información nutricional"
                valor={configuraciones.metricas}
                onToggle={() => toggleConfiguracion('metricas')}
                color="info"
              />
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Soporte y ayuda */}
        <Accordion 
          elevation={3}
          sx={{ 
            borderRadius: 3,
            '&:before': { display: 'none' }
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" fontWeight={700}>
              Soporte
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <List>
              <OpcionPerfil
                icon={HelpCircleIcon}
                titulo="Centro de ayuda"
                onPress={() => setSnackbarMessage('Abriendo centro de ayuda')}
                color="info"
              />
              <OpcionPerfil
                icon={MessageCircleIcon}
                titulo="Enviar comentarios"
                onPress={() => setSnackbarMessage('Abriendo formulario de comentarios')}
                color="warning"
              />
              <OpcionPerfil
                icon={InfoIcon}
                titulo="Acerca de MiSabor"
                onPress={() => setSnackbarMessage('MiSabor v1.0.0')}
                color="primary"
              />
            </List>
          </AccordionDetails>
        </Accordion>
      </Container>

      {/* Dialog de confirmación de logout */}
      <Dialog
        open={logoutDialog}
        onClose={() => setLogoutDialog(false)}
        PaperProps={{
          sx: { borderRadius: 3 }
        }}
      >
        <DialogTitle>
          <Typography variant="h5" fontWeight={700}>
            Cerrar sesión
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            ¿Estás seguro de que quieres cerrar sesión?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={() => setLogoutDialog(false)}
            sx={{ borderRadius: 2 }}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleLogout}
            variant="contained"
            color="error"
            sx={{ borderRadius: 2 }}
          >
            Cerrar sesión
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar para notificaciones */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbarOpen(false)} 
          severity="success"
          sx={{ borderRadius: 2 }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* FAB para editar perfil */}
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
        onClick={() => setSnackbarMessage('Editando perfil')}
      >
        <EditIcon />
      </Fab>
    </Box>
  );
};

export default PantallaPerfil;