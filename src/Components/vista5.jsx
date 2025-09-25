import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
  IconButton,
  InputAdornment,
  Divider,
  Stack,
  Fade,
  Zoom,
  useTheme,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Restaurant as RestaurantIcon
} from '@mui/icons-material';

const PantallaLogin = ({ navigation }) => {
  const theme = useTheme();
  const [esLogin, setEsLogin] = useState(true);
  const [formulario, setFormulario] = useState({
    email: '',
    password: '',
    nombre: '',
    confirmarPassword: ''
  });
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [errorDialog, setErrorDialog] = useState({ open: false, message: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleCambio = (campo) => (event) => {
    setFormulario(prev => ({
      ...prev,
      [campo]: event.target.value
    }));
  };

  const validarFormulario = () => {
    const { email, password, nombre, confirmarPassword } = formulario;

    if (!email || !password) {
      setErrorDialog({ open: true, message: 'Por favor completa todos los campos' });
      return false;
    }

    if (!esLogin) {
      if (!nombre) {
        setErrorDialog({ open: true, message: 'Por favor ingresa tu nombre' });
        return false;
      }
      if (password !== confirmarPassword) {
        setErrorDialog({ open: true, message: 'Las contraseñas no coinciden' });
        return false;
      }
    }

    return true;
  };

  const handleEnvio = (e) => {
    e.preventDefault();
    
    if (!validarFormulario()) return;

    const mensaje = esLogin ? 'Inicio de sesión exitoso' : 'Cuenta creada exitosamente';
    setSnackbarMessage(mensaje);
    setSnackbarOpen(true);
    // navigation.navigate('Inicio')
  };

  const loginConRedSocial = (redSocial) => {
    setSnackbarMessage(`Iniciando sesión con ${redSocial}`);
    setSnackbarOpen(true);
  };

  const CampoFormulario = ({ icon: Icon, tipo, placeholder, valor, onChange, requerido = false }) => (
    <TextField
      fullWidth
      type={tipo}
      placeholder={placeholder}
      value={valor}
      onChange={onChange}
      required={requerido}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon color="primary" />
          </InputAdornment>
        ),
        ...(tipo === 'password' && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setMostrarPassword(!mostrarPassword)}
                edge="end"
              >
                {mostrarPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          )
        })
      }}
      sx={{
        mb: 3,
        '& .MuiOutlinedInput-root': {
          borderRadius: 3,
          bgcolor: 'grey.50',
          '&:hover fieldset': {
            borderColor: 'primary.main',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
            borderWidth: 2,
          },
        }
      }}
    />
  );

  const BotonRedSocial = ({ icon: Icon, texto, onClick, color }) => (
    <Button
      fullWidth
      variant="outlined"
      startIcon={<Icon />}
      onClick={onClick}
      sx={{
        py: 1.5,
        borderRadius: 3,
        borderColor: 'divider',
        color: 'text.primary',
        textTransform: 'none',
        fontWeight: 600,
        '&:hover': {
          borderColor: color,
          bgcolor: `${color}08`,
          transform: 'translateY(-1px)',
        },
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {texto}
    </Button>
  );

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        bgcolor: 'grey.50',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        px: 2
      }}
    >
      <Container maxWidth="sm">
        <Zoom in timeout={500}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Avatar
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100"
              sx={{ 
                width: 80, 
                height: 80, 
                mx: 'auto', 
                mb: 2,
                boxShadow: theme.shadows[4]
              }}
            />
            <Typography 
              variant="h3" 
              fontWeight={800}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 0.5
              }}
            >
              MiSabor
            </Typography>
            <Typography variant="body1" color="text.secondary">
              SaborHogar
            </Typography>
          </Box>
        </Zoom>

        <Fade in timeout={700}>
          <Paper 
            elevation={6}
            sx={{ 
              p: 4, 
              borderRadius: 3,
              background: 'white'
            }}
          >
            <Typography 
              variant="h4" 
              fontWeight={700} 
              textAlign="center" 
              color="text.primary"
              sx={{ mb: 4 }}
            >
              {esLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </Typography>

            <form onSubmit={handleEnvio}>
              <Stack spacing={3}>
                {!esLogin && (
                  <CampoFormulario
                    icon={PersonIcon}
                    tipo="text"
                    placeholder="Nombre completo"
                    valor={formulario.nombre}
                    onChange={handleCambio('nombre')}
                    requerido
                  />
                )}

                <CampoFormulario
                  icon={EmailIcon}
                  tipo="email"
                  placeholder="Correo electrónico"
                  valor={formulario.email}
                  onChange={handleCambio('email')}
                  requerido
                />

                <CampoFormulario
                  icon={LockIcon}
                  tipo={mostrarPassword ? 'text' : 'password'}
                  placeholder="Contraseña"
                  valor={formulario.password}
                  onChange={handleCambio('password')}
                  requerido
                />

                {!esLogin && (
                  <CampoFormulario
                    icon={LockIcon}
                    tipo={mostrarPassword ? 'text' : 'password'}
                    placeholder="Confirmar contraseña"
                    valor={formulario.confirmarPassword}
                    onChange={handleCambio('confirmarPassword')}
                    requerido
                  />
                )}

                {esLogin && (
                  <Box textAlign="right">
                    <Button 
                      variant="text" 
                      size="small"
                      sx={{ 
                        textTransform: 'none',
                        fontWeight: 600
                      }}
                    >
                      ¿Olvidaste tu contraseña?
                    </Button>
                  </Box>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                    boxShadow: theme.shadows[4],
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: theme.shadows[8],
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  {esLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                </Button>
              </Stack>
            </form>

            {/* Divisor */}
            <Box sx={{ position: 'relative', my: 4 }}>
              <Divider />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  bgcolor: 'white',
                  px: 2
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  o continúa con
                </Typography>
              </Box>
            </Box>

            {/* Redes sociales */}
            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <BotonRedSocial
                icon={GoogleIcon}
                texto="Google"
                onClick={() => loginConRedSocial('Google')}
                color="#DB4437"
              />
              <BotonRedSocial
                icon={FacebookIcon}
                texto="Facebook"
                onClick={() => loginConRedSocial('Facebook')}
                color="#4267B2"
              />
            </Stack>

            {/* Cambiar entre login y registro */}
            <Box textAlign="center">
              <Typography variant="body2" color="text.secondary" display="inline">
                {esLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
              </Typography>
              <Button
                variant="text"
                size="small"
                onClick={() => setEsLogin(!esLogin)}
                sx={{ 
                  ml: 1,
                  textTransform: 'none',
                  fontWeight: 700
                }}
              >
                {esLogin ? 'Regístrate' : 'Inicia sesión'}
              </Button>
            </Box>
          </Paper>
        </Fade>

        {/* Información adicional */}
        <Fade in timeout={900}>
          <Box textAlign="center" sx={{ mt: 3, px: 2 }}>
            <Typography variant="caption" color="text.secondary" lineHeight={1.4}>
              Al {esLogin ? 'iniciar sesión' : 'registrarte'}, aceptas nuestros{' '}
              <Button variant="text" size="small" sx={{ textTransform: 'none', fontWeight: 600 }}>
                Términos de servicio
              </Button>{' '}
              y{' '}
              <Button variant="text" size="small" sx={{ textTransform: 'none', fontWeight: 600 }}>
                Política de privacidad
              </Button>
            </Typography>
          </Box>
        </Fade>
      </Container>

      {/* Dialog de error */}
      <Dialog
        open={errorDialog.open}
        onClose={() => setErrorDialog({ open: false, message: '' })}
        PaperProps={{
          sx: { borderRadius: 3 }
        }}
      >
        <DialogTitle>
          <Typography variant="h6" fontWeight={700}>
            Error de validación
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            {errorDialog.message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setErrorDialog({ open: false, message: '' })}
            variant="contained"
            sx={{ borderRadius: 2 }}
          >
            Entendido
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
    </Box>
  );
};

export default PantallaLogin;