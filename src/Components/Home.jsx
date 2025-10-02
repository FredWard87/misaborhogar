import React, { useState, useEffect, useRef } from 'react';

// 📦 MUI Core Components
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ButtonGroup,
  ListItem,
  ListItemText,
  IconButton,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Avatar,
  Stack,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fab,
  Tabs,
  Tab,
  CardMedia,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Fade,
  Slide,
  Zoom,
  Grow,
  alpha,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  TextField,
  InputAdornment,
  Badge,
  Switch,
  FormControlLabel,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Menu,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
  Backdrop
} from '@mui/material';

// 🧪 MUI Lab Components (Timeline)
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';

// 🎨 MUI Icons
import {
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
  Kitchen as KitchenIcon,
  Group as GroupIcon,
  Architecture as ArchitectureIcon,
  Code as CodeIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Security as SecurityIcon,
  Calculate as CalculateIcon,
  ShoppingCart as ShoppingCartIcon,
  Timeline as TimelineIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  GitHub as GitHubIcon,
  ViewModule as ViewModuleIcon,
  IntegrationInstructions as IntegrationInstructionsIcon,
  Person as PersonIcon,
  Visibility as VisibilityIcon,
  Build as BuildIcon,
  Rocket as RocketIcon,
  TrendingUp as TrendingUpIcon,
  Lightbulb as LightbulbIcon,
  School as SchoolIcon,
  Business as BusinessIcon,
  Assessment as AssessmentIcon,
  ArrowUpward as ArrowUpwardIcon,
  Palette as PaletteIcon,
  BugReport as BugReportIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Devices as DevicesIcon,
  Speed as SpeedIcon,
  Psychology as PsychologyIcon,
  AutoAwesome as AutoAwesomeIcon,
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  CalendarMonth as CalendarMonthIcon,
  Task as TaskIcon,
  PlayArrow as PlayArrowIcon,
  Check as CheckIcon,
  Schedule as ScheduleIcon,
  PriorityHigh as PriorityHighIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowBack as ArrowBackIcon,
  NavigateNext as NavigateNextIcon,
  PhoneIphone as PhoneIphoneIcon,
  Search as SearchIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  LocalGroceryStore as LocalGroceryStoreIcon,
  AccessTime as AccessTimeIcon,
  RestaurantMenu as RestaurantMenuIcon,
  FilterList as FilterListIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  ExitToApp as ExitToAppIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  PersonAdd as PersonAddIcon,
  Facebook as FacebookIcon,
  Google as GoogleIcon,
  Apple as AppleIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  VisibilityOff as VisibilityOffIcon,
  Home as HomeIcon,
  Category as CategoryIcon,
  TrendingFlat as TrendingFlatIcon,
  Close as CloseIcon,
  MoreVert as MoreVertIcon,
  AddPhotoAlternate as AddPhotoAlternateIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  QrCode as QrCodeIcon,
  Wifi as WifiIcon,
  BatteryFull as BatteryFullIcon,
  NetworkCell as NetworkCellIcon,
  SignalCellularAlt as SignalCellularAltIcon
} from '@mui/icons-material';

// Componente para el scroll suave
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Fade in={isVisible}>
      <Fab
        color="primary"
        aria-label="scroll to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000
        }}
      >
        <ArrowUpwardIcon />
      </Fab>
    </Fade>
  );
};

// Componente Mockup de Celular Mejorado
const PhoneMockup = ({ children, active = false, color = 'primary' }) => {
  const theme = useTheme();
  const colors = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
  };
  
  return (
    <Box
      sx={{
        position: 'relative',
        width: 300,
        height: 600,
        borderRadius: '40px',
        background: 'linear-gradient(145deg, #1a1a1a, #2a2a2a)',
        boxShadow: active 
          ? `0 25px 50px rgba(0,0,0,0.5), inset 0 0 0 3px ${colors[color]}, 0 0 20px ${alpha(colors[color], 0.3)}`
          : '0 15px 35px rgba(0,0,0,0.3), inset 0 0 0 1px #333',
        border: '12px solid #000',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: active ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40%',
          height: '25px',
          background: '#000',
          borderBottomLeftRadius: '15px',
          borderBottomRightRadius: '15px',
          zIndex: 10
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '4px',
          background: '#333',
          borderRadius: '4px',
          zIndex: 10
        }
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: '28px',
          overflow: 'hidden',
          background: theme.palette.background.default,
          position: 'relative'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

// Componente de Conector entre Vistas Mejorado
const ViewConnector = ({ from, to, label, reverse = false, color = 'primary' }) => {
  const theme = useTheme();
  const colors = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
  };
  
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        my: 4
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: '200px'
        }}
      >
        <Box
          sx={{
            width: '150px',
            height: '3px',
            background: `linear-gradient(${reverse ? '270deg' : '90deg'}, ${colors[color]}, ${alpha(colors[color], 0.7)})`,
            position: 'relative',
            borderRadius: '2px',
            '&::after': {
              content: '""',
              position: 'absolute',
              right: reverse ? 'auto' : '-8px',
              left: reverse ? '-8px' : 'auto',
              top: '50%',
              transform: 'translateY(-50%) rotate(45deg)',
              width: '12px',
              height: '12px',
              border: `2px solid ${colors[color]}`,
              borderLeft: 'none',
              borderBottom: 'none',
              background: 'transparent'
            }
          }}
        />
        <Chip
          label={label}
          size="small"
          sx={{
            position: 'absolute',
            bgcolor: 'background.paper',
            border: `1px solid ${colors[color]}`,
            fontWeight: 700,
            fontSize: '0.75rem',
            color: colors[color]
          }}
        />
      </Box>
    </Box>
  );
};

// Iconos personalizados
const ListIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0 4h2v-2H3v2zm12 4h2v-2h-2v2zM3 9h2V7H3v2zm12-4h2V3h-2v2zm4 0h2V3h-2v2zm0 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4-12h2v-2h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8-8h2v-2h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2zm0 4h2v-2h-2v2z"/>
  </svg>
);

const AddShoppingCartIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>
  </svg>
);

// 1. MOCKUP LOGIN MEJORADO
const MockupLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  
  const handleLogin = () => {
    setLoading(true);
    // Simular proceso de login
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  
  return (
    <Box sx={{ 
      height: '100%', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {/* Status Bar Simulado */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        px: 2, 
        py: 1,
        background: 'rgba(0,0,0,0.1)',
        color: 'white',
        fontSize: '0.7rem'
      }}>
        <Typography variant="caption">9:41</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SignalCellularAltIcon sx={{ fontSize: '0.8rem' }} />
          <WifiIcon sx={{ fontSize: '0.8rem' }} />
          <BatteryFullIcon sx={{ fontSize: '0.8rem' }} />
        </Box>
      </Box>

      {/* Header con gradiente */}
      <Box sx={{ 
        p: 4, 
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)',
        pt: 6
      }}>
        <Avatar sx={{ 
          mb: 2, 
          bgcolor: 'white', 
          width: 80, 
          height: 80,
          mx: 'auto',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
        }}>
          <KitchenIcon sx={{ fontSize: 40, color: '#667eea' }} />
        </Avatar>
        <Typography variant="h5" fontWeight={800} color="white" gutterBottom>
          MiSabor
        </Typography>
        <Typography variant="body2" color="white" sx={{ opacity: 0.9 }}>
          Tu chef personal
        </Typography>
      </Box>

      {/* Formulario */}
      <Paper sx={{ 
        flex: 1,
        m: 2, 
        p: 3, 
        borderRadius: 4,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}>
        <Typography variant="h6" fontWeight={700} textAlign="center" gutterBottom>
          Iniciar Sesión
        </Typography>
        
        <TextField
          size="small"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon color="primary" />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              background: 'white'
            }
          }}
        />
        
        <TextField
          size="small"
          type={showPassword ? 'text' : 'password'}
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon color="primary" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton 
                  size="small" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              background: 'white'
            }
          }}
        />

        <Box sx={{ textAlign: 'right' }}>
          <Typography 
            variant="caption" 
            color="primary" 
            sx={{ 
              fontWeight: 600, 
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            ¿Olvidaste tu contraseña?
          </Typography>
        </Box>

        <Button 
          variant="contained" 
          fullWidth 
          size="large"
          onClick={handleLogin}
          disabled={loading}
          sx={{
            borderRadius: 3,
            py: 1.2,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
            mt: 1,
            position: 'relative'
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: 'white' }} />
          ) : (
            'CONTINUAR'
          )}
        </Button>

        <Divider sx={{ my: 1 }}>
          <Typography variant="caption" color="text.secondary">
            o continúa con
          </Typography>
        </Divider>

        <Stack direction="row" spacing={1}>
          <Button 
            variant="outlined" 
            fullWidth 
            size="small"
            startIcon={<GoogleIcon />}
            sx={{ borderRadius: 3, py: 1 }}
          >
            Google
          </Button>
          <Button 
            variant="outlined" 
            fullWidth 
            size="small"
            startIcon={<FacebookIcon color="primary" />}
            sx={{ borderRadius: 3, py: 1 }}
          >
            Facebook
          </Button>
        </Stack>

        <Typography variant="caption" textAlign="center" color="text.secondary" sx={{ mt: 2 }}>
          ¿No tienes cuenta? <Box component="span" sx={{ color: 'primary.main', fontWeight: 600, cursor: 'pointer' }}>Regístrate</Box>
        </Typography>
      </Paper>

      {/* Loading Backdrop */}
      <Backdrop open={loading} sx={{ zIndex: 1300 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

// 2. MOCKUP BÚSQUEDA MEJORADO
const MockupBusqueda = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Todas');
  const [favorites, setFavorites] = useState([1, 3]);
  const theme = useTheme();
  
  const recetas = [
    { 
      id: 1, 
      nombre: "Pasta Carbonara", 
      tiempo: "25 min", 
      dificultad: "Media", 
      rating: 4.7, 
      favorito: true,
      categoria: "Italiana",
      calorias: 420
    },
    { 
      id: 2, 
      nombre: "Ensalada César", 
      tiempo: "15 min", 
      dificultad: "Fácil", 
      rating: 4.3, 
      favorito: false,
      categoria: "Ensaladas",
      calorias: 280
    },
    { 
      id: 3, 
      nombre: "Tacos al Pastor", 
      tiempo: "40 min", 
      dificultad: "Media", 
      rating: 4.8, 
      favorito: true,
      categoria: "Mexicana",
      calorias: 380
    },
    { 
      id: 4, 
      nombre: "Salmón a la Plancha", 
      tiempo: "20 min", 
      dificultad: "Fácil", 
      rating: 4.5, 
      favorito: false,
      categoria: "Pescados",
      calorias: 320
    }
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filters = ['Todas', 'Rápidas', 'Saludables', 'Postres', 'Vegetariana', 'Mexicana', 'Italiana'];

  return (
    <Box sx={{ height: '100%', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      {/* Status Bar */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        px: 2, 
        py: 1,
        background: 'white',
        borderBottom: 1,
        borderColor: 'divider',
        fontSize: '0.7rem'
      }}>
        <Typography variant="caption">9:41</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SignalCellularAltIcon sx={{ fontSize: '0.8rem' }} />
          <WifiIcon sx={{ fontSize: '0.8rem' }} />
          <BatteryFullIcon sx={{ fontSize: '0.8rem' }} />
        </Box>
      </Box>

      {/* Header */}
      <Box sx={{ 
        p: 2, 
        background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
        color: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <Typography variant="h6" fontWeight={700}>Descubrir Recetas</Typography>
        <Typography variant="caption" sx={{ opacity: 0.9 }}>Encuentra tu próxima comida favorita</Typography>
      </Box>

      {/* Barra de búsqueda */}
      <Box sx={{ p: 2, pb: 1 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="🔍 Buscar recetas, ingredientes..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              background: 'white'
            }
          }}
        />
      </Box>

      {/* Filtros */}
      <Box sx={{ px: 2, pb: 1 }}>
        <Stack direction="row" spacing={1} sx={{ overflow: 'auto', pb: 1 }}>
          {filters.map((filtro) => (
            <Chip 
              key={filtro}
              label={filtro}
              size="small"
              variant={selectedFilter === filtro ? 'filled' : 'outlined'}
              color={selectedFilter === filtro ? 'primary' : 'default'}
              onClick={() => setSelectedFilter(filtro)}
              sx={{ 
                borderRadius: 3,
                fontWeight: 600,
                fontSize: '0.75rem',
                flexShrink: 0
              }}
            />
          ))}
        </Stack>
      </Box>

      {/* Contador de resultados */}
      <Box sx={{ px: 2, pb: 1 }}>
        <Typography variant="caption" color="text.secondary">
          {recetas.length} recetas encontradas
        </Typography>
      </Box>

      {/* Lista de recetas */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 2, pt: 1 }}>
        <Stack spacing={2}>
          {recetas.map((receta) => (
            <Card 
              key={receta.id}
              sx={{ 
                borderRadius: 3,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                }
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <Box sx={{ 
                  width: 80, 
                  height: 80, 
                  bgcolor: 'grey.300',
                  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  position: 'relative'
                }}>
                  <RestaurantMenuIcon />
                  <Chip 
                    label={receta.categoria}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 4,
                      left: 4,
                      background: 'rgba(255,255,255,0.9)',
                      color: 'text.primary',
                      fontSize: '0.6rem',
                      height: 20
                    }}
                  />
                </Box>
                
                <Box sx={{ p: 1.5, flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Typography variant="subtitle2" fontWeight={700} sx={{ lineHeight: 1.2, mr: 1 }}>
                      {receta.nombre}
                    </Typography>
                    <IconButton 
                      size="small" 
                      onClick={() => toggleFavorite(receta.id)}
                      sx={{ mt: -0.5 }}
                    >
                      {favorites.includes(receta.id) ? 
                        <FavoriteIcon color="error" fontSize="small" /> : 
                        <FavoriteBorderIcon fontSize="small" />
                      }
                    </IconButton>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                    <Rating 
                      value={receta.rating} 
                      size="small" 
                      readOnly 
                      precision={0.1}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {receta.rating}
                    </Typography>
                  </Box>
                  
                  <Stack direction="row" spacing={1} sx={{ mb: 0.5 }}>
                    <Chip 
                      icon={<AccessTimeIcon />}
                      label={receta.tiempo}
                      size="small"
                      variant="outlined"
                      sx={{ borderRadius: 2, fontSize: '0.7rem' }}
                    />
                    <Chip 
                      label={receta.dificultad}
                      size="small"
                      color="primary"
                      variant="filled"
                      sx={{ borderRadius: 2, fontSize: '0.7rem' }}
                    />
                  </Stack>

                  <Typography variant="caption" color="text.secondary">
                    {receta.calorias} cal • {receta.categoria}
                  </Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Stack>
      </Box>

      {/* Navigation Bar */}
      <Box sx={{ 
        p: 1, 
        borderTop: 1, 
        borderColor: 'divider',
        background: 'white'
      }}>
        <Stack direction="row" justifyContent="space-around">
          {[
            { icon: <HomeIcon />, label: 'Inicio', active: false },
            { icon: <SearchIcon color="primary" />, label: 'Buscar', active: true },
            { icon: <BookmarkBorderIcon />, label: 'Guardados', active: false },
            { icon: <PersonIcon />, label: 'Perfil', active: false }
          ].map((item, index) => (
            <Box key={index} sx={{ textAlign: 'center', flex: 1 }}>
              <IconButton size="small" color={item.active ? 'primary' : 'default'}>
                {item.icon}
              </IconButton>
              <Typography variant="caption" display="block" color={item.active ? 'primary' : 'text.secondary'}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

// 3. MOCKUP DETALLE RECETA MEJORADO
const MockupDetalleReceta = () => {
  const [porciones, setPorciones] = useState(4);
  const [favorito, setFavorito] = useState(true);
  const [guardado, setGuardado] = useState(false);
  const [pasoActivo, setPasoActivo] = useState(0);
  const [showNutrition, setShowNutrition] = useState(false);
  
  const ingredientes = [
    { nombre: "Pasta spaghetti", cantidad: "400g", ajustado: "400g", categoria: "Pasta" },
    { nombre: "Pancetta", cantidad: "200g", ajustado: "200g", categoria: "Carne" },
    { nombre: "Huevos", cantidad: "4 unidades", ajustado: "4 unidades", categoria: "Lácteos" },
    { nombre: "Queso pecorino", cantidad: "100g", ajustado: "100g", categoria: "Lácteos" },
    { nombre: "Pimienta negra", cantidad: "al gusto", ajustado: "al gusto", categoria: "Especias" },
    { nombre: "Sal", cantidad: "al gusto", ajustado: "al gusto", categoria: "Especias" },
    { nombre: "Ajo", cantidad: "2 dientes", ajustado: "2 dientes", categoria: "Vegetales" }
  ];

  const pasos = [
    "Cocinar la pasta en agua con sal hasta que esté al dente",
    "Dorar la pancetta en una sartén grande a fuego medio",
    "Batir los huevos con el queso pecorino rallado y pimienta",
    "Escurrir la pasta reservando un poco de agua de cocción",
    "Mezclar la pasta con la pancetta fuera del fuego",
    "Agregar la mezcla de huevo y revolver rápidamente",
    "Servir inmediatamente con pimienta negra molida y queso extra"
  ];

  const nutrition = {
    calorias: 420,
    proteinas: "18g",
    carbohidratos: "45g",
    grasas: "22g",
    fibra: "3g"
  };

  const categoriasIngredientes = [...new Set(ingredientes.map(i => i.categoria))];

  return (
    <Box sx={{ height: '100%', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      {/* Status Bar */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        px: 2, 
        py: 1,
        background: 'white',
        borderBottom: 1,
        borderColor: 'divider',
        fontSize: '0.7rem'
      }}>
        <Typography variant="caption">9:41</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SignalCellularAltIcon sx={{ fontSize: '0.8rem' }} />
          <WifiIcon sx={{ fontSize: '0.8rem' }} />
          <BatteryFullIcon sx={{ fontSize: '0.8rem' }} />
        </Box>
      </Box>

      {/* Header con imagen */}
      <Box sx={{ position: 'relative', height: 200, flexShrink: 0 }}>
        <Box sx={{ 
          width: '100%', 
          height: '100%', 
          bgcolor: 'primary.main',
          background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}>
          <RestaurantMenuIcon sx={{ fontSize: 80, opacity: 0.8 }} />
        </Box>
        
        {/* Overlay con acciones */}
        <Box sx={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          p: 2,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}>
          <IconButton sx={{ color: 'white' }}>
            <ArrowBackIcon />
          </IconButton>
          
          <Stack direction="row" spacing={1}>
            <IconButton 
              sx={{ color: 'white' }}
              onClick={() => setFavorito(!favorito)}
            >
              {favorito ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            </IconButton>
            <IconButton 
              sx={{ color: 'white' }}
              onClick={() => setGuardado(!guardado)}
            >
              {guardado ? <BookmarkIcon color="primary" /> : <BookmarkBorderIcon />}
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
              <ShareIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* Información de la receta */}
        <Paper sx={{ 
          position: 'absolute', 
          bottom: -20, 
          left: 16, 
          right: 16, 
          p: 2,
          borderRadius: 3,
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
        }}>
          <Typography variant="h6" fontWeight={800} gutterBottom>
            Pasta Carbonara
          </Typography>
          
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <AccessTimeIcon color="primary" fontSize="small" />
              <Typography variant="caption" display="block" fontWeight={600}>
                25 min
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <LocalGroceryStoreIcon color="primary" fontSize="small" />
              <Typography variant="caption" display="block" fontWeight={600}>
                Media
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <PersonIcon color="primary" fontSize="small" />
              <Typography variant="caption" display="block" fontWeight={600}>
                {porciones} pers
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', flex: 1 }}>
              <StarIcon color="primary" fontSize="small" />
              <Typography variant="caption" display="block" fontWeight={600}>
                4.7
              </Typography>
            </Box>
          </Stack>

          {/* Selector de porciones */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
            <IconButton 
              size="small" 
              onClick={() => setPorciones(Math.max(1, porciones - 1))}
              disabled={porciones <= 1}
            >
              <RemoveIcon />
            </IconButton>
            
            <Typography variant="h6" fontWeight={700} color="primary">
              {porciones} {porciones === 1 ? 'persona' : 'personas'}
            </Typography>
            
            <IconButton 
              size="small" 
              onClick={() => setPorciones(porciones + 1)}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>

      {/* Contenido desplazable */}
      <Box sx={{ flex: 1, overflow: 'auto', pt: 4, pb: 2 }}>
        <Box sx={{ px: 2 }}>
          {/* Tabs de navegación */}
          <Paper sx={{ p: 1, mb: 3, borderRadius: 3 }}>
            <Stack direction="row" spacing={1}>
              {['Ingredientes', 'Preparación', 'Nutrición'].map((tab, index) => (
                <Button
                  key={tab}
                  variant={index === 0 ? 'contained' : 'text'}
                  size="small"
                  onClick={() => {
                    if (index === 2) setShowNutrition(true);
                    else setPasoActivo(0);
                  }}
                  sx={{
                    borderRadius: 2,
                    flex: 1,
                    fontWeight: 600,
                    fontSize: '0.75rem'
                  }}
                >
                  {tab}
                </Button>
              ))}
            </Stack>
          </Paper>

          {/* Ingredientes */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalGroceryStoreIcon sx={{ mr: 1 }} />
              Ingredientes
              <Chip 
                label={`${ingredientes.length} items`} 
                size="small" 
                sx={{ ml: 2, borderRadius: 2 }}
              />
            </Typography>
            
            {categoriasIngredientes.map(categoria => {
              const ingredientesCategoria = ingredientes.filter(i => i.categoria === categoria);
              return (
                <Box key={categoria} sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" fontWeight={600} color="primary" sx={{ mb: 1, pl: 1 }}>
                    {categoria}
                  </Typography>
                  <Stack spacing={1}>
                    {ingredientesCategoria.map((ingrediente, index) => (
                      <Box 
                        key={index}
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: 'grey.50',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: 'primary.light',
                            color: 'white'
                          }
                        }}
                      >
                        <Typography variant="body2" fontWeight={600}>
                          {ingrediente.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {ingrediente.ajustado}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              );
            })}
          </Box>

          {/* Pasos de preparación */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight={700} gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <ListIcon sx={{ mr: 1 }} />
              Preparación
              <Chip 
                label={`${pasos.length} pasos`} 
                size="small" 
                sx={{ ml: 2, borderRadius: 2 }}
              />
            </Typography>
            
            <Stack spacing={2}>
              {pasos.map((paso, index) => (
                <Paper 
                  key={index}
                  elevation={pasoActivo === index ? 2 : 0}
                  sx={{ 
                    p: 2, 
                    borderRadius: 2,
                    border: pasoActivo === index ? 2 : 0,
                    borderColor: 'primary.main',
                    bgcolor: pasoActivo === index ? 'primary.light' : 'grey.50',
                    color: pasoActivo === index ? 'white' : 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setPasoActivo(index)}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar 
                      sx={{ 
                        bgcolor: pasoActivo === index ? 'white' : 'primary.main',
                        color: pasoActivo === index ? 'primary.main' : 'white',
                        width: 32,
                        height: 32,
                        fontSize: '0.9rem',
                        fontWeight: 700
                      }}
                    >
                      {index + 1}
                    </Avatar>
                    <Typography variant="body2" sx={{ flex: 1 }}>
                      {paso}
                    </Typography>
                    {pasoActivo === index && (
                      <CheckCircleIcon color="inherit" />
                    )}
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* Botón de acción */}
      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', background: 'white' }}>
        <Button 
          variant="contained" 
          fullWidth 
          size="large"
          startIcon={<LocalGroceryStoreIcon />}
          sx={{
            borderRadius: 3,
            py: 1.5,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)'
          }}
        >
          Agregar a Lista de Compras
        </Button>
      </Box>

      {/* Dialog de Nutrición */}
      <Dialog 
        open={showNutrition} 
        onClose={() => setShowNutrition(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ fontWeight: 700 }}>
          Información Nutricional
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                <Typography variant="h4" fontWeight={800} color="primary">
                  {nutrition.calorias}
                </Typography>
                <Typography variant="caption">Calorías</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                <Typography variant="h4" fontWeight={800} color="primary">
                  {nutrition.proteinas}
                </Typography>
                <Typography variant="caption">Proteínas</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                <Typography variant="h4" fontWeight={800} color="primary">
                  {nutrition.carbohidratos}
                </Typography>
                <Typography variant="caption">Carbohidratos</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                <Typography variant="h4" fontWeight={800} color="primary">
                  {nutrition.grasas}
                </Typography>
                <Typography variant="caption">Grasas</Typography>
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowNutrition(false)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

// 4. MOCKUP LISTA DE COMPRAS MEJORADO
const MockupListaCompras = () => {
  const [items, setItems] = useState([
    { id: 1, nombre: "Pasta spaghetti", cantidad: "400g", comprado: false, categoria: "Pasta y Granos", precio: 2.50 },
    { id: 2, nombre: "Pancetta", cantidad: "200g", comprado: true, categoria: "Carnes", precio: 8.00 },
    { id: 3, nombre: "Huevos", cantidad: "4 unidades", comprado: false, categoria: "Lácteos", precio: 3.20 },
    { id: 4, nombre: "Queso pecorino", cantidad: "100g", comprado: false, categoria: "Lácteos", precio: 6.80 },
    { id: 5, nombre: "Pimienta negra", cantidad: "al gusto", comprado: true, categoria: "Especias", precio: 4.50 },
    { id: 6, nombre: "Ajo", cantidad: "2 dientes", comprado: false, categoria: "Vegetales", precio: 1.00 }
  ]);

  const [showCompleted, setShowCompleted] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleComprado = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, comprado: !item.comprado } : item
    ));
  };

  const categorias = [...new Set(items.map(item => item.categoria))];
  const totalItems = items.length;
  const comprados = items.filter(item => item.comprado).length;
  const progreso = totalItems > 0 ? (comprados / totalItems) * 100 : 0;
  const totalPrecio = items.reduce((sum, item) => sum + item.precio, 0);

  const itemsFiltrados = showCompleted ? items : items.filter(item => !item.comprado);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const clearCompleted = () => {
    setItems(items.filter(item => !item.comprado));
    handleMenuClose();
  };

  return (
    <Box sx={{ height: '100%', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      {/* Status Bar */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        px: 2, 
        py: 1,
        background: 'white',
        borderBottom: 1,
        borderColor: 'divider',
        fontSize: '0.7rem'
      }}>
        <Typography variant="caption">9:41</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SignalCellularAltIcon sx={{ fontSize: '0.8rem' }} />
          <WifiIcon sx={{ fontSize: '0.8rem' }} />
          <BatteryFullIcon sx={{ fontSize: '0.8rem' }} />
        </Box>
      </Box>

      {/* Header */}
      <Box sx={{ 
        p: 3, 
        background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}>
        <IconButton 
          sx={{ 
            position: 'absolute', 
            right: 8, 
            top: 8, 
            color: 'white' 
          }}
          onClick={handleMenuOpen}
        >
          <MoreVertIcon />
        </IconButton>

        <Typography variant="h5" fontWeight={800} gutterBottom>
          Lista de Compras
        </Typography>
        
        {/* Progreso */}
        <Box sx={{ mb: 2 }}>
          <LinearProgress 
            variant="determinate" 
            value={progreso} 
            sx={{ 
              height: 8, 
              borderRadius: 4,
              mb: 1,
              bgcolor: 'rgba(255,255,255,0.3)',
              '& .MuiLinearProgress-bar': {
                bgcolor: 'white'
              }
            }}
          />
          <Typography variant="caption" sx={{ opacity: 0.9 }}>
            {comprados} de {totalItems} productos comprados
          </Typography>
        </Box>

        {/* Resumen */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" fontWeight={800}>
              ${totalPrecio.toFixed(2)}
            </Typography>
            <Typography variant="caption">Total estimado</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" fontWeight={800}>
              {totalItems}
            </Typography>
            <Typography variant="caption">Productos</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" fontWeight={800}>
              {categorias.length}
            </Typography>
            <Typography variant="caption">Categorías</Typography>
          </Box>
        </Box>
      </Box>

      {/* Filtros */}
      <Box sx={{ p: 2, pb: 1 }}>
        <FormControlLabel
          control={
            <Switch 
              checked={showCompleted}
              onChange={(e) => setShowCompleted(e.target.checked)}
              color="primary"
            />
          }
          label="Mostrar completados"
        />
      </Box>

      {/* Lista de productos */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 2, pt: 0 }}>
        {categorias.map(categoria => {
          const itemsCategoria = itemsFiltrados.filter(item => item.categoria === categoria);
          const compradosCategoria = itemsCategoria.filter(item => item.comprado).length;
          const totalCategoria = itemsCategoria.length;
          
          if (totalCategoria === 0) return null;
          
          return (
            <Box key={categoria} sx={{ mb: 3 }}>
              {/* Header de categoría */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1,
                p: 1.5,
                borderRadius: 2,
                bgcolor: 'primary.light',
                color: 'white'
              }}>
                <Typography variant="subtitle2" fontWeight={700}>
                  {categoria}
                </Typography>
                <Typography variant="caption">
                  {compradosCategoria}/{totalCategoria}
                </Typography>
              </Box>

              {/* Items de la categoría */}
              <Stack spacing={1}>
                {itemsCategoria.map(item => (
                  <Paper 
                    key={item.id}
                    elevation={1}
                    sx={{ 
                      p: 2,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      bgcolor: item.comprado ? 'success.light' : 'white',
                      color: item.comprado ? 'white' : 'inherit',
                      textDecoration: item.comprado ? 'line-through' : 'none',
                      opacity: item.comprado ? 0.8 : 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(4px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }
                    }}
                    onClick={() => toggleComprado(item.id)}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        border: 2,
                        borderColor: item.comprado ? 'white' : 'primary.main',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: item.comprado ? 'primary.main' : 'transparent',
                        flexShrink: 0
                      }}
                    >
                      {item.comprado && <CheckIcon sx={{ fontSize: 16, color: 'white' }} />}
                    </Box>
                    
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" fontWeight={600}>
                        {item.nombre}
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: item.comprado ? 0.7 : 0.6 }}>
                        {item.cantidad}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
                      <Typography variant="body2" fontWeight={600}>
                        ${item.precio.toFixed(2)}
                      </Typography>
                      {!item.comprado && (
                        <IconButton 
                          size="small" 
                          sx={{ 
                            color: 'primary.main',
                            mt: 0.5
                          }}
                        >
                          <AddShoppingCartIcon />
                        </IconButton>
                      )}
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </Box>
          );
        })}
      </Box>

      {/* Acciones */}
      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', background: 'white' }}>
        <Stack direction="row" spacing={1}>
          <Button 
            variant="outlined" 
            fullWidth
            startIcon={<ShareIcon />}
            sx={{ borderRadius: 3 }}
          >
            Compartir
          </Button>
          <Button 
            variant="contained" 
            fullWidth
            startIcon={<LocalGroceryStoreIcon />}
            sx={{ 
              borderRadius: 3,
              background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)'
            }}
          >
            Completar
          </Button>
        </Stack>
      </Box>

      {/* Menu de opciones */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={clearCompleted}>
          <DeleteIcon sx={{ mr: 1 }} />
          Limpiar completados
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <EditIcon sx={{ mr: 1 }} />
          Editar lista
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <DownloadIcon sx={{ mr: 1 }} />
          Exportar lista
        </MenuItem>
      </Menu>
    </Box>
  );
};

// 5. MOCKUP PERFIL MEJORADO
const MockupPerfil = () => {
  const [notificaciones, setNotificaciones] = useState(true);
  const [modoOscuro, setModoOscuro] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  
  const stats = [
    { label: 'Recetas creadas', value: 12, icon: <RestaurantMenuIcon />, color: 'primary' },
    { label: 'Favoritos', value: 24, icon: <FavoriteIcon />, color: 'secondary' },
    { label: 'Listas guardadas', value: 8, icon: <BookmarkIcon />, color: 'success' },
    { label: 'Seguidores', value: 156, icon: <PersonAddIcon />, color: 'warning' }
  ];

  const menuItems = [
    { icon: <BookmarkIcon />, label: 'Mis Recetas', badge: 12 },
    { icon: <FavoriteIcon />, label: 'Favoritos', badge: 24 },
    { icon: <LocalGroceryStoreIcon />, label: 'Listas de Compras', badge: 8 },
    { icon: <SettingsIcon />, label: 'Configuración' },
    { icon: <ExitToAppIcon />, label: 'Cerrar Sesión', color: 'error' }
  ];

  const recetasRecientes = [
    { nombre: "Pasta Carbonara", imagen: "#", tiempo: "25 min", rating: 4.7 },
    { nombre: "Ensalada César", imagen: "#", tiempo: "15 min", rating: 4.3 },
    { nombre: "Tacos Pastor", imagen: "#", tiempo: "40 min", rating: 4.8 },
    { nombre: "Brownie", imagen: "#", tiempo: "35 min", rating: 4.5 }
  ];

  const handleSaveProfile = () => {
    setEditMode(false);
    setSnackbarOpen(true);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <Box sx={{ height: '100%', bgcolor: 'background.default', display: 'flex', flexDirection: 'column' }}>
      {/* Status Bar */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        px: 2, 
        py: 1,
        background: 'white',
        borderBottom: 1,
        borderColor: 'divider',
        fontSize: '0.7rem'
      }}>
        <Typography variant="caption">9:41</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SignalCellularAltIcon sx={{ fontSize: '0.8rem' }} />
          <WifiIcon sx={{ fontSize: '0.8rem' }} />
          <BatteryFullIcon sx={{ fontSize: '0.8rem' }} />
        </Box>
      </Box>

      {/* Header del perfil */}
      <Box sx={{ 
        p: 4, 
        background: 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)',
        color: 'white',
        textAlign: 'center',
        pt: 6,
        position: 'relative'
      }}>
        <IconButton 
          sx={{ 
            position: 'absolute', 
            right: 16, 
            top: 16, 
            color: 'white' 
          }}
          onClick={handleMenuOpen}
        >
          <MoreVertIcon />
        </IconButton>

        <Avatar
          sx={{
            width: 100,
            height: 100,
            mx: 'auto',
            mb: 2,
            border: '4px solid white',
            boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
            cursor: editMode ? 'pointer' : 'default'
          }}
          src="/static/images/avatar/1.jpg"
        >
          AG
        </Avatar>
        
        {editMode ? (
          <TextField
            defaultValue="Ana García"
            size="small"
            sx={{
              mb: 1,
              '& .MuiOutlinedInput-root': {
                background: 'white',
                borderRadius: 2
              }
            }}
          />
        ) : (
          <Typography variant="h5" fontWeight={800} gutterBottom>
            Ana García
          </Typography>
        )}
        
        <Typography variant="body2" sx={{ opacity: 0.9, mb: 3 }}>
          Food enthusiast 🍳 | 156 seguidores
        </Typography>

        {/* Estadísticas */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} key={index}>
              <Paper sx={{ 
                p: 1.5, 
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: 3,
                textAlign: 'center'
              }}>
                <Box sx={{ color: 'white', mb: 0.5 }}>
                  {stat.icon}
                </Box>
                <Typography variant="h6" fontWeight={800}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {editMode ? (
          <Stack direction="row" spacing={1} justifyContent="center">
            <Button 
              variant="outlined" 
              size="small"
              onClick={() => setEditMode(false)}
              sx={{ 
                borderColor: 'white', 
                color: 'white',
                borderRadius: 3,
                fontWeight: 600
              }}
            >
              Cancelar
            </Button>
            <Button 
              variant="contained" 
              size="small"
              onClick={handleSaveProfile}
              sx={{ 
                background: 'white',
                color: 'primary.main',
                borderRadius: 3,
                fontWeight: 600
              }}
            >
              Guardar
            </Button>
          </Stack>
        ) : (
          <Button 
            variant="outlined" 
            size="small"
            onClick={() => setEditMode(true)}
            sx={{ 
              borderColor: 'white', 
              color: 'white',
              borderRadius: 3,
              fontWeight: 600
            }}
          >
            Editar Perfil
          </Button>
        )}
      </Box>

      {/* Configuración y menú */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        {/* Configuración rápida */}
        <Paper sx={{ p: 2, borderRadius: 3, mb: 2 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Configuración
          </Typography>
          
          <Stack spacing={2}>
            <FormControlLabel
              control={
                <Switch 
                  checked={notificaciones}
                  onChange={(e) => setNotificaciones(e.target.checked)}
                  color="primary"
                />
              }
              label="Notificaciones"
            />
            <FormControlLabel
              control={
                <Switch 
                  checked={modoOscuro}
                  onChange={(e) => setModoOscuro(e.target.checked)}
                  color="primary"
                />
              }
              label="Modo Oscuro"
            />
          </Stack>
        </Paper>

        {/* Menú principal */}
        <Paper sx={{ borderRadius: 3, overflow: 'hidden', mb: 3 }}>
          {menuItems.map((item, index) => (
            <Box key={index}>
              <Box 
                sx={{ 
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: 'primary.light',
                    color: 'white'
                  },
                  color: item.color || 'inherit'
                }}
              >
                <Box sx={{ color: 'inherit' }}>
                  {item.icon}
                </Box>
                
                <Typography variant="body2" fontWeight={600} sx={{ flex: 1 }}>
                  {item.label}
                </Typography>
                
                {item.badge && (
                  <Chip 
                    label={item.badge} 
                    size="small" 
                    color="primary"
                    sx={{ borderRadius: 2 }}
                  />
                )}
                
                <NavigateNextIcon sx={{ opacity: 0.7 }} />
              </Box>
              
              {index < menuItems.length - 1 && <Divider />}
            </Box>
          ))}
        </Paper>

        {/* Recetas recientes */}
        <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
          Recetas Recientes
        </Typography>
        
        <Grid container spacing={2}>
          {recetasRecientes.map((receta, index) => (
            <Grid item xs={6} key={index}>
              <Card sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <Box sx={{ 
                  height: 80, 
                  bgcolor: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  position: 'relative'
                }}>
                  <RestaurantMenuIcon />
                  <Chip 
                    label={receta.rating}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 4,
                      right: 4,
                      background: 'rgba(255,255,255,0.9)',
                      color: 'text.primary',
                      fontSize: '0.6rem',
                      height: 20
                    }}
                    icon={<StarIcon sx={{ fontSize: '0.8rem' }} />}
                  />
                </Box>
                <CardContent sx={{ p: 1 }}>
                  <Typography variant="caption" fontWeight={600} display="block" noWrap>
                    {receta.nombre}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {receta.tiempo}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Navigation Bar */}
      <Box sx={{ 
        p: 1, 
        borderTop: 1, 
        borderColor: 'divider',
        background: 'white'
      }}>
        <Stack direction="row" justifyContent="space-around">
          {[
            { icon: <HomeIcon />, label: 'Inicio', active: false },
            { icon: <SearchIcon />, label: 'Buscar', active: false },
            { icon: <BookmarkBorderIcon />, label: 'Guardados', active: false },
            { icon: <PersonIcon color="primary" />, label: 'Perfil', active: true }
          ].map((item, index) => (
            <Box key={index} sx={{ textAlign: 'center', flex: 1 }}>
              <IconButton size="small" color={item.active ? 'primary' : 'default'}>
                {item.icon}
              </IconButton>
              <Typography variant="caption" display="block" color={item.active ? 'primary' : 'text.secondary'}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Menu de opciones */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <EditIcon sx={{ mr: 1 }} />
          Editar perfil
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <AddPhotoAlternateIcon sx={{ mr: 1 }} />
          Cambiar foto
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <SettingsIcon sx={{ mr: 1 }} />
          Configuración
        </MenuItem>
      </Menu>

      {/* Snackbar de confirmación */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
          Perfil actualizado correctamente
        </Alert>
      </Snackbar>
    </Box>
  );
};

// Componente Principal App
const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [tabValue, setTabValue] = useState(0);
  const [activeView, setActiveView] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home', 'introduccion', 'vision', 'metodologia', 
        'arquitectura', 'desarrollo', 'vistas', 'sprints', 'equipo', 'conclusion', 'bibliografia'
      ];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  // Datos para las vistas de la aplicación
  const appViews = [
    {
      id: 1,
      name: 'Pantalla de Login',
      component: <MockupLogin />,
      description: 'Autenticación segura con redes sociales y email, al momento de iniciar sesión seras redirigido a la pantalla principal donde buscaras tu receta',
      path: '/vista5',
      icon: <PersonIcon />,
      color: 'primary'
    },
    {
      id: 2,
      name: 'Búsqueda de Recetas',
      component: <MockupBusqueda />,
      description: 'Búsqueda inteligente y filtrado avanzado al momento de buscar una receta podras filtrar por ingredientes, tiempo de preparación, dificultad, tipo de comida y más, una vez elegida seras redireccionado a la pantalla de detalle de receta',
      path: '/vista1',
      icon: <SearchIcon />,
      color: 'secondary'
    },
    {
      id: 3,
      name: 'Detalle de Receta',
      component: <MockupDetalleReceta />,
      description: 'Vista completa con ingredientes ajustables y pasos interactivos en la pantalla de detalle de receta podras ver los ingredientes necesarios, pasos para preparar la receta, información nutricional y valoraciones de otros usuarios ademas de que podras ajustar los ingredientes segun el numero de comensales y poder agregarlos a tu lista de compras',
      path: '/vista3',
      icon: <RestaurantMenuIcon />,
      color: 'success'
    },
    {
      id: 4,
      name: 'Lista de Compras',
      component: <MockupListaCompras />,
      description: 'Gestión inteligente de ingredientes y progreso de compra en la pantalla de lista de compras podras ver todos los ingredientes que necesitas comprar, organizados por categorías, con opciones para marcar como comprados, eliminar o compartir la lista ademas de un resumen del total estimado y progreso de compra',
      path: '/vista4',
      icon: <ShoppingCartIcon />,
      color: 'warning'
    },
    {
      id: 5,
      name: 'Perfil de Usuario',
      component: <MockupPerfil />,
      description: 'Personalización y configuración avanzada en la pantalla de perfil podras ver y editar tu información personal, estadísticas de uso, recetas guardadas y listas de compras ademas de opciones para configurar notificaciones, modo oscuro y cerrar sesión',
      path: '/vista4',
      icon: <PersonIcon />,
      color: 'primary'
    }
  ];

  const navigationItems = [
    { id: 'home', label: 'Inicio', icon: <RocketIcon /> },
    { id: 'introduccion', label: 'Introducción', icon: <SchoolIcon /> },
    { id: 'vision', label: 'Visión', icon: <LightbulbIcon /> },
    { id: 'metodologia', label: 'Metodología', icon: <TimelineIcon /> },
    { id: 'arquitectura', label: 'Arquitectura', icon: <ArchitectureIcon /> },
    { id: 'desarrollo', label: 'Desarrollo', icon: <CodeIcon /> },
    { id: 'vistas', label: 'Vistas de la App', icon: <PhoneIphoneIcon /> },
    { id: 'sprints', label: 'Planificación Sprints', icon: <DashboardIcon /> },
    { id: 'equipo', label: 'Equipo', icon: <GroupIcon /> },
    { id: 'conclusion', label: 'Conclusión', icon: <AssessmentIcon /> },
    { id: 'bibliografia', label: 'Bibliografía', icon: <BusinessIcon /> }
  ];

  const teamMembers = [
    { 
      name: "Fredy Alonso Esparza Campuzano", 
      role: "Equipo de desarrollo", 
      avatar: "FA",
      color: theme.palette.primary.main
    },
    { 
      name: "Limas Maya Citlali Anaid", 
      role: "Scrum Master", 
      avatar: "LC",
      color: theme.palette.secondary.main
    },
    { 
      name: "Avalos Negrete Alan de Jesús", 
      role: "Product Owner", 
      avatar: "AA",
      color: theme.palette.success.main
    },
    { 
      name: "Ortiz Meza Josué Miguel", 
      role: "Equipo de desarrollo", 
      avatar: "OJ",
      color: theme.palette.warning.main
    }
  ];

  const features = [
    { 
      icon: <DevicesIcon sx={{ fontSize: 40 }} />, 
      title: "Multiplataforma", 
      desc: "Compatible con Android e iOS usando Expo React Native",
      color: theme.palette.primary.main
    },
    { 
      icon: <CalculateIcon sx={{ fontSize: 40 }} />, 
      title: "Cálculo Inteligente", 
      desc: "Ajuste automático de ingredientes según número de comensales",
      color: theme.palette.secondary.main
    },
    { 
      icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />, 
      title: "Listas de Compras", 
      desc: "Generación automática de listas de compras inteligentes",
      color: theme.palette.success.main
    },
    { 
      icon: <SecurityIcon sx={{ fontSize: 40 }} />, 
      title: "Arquitectura Sólida", 
      desc: "Cliente-servidor con patrón MVC para máxima escalabilidad",
      color: theme.palette.warning.main
    }
  ];

  const metodologias = [
    {
      nombre: "Scrum",
      ventajas: ["Sprints cortos (2-4 semanas)", "Roles definidos (PO, SM, Dev)", "Entregas iterativas", "Alta organización"],
      aplicacion: "Ideal para roadmap claro y entregables frecuentes",
      icon: <TimelineIcon />,
      color: theme.palette.primary.main
    },
    {
      nombre: "Scrumban",
      ventajas: ["Híbrido Scrum-Kanban", "Máxima flexibilidad", "Manejo eficiente de cambios", "Tablero visual"],
      aplicacion: "Proyectos con alta incertidumbre y cambios constantes",
      icon: <ViewModuleIcon />,
      color: theme.palette.secondary.main
    },
    {
      nombre: "XP (Extreme Programming)",
      ventajas: ["Alta calidad del código", "Pruebas constantes (TDD)", "Programación en pareja", "Refactorización continua"],
      aplicacion: "Prioridad absoluta en calidad y minimización de bugs",
      icon: <CodeIcon />,
      color: theme.palette.success.main
    },
    {
      nombre: "Mobile-D",
      ventajas: ["Específica para móvil", "Testing intensivo", "Integración continua", "Despliegues frecuentes"],
      aplicacion: "Desarrollo móvil especializado con ciclos cortos",
      icon: <PhoneAndroidIcon />,
      color: theme.palette.warning.main
    }
  ];

  const arquitecturaFeatures = [
    {
      title: "Separación de Responsabilidades",
      desc: "Cada capa cumple un papel específico y puede modificarse independientemente",
      icon: <ViewModuleIcon />
    },
    {
      title: "Escalabilidad Garantizada",
      desc: "Estructura sólida para soportar crecimiento de usuarios y funcionalidades",
      icon: <TrendingUpIcon />
    },
    {
      title: "Seguridad Centralizada",
      desc: "Validación de datos y gestión de usuarios en capas específicas",
      icon: <SecurityIcon />
    },
    {
      title: "Mantenibilidad",
      desc: "Código organizado que facilita evoluciones y mejoras futuras",
      icon: <BuildIcon />
    }
  ];

  const pruebasEstrategias = [
    {
      tipo: "Pruebas Unitarias",
      desc: "Validación de funciones individuales como cálculo de ingredientes",
      icon: <CodeIcon />,
      ejemplos: ["Cálculo de porciones", "Validación de formularios", "Funciones de conversión"]
    },
    {
      tipo: "Pruebas Funcionales",
      desc: "Verificación de que cada pantalla y acción funcione correctamente",
      icon: <VisibilityIcon />,
      ejemplos: ["Flujo de recetas", "Guardado de favoritos", "Generación de listas"]
    },
    {
      tipo: "Pruebas de Integración",
      desc: "Confirmación de que todos los módulos trabajan conjuntamente",
      icon: <IntegrationInstructionsIcon />,
      ejemplos: ["Cliente-Servidor", "API externa de recetas", "Base de datos"]
    },
    {
      tipo: "Pruebas de Usabilidad",
      desc: "Evaluación de la experiencia del usuario final",
      icon: <PersonIcon />,
      ejemplos: ["Navegación intuitiva", "Accesibilidad", "Flujo de trabajo"]
    },
    {
      tipo: "Pruebas de Compatibilidad",
      desc: "Validación en diferentes dispositivos y versiones de SO",
      icon: <DevicesIcon />,
      ejemplos: ["Android vs iOS", "Diferentes resoluciones", "Versiones OS"]
    }
  ];

  const desarrolloSteps = [
    {
      label: 'Configuración Inicial',
      description: 'Instalación de Expo y creación del proyecto base con npx create-expo-app',
      icon: <BuildIcon />
    },
    {
      label: 'Desarrollo de Interfaz',
      description: 'Construcción de pantallas con componentes React Native y navegación',
      icon: <PaletteIcon />
    },
    {
      label: 'Integración de Datos',
      description: 'Carga de recetas en JSON y implementación de funciones de cálculo',
      icon: <StorageIcon />
    },
    {
      label: 'Pruebas en Dispositivos',
      description: 'Validación con Expo Go mediante código QR en tiempo real',
      icon: <PhoneAndroidIcon />
    },
    {
      label: 'Generación de Versión',
      description: 'Creación de archivo ejecutable para pruebas en dispositivos físicos',
      icon: <RocketIcon />
    }
  ];

  const pantallasApp = [
    {
      nombre: "Pantalla de Inicio",
      desc: "Vista general de recetas destacadas con buscador integrado",
      Vista1: "ir a /vista1",
      caracteristicas: ["Recetas destacadas", "Buscador superior", "Categorías principales"]
    },
    {
      nombre: "Búsqueda de Recetas",
      desc: "Filtrado avanzado por nombre, categoría o ingredientes disponibles",
      Vista2: "ir a /vista2",
      caracteristicas: ["Filtros múltiples", "Búsqueda en tiempo real", "Resultados categorizados"]
    },
    {
      nombre: "Detalle de Receta",
      desc: "Información completa con ajuste dinámico de cantidades",
      Vista3: "ir a /vista3",
      caracteristicas: ["Ingredientes ajustables", "Pasos de preparación", "Tiempo estimado"]
    },
    {
      nombre: "Lista de Compras",
      desc: "Generación automática a partir de recetas seleccionadas",
      Vista4: "ir a /vista4",
      caracteristicas: ["Agrupación inteligente", "Cantidades calculadas", "Marcado de comprados"]
    },
    {
      nombre: "Perfil de Usuario",
      desc: "Gestión personalizada de recetas favoritas y preferencias",
      Vista5: "ir a /vista5",
      caracteristicas: ["Inicio de sesión", "Favoritos", "Historial personal"]
    }
  ];

  // Nueva sección: Planificación de Sprints con Jira
  const plataformaGestion = {
    nombre: "Jira Software",
    descripcion: "Plataforma de gestión de proyectos ágiles desarrollada por Atlassian",
    ventajas: [
      "Tableros Scrum y Kanban personalizables",
      "Seguimiento de tiempo y velocidad del equipo",
      "Reportes avanzados y métricas",
      "Integración con GitHub y otras herramientas",
      "Gestión de backlog y sprints"
    ],
    configuracion: {
      proyecto: "MISABOR-SABORHOGAR",
      tipo: "Scrum",
      sprints: "4 semanas cada uno",
      roles: ["Product Owner", "Scrum Master", "Development Team"]
    }
  };

  const sprints = [
    {
      numero: 1,
      nombre: "Sprint 1 - Configuración y Estructura Base",
      fechaInicio: "01 Octubre 2024",
      fechaFin: "28 Octubre 2024",
      objetivo: "Configuración inicial del proyecto y desarrollo de la estructura base de la aplicación",
      actividades: [
        {
          id: "SP1-001",
          nombre: "Configuración del entorno de desarrollo",
          descripcion: "Instalación de Expo, React Native y dependencias necesarias",
          prioridad: "Alta",
          estimacion: "3 días",
          responsable: "Equipo completo",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP1-002",
          nombre: "Diseño de la arquitectura de la aplicación",
          descripcion: "Definición de la estructura de carpetas y patrones de diseño",
          prioridad: "Alta",
          estimacion: "2 días",
          responsable: "Fredy Esparza",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP1-003",
          nombre: "Creación del sistema de navegación",
          descripcion: "Implementación de React Navigation y estructura de rutas",
          prioridad: "Alta",
          estimacion: "4 días",
          responsable: "Josué Ortiz",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP1-004",
          nombre: "Desarrollo de la pantalla de inicio",
          descripcion: "Implementación del diseño principal con recetas destacadas",
          prioridad: "Media",
          estimacion: "5 días",
          responsable: "Alan Avalos",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP1-005",
          nombre: "Base de datos de recetas inicial",
          descripcion: "Creación del JSON con las primeras 20 recetas",
          prioridad: "Media",
          estimacion: "3 días",
          responsable: "Citlali Limas",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP1-006",
          nombre: "Configuración de Jira y Git",
          descripcion: "Estructura del proyecto en Jira y repositorio GitHub",
          prioridad: "Alta",
          estimacion: "2 días",
          responsable: "Scrum Master",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP1-007",
          nombre: "Sistema de cálculo de ingredientes",
          descripcion: "Lógica para ajustar cantidades según número de personas",
          prioridad: "Media",
          estimacion: "4 días",
          responsable: "Fredy Esparza",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP1-008",
          nombre: "Pruebas unitarias iniciales",
          descripcion: "Configuración de Jest y primeras pruebas",
          prioridad: "Baja",
          estimacion: "2 días",
          responsable: "Equipo completo",
          estado: "Por hacer",
          progreso: 0
        }
      ],
      entregables: [
        "Proyecto Expo configurado y funcionando",
        "Sistema de navegación implementado",
        "Pantalla de inicio básica",
        "Base de datos inicial de recetas",
        "Repositorio GitHub organizado"
      ]
    },
    {
      numero: 2,
      nombre: "Sprint 2 - Funcionalidades Principales",
      fechaInicio: "29 Octubre 2024",
      fechaFin: "25 Noviembre 2024",
      objetivo: "Desarrollo de las funcionalidades core de la aplicación y integración de datos",
      actividades: [
        {
          id: "SP2-001",
          nombre: "Pantalla de búsqueda y filtros",
          descripcion: "Implementación del sistema de búsqueda avanzada",
          prioridad: "Alta",
          estimacion: "6 días",
          responsable: "Josué Ortiz",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP2-002",
          nombre: "Pantalla de detalle de receta",
          descripcion: "Vista completa con ingredientes y pasos de preparación",
          prioridad: "Alta",
          estimacion: "5 días",
          responsable: "Alan Avalos",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP2-003",
          nombre: "Sistema de listas de compras",
          descripcion: "Generación automática y gestión de listas",
          prioridad: "Alta",
          estimacion: "7 días",
          responsable: "Fredy Esparza",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP2-004",
          nombre: "Pantalla de perfil de usuario",
          descripcion: "Gestión de favoritos y preferencias",
          prioridad: "Media",
          estimacion: "4 días",
          responsable: "Citlali Limas",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP2-005",
          nombre: "Integración con API externa",
          descripcion: "Conexión con base de datos de recetas online",
          prioridad: "Media",
          estimacion: "5 días",
          responsable: "Fredy Esparza",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP2-006",
          nombre: "Sistema de favoritos",
          descripcion: "Funcionalidad para guardar recetas favoritas",
          prioridad: "Media",
          estimacion: "3 días",
          responsable: "Alan Avalos",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP2-007",
          nombre: "Pruebas funcionales completas",
          descripcion: "Testing de todas las funcionalidades implementadas",
          prioridad: "Alta",
          estimacion: "4 días",
          responsable: "Equipo completo",
          estado: "Por hacer",
          progreso: 0
        },
        {
          id: "SP2-008",
          nombre: "Optimización de rendimiento",
          descripcion: "Mejora del performance y experiencia de usuario",
          prioridad: "Baja",
          estimacion: "3 días",
          responsable: "Josué Ortiz",
          estado: "Por hacer",
          progreso: 0
        }
      ],
      entregables: [
        "Búsqueda y filtrado funcional",
        "Sistema completo de recetas",
        "Listas de compras inteligentes",
        "Perfil de usuario operativo",
        "Primera versión testeada"
      ]
    }
  ];

  const bibliografiaItems = [
    {
      categoria: "Arquitectura Cliente-Servidor",
      items: [
        "Kitrum. (2024). Client-server architecture: Advantages and disadvantages.",
        "GeeksforGeeks. (2025). Client-server architecture - System design.",
        "Hidden Brains. (2024). Client server architecture: Everything you need to know."
      ]
    },
    {
      categoria: "Framework Expo",
      items: [
        "Expo. (2024). Why Expo is a great fit for new and existing React Native apps.",
        "ShiftAsia. (2025). React Native vs. Expo: Which path to take for your mobile app?",
        "Rootstrap. (2024). The Expo revolution has begun: A guide to building cross-platform mobile apps."
      ]
    },
    {
      categoria: "Patrón MVC y Metodologías",
      items: [
        "GeeksforGeeks. (2025). MVC Design Pattern.",
        "Mozilla Developer Network. (2025). MVC - Glossary.",
        "Scrum.org. What is Scrum?.",
        "Atlassian. What is Scrum and how to get started."
      ]
    },
    {
      categoria: "Gestión de Proyectos",
      items: [
        "Atlassian. (2024). Jira Software Documentation.",
        "Scrum Guide. (2020). The Definitive Guide to Scrum.",
        "Mountain Goat Software. (2024). Agile Project Management with Scrum."
      ]
    }
  ];

  const drawer = (
    <Box sx={{ width: 280, pt: 2, bgcolor: 'background.paper', height: '100%' }}>
      <Box sx={{ p: 2, textAlign: 'center', borderBottom: 1, borderColor: 'divider' }}>
        <KitchenIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          MiSabor - SaborHogar
        </Typography>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem 
            key={item.id} 
            onClick={() => scrollToSection(item.id)}
            sx={{
              borderLeft: activeSection === item.id ? 4 : 0,
              borderColor: 'primary.main',
              bgcolor: activeSection === item.id ? alpha(theme.palette.primary.main, 0.08) : 'transparent',
              '&:hover': {
                bgcolor: alpha(theme.palette.primary.main, 0.12)
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', color: activeSection === item.id ? 'primary.main' : 'text.primary' }}>
              {item.icon}
              <ListItemText 
                primary={item.label} 
                sx={{ 
                  ml: 2,
                  fontWeight: activeSection === item.id ? 600 : 400
                }}
              />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Función para obtener el color según la prioridad
  const getPriorityColor = (prioridad) => {
    switch (prioridad) {
      case 'Alta': return 'error';
      case 'Media': return 'warning';
      case 'Baja': return 'success';
      default: return 'default';
    }
  };

  // Función para obtener el color según el estado
  const getStatusColor = (estado) => {
    switch (estado) {
      case 'Completado': return 'success';
      case 'En progreso': return 'warning';
      case 'Por hacer': return 'default';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
      <ScrollToTop />
      
      {/* AppBar Mejorada */}
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: 'background.paper', 
          color: 'text.primary', 
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)',
          backgroundImage: 'none'
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <KitchenIcon sx={{ mr: 2, color: 'primary.main', fontSize: 32 }} />
            <Typography variant="h6" component="div" sx={{ fontWeight: 800, letterSpacing: '-0.5px' }}>
              MiSabor <Box component="span" sx={{ color: 'primary.main' }}>SaborHogar</Box>
            </Typography>
          </Box>
          
          {!isMobile && (
            <Stack direction="row" spacing={1}>
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  startIcon={item.icon}
                  sx={{
                    color: activeSection === item.id ? 'primary.main' : 'text.primary',
                    fontWeight: activeSection === item.id ? 700 : 500,
                    borderRadius: 3,
                    px: 2,
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.08)
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          )}
          
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: 2
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width: 280
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Hero Section Mejorada */}
      <Box id="home" sx={{ 
        pt: { xs: 16, md: 20 }, 
        pb: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box>
                  <Chip 
                    label="App Móvil de Cocina Inteligente" 
                    color="primary" 
                    variant="filled"
                    sx={{ mb: 3, fontWeight: 600, fontSize: '0.9rem' }}
                  />
                  <Typography variant="h2" component="h1" gutterBottom sx={{ 
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.1,
                    letterSpacing: '-0.5px'
                  }}>
                    Revoluciona tu
                    <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                      Experiencia Culinaria
                    </Box>
                  </Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom sx={{ 
                    mb: 4,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.6
                  }}>
                    La aplicación móvil inteligente que transforma la manera de cocinar, 
                    planificar comidas y conectar con la comunidad gastronómica.
                  </Typography>
                  
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button 
                      variant="contained" 
                      size="large"
                      onClick={() => scrollToSection('vision')}
                      startIcon={<AutoAwesomeIcon />}
                      sx={{
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        fontWeight: 700,
                        fontSize: '1.1rem'
                      }}
                    >
                      Descubrir Más
                    </Button>
                    <Button 
                      variant="outlined" 
                      size="large"
                      onClick={() => scrollToSection('vistas')}
                      startIcon={<PhoneIphoneIcon />}
                      sx={{
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        fontWeight: 600
                      }}
                    >
                      Ver Vistas
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Slide direction="left" in timeout={1000}>
                <Paper elevation={8} sx={{ 
                  p: 4, 
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  background: `linear-gradient(145deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.primary.main, 0.03)} 100%)`,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
                }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                    <StarIcon color="primary" sx={{ mr: 1 }} />
                    Características Principales
                  </Typography>
                  <Grid container spacing={3}>
                    {features.map((feature, index) => (
                      <Grid item xs={12} key={index}>
                        <Grow in timeout={800 + index * 200}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'flex-start',
                            p: 2,
                            borderRadius: 3,
                            bgcolor: alpha(feature.color, 0.05),
                            border: `1px solid ${alpha(feature.color, 0.1)}`
                          }}>
                            <Box sx={{ color: feature.color, mr: 2 }}>
                              {feature.icon}
                            </Box>
                            <Box>
                              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                                {feature.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {feature.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grow>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>

         {/* Sección de APIs a Utilizar */}
      <Box id="apis" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip label="Integración de APIs" color="primary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
              APIs para Potenciar MiSabor
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Integración con servicios externos para enriquecer la experiencia culinaria
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* APIs Principales de Recetas */}
            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ borderRadius: 4, height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <RestaurantMenuIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      APIs de Recetas
                    </Typography>
                  </Box>
                  
                  <Stack spacing={3}>
                    {[
                      {
                        nombre: "Spoonacular API",
                        desc: "Base de datos masiva con +365K recetas, información nutricional y búsqueda por ingredientes",
                        caracteristicas: ["Búsqueda avanzada", "Información nutricional", "Instrucciones paso a paso", "Imágenes de recetas"],
                        precio: "Freemium (150 puntos/día gratis)",
                        enlace: "spoonacular.com/food-api"
                      },
                      {
                        nombre: "Edamam API",
                        desc: "API de nutrición y análisis de recetas con datos detallados de ingredientes",
                        caracteristicas: ["Análisis nutricional", "Búsqueda por dieta", "Planificación de comidas", "Base de alimentos"],
                        precio: "Freemium (10K requests/mes gratis)",
                        enlace: "developer.edamam.com"
                      },
                      {
                        nombre: "The Meal DB",
                        desc: "API gratuita con recetas e imágenes de comidas de todo el mundo",
                        caracteristicas: ["Completamente gratuita", "Recetas internacionales", "Categorías organizadas", "Búsqueda por área"],
                        precio: "Gratuita",
                        enlace: "themealdb.com/api.php"
                      }
                    ].map((api, index) => (
                      <Paper key={index} elevation={2} sx={{ p: 2, borderRadius: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                          {api.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {api.desc}
                        </Typography>
                        <Stack direction="row" spacing={0.5} sx={{ mb: 1, flexWrap: 'wrap' }}>
                          {api.caracteristicas.map((caract, i) => (
                            <Chip 
                              key={i}
                              label={caract} 
                              size="small" 
                              variant="outlined"
                              sx={{ fontSize: '0.7rem', mb: 0.5 }}
                            />
                          ))}
                        </Stack>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Chip 
                            label={api.precio} 
                            size="small" 
                            color={api.precio === "Gratuita" ? "success" : "primary"}
                          />
                          <Typography variant="caption" color="primary" sx={{ fontWeight: 600 }}>
                            {api.enlace}
                          </Typography>
                        </Box>
                      </Paper>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            {/* APIs Complementarias */}
            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ borderRadius: 4, height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LocalGroceryStoreIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      APIs de Comercio y Nutrición
                    </Typography>
                  </Box>

                  <Stack spacing={3}>
                    {[
                      {
                        categoria: "Listas de Compras",
                        apis: [
                          {
                            nombre: "Google Shopping API",
                            desc: "Integración con tiendas locales y precios en tiempo real",
                            uso: "Comparar precios de ingredientes",
                            complejidad: "Media"
                          },
                          {
                            nombre: "Instacart API",
                            desc: "Pedidos de supermercado directamente desde la app",
                            uso: "Compra directa de ingredientes",
                            complejidad: "Alta"
                          }
                        ]
                      },
                      {
                        categoria: "Nutrición y Salud",
                        apis: [
                          {
                            nombre: "USDA FoodData Central",
                            desc: "Base de datos oficial de nutrientes del gobierno de EE.UU.",
                            uso: "Información nutricional precisa",
                            complejidad: "Baja"
                          },
                          {
                            nombre: "Nutritionix API",
                            desc: "Base de datos nutricional con información de restaurantes",
                            uso: "Análisis de comidas y calorías",
                            complejidad: "Media"
                          }
                        ]
                      },
                      {
                        categoria: "Reconocimiento de Imágenes",
                        apis: [
                          {
                            nombre: "Google Vision AI",
                            desc: "Reconocimiento de ingredientes desde fotos",
                            uso: "Identificar alimentos con la cámara",
                            complejidad: "Media"
                          },
                          {
                            nombre: "Clarifai Food Model",
                            desc: "Modelo especializado en reconocimiento de alimentos",
                            uso: "Clasificación de ingredientes por imagen",
                            complejidad: "Media"
                          }
                        ]
                      }
                    ].map((categoria, index) => (
                      <Box key={index}>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
                          {categoria.categoria}
                        </Typography>
                        <Stack spacing={2}>
                          {categoria.apis.map((api, i) => (
                            <Paper key={i} elevation={1} sx={{ p: 2, borderRadius: 2 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                  {api.nombre}
                                </Typography>
                                <Chip 
                                  label={api.complejidad} 
                                  size="small" 
                                  color={
                                    api.complejidad === "Baja" ? "success" : 
                                    api.complejidad === "Media" ? "warning" : "error"
                                  }
                                />
                              </Box>
                              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                {api.desc}
                              </Typography>
                              <Typography variant="caption" display="block" color="primary">
                                💡 {api.uso}
                              </Typography>
                            </Paper>
                          ))}
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Plan de Implementación */}
          <Paper elevation={4} sx={{ p: 5, mt: 6, borderRadius: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center' }}>
              <IntegrationInstructionsIcon sx={{ mr: 2, color: 'primary.main' }} />
              Plan de Implementación por Fases
            </Typography>
            
            <Stepper orientation={isMobile ? "vertical" : "horizontal"} activeStep={-1}>
              {[
                {
                  label: 'Fase 1 - MVP',
                  description: 'Spoonacular API para búsqueda básica de recetas',
                  apis: ['Spoonacular (Free Tier)', 'The Meal DB']
                },
                {
                  label: 'Fase 2 - Nutrición',
                  description: 'Integración de análisis nutricional avanzado',
                  apis: ['Edamam API', 'USDA FoodData']
                },
                {
                  label: 'Fase 3 - Comercio',
                  description: 'Funcionalidades de compra y listas inteligentes',
                  apis: ['Google Shopping API', 'Nutritionix']
                },
                {
                  label: 'Fase 4 - IA',
                  description: 'Reconocimiento de imágenes y recomendaciones',
                  apis: ['Google Vision AI', 'Clarifai']
                }
              ].map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{step.label}</Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography variant="body1" paragraph>{step.description}</Typography>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                      {step.apis.map((api, i) => (
                        <Chip key={i} label={api} size="small" color="primary" variant="outlined" />
                      ))}
                    </Stack>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Paper>

          {/* Consideraciones Técnicas */}
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ borderRadius: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                    <SecurityIcon color="primary" sx={{ mr: 2 }} />
                    Consideraciones de Seguridad
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      "Almacenar API keys en variables de entorno",
                      "Implementar rate limiting para evitar abusos",
                      "Usar HTTPS para todas las comunicaciones",
                      "Validar y sanitizar datos de entrada",
                      "Implementar timeout en requests externos",
                      "Manejo adecuado de errores y fallos"
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon color="success" sx={{ mr: 2, fontSize: '1.2rem' }} />
                        <Typography variant="body2">{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ borderRadius: 3, bgcolor: 'primary.main', color: 'white' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                    <SpeedIcon sx={{ mr: 2 }} />
                    Optimización de Rendimiento
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      "Cache de respuestas de API (1-24 horas)",
                      "Lazy loading de imágenes de recetas",
                      "Paginación en resultados de búsqueda",
                      "Compresión de datos en tránsito",
                      "Uso de CDN para assets estáticos",
                      "Manejo offline de datos básicos"
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ mr: 2, fontSize: '1.2rem' }} />
                        <Typography variant="body2">{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Ejemplo de Implementación */}
          <Paper elevation={4} sx={{ p: 4, mt: 6, borderRadius: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
              Ejemplo de Implementación: Spoonacular API
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Endpoints Principales
                </Typography>
                <TableContainer component={Paper} elevation={2}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell><strong>Endpoint</strong></TableCell>
                        <TableCell><strong>Propósito</strong></TableCell>
                        <TableCell><strong>Método</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { endpoint: '/recipes/complexSearch', purpose: 'Búsqueda avanzada', method: 'GET' },
                        { endpoint: '/recipes/{id}/information', purpose: 'Detalle de receta', method: 'GET' },
                        { endpoint: '/recipes/findByIngredients', purpose: 'Búsqueda por ingredientes', method: 'GET' },
                        { endpoint: '/recipes/analyze', purpose: 'Análisis nutricional', method: 'POST' }
                      ].map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Typography variant="caption" fontFamily="monospace">
                              {row.endpoint}
                            </Typography>
                          </TableCell>
                          <TableCell>{row.purpose}</TableCell>
                          <TableCell>
                            <Chip label={row.method} size="small" color="primary" />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Ejemplo de Código React Native
                </Typography>
                <Paper elevation={2} sx={{ p: 3, bgcolor: 'grey.900', color: 'white', fontFamily: 'monospace', fontSize: '0.8rem', borderRadius: 2 }}>
                  <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
{`// Búsqueda de recetas
const searchRecipes = async (query) => {
  try {
    const response = await fetch(
      \`https://api.spoonacular.com/recipes/complexSearch?query=\${query}&apiKey=\${API_KEY}\`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

// Detalle de receta
const getRecipeDetails = async (recipeId) => {
  try {
    const response = await fetch(
      \`https://api.spoonacular.com/recipes/\${recipeId}/information?apiKey=\${API_KEY}\`
    );
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    return null;
  }
};`}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Sección de Introducción (se mantiene igual) */}
      <Box id="introduccion" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      </Box>
      {/* Sección de Vistas de la App */}
      <Box id="vistas" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip label="Demo Interactivo" color="primary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
              Vistas de la Aplicación
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Explora el flujo completo de navegación de MiSabor a través de nuestras 5 pantallas principales
            </Typography>
          </Box>

        

          {/* Selector de Vistas */}
          <Paper elevation={4} sx={{ p: 4, mb: 6, borderRadius: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center' }}>
              <PhoneIphoneIcon sx={{ mr: 2, color: 'primary.main' }} />
              Navegación entre Pantallas
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <ButtonGroup variant="outlined" sx={{ borderRadius: 3 }}>
                {appViews.map((view, index) => (
                  <Button
                    key={view.id}
                    onClick={() => setActiveView(index)}
                    variant={activeView === index ? "contained" : "outlined"}
                    startIcon={view.icon}
                    sx={{
                      borderRadius: 2,
                      fontWeight: 600,
                      px: 3
                    }}
                  >
                    {view.name}
                  </Button>
                ))}
              </ButtonGroup>
            </Box>

            {/* Flujo de Navegación Visual */}
            <Box sx={{ position: 'relative', minHeight: 400 }}>
              {/* Vista Activa Centrada */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Fade in timeout={500}>
                  <Box sx={{ textAlign: 'center' }}>
                    <PhoneMockup active={true} color={appViews[activeView].color}>
                      {appViews[activeView].component}
                    </PhoneMockup>
                    <Typography variant="h6" fontWeight={700} sx={{ mt: 2 }}>
                      {appViews[activeView].name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {appViews[activeView].description}
                    </Typography>
                  </Box>
                </Fade>
              </Box>

              {/* Línea de tiempo de navegación */}
              <Box sx={{ position: 'relative', mt: 6 }}>
                <Timeline position="alternate">
                  {appViews.map((view, index) => (
                    <TimelineItem key={view.id}>
                      <TimelineSeparator>
                        <TimelineDot 
                          color={index === activeView ? "primary" : "grey"} 
                          variant={index === activeView ? "filled" : "outlined"}
                        >
                          {view.icon}
                        </TimelineDot>
                        {index < appViews.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper 
                          elevation={index === activeView ? 4 : 1}
                          sx={{ 
                            p: 2, 
                            cursor: 'pointer',
                            bgcolor: index === activeView ? 'primary.main' : 'background.paper',
                            color: index === activeView ? 'white' : 'text.primary',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: theme.shadows[4]
                            }
                          }}
                          onClick={() => setActiveView(index)}
                        >
                          <Typography variant="subtitle1" fontWeight={600}>
                            {view.name}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: index === activeView ? 0.9 : 0.7 }}>
                            {view.description}
                          </Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Box>
            </Box>
          </Paper>

          {/* Grid de todas las vistas */}
          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
            Todas las Pantallas
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            {appViews.map((view, index) => (
              <Grid item xs={12} sm={6} md={4} key={view.id}>
                <Grow in timeout={500 + index * 100}>
                  <Card 
                    elevation={4}
                    sx={{ 
                      textAlign: 'center',
                      borderRadius: 3,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[8]
                      }
                    }}
                    onClick={() => setActiveView(index)}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <PhoneMockup active={index === activeView} color={view.color}>
                          {view.component}
                        </PhoneMockup>
                      </Box>
                      <Typography variant="h6" fontWeight={700} gutterBottom>
                        {view.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {view.description}
                      </Typography>
                      <Chip 
                        label={view.path} 
                        size="small" 
                        variant="outlined"
                        sx={{ fontWeight: 600 }}
                      />
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>

          {/* Diagrama de Flujo */}
          <Paper elevation={4} sx={{ p: 4, mt: 6, borderRadius: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3, display: 'flex', alignItems: 'center' }}>
              <TimelineIcon sx={{ mr: 2, color: 'primary.main' }} />
              Diagrama de Flujo de Navegación
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              {/* Fila 1: Login */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <PhoneMockup active={activeView === 0} color="primary">
                    <MockupLogin />
                  </PhoneMockup>
                  <Typography variant="body2" fontWeight={600} sx={{ mt: 1 }}>
                    Login
                  </Typography>
                </Box>
                <ViewConnector from={0} to={1} label="Autenticación exitosa" />
              </Box>

              {/* Fila 2: Búsqueda y Detalle */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <PhoneMockup active={activeView === 1} color="secondary">
                    <MockupBusqueda />
                  </PhoneMockup>
                  <Typography variant="body2" fontWeight={600} sx={{ mt: 1 }}>
                    Búsqueda
                  </Typography>
                </Box>
                <ViewConnector from={1} to={2} label="Seleccionar receta" />
                <Box sx={{ textAlign: 'center' }}>
                  <PhoneMockup active={activeView === 2} color="success">
                    <MockupDetalleReceta />
                  </PhoneMockup>
                  <Typography variant="body2" fontWeight={600} sx={{ mt: 1 }}>
                    Detalle
                  </Typography>
                </Box>
              </Box>

              {/* Fila 3: Lista y Perfil */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <PhoneMockup active={activeView === 3} color="warning">
                    <MockupListaCompras />
                  </PhoneMockup>
                  <Typography variant="body2" fontWeight={600} sx={{ mt: 1 }}>
                    Lista Compras
                  </Typography>
                </Box>
                <ViewConnector from={3} to={4} label="Gestión completa" />
                <Box sx={{ textAlign: 'center' }}>
                  <PhoneMockup active={activeView === 4} color="primary">
                    <MockupPerfil />
                  </PhoneMockup>
                  <Typography variant="body2" fontWeight={600} sx={{ mt: 1 }}>
                    Perfil
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography variant="body1" color="text.secondary">
                Nota: Las flechas indican el flujo de navegación entre las diferentes pantallas de la aplicación.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Introducción Section */}
      <Box id="introduccion" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip label="Sección 1" color="secondary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
              Introducción al Desarrollo Móvil
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Contexto actual y fundamentos del desarrollo de aplicaciones móviles modernas
            </Typography>
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ height: '100%', borderRadius: 4 }}>
                <CardContent sx={{ p: 5 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                    <BusinessIcon color="primary" sx={{ mr: 2 }} />
                    Contexto Actual
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    El desarrollo de aplicaciones móviles se ha consolidado en la última década como una de las áreas 
                    más dinámicas y relevantes dentro de la industria del software. El crecimiento de dispositivos 
                    inteligentes, junto con la necesidad de soluciones rápidas, prácticas y accesibles, ha impulsado 
                    a empresas y desarrolladores independientes a crear aplicaciones que no solo satisfacen necesidades 
                    inmediatas, sino que también ofrecen experiencias personalizadas y de alto valor agregado.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    En este contexto, resulta fundamental no solo programar una aplicación, sino también planificar 
                    cuidadosamente su proceso de desarrollo, seleccionar las metodologías más adecuadas y definir una 
                    arquitectura robusta que garantice calidad, escalabilidad y mantenibilidad.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ height: '100%', borderRadius: 4, bgcolor: 'primary.main', color: 'white' }}>
                <CardContent sx={{ p: 5 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                    <PsychologyIcon sx={{ mr: 2 }} />
                    Enfoque Estratégico
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ opacity: 0.9 }}>
                    El presente proyecto se centra en la construcción de una aplicación móvil orientada al ámbito 
                    culinario, con el propósito de facilitar la gestión de recetas y mejorar la experiencia de los 
                    usuarios al momento de cocinar.
                  </Typography>
                  
                  <Stack spacing={2} sx={{ mt: 3 }}>
                    {[
                      "Metodología ágil para cambios frecuentes",
                      "Arquitectura cliente-servidor robusta",
                      "Patrón MVC para organización del código",
                      "Framework Expo para desarrollo eficiente",
                      "Control de versiones con Git/GitHub",
                      "Gestión de proyectos con Jira"
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon sx={{ mr: 2, opacity: 0.9 }} />
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Visión Section Mejorada */}
      <Box id="vision" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip label="Propósito y Visión" color="primary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
              Visión del Proyecto: MiSabor - SaborHogar
            </Typography>
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ borderRadius: 4, height: '100%' }}>
                <CardContent sx={{ p: 5 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Propósito
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Facilitar la experiencia culinaria de cualquier persona, desde principiantes hasta aficionados, 
                    mediante una herramienta digital que transforma la manera de cocinar y planificar comidas.
                  </Typography>
                  
                  <Stack spacing={3} sx={{ mt: 4 }}>
                    {[
                      {
                        icon: <SpeedIcon color="primary" />,
                        title: "Simplificación",
                        desc: "Planificación de comidas intuitiva y eficiente"
                      },
                      {
                        icon: <CalculateIcon color="primary" />,
                        title: "Optimización",
                        desc: "Uso inteligente de ingredientes evitando desperdicios"
                      },
                      {
                        icon: <PersonIcon color="primary" />,
                        title: "Comunidad",
                        desc: "Conexión entre personas con intereses gastronómicos"
                      },
                      {
                        icon: <TrendingUpIcon color="primary" />,
                        title: "Salud",
                        desc: "Fomento de hábitos alimenticios saludables"
                      }
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box sx={{ mr: 2, mt: 0.5 }}>{item.icon}</Box>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{item.title}</Typography>
                          <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper elevation={4} sx={{ 
                p: 5, 
                height: '100%',
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${alpha(theme.palette.secondary.main, 0.8)} 100%)`,
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                  Nuestra Visión Futura
                </Typography>
                <Typography variant="body1" paragraph sx={{ opacity: 0.9, mb: 4 }}>
                  Convertirnos en la app de referencia en cocina digital en el mercado hispanohablante y 
                  posteriormente internacional, destacando por su inteligencia adaptativa, interactividad 
                  y cercanía al usuario.
                </Typography>
                
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mt: 4 }}>
                  Imaginamos un futuro donde:
                </Typography>
                <Stack spacing={2}>
                  {[
                    "Pedirle a la app que sugiera qué cocinar con ingredientes disponibles",
                    "Ajuste automático de recetas para cualquier número de personas",
                    "Alertas inteligentes de sustitutos de ingredientes faltantes",
                    "Compra de ingredientes directamente desde la aplicación",
                    "Aprendizaje paso a paso como con un chef personal"
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                      <AutoAwesomeIcon sx={{ mr: 2, fontSize: '1.2rem' }} />
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Metodología Section Mejorada */}
      <Box id="metodologia" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip label="Sección 2" color="secondary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
              Metodología Scrum
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Selección y justificación de la metodología ágil para el desarrollo móvil
            </Typography>
          </Box>

          {/* Comparación de Metodologías */}
          <Paper elevation={4} sx={{ p: 4, mb: 6, borderRadius: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', mb: 3 }}>
              <AssessmentIcon color="primary" sx={{ mr: 2 }} />
              Comparación de Metodologías Ágiles
            </Typography>
            
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{ mb: 4 }}
            >
              {metodologias.map((metodologia, index) => (
                <Tab 
                  key={index}
                  label={metodologia.nombre}
                  icon={metodologia.icon}
                  iconPosition="start"
                  sx={{ fontWeight: 600, borderRadius: 2 }}
                />
              ))}
            </Tabs>

            {metodologias.map((metodologia, index) => (
              <div key={index} role="tabpanel" hidden={tabValue !== index}>
                {tabValue === index && (
                  <Fade in timeout={500}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ 
                          p: 3, 
                          borderRadius: 3, 
                          bgcolor: alpha(metodologia.color, 0.08),
                          border: `2px solid ${alpha(metodologia.color, 0.2)}`
                        }}>
                          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: metodologia.color }}>
                            Ventajas Principales
                          </Typography>
                          <Stack spacing={1}>
                            {metodologia.ventajas.map((ventaja, i) => (
                              <Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircleIcon sx={{ mr: 1, color: metodologia.color, fontSize: '1.2rem' }} />
                                <Typography variant="body2">{ventaja}</Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 3, bgcolor: 'grey.50' }}>
                          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                            Aplicación Recomendada
                          </Typography>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {metodologia.aplicacion}
                          </Typography>
                          <Chip 
                            label={metodologia.nombre} 
                            color="primary" 
                            variant="outlined"
                            sx={{ fontWeight: 600 }}
                          />
                        </Paper>
                      </Grid>
                    </Grid>
                  </Fade>
                )}
              </div>
            ))}
          </Paper>

          {/* Justificación de Scrum */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Card elevation={4} sx={{ borderRadius: 4 }}>
                <CardContent sx={{ p: 5 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                    ¿Por Qué Elegimos Scrum?
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Scrum es una de las metodologías ágiles más utilizadas porque permite organizar el trabajo 
                    en ciclos cortos llamados sprints, lo que facilita entregar avances funcionales en poco 
                    tiempo y recibir retroalimentación constante.
                  </Typography>
                  
                  <Grid container spacing={3} sx={{ mt: 2 }}>
                    {[
                      {
                        title: "Entregas Rápidas",
                        desc: "Versiones funcionales rápidamente en mercado competitivo"
                      },
                      {
                        title: "Adaptabilidad",
                        desc: "Respuesta ágil a cambios de requisitos del usuario"
                      },
                      {
                        title: "Comunicación Clara",
                        desc: "Roles definidos y reuniones regulares mantienen alineación"
                      },
                      {
                        title: "Ritmo Sostenible",
                        desc: "Sprints de 2-4 semanas evitan burnout del equipo"
                      }
                    ].map((item, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                          <Box sx={{ 
                            width: 8, 
                            height: 8, 
                            bgcolor: 'primary.main', 
                            borderRadius: '50%', 
                            mr: 2, 
                            mt: 1 
                          }} />
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{item.title}</Typography>
                            <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper elevation={4} sx={{ 
                p: 4, 
                height: '100%',
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${alpha(theme.palette.primary.main, 0.8)} 100%)`,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  Beneficios Técnicos
                </Typography>
                <Stack spacing={2}>
                  {[
                    "Metodología ampliamente documentada",
                    "Herramientas disponibles para equipos",
                    "Facilita integración continua",
                    "Permite mejora continua"
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleIcon sx={{ mr: 1 }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Arquitectura Section Mejorada */}
      <Box id="arquitectura" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip label="Sección 3" color="secondary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
              Arquitectura y Tecnologías
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Diseño de la estructura técnica y selección de herramientas de desarrollo
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ borderRadius: 4, height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <ArchitectureIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      Arquitectura Cliente-Servidor
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Separación clara entre la aplicación móvil (cliente) y el servidor central, 
                    permitiendo escalabilidad y mantenimiento eficiente.
                  </Typography>
                  
                  <Box sx={{ 
                    p: 3, 
                    borderRadius: 3, 
                    bgcolor: 'grey.50',
                    mt: 3
                  }}>
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ 
                          width: 12, 
                          height: 12, 
                          bgcolor: 'primary.main', 
                          borderRadius: '50%', 
                          mr: 2 
                        }} />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Cliente Móvil</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Interfaz de usuario y experiencia del usuario final
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ 
                          width: 12, 
                          height: 12, 
                          bgcolor: 'secondary.main', 
                          borderRadius: '50%', 
                          mr: 2 
                        }} />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Servidor</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Lógica de negocio, base de datos y APIs
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ borderRadius: 4, height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <ViewModuleIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      Patrón MVC
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    Modelo-Vista-Controlador para una separación clara de responsabilidades 
                    y mejor mantenibilidad del código.
                  </Typography>
                  
                  <Box sx={{ 
                    p: 3, 
                    borderRadius: 3, 
                    bgcolor: 'grey.50',
                    mt: 3
                  }}>
                    <Stack spacing={2}>
                      {[
                        { 
                          label: "Modelo", 
                          desc: "Gestión de datos y lógica de negocio", 
                          color: "primary.main" 
                        },
                        { 
                          label: "Vista", 
                          desc: "Interfaz de usuario y presentación", 
                          color: "secondary.main" 
                        },
                        { 
                          label: "Controlador", 
                          desc: "Mediador entre Vista y Modelo", 
                          color: "success.main" 
                        }
                      ].map((item, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box sx={{ 
                            width: 12, 
                            height: 12, 
                            bgcolor: item.color, 
                            borderRadius: '50%', 
                            mr: 2 
                          }} />
                          <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{item.label}</Typography>
                            <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                          </Box>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Framework Expo */}
          <Paper elevation={4} sx={{ 
            p: 5, 
            borderRadius: 4,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${alpha(theme.palette.primary.main, 0.9)} 100%)`,
            color: 'white'
          }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
              <DevicesIcon sx={{ mr: 2 }} />
              Framework: Expo con React Native
            </Typography>
            <Typography variant="body1" paragraph sx={{ opacity: 0.9, fontSize: '1.1rem' }}>
              Expo simplifica el desarrollo multiplataforma, permitiendo crear aplicaciones 
              para Android e iOS con una sola base de código, herramientas preconfiguradas 
              y testing en tiempo real.
            </Typography>
            
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  Ventajas Principales:
                </Typography>
                <Stack spacing={2}>
                  {[
                    "Compatibilidad multiplataforma nativa",
                    "Módulos preconfigurados y optimizados",
                    "Despliegue simplificado con Expo Go",
                    "Comunidad activa y documentación extensa",
                    "Hot reloading para desarrollo ágil"
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleIcon sx={{ mr: 2 }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  Beneficios Técnicos:
                </Typography>
                <Stack spacing={2}>
                  {[
                    "Reducción de tiempo de desarrollo en 40%",
                    "Mantenimiento unificado de código base",
                    "Actualizaciones over-the-air (OTA)",
                    "Testing en dispositivos reales sin compilación",
                    "Integración con servicios nativos"
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleIcon sx={{ mr: 2 }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Paper>

          {/* Características de Arquitectura */}
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Características de la Arquitectura Propuesta
            </Typography>
            <Grid container spacing={3}>
              {arquitecturaFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Grow in timeout={500 + index * 200}>
                    <Card elevation={3} sx={{ 
                      textAlign: 'center', 
                      p: 3, 
                      height: '100%',
                      borderRadius: 3,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        transition: 'transform 0.3s ease'
                      }
                    }}>
                      <Box sx={{ 
                        color: 'primary.main', 
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {feature.desc}
                      </Typography>
                    </Card>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Desarrollo Section Mejorada */}
      <Box id="desarrollo" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip label="Sección 4" color="secondary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
              Proceso de Desarrollo
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Implementación técnica, pruebas y despliegue de la aplicación móvil
            </Typography>
          </Box>

          {/* Proceso de Desarrollo */}
          <Paper elevation={4} sx={{ p: 4, mb: 6, borderRadius: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Flujo de Desarrollo
            </Typography>
            <Stepper orientation={isMobile ? "vertical" : "horizontal"} activeStep={-1}>
              {desarrolloSteps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel 
                    StepIconComponent={() => (
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        {step.icon}
                      </Avatar>
                    )}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>{step.label}</Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography variant="body1">{step.description}</Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Paper>

          <Grid container spacing={4}>
            {/* Estrategias de Prueba */}
            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ borderRadius: 4, height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                    <IntegrationInstructionsIcon sx={{ mr: 2 }} />
                    Estrategias de Prueba
                  </Typography>
                  
                  <Timeline position="alternate">
                    {pruebasEstrategias.map((estrategia, index) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            {estrategia.icon}
                          </TimelineDot>
                          {index < pruebasEstrategias.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={2} sx={{ p: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {estrategia.tipo}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {estrategia.desc}
                            </Typography>
                            <Stack spacing={0.5}>
                              {estrategia.ejemplos.map((ejemplo, i) => (
                                <Typography key={i} variant="body2" sx={{ fontSize: '0.8rem' }}>
                                  • {ejemplo}
                                </Typography>
                              ))}
                            </Stack>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </CardContent>
              </Card>
            </Grid>

            {/* Versionamiento */}
            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ borderRadius: 4, height: '100%', bgcolor: 'grey.900', color: 'white' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                    <GitHubIcon sx={{ mr: 2 }} />
                    Versionamiento con Git
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ opacity: 0.9 }}>
                    Control de versiones profesional con estructura de ramas organizada 
                    para un desarrollo colaborativo eficiente y trazabilidad completa.
                  </Typography>
                  
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mt: 3 }}>
                    Flujo de Trabajo:
                  </Typography>
                  <Stack spacing={2}>
                    {[
                      "Rama main: versiones estables para producción",
                      "Rama develop: integración de nuevas funcionalidades",
                      "Feature branches: desarrollo aislado de características",
                      "Pull requests con revisión de código obligatoria",
                      "Versionado semántico (v1.0.0, v1.1.0, etc.)",
                      "Commits descriptivos y atómicos"
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon color="success" sx={{ mr: 1, fontSize: '1.2rem' }} />
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Pantallas de la App */}
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Pantallas de la Aplicación
            </Typography>
            <Grid container spacing={3}>
              {pantallasApp.map((pantalla, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Grow in timeout={500 + index * 200}>
                    <Card elevation={4} sx={{ 
                      height: '100%',
                      borderRadius: 3,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        transition: 'transform 0.3s ease'
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                          {pantalla.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {pantalla.desc}
                        </Typography>
                        <Stack spacing={1}>
                          {pantalla.caracteristicas.map((caracteristica, i) => (
                            <Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
                              <Box sx={{ 
                                width: 6, 
                                height: 6, 
                                bgcolor: 'primary.main', 
                                borderRadius: '50%', 
                                mr: 1 
                              }} />
                              <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                                {caracteristica}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Nueva Sección: Planificación de Sprints */}
      <Box id="sprints" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip label="Gestión de Proyecto" color="primary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
              Planificación de Sprints con Jira
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Gestión ágil del proyecto mediante sprints de 4 semanas cada uno
            </Typography>
          </Box>

          {/* Plataforma de Gestión */}
          <Paper elevation={4} sx={{ p: 5, mb: 6, borderRadius: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', mb: 3 }}>
              <DashboardIcon color="primary" sx={{ mr: 2 }} />
              Plataforma de Gestión: {plataformaGestion.nombre}
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Descripción
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {plataformaGestion.descripcion}
                </Typography>
                
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3 }}>
                  Configuración del Proyecto
                </Typography>
                <Box sx={{ p: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" fontWeight={600}>Proyecto:</Typography>
                      <Chip label={plataformaGestion.configuracion.proyecto} size="small" color="primary" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" fontWeight={600}>Tipo:</Typography>
                      <Chip label={plataformaGestion.configuracion.tipo} size="small" variant="outlined" />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" fontWeight={600}>Duración Sprints:</Typography>
                      <Chip label={plataformaGestion.configuracion.sprints} size="small" />
                    </Box>
                  </Stack>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Ventajas de {plataformaGestion.nombre}
                </Typography>
                <Stack spacing={2}>
                  {plataformaGestion.ventajas.map((ventaja, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleIcon color="success" sx={{ mr: 2 }} />
                      <Typography variant="body2">{ventaja}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Paper>

          {/* Sprints */}
          {sprints.map((sprint, sprintIndex) => (
            <Paper key={sprintIndex} elevation={4} sx={{ p: 4, mb: 6, borderRadius: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                  <PlayArrowIcon />
                </Avatar>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {sprint.nombre}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {sprint.fechaInicio} - {sprint.fechaFin}
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                    <AssignmentIcon sx={{ mr: 1 }} />
                    Objetivo del Sprint
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {sprint.objetivo}
                  </Typography>

                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mt: 3, display: 'flex', alignItems: 'center' }}>
                    <TaskIcon sx={{ mr: 1 }} />
                    Actividades del Sprint (Ordenadas por Prioridad)
                  </Typography>
                  
                  <TableContainer component={Paper} elevation={2}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell><strong>ID</strong></TableCell>
                          <TableCell><strong>Actividad</strong></TableCell>
                          <TableCell><strong>Prioridad</strong></TableCell>
                          <TableCell><strong>Responsable</strong></TableCell>
                          <TableCell><strong>Estimación</strong></TableCell>
                          <TableCell><strong>Progreso</strong></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {sprint.actividades.map((actividad, index) => (
                          <TableRow key={index} hover>
                            <TableCell>
                              <Chip label={actividad.id} size="small" variant="outlined" />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2" fontWeight={600}>
                                {actividad.nombre}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {actividad.descripcion}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Chip 
                                label={actividad.prioridad} 
                                size="small" 
                                color={getPriorityColor(actividad.prioridad)}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">{actividad.responsable}</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography variant="body2">{actividad.estimacion}</Typography>
                            </TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: '100%', mr: 1 }}>
                                  <LinearProgress 
                                    variant="determinate" 
                                    value={actividad.progreso} 
                                    color={actividad.progreso === 100 ? "success" : "primary"}
                                    sx={{ height: 8, borderRadius: 4 }}
                                  />
                                </Box>
                                <Typography variant="body2" color="textSecondary">
                                  {actividad.progreso}%
                                </Typography>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card elevation={3} sx={{ bgcolor: 'primary.main', color: 'white' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                        <CheckIcon sx={{ mr: 1 }} />
                        Entregables del Sprint
                      </Typography>
                      <Stack spacing={1}>
                        {sprint.entregables.map((entregable, index) => (
                          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckCircleIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                            <Typography variant="body2">{entregable}</Typography>
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>

                  <Card elevation={3} sx={{ mt: 3 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                        <ScheduleIcon sx={{ mr: 1 }} />
                        Métricas del Sprint
                      </Typography>
                      <Stack spacing={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Duración:</Typography>
                          <Chip label="4 semanas" size="small" />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Actividades:</Typography>
                          <Chip label={sprint.actividades.length} size="small" color="primary" />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Días hábiles:</Typography>
                          <Chip label="20 días" size="small" />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="body2">Capacidad equipo:</Typography>
                          <Chip label="4 personas" size="small" />
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          ))}

          {/* Resumen de la Planificación */}
          <Paper elevation={4} sx={{ p: 4, borderRadius: 4, bgcolor: 'success.light', color: 'white' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center' }}>
              <CalendarMonthIcon sx={{ mr: 2 }} />
              Resumen de la Planificación
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 800 }}>2</Typography>
                  <Typography variant="h6">Sprints Planificados</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 800 }}>8</Typography>
                  <Typography variant="h6">Semanas de Desarrollo</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 800 }}>16</Typography>
                  <Typography variant="h6">Actividades Totales</Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Equipo Section Mejorada */}
      <Box id="equipo" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip label="Equipo de Desarrollo" color="primary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
              Nuestro Equipo
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              Profesionales comprometidos con la excelencia en desarrollo móvil
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Grow in timeout={500 + index * 200}>
                  <Card elevation={6} sx={{ 
                    textAlign: 'center', 
                    p: 3, 
                    height: '100%',
                    borderRadius: 4,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease',
                      boxShadow: '0 12px 28px rgba(0,0,0,0.15)'
                    }
                  }}>
                    <Avatar
                      sx={{
                        width: 100,
                        height: 100,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: member.color,
                        fontSize: '2rem',
                        fontWeight: 700,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                      }}
                    >
                      {member.avatar}
                    </Avatar>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                      {member.name}
                    </Typography>
                    <Chip 
                      label={member.role} 
                      color="primary" 
                      variant="filled"
                      sx={{ fontWeight: 600 }}
                    />
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Conclusión Section */}
      <Box id="conclusion" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip label="Conclusión" color="secondary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
              Conclusiones y Aprendizajes
            </Typography>
          </Box>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card elevation={4} sx={{ borderRadius: 4, height: '100%' }}>
                <CardContent sx={{ p: 5 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Logros del Proyecto
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    El desarrollo de MiSabor - SaborHogar ha permitido consolidar conocimientos 
                    fundamentales en el desarrollo de aplicaciones móviles modernas, aplicando 
                    metodologías ágiles y arquitecturas robustas.
                  </Typography>
                  
                  <Stack spacing={2} sx={{ mt: 3 }}>
                    {[
                      "Aplicación exitosa de metodología Scrum en entorno real",
                      "Implementación de arquitectura cliente-servidor con patrón MVC",
                      "Desarrollo multiplataforma eficiente con Expo",
                      "Gestión profesional de versiones con Git/GitHub",
                      "Planificación y ejecución de estrategias de prueba integrales",
                      "Gestión de proyecto con Jira y planificación de 2 sprints"
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon color="success" sx={{ mr: 2 }} />
                        <Typography variant="body2">{item}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper elevation={4} sx={{ 
                p: 5, 
                height: '100%',
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${alpha(theme.palette.secondary.main, 0.8)} 100%)`,
                color: 'white'
              }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                  Aprendizajes Clave
                </Typography>
                <Stack spacing={3} sx={{ mt: 3 }}>
                  {[
                    {
                      title: "Planificación Estratégica",
                      desc: "La importancia de definir arquitectura y metodología desde el inicio"
                    },
                    {
                      title: "Trabajo en Equipo",
                      desc: "Coordinación efectiva mediante roles Scrum definidos"
                    },
                    {
                      title: "Desarrollo Iterativo",
                      desc: "Valor de las entregas incrementales y retroalimentación constante"
                    },
                    {
                      title: "Calidad del Código",
                      desc: "Impacto de las pruebas y versionamiento en mantenibilidad"
                    },
                    {
                      title: "Gestión de Proyectos",
                      desc: "Importancia de herramientas como Jira para el seguimiento"
                    }
                  ].map((item, index) => (
                    <Box key={index}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Bibliografía Section */}
      <Box id="bibliografia" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip label="Bibliografía" color="primary" sx={{ mb: 2, fontWeight: 600 }} />
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 800 }}>
              Referencias Bibliográficas
            </Typography>
          </Box>

          <Paper elevation={4} sx={{ p: 5, borderRadius: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
              Fuentes Consultadas
            </Typography>
            
            <Grid container spacing={4}>
              {bibliografiaItems.map((categoria, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card elevation={2} sx={{ height: '100%', borderRadius: 3 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {categoria.categoria}
                      </Typography>
                      <Stack spacing={1}>
                        {categoria.items.map((item, i) => (
                          <Typography key={i} variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                            • {item}
                          </Typography>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Footer Mejorado */}
      <Box component="footer" sx={{ 
        bgcolor: 'grey.900', 
        color: 'white', 
        py: 8,
        position: 'relative'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <KitchenIcon sx={{ mr: 2, color: 'primary.main', fontSize: 32 }} />
                <Typography variant="h5" sx={{ fontWeight: 800 }}>
                  MiSabor <Box component="span" sx={{ color: 'primary.main' }}>SaborHogar</Box>
                </Typography>
              </Box>
              <Typography variant="body1" color="grey.400" sx={{ mb: 3 }}>
                Revolucionando la experiencia culinaria digital mediante tecnología móvil inteligente, 
                metodologías ágiles y arquitecturas robustas.
              </Typography>
              <Stack direction="row" spacing={2}>
                {[
                  { icon: <GitHubIcon />, label: 'GitHub' },
                  { icon: <CodeIcon />, label: 'Expo' },
                  { icon: <BusinessIcon />, label: 'Scrum' },
                  { icon: <DashboardIcon />, label: 'Jira' }
                ].map((item, index) => (
                  <Chip
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    variant="outlined"
                    sx={{ color: 'grey.400', borderColor: 'grey.700' }}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
                  Información del Proyecto
                </Typography>
                <Typography variant="body2" color="grey.400" paragraph>
                  © 2024 MiSabor - SaborHogar. Proyecto académico desarrollado con metodología Scrum.
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Tecnologías: React Native, Expo, Arquitectura Cliente-Servidor, Patrón MVC, Git/GitHub, Jira
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, bgcolor: 'grey.700' }} />
          <Typography variant="body2" color="grey.400" align="center">
            GIDS5102 - Tecnologías de la Información y Comunicación - 19/09/25
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default App;