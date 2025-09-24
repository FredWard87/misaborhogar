import React, { useState } from 'react';
import { Edit3, Heart, List, Clock, Trophy, Bell, Moon, Calculator, BarChart, HelpCircle, MessageCircle, Info, LogOut, Sparkles } from 'lucide-react';

const PantallaPerfil = ({ navigation }) => {
  const [usuario, setUsuario] = useState({
    nombre: 'Ana García',
    email: 'ana.garcia@email.com',
    foto: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    miembroDesde: 'Enero 2024',
    recetasGuardadas: 24,
    listasCreadas: 8
  });

  const [configuraciones, setConfiguraciones] = useState({
    notificaciones: true,
    modoOscuro: false,
    autoAjustePorciones: true,
    metricas: true
  });

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
  };

  const cerrarSesion = () => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres cerrar sesión?');
    if (confirmacion) {
      alert('Sesión cerrada');
      // navigation.navigate('Login')
    }
  };

  const ConfiguracionItem = ({ icono: IconComponent, titulo, descripcion, valor, onToggle, color }) => (
    <div className="relative flex items-center justify-between p-4 mb-2 bg-gradient-to-r from-white to-purple-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
      <div className="flex items-center flex-1">
        <div className={`p-2 rounded-full ${color} mr-3 shadow-md`}>
          <IconComponent size={24} className="text-white" />
        </div>
        <div>
          <p className="font-bold text-gray-800">{titulo}</p>
          <p className="text-gray-600 text-sm">{descripcion}</p>
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={valor}
          onChange={onToggle}
          className="sr-only peer"
        />
        <div className="w-12 h-6 bg-gradient-to-r from-gray-300 to-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-purple-500 to-pink-500"></div>
      </label>
    </div>
  );

  const OpcionPerfil = ({ icono: IconComponent, titulo, onPress, color = 'bg-gradient-to-r from-purple-500 to-pink-500' }) => (
    <button onClick={onPress} className="relative flex items-center p-4 mb-2 bg-gradient-to-r from-white to-purple-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-purple-100 w-full group">
      <div className={`p-2 rounded-full ${color} mr-3 shadow-md`}>
        <IconComponent size={24} className="text-white" />
      </div>
      <span className="flex-1 text-left font-bold text-gray-800">{titulo}</span>
      <svg className="w-5 h-5 text-purple-500 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </button>
  );

  const RecetaCard = ({ receta }) => (
    <div className="relative flex-shrink-0 w-40 bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:scale-105">
      <div className="relative h-24 overflow-hidden">
        <img 
          src={receta.imagen} 
          alt={receta.nombre}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
          {receta.dificultad}
        </div>
      </div>
      <div className="p-3">
        <p className="font-bold text-gray-800 text-sm mb-1 truncate">{receta.nombre}</p>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-600">{receta.fecha}</p>
          <p className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">{receta.tiempo}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      {/* Efectos de fondo */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-b-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-yellow-400/20 to-pink-400/20 rounded-t-full"></div>
      
      {/* Header */}
      <div className="relative flex items-center justify-between p-6 bg-white/80 backdrop-blur-md rounded-b-3xl shadow-lg border-b border-purple-200">
        <div className="flex items-center">
          <Sparkles className="text-purple-500 mr-2" size={28} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mi Perfil</h1>
        </div>
        <button 
          onClick={cerrarSesion} 
          className="p-3 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
        >
          <LogOut size={20} />
        </button>
      </div>

      <div className="relative max-w-4xl mx-auto pb-8 px-4 z-10">
        {/* Información del usuario */}
        <div className="relative flex items-center p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl shadow-2xl mt-6 mb-8 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          
          <div className="relative border-4 border-white/30 rounded-full p-1 mr-5">
            <img 
              src={usuario.foto} 
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">{usuario.nombre}</h2>
            <p className="mb-1 opacity-90">{usuario.email}</p>
            <p className="text-sm opacity-80">Miembro desde {usuario.miembroDesde}</p>
          </div>
          <button className="relative flex items-center space-x-2 bg-white text-purple-600 px-4 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Edit3 size={18} />
            <span>Editar</span>
          </button>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-2xl shadow-lg border border-purple-200 text-center transform hover:scale-105 transition-all duration-300">
            <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{usuario.recetasGuardadas}</p>
            <p className="text-gray-700 font-semibold mt-1">Recetas guardadas</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-100 to-pink-100 p-4 rounded-2xl shadow-lg border border-yellow-200 text-center transform hover:scale-105 transition-all duration-300">
            <p className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-transparent">{usuario.listasCreadas}</p>
            <p className="text-gray-700 font-semibold mt-1">Listas creadas</p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-4 rounded-2xl shadow-lg border border-pink-200 text-center transform hover:scale-105 transition-all duration-300">
            <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">156</p>
            <p className="text-gray-700 font-semibold mt-1">Recetas cocinadas</p>
          </div>
        </div>

        {/* Recetas recientes */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-purple-100 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Recetas Recientes</h2>
            <button className="text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors">
              Ver todas
            </button>
          </div>
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100">
            {recetasRecientes.map((receta) => (
              <RecetaCard key={receta.id} receta={receta} />
            ))}
          </div>
        </div>

        {/* Opciones de perfil */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-purple-100 mb-8">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Mi Cuenta</h2>
          <div className="space-y-2">
            <OpcionPerfil
              icono={Heart}
              titulo="Mis favoritos"
              onPress={() => alert('Mis favoritos')}
              color="bg-gradient-to-r from-red-500 to-pink-500"
            />
            <OpcionPerfil
              icono={List}
              titulo="Mis listas de compras"
              onPress={() => alert('Mis listas')}
              color="bg-gradient-to-r from-green-500 to-teal-500"
            />
            <OpcionPerfil
              icono={Clock}
              titulo="Historial de recetas"
              onPress={() => alert('Historial')}
              color="bg-gradient-to-r from-blue-500 to-purple-500"
            />
            <OpcionPerfil
              icono={Trophy}
              titulo="Logros y metas"
              onPress={() => alert('Logros')}
              color="bg-gradient-to-r from-yellow-500 to-orange-500"
            />
          </div>
        </div>

        {/* Configuraciones */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-purple-100 mb-8">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Configuraciones</h2>
          <div className="space-y-2">
            <ConfiguracionItem
              icono={Bell}
              titulo="Notificaciones"
              descripcion="Recibe alertas sobre tus recetas"
              valor={configuraciones.notificaciones}
              onToggle={() => toggleConfiguracion('notificaciones')}
              color="bg-gradient-to-r from-purple-500 to-pink-500"
            />
            <ConfiguracionItem
              icono={Moon}
              titulo="Modo oscuro"
              descripcion="Activar interfaz oscura"
              valor={configuraciones.modoOscuro}
              onToggle={() => toggleConfiguracion('modoOscuro')}
              color="bg-gradient-to-r from-indigo-500 to-purple-500"
            />
            <ConfiguracionItem
              icono={Calculator}
              titulo="Ajuste automático"
              descripcion="Ajustar ingredientes por porciones"
              valor={configuraciones.autoAjustePorciones}
              onToggle={() => toggleConfiguracion('autoAjustePorciones')}
              color="bg-gradient-to-r from-green-500 to-teal-500"
            />
            <ConfiguracionItem
              icono={BarChart}
              titulo="Métricas"
              descripcion="Ver información nutricional"
              valor={configuraciones.metricas}
              onToggle={() => toggleConfiguracion('metricas')}
              color="bg-gradient-to-r from-blue-500 to-cyan-500"
            />
          </div>
        </div>

        {/* Soporte y ayuda */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-purple-100">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Soporte</h2>
          <div className="space-y-2">
            <OpcionPerfil
              icono={HelpCircle}
              titulo="Centro de ayuda"
              onPress={() => alert('Centro de ayuda')}
              color="bg-gradient-to-r from-cyan-500 to-blue-500"
            />
            <OpcionPerfil
              icono={MessageCircle}
              titulo="Enviar comentarios"
              onPress={() => alert('Enviar comentarios')}
              color="bg-gradient-to-r from-orange-500 to-red-500"
            />
            <OpcionPerfil
              icono={Info}
              titulo="Acerca de MiSabor"
              onPress={() => alert('MiSabor v1.0.0')}
              color="bg-gradient-to-r from-gray-600 to-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PantallaPerfil;