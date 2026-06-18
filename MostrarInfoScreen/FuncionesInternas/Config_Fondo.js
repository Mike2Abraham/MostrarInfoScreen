


/**
 * Crea un fondo según la configuración
 * @param {Array} fondoConfig - Array de configuraciones de fondo
 * @returns {HTMLElement} Elemento del fondo creado
 */
function crearFondo(fondoConfig) {
    const backdrop = document.createElement('div');
    backdrop.className = 'notification-backdrop';
    backdrop.id = `backdrop-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Aplicar cada configuración de fondo en orden
    fondoConfig.forEach((config, index) => {
        if (config.imagen) {
            // Fondo con imagen
            backdrop.classList.add('backdrop-image');
            backdrop.style.backgroundImage = `url('${config.imagen}')`;
        }
        
        if (config.color) {
            // Fondo con color
            backdrop.classList.add('backdrop-color');
            backdrop.style.backgroundColor = config.color;
        }
        
        if (config.gradiente) {
            // Fondo con gradiente
            backdrop.classList.add('backdrop-gradient');
            backdrop.style.background = config.gradiente;
        }
        
        if (config.blur) {
            // Efecto blur
            backdrop.classList.add('backdrop-blur');
            const blurValue = typeof config.blur === 'boolean' ? '10px' : config.blur;
            backdrop.style.backdropFilter = `blur(${blurValue})`;
            backdrop.style.webkitBackdropFilter = `blur(${blurValue})`;
        }
        
        // Aplicar estilos personalizados
        if (config.estilos && typeof config.estilos === 'object') {
            Object.assign(backdrop.style, config.estilos);
        }
        
        // Opacidad por defecto si no se especifica
        if (!backdrop.style.opacity) {
            backdrop.style.opacity = '0.85';
        }
    });
    
    // Insertar al inicio del body (detrás de todo)
    document.body.insertBefore(backdrop, document.body.firstChild);
    
    // Animación de entrada
    setTimeout(() => {
        backdrop.classList.add('visible');
    }, 10);
    
    return backdrop;
}

/**
 * Cierra un fondo con animación
 * @param {HTMLElement} backdrop - Elemento del fondo a cerrar
 */
function cerrarFondo(backdrop) {
    if (!backdrop || !backdrop.parentNode) return;
    
    backdrop.classList.remove('visible');
    backdrop.classList.add('hiding');
    
    setTimeout(() => {
        if (backdrop.parentNode) {
            backdrop.parentNode.removeChild(backdrop);
        }
    }, 300);
}

export { crearFondo, cerrarFondo }