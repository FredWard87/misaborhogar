import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const PantallaLogin = ({ navigation }) => {
  const [esLogin, setEsLogin] = useState(true);
  const [formulario, setFormulario] = useState({
    email: '',
    password: '',
    nombre: '',
    confirmarPassword: ''
  });
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const handleCambio = (campo, valor) => {
    setFormulario(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const handleEnvio = (e) => {
    e.preventDefault();
    const { email, password, nombre, confirmarPassword } = formulario;

    if (!email || !password) {
      alert('Por favor completa todos los campos');
      return;
    }

    if (!esLogin && password !== confirmarPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!esLogin && !nombre) {
      alert('Por favor ingresa tu nombre');
      return;
    }

    // Simulación de autenticación exitosa
    const mensaje = esLogin ? 'Inicio de sesión exitoso' : 'Cuenta creada exitosamente';
    alert(mensaje);
    // navigation.navigate('Inicio')
  };

  const loginConRedSocial = (redSocial) => {
    alert(`Iniciar sesión con ${redSocial}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo y título */}
        <div className="text-center">
          <img 
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100"
            alt="Logo MiSabor"
            className="mx-auto h-20 w-20 rounded-full"
          />
          <h1 className="mt-4 text-3xl font-bold text-teal-500">MiSabor</h1>
          <p className="text-gray-600">SaborHogar</p>
        </div>

        {/* Formulario */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {esLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h2>

          <form onSubmit={handleEnvio} className="space-y-4">
            {!esLogin && (
              <div className="relative">
                <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Nombre completo"
                  value={formulario.nombre}
                  onChange={(e) => handleCambio('nombre', e.target.value)}
                />
              </div>
            )}

            <div className="relative">
              <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Correo electrónico"
                value={formulario.email}
                onChange={(e) => handleCambio('email', e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={mostrarPassword ? 'text' : 'password'}
                className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Contraseña"
                value={formulario.password}
                onChange={(e) => handleCambio('password', e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setMostrarPassword(!mostrarPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {mostrarPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {!esLogin && (
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={mostrarPassword ? 'text' : 'password'}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Confirmar contraseña"
                  value={formulario.confirmarPassword}
                  onChange={(e) => handleCambio('confirmarPassword', e.target.value)}
                />
              </div>
            )}

            {esLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-teal-500 text-sm font-semibold hover:text-teal-600"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-lg font-bold hover:bg-teal-600 transition-colors"
            >
              {esLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </button>
          </form>

          {/* Divisor */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">o continúa con</span>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => loginConRedSocial('Google')}
              className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              <span className="text-gray-700 font-semibold text-sm">Google</span>
            </button>

            <button 
              onClick={() => loginConRedSocial('Facebook')}
              className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              <span className="text-gray-700 font-semibold text-sm">Facebook</span>
            </button>
          </div>

          {/* Cambiar entre login y registro */}
          <div className="text-center mt-6">
            <span className="text-gray-600 text-sm">
              {esLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
            </span>
            <button
              type="button"
              onClick={() => setEsLogin(!esLogin)}
              className="ml-1 text-teal-500 font-bold text-sm hover:text-teal-600"
            >
              {esLogin ? 'Regístrate' : 'Inicia sesión'}
            </button>
          </div>
        </div>

        {/* Información adicional */}
        <div className="text-center px-4">
          <p className="text-xs text-gray-600 leading-4">
            Al {esLogin ? 'iniciar sesión' : 'registrarte'}, aceptas nuestros{' '}
            <button className="text-teal-500 font-semibold hover:text-teal-600">
              Términos de servicio
            </button>{' '}
            y{' '}
            <button className="text-teal-500 font-semibold hover:text-teal-600">
              Política de privacidad
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PantallaLogin;