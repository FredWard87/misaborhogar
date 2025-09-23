import React, { useState, useEffect, useRef } from 'react';

// 📦 MUI Core Components
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
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
  alpha
} from '@mui/material';

// 🧪 MUI Lab Components (Timeline)
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
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
  AutoAwesome as AutoAwesomeIcon
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

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [tabValue, setTabValue] = useState(0);
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
        'arquitectura', 'desarrollo', 'equipo', 'conclusion', 'bibliografia'
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

  const navigationItems = [
    { id: 'home', label: 'Inicio', icon: <RocketIcon /> },
    { id: 'introduccion', label: 'Introducción', icon: <SchoolIcon /> },
    { id: 'vision', label: 'Visión', icon: <LightbulbIcon /> },
    { id: 'metodologia', label: 'Metodología', icon: <TimelineIcon /> },
    { id: 'arquitectura', label: 'Arquitectura', icon: <ArchitectureIcon /> },
    { id: 'desarrollo', label: 'Desarrollo', icon: <CodeIcon /> },
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
      desc: "Confirmación de que todos los módulos trabajen conjuntamente",
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
      caracteristicas: ["Recetas destacadas", "Buscador superior", "Categorías principales"]
    },
    {
      nombre: "Búsqueda de Recetas",
      desc: "Filtrado avanzado por nombre, categoría o ingredientes disponibles",
      caracteristicas: ["Filtros múltiples", "Búsqueda en tiempo real", "Resultados categorizados"]
    },
    {
      nombre: "Detalle de Receta",
      desc: "Información completa con ajuste dinámico de cantidades",
      caracteristicas: ["Ingredientes ajustables", "Pasos de preparación", "Tiempo estimado"]
    },
    {
      nombre: "Lista de Compras",
      desc: "Generación automática a partir de recetas seleccionadas",
      caracteristicas: ["Agrupación inteligente", "Cantidades calculadas", "Marcado de comprados"]
    },
    {
      nombre: "Perfil de Usuario",
      desc: "Gestión personalizada de recetas favoritas y preferencias",
      caracteristicas: ["Inicio de sesión", "Favoritos", "Historial personal"]
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
                      onClick={() => scrollToSection('desarrollo')}
                      startIcon={<CodeIcon />}
                      sx={{
                        borderRadius: 3,
                        px: 4,
                        py: 1.5,
                        fontWeight: 600
                      }}
                    >
                      Ver Desarrollo
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

      {/* Introducción Section */}
      <Box id="introduccion" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
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
                      "Control de versiones con Git/GitHub"
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
      <Box id="vision" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
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
      <Box id="metodologia" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
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
      <Box id="arquitectura" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
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
      <Box id="desarrollo" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
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
                      "Planificación y ejecución de estrategias de prueba integrales"
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
                  { icon: <BusinessIcon />, label: 'Scrum' }
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
                  Tecnologías: React Native, Expo, Arquitectura Cliente-Servidor, Patrón MVC, Git/GitHub
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