function injectStyles() {
  if (document.getElementById("sp-notification-styles")) return; // evita duplicados
  const style = document.createElement("style");
  style.id = "sp-notification-styles";
  style.textContent = `
    .notification-container {
    position: fixed;
    top: 51px;
    right: 20px;
    z-index: 9999999999999;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow: hidden;
    border-radius: 15px;
}

/* Contenedor con scroll suave */
.notification-container.multiple-notifications {
    max-height: 85vh;
    scroll-behavior: smooth;
}
.notification {
    background: rgb(28 28 28 / 57%);
    border-left: 7px solid #6b46c1;
    border-radius: 8px;
    padding: 0px 7px;
    width: 306px;
    min-height: 68px;
    max-height: 187px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    gap: 15px;
    backdrop-filter: blur(5px);
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.5s ease, box-shadow 0.3s ease;
    flex-direction: row;
}

.notification.visible {
    transform: translateX(0);
    opacity: 1;
}

.notification.hiding {
    transform: translateX(100%);
    opacity: 0;
}

.notification:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.notification-img {
    width: 71px;
    height: 71px;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;
}

.notification-content {
    flex-grow: 1;
    margin-left: 7px;
}

.notification-text {
    margin: 0;
    color: #ffffff;
    font-size: 14px;
    font-family: revert-layer;
    line-height: 1.4;
}

.notification-close {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #ffffff;
    align-self: flex-start;
    transition: color 0.2s ease;
}

.notification-close:hover {
    color: #e53e3e;
}
.notification-text1 {
    font-weight: bold;
        margin: 4px 0px;
    font-size: 14px;
}

.notification-text2 {
    font-size: 12px;
        margin: 4px 0px;
    color: #aaa;
}

.notification-text3 {
    font-size: 11px;
        margin: 4px 0px;
    color: #a9a9a9;
    font-style: italic;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.notification.pulse {
    animation: pulse 0.5s ease;
}

.notification-buttons {
    display: flex;
    gap: 10px;
    margin-top: 15px;
    flex-wrap: nowrap;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
}

.notification-button {
    padding: 2px 2px;
    border: none;
    border-radius: 6px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 90px;
}

.notification-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.notification-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
}

.notification-button:active:not(:disabled) {
    transform: translateY(0);
}

/* Variantes de estilo predefinidas */
.notification-button.secundario {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.notification-button.exito {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.notification-button.peligro {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

/* MEDIA QUERIES PARA PANTALLAS PEQUEÑAS */
@media (max-width: 350px) {
    .notification-container {
        right: 10px;
        top: 35px;
        left: 10px; /* Ocupa todo el ancho disponible */
    }
    
    .notification {
        width: auto; /* Ancho automático */
        max-width: none; /* Remueve la restricción anterior */
        padding: 0px 5px;
        gap: 10px;
        max-height: 100px;
    }
    
    .notification-img {
        width: 50px;
        height: 50px;
    }
    
    .notification-text1 {
        font-size: 12px;
    }
    
    .notification-text2 {
        font-size: 11px;
    }
    
    .notification-text3 {
        font-size: 9px;
    }
    
    .notification-close {
        font-size: 16px;
    }
}

@media (max-width: 300px) {
    .notification-container {
        right: 5px;
        left: 5px;
        top: 35px;
    }
    
    .notification {
        padding: 0px 8px;
        gap: 8px;
        max-height: 90px;
        border-left-width: 4px; /* Borde más delgado */
    }
    
    .notification-img {
        width: 45px;
        height: 45px;
    }
    
    .notification-text1 {
        font-size: 11px;
    }
    
    .notification-text2 {
        font-size: 10px;
    }
    
    .notification-text3 {
        font-size: 8px;
    }
    
    .notification-text {
        font-size: 12px;
        line-height: 1.3;
    }
}


/* Botón "Cerrar todas" */
.close-all-btn {
    position: absolute;
    top: 2px;
    right: 3px;
    z-index: 9999999999;
    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
    color: white;
    border: none;
    width: 138px;
    padding: 8px 16px;
    border-radius: 11px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
    transition: all 0.3s ease;
}

.close-all-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 107, 107, 0.6);
}

/* Scroll personalizado (ocultar barras pero permitir rueda) */
.notification-container.multiple-notifications::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

.notification-container.multiple-notifications {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

/* CONTENEDOR DE ETIQUETAS */
.etiquetas-container {
    position: fixed;
    z-index: 10000;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    pointer-events: none;
}

/* POSICIONES */
.etiqueta-top { top: 41px; left: 50%; transform: translateX(-50%); }
.etiqueta-bottom { bottom: 20px; left: 50%; transform: translateX(-50%); }
.etiqueta-left { left: 20px; top: 50%; transform: translateY(-50%); }
.etiqueta-right { right: 20px; top: 50%; transform: translateY(-50%); }
.etiqueta-center { 
    bottom: 20px; 
    left: 50%;
    transform: translateX(-50%);
}

/* ESTILO DE ETIQUETA MINIMALISTA */
.etiqueta {
    background: rgba(0, 0, 0, 0.8);
    color: white;
    position: fixed;
    padding: 8px 16px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    max-width: 19px;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 500;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    pointer-events: all;
    cursor: pointer;
    transition: all 1.0s ease;
}

.etiqueta.visible {
    opacity: 1;
    max-width: 678px;
}

.etiqueta:hover {
    border: 1px solid red;
    background: rgba(0, 0, 0, 0.175);
}

/* IMAGEN DEL TAMAÑO DE EMOJI */
.etiqueta-img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    border-radius: 50%;
}

/* TEXTO DE UNA LÍNEA */
.etiqueta-texto {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 273px;
}

/* NUEVOS ESTILOS PARA PARÁMETRO DIALOGO */

/* Diálogo en posición ARRIBA */
.notification.dialogo-arriba {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    width: 600px !important;
    max-height: 70vh !important;
    z-index: 10000;
}

.notification.dialogo-arriba.visible {
    transform: translateX(-50%) translateY(0);
}

.notification.dialogo-arriba.hiding {
    transform: translateX(-50%) translateY(-100%);
}

/* Diálogo en posición ABAJO */
.notification.dialogo-abajo {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(100%);
    width: 600px !important;
    max-height: 70vh !important;
    z-index: 10000;
}

.notification.dialogo-abajo.visible {
    transform: translateX(-50%) translateY(0);
}

.notification.dialogo-abajo.hiding {
    transform: translateX(-50%) translateY(100%);
}

/* Diálogo en posición IZQUIERDA */
.notification.dialogo-izquierda {
    position: fixed;
    top: 20px;
    left: 20px;
    transform: translateX(-100%);
    width: 500px !important;
    max-height: 80vh !important;
    z-index: 10000;
}

.notification.dialogo-izquierda.visible {
    transform: translateX(0);
}

.notification.dialogo-izquierda.hiding {
    transform: translateX(-100%);
}

/* Diálogo en posición CENTRO */
.notification.dialogo-centro {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    width: 600px !important;
    max-height: 80vh !important;
    z-index: 10000;
    opacity: 0;
}

.notification.dialogo-centro.visible {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
}

.notification.dialogo-centro.hiding {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
}

/* Estilos para imágenes más grandes en diálogos */
.notification.dialogo-arriba .notification-img,
.notification.dialogo-abajo .notification-img,
.notification.dialogo-izquierda .notification-img,
.notification.dialogo-centro .notification-img {
    width: 140px !important;
    height: 140px !important;
    object-fit: cover !important;
    border-radius: 8px !important;
}

/* Textos más grandes para diálogos */
.notification.dialogo-arriba .notification-text1,
.notification.dialogo-abajo .notification-text1,
.notification.dialogo-izquierda .notification-text1,
.notification.dialogo-centro .notification-text1 {
    font-size: 18px !important;
    font-weight: bold;
}

.notification.dialogo-arriba .notification-text2,
.notification.dialogo-abajo .notification-text2,
.notification.dialogo-izquierda .notification-text2,
.notification.dialogo-centro .notification-text2 {
    font-size: 16px !important;
}

.notification.dialogo-arriba .notification-text3,
.notification.dialogo-abajo .notification-text3,
.notification.dialogo-izquierda .notification-text3,
.notification.dialogo-centro .notification-text3 {
    font-size: 14px !important;
}

/* Indicador visual para notificaciones infinitas */
.notification.infinite {
    border-left-color: #ff6b6b !important;
    box-shadow: 0 0 15px rgba(255, 107, 107, 0.3);
}

.notification.infinite::after {
    content: "∞";
    position: absolute;
    top: 5px;
    right: 25px;
    color: #ff6b6b;
    font-size: 12px;
    font-weight: bold;
}
/* === INPUT GENERAL PARA NOTIFICACIONES === */
.Speed_input {
width: 97%;
    padding: 8px 10px;
    margin-top: 1px;
    height: 11px;
    font-size: 15px;
    color: #c5c5c5;
    border: 2px solid #f00;
    border-radius: 6px;
    background: rgb(30 30 30 / 69%);
    outline: none;
    transition: all 0.7s ease;
}

/* Hover */
.notification-input:hover {
    border-color: #999;
}

/* Focus */
.notification-input:focus {
    border-color: #4a90e2;
    background: #fff;
    box-shadow: 0 0 4px rgba(74,144,226,0.5);
}

/* Password modo oscuro (si usas tema oscuro) */
.notification.dark .notification-input {
    background: rgba(0,0,0,0.3);
    color: #fff;
    border-color: #666;
}
.notification-emoji {
    font-size: 70px;     /* Tamaño como PNG grande */
    line-height: 1;
    margin-right: 10px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
.notification-html {
    width: 100%;
    margin-top: 6px;
}

.notification-svg {
    display: flex;
    align-items: center;
    margin-right: 10px;
}
.sp-loader {
    animation: spin 1s linear infinite;
}
@keyframes spin {
    100% { transform: rotate(360deg); }
}
.notification-emoji {
    font-size: 65px;
    margin-right: 0px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
  `;
  document.head.appendChild(style);
}

// ---- ICONOS SISTEMA (SVG + PNG BASE64) ----
const ICONOS_SP = {
    pregunta: `
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#3FA9F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 0 1 5.91.75c0 2.25-3 2.25-3 4"/>
            <line x1="12" y1="17" x2="12" y2="17"/>
        </svg>
    `,
    error: `
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FF4A4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
    `,
    aviso: `
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FFC107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12" y2="17"/>
        </svg>
    `,
    loader: `
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#3FA9F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sp-loader">
            <circle cx="12" cy="12" r="10" opacity=".3"/>
            <path d="M12 2a10 10 0 0 1 10 10"/>
        </svg>
    `,
    predeterminado: `data:image/png;base64,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`
};



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


// ===== SISTEMA DE REGISTRO DE NOTIFICACIONES POR ID =====
const NOTIFICATION_REGISTRY = new Map(); // Map<id, notificationElement>

// Función para registrar notificación
function registrarNotificacion(id, elemento, config) {
    NOTIFICATION_REGISTRY.set(id, {
        elemento: elemento,
        config: config,
        creada: Date.now()
    });
    
    console.log(`📝 Notificación registrada: ${id}`, elemento);
}

// Función para obtener notificación por ID
function obtenerNotificacion(id) {
    return NOTIFICATION_REGISTRY.get(id);
}

// Función para eliminar registro
function eliminarRegistro(id) {
    NOTIFICATION_REGISTRY.delete(id);
    console.log(`🗑️ Registro eliminado: ${id}`);
}

// Función para buscar y cerrar notificación por ID
function cerrarNotificacionPorId(id) {
    const registro = obtenerNotificacion(id);
    if (!registro) {
        console.warn(`⚠️ No se encontró notificación con ID: ${id}`);
        return false;
    }
    
    window.closeNotification(registro.elemento);
    eliminarRegistro(id);
    return true;
}


function MostrarInfoScreen(config) {

    //Inyecion de css
    injectStyles();

    // Crear contenedor si no existe
    let container = document.getElementById('notificationContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notificationContainer';
        container.className = 'notification-container';
        document.body.appendChild(container);

        // NUEVO: Sistema de scroll con rueda del mouse
        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            container.scrollTop += e.deltaY;
        });
    }
    
    // Procesar parámetros
    let text, text2, text3, img, audio, duration, dialogo;
    
    if (typeof config === 'string') {
        text = config;
    } else {
        text = config.text || '';
        text2 = config.text2 || '';
        text3 = config.text3 || '';
        img = config.img || '';
        audio = config.audio;
        duration = config.duration;
        dialogo = config.dialogo; // NUEVO PARÁMETRO DIÁLOGO
    }
    
    duration = duration || 4000;
    
    //detectar modo etiqueta
    const esEtiqueta = config.etiqueta && typeof config.etiqueta === 'string';
    
    if (esEtiqueta) {
        return mostrarEtiqueta(config); // si no existe simplemente continua
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    
    // NUEVO: APLICAR CLASE DE DIÁLOGO SEGÚN POSICIÓN
    if (dialogo && typeof dialogo === 'string') {
        const posicionDialogo = dialogo.toLowerCase();
        notification.classList.add(`dialogo-${posicionDialogo}`);
    }
    
    if (img) {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.className = 'notification-img';
        imgElement.onerror = function() { this.style.display = 'none'; };
        notification.appendChild(imgElement);
    }
    

    // NUEVO: Soporte para emoji grande
    if (config.emoji) {
        const emojiElement = document.createElement('div');
        emojiElement.className = 'notification-emoji';
        emojiElement.textContent = config.emoji;
    
        notification.appendChild(emojiElement);
    }

    // ---- ICONO SISTEMA ----
    let iconKey = (config.icono || "").trim().toLowerCase();
    
    if (iconKey && ICONOS_SP[iconKey]) {
        if (iconKey === "predeterminado") {
            const imgElement = document.createElement("img");
            imgElement.src = ICONOS_SP[iconKey];
            imgElement.className = "notification-img";
            notification.appendChild(imgElement);
        } else {
            const svgWrapper = document.createElement("div");
            svgWrapper.className = "notification-svg";
            svgWrapper.innerHTML = ICONOS_SP[iconKey];
            notification.appendChild(svgWrapper);
        }
    }



    const contentElement = document.createElement('div');
    contentElement.className = 'notification-content';

    [text, text2, text3].forEach((line, index) => {
        if (line) {
            const p = document.createElement('p');
            p.className = `notification-text${index + 1}`; // text1, text2, text3
            p.textContent = line;
            contentElement.appendChild(p);
        }
    });

    notification.appendChild(contentElement);
    
    const closeButton = document.createElement('button');
    closeButton.className = 'notification-close';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => closeNotification(notification));
    notification.appendChild(closeButton);
    
    container.appendChild(notification);
    
    void notification.offsetWidth;
    notification.classList.add('visible');
    
    // NUEVO: Input de entrada o clave
    if (config.input && typeof config.input === "object") {
    
        const inputConfig = config.input;
        const input = document.createElement("input");
        input.className = "Speed_input";
       //input.className = "notification-input";
    
        // Tipo de input
        input.type = 
            inputConfig.tipo === "clave" ? "password" : "text";
    
        // Placeholder
        if (inputConfig.placeholder)
            input.placeholder = inputConfig.placeholder;
    
        // Valor inicial
        if (inputConfig.valorInicial)
            input.value = inputConfig.valorInicial;
    
        // ID opcional para poder leerlo desde afuera
        if (inputConfig.id)
            input.id = inputConfig.id;
    
    
        contentElement.appendChild(input);
    }

    // NUEVO: AGREGAR CLASE INFINITE SI DURATION ES "infinito"
    if (duration === "infinito" || duration === "infinity") {
        notification.classList.add('infinite');
    }
    
    // NUEVO: Sistema de botones
    if (config.botones && Array.isArray(config.botones)) {
        const botonesContainer = document.createElement('div');
        botonesContainer.className = 'notification-buttons';
        
        config.botones.forEach(botonConfig => {
            const boton = document.createElement('button');
            boton.className = 'notification-button';
            boton.textContent = botonConfig.texto || 'Botón';
            
            // Estilos personalizados para el botón
            if (botonConfig.estilos) {
                Object.assign(boton.style, botonConfig.estilos);
            }
            
            // Manejar el click - soporte para promesas y métodos
            boton.addEventListener('click', async (e) => {
                e.stopPropagation();
                
                try {
                    // Deshabilitar botón mientras se ejecuta
                    const textoOriginal = boton.textContent;
                    boton.disabled = true;
                    boton.textContent = botonConfig.cargando || 'Ejecutando...';
                    
                    // Ejecutar la acción
                    if (typeof botonConfig.accion === 'function') {
                        await botonConfig.accion();
                    } else if (typeof botonConfig.accion === 'string') {
                        // Ejecutar método global (ej: "this.ver_mas()" o "window.miFuncion()")
                        await ejecutarMetodoGlobal(botonConfig.accion);
                    }
                    
                    // Restaurar botón
                    boton.textContent = textoOriginal;
                    boton.disabled = false;
                    
                    // Cerrar notificación si está configurado
                    if (botonConfig.cerrarAlCompletar) {
                        closeNotification(notification);
                    }
                    
                } catch (error) {
                    console.error('Error ejecutando acción del botón:', error);
                    boton.textContent = textoOriginal;
                    boton.disabled = false;
                    
                    if (botonConfig.onError) {
                        botonConfig.onError(error);
                    }
                }
            });
            
            botonesContainer.appendChild(boton);
        });
        
        contentElement.appendChild(botonesContainer);



    }

    if (config.html) {
        const htmlWrapper = document.createElement('div');
        htmlWrapper.className = 'notification-html';
        htmlWrapper.innerHTML = config.html;
        contentElement.appendChild(htmlWrapper);
    }
    
    // NUEVO: Control de límite de notificaciones
    const notificaciones = container.querySelectorAll('.notification');
    const maxNotificaciones = 3;
    
    if (notificaciones.length > maxNotificaciones) {
        container.classList.add('multiple-notifications');
        
        // Mostrar botón "Cerrar todas" si no existe - DENTRO del contenedor
        let closeAllBtn = document.getElementById('closeAllNotifications');
        if (!closeAllBtn) {
            closeAllBtn = document.createElement('button');
            closeAllBtn.id = 'closeAllNotifications';
            closeAllBtn.className = 'close-all-btn';
            closeAllBtn.textContent = `Cerrar todas (${notificaciones.length})`;
            closeAllBtn.onclick = () => {
                const allNotifications = container.querySelectorAll('.notification');
                allNotifications.forEach(notif => {
                    notif.classList.remove('visible');
                    notif.classList.add('hiding');
                    setTimeout(() => {
                        if (notif.parentNode) notif.parentNode.removeChild(notif);
                    }, 300);
                });
                closeAllBtn.remove();
                container.classList.remove('multiple-notifications');
            };
            //  CAMBIO: Agregar DENTRO del container, al principio
            container.insertBefore(closeAllBtn, container.firstChild);
        } else {
            closeAllBtn.textContent = `Cerrar todas (${notificaciones.length})`;
        }
    }
    
    void notification.offsetWidth;
    notification.classList.add('visible');

    if (audio) {
        const audioElement = new Audio(audio);
        audioElement.play().catch(e => console.log('No se pudo reproducir el audio:', e));
    }
    
    // MODIFICADO: NO CREAR TIMEOUT SI DURATION ES "infinito"
    let timeoutId;
    if (duration !== "infinito" && duration !== "infinity") {
        timeoutId = setTimeout(() => closeNotification(notification), duration);
    }
    
    notification.addEventListener('mouseenter', () => {
        if (timeoutId) clearTimeout(timeoutId);
    });
    
    notification.addEventListener('mouseleave', () => {
        if (duration !== "infinito" && duration !== "infinity") {
            timeoutId = setTimeout(() => closeNotification(notification), duration);
        }
    });
    
        // ===== NUEVO: MANEJO DE FONDOS =====
    let backdropElement = null;
    
    // Crear fondo si se especifica
    if (config.fondo && Array.isArray(config.fondo)) {
        backdropElement = crearFondo(config.fondo);
        
        // Vincular cierre del fondo con la notificación
        notification.dataset.backdropId = backdropElement.id;
        
        // Cuando se cierre la notificación, cerrar el fondo también
        const closeWithBackdrop = () => {
            if (backdropElement) {
                cerrarFondo(backdropElement);
            }
            closeNotification(notification);
        };
        
        // Reemplazar el closeButton original
        closeButton.addEventListener('click', closeWithBackdrop);
        
        // También cerrar con el backdrop si se hace click fuera
        if (config.cerrarConClickFondo) {
            backdropElement.addEventListener('click', closeWithBackdrop);
        }
    }

        // ===== NUEVO: SISTEMA DE ID/TAREAS =====
    let tieneTareaID = false;
    let notificationId = null;
    
    // Procesar tareaID si existe
    if (config.tareaID && Array.isArray(config.tareaID)) {
        config.tareaID.forEach(tarea => {
            if (tarea.id && tarea.operacion) {
                tieneTareaID = true;
                notificationId = tarea.id;
                
                // OPERACIÓN: CREAR (registrar)
                if (tarea.operacion.crear === true) {
                    // Si no tiene duración definida o es "infinito", hacerla persistente
                    if (!config.duration || config.duration === "infinito" || config.duration === "infinity") {
                        notification.classList.add('persistente');
                        notification.dataset.taskId = tarea.id;
                        
                        // Registrar en el sistema global
                        registrarNotificacion(tarea.id, notification, {
                            ...config,
                            duracionOriginal: config.duration
                        });
                        
                        console.log(`🆔 Notificación persistente creada: ${tarea.id}`);
                    }
                }
                
                // OPERACIÓN: CERRAR
                if (tarea.operacion.crear === false && tarea.operacion.cerrar === true) {
                    // Buscar y cerrar notificación existente
                    setTimeout(() => {
                        const cerrada = cerrarNotificacionPorId(tarea.id);
                        
                        // Si se cerró exitosamente y hay función para llamar
                        if (cerrada && tarea.operacion.llamar && typeof tarea.operacion.llamar === 'function') {
                            try {
                                tarea.operacion.llamar();
                            } catch (error) {
                                console.error('Error ejecutando función de llamada:', error);
                            }
                        }
                    }, 100); // Pequeño delay para asegurar que todo esté listo
                    
                    // No continuar creando nueva notificación si solo es para cerrar
                    if (!tarea.operacion.llamar) {
                        return null;
                    }
                }
                
                // OPERACIÓN: SOLO LLAMAR (sin cerrar)
                if (tarea.operacion.crear === false && tarea.operacion.cerrar === false && tarea.operacion.llamar) {
                    // Buscar notificación existente
                    const registro = obtenerNotificacion(tarea.id);
                    if (registro && typeof tarea.operacion.llamar === 'function') {
                        try {
                            tarea.operacion.llamar();
                        } catch (error) {
                            console.error('Error ejecutando función de llamada:', error);
                        }
                    }
                    
                    return registro ? registro.elemento : null;
                }
            }
        });
    }
    
    // Si tiene ID pero no se especificó duración, hacerla infinita
    if (tieneTareaID && !config.duration) {
        notification.classList.add('infinite', 'persistente');
    }

    // FUNCIÓN PARA MODO ETIQUETA
    function mostrarEtiqueta(config) {
        const contenedorEtiquetas = document.getElementById('etiquetasContainer') || (() => {
            const container = document.createElement('div');
            container.id = 'etiquetasContainer';
            container.className = 'etiquetas-container';
            document.body.appendChild(container);
            return container;
        })();
    
        const etiqueta = document.createElement('div');
        etiqueta.className = `etiqueta etiqueta-${config.etiqueta}`;
        
        // CONTENIDO MÍNIMO: solo img + text
        if (config.img) {
            const img = document.createElement('img');
            img.src = config.img;
            img.className = 'etiqueta-img';
            img.onerror = () => img.remove();
            etiqueta.appendChild(img);
        }
        
        if (config.text) {
            const texto = document.createElement('span');
            texto.className = 'etiqueta-texto';
            texto.textContent = config.text;
            etiqueta.appendChild(texto);
        }
        
        contenedorEtiquetas.appendChild(etiqueta);
        
        // ANIMACIÓN DE ENTRADA
        setTimeout(() => etiqueta.classList.add('visible'), 400);
        
        // DURACIÓN (más corta por defecto en etiquetas)
        const duracion = config.duration || 5000;
        
        const timeout = setTimeout(() => {
            etiqueta.classList.remove('visible');
            setTimeout(() => etiqueta.remove(), 300);
        }, duracion);
        
        // AUDIO (si se especifica)
        if (config.audio) {
            const audio = new Audio(config.audio);
            audio.play().catch(() => {});
        }
        
        // INTERACCIÓN: hover pausa, click cierra
        etiqueta.addEventListener('mouseenter', () => clearTimeout(timeout));
        let timeoutId = setTimeout(() => {
            etiqueta.classList.remove('visible');
            setTimeout(() => etiqueta.remove(), 300);
        }, duracion);
        
        etiqueta.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(() => {
                etiqueta.classList.remove('visible');
                setTimeout(() => etiqueta.remove(), 300);
            }, 1000);
        });
        
        etiqueta.addEventListener('click', () => {
            clearTimeout(timeout);
            etiqueta.classList.remove('visible');
            setTimeout(() => etiqueta.remove(), 300);
        });
        
        return etiqueta;
    }

    function closeNotification(notificationEl) {
        // Verificar si tiene fondo vinculado
        const backdropId = notificationEl.dataset.backdropId;
        if (backdropId) {
            const backdrop = document.getElementById(backdropId);
            if (backdrop) {
                cerrarFondo(backdrop);
            }
        }

        // Verificar si tiene ID registrado y limpiarlo
        const taskId = notificationEl.dataset.taskId;
        if (taskId) {
            eliminarRegistro(taskId);
        }

        notificationEl.classList.remove('visible');
        notificationEl.classList.add('hiding');
        setTimeout(() => {
            if (notificationEl.parentNode) {
                notificationEl.parentNode.removeChild(notificationEl);
                
                // Actualizar contador o remover botón "Cerrar todas"
                const notificacionesRestantes = container.querySelectorAll('.notification').length;
                const closeAllBtn = document.getElementById('closeAllNotifications');
                
                if (closeAllBtn) {
                    if (notificacionesRestantes <= maxNotificaciones) {
                        closeAllBtn.remove();
                        container.classList.remove('multiple-notifications');
                    } else {
                        closeAllBtn.textContent = `Cerrar todas (${notificacionesRestantes})`;
                    }
                }
            }
        }, 500);
    }
    window.closeNotification = closeNotification; // Exponer globalmente si es necesario
    return notification;
}


// Función helper para ejecutar métodos globales
function ejecutarMetodoGlobal(metodoString) {
    return new Promise((resolve, reject) => {
        try {
            // Extraer nombre de función y parámetros de forma segura
            const match = metodoString.match(/^([a-zA-Z_$][\w$]*)\((.*)\)$/);
            if (!match) {
                throw new Error(`Formato de método inválido: ${metodoString}`);
            }
            
            const funcName = match[1];
            const argsStr = match[2];
            
            // Buscar función en contexto global de forma segura
            const globalFunc = window[funcName];
            if (typeof globalFunc !== 'function') {
                throw new Error(`Función ${funcName} no encontrada`);
            }
            
            // Parsear argumentos de forma segura
            let args = [];
            if (argsStr.trim()) {
                try {
                    args = JSON.parse(`[${argsStr}]`);
                } catch {
                    args = [argsStr]; // Fallback a string simple
                }
            }
            
            const resultado = globalFunc(...args);
            
            if (resultado && typeof resultado.then === 'function') {
                resultado.then(resolve).catch(reject);
            } else {
                resolve(resultado);
            }
        } catch (error) {
            reject(error);
        }
    });
}


/**
 * API Pública para manejar notificaciones por ID
 */
window.Notificaciones = {
    /**
     * Crear notificación persistente
     */
    crear: function(id, config) {
        return MostrarInfoScreen({
            ...config,
            tareaID: [{ id: id, operacion: { crear: true } }],
            duration: config.duration || "infinito"
        });
    },
    
    /**
     * Cerrar notificación por ID
     */
    cerrar: function(id, callback) {
        const registro = obtenerNotificacion(id);
        if (registro) {
            closeNotification(registro.elemento);
            if (callback) callback();
            return true;
        }
        return false;
    },
    
    /**
     * Actualizar contenido de notificación existente
     */
    actualizar: function(id, nuevoContenido) {
        const registro = obtenerNotificacion(id);
        if (!registro || !registro.elemento) return false;
        
        const contentEl = registro.elemento.querySelector('.notification-content');
        if (contentEl && nuevoContenido.text) {
            const textEl = contentEl.querySelector('.notification-text1');
            if (textEl) textEl.textContent = nuevoContenido.text;
        }
        
        return true;
    },
    
    /**
     * Obtener todas las notificaciones activas
     */
    listar: function() {
        return Array.from(NOTIFICATION_REGISTRY.keys());
    },
    
    /**
     * Cerrar todas las notificaciones persistentes
     */
    cerrarTodas: function() {
        NOTIFICATION_REGISTRY.forEach((registro, id) => {
            closeNotification(registro.elemento);
        });
        NOTIFICATION_REGISTRY.clear();
    }
};

/**
 * Muestra una notificación en pantalla con imagen, audio y texto
 * @param {string|Object} config - Texto del mensaje u objeto de configuración
 * @param {string} [config.text] - Texto de la notificación
 * @param {string} [config.img] - URL de la imagen a mostrar
 * @param {string} [config.audio] - URL del archivo de audio a reproducir
 * @param {number} [config.duration=5000] - Duración en milisegundos que se mostrará la notificación
 * @example
// 📄 Documentación - MostrarInfoScreen.js

// 🚀 Introducción
// Librería de notificaciones versátil para aplicaciones web con soporte para notificaciones estándar, etiquetas minimalistas, botones interactivos y gestión inteligente de múltiples notificaciones.
// 
// 📦 Instalación
// html
// <script src="MostrarInfoScreen.js"></script>
// ⚡ Uso Rápido
// Notificación Básica
// javascript
// // Texto simple
// MostrarInfoScreen("¡Hola Mundo!");
// 
// // Con configuración
// MostrarInfoScreen({
//     text: "Operación exitosa",
//     duration: 3000
// });
// Notificación con Imagen y Audio
// javascript
// MostrarInfoScreen({
//     img: "./recursos/icono.png",
//     audio: "./recursos/sonido.mp3",
//     text: "Descarga completada",
//     text2: "El archivo se guardó correctamente",
//     duration: 5000
// });
// 🎯 Modos de Notificación
// 1. 🔔 Notificación Estándar
// Notificaciones completas con múltiples líneas de texto, imágenes y botones.
// 
// javascript
// MostrarInfoScreen({
//     img: "./recursos/alerta.png",
//     text: "Confirmación requerida",
//     text2: "¿Estás seguro de eliminar este elemento?",
//     text3: "Esta acción no se puede deshacer",
//     duration: 10000,
//     botones: [
//         {
//             texto: "Cancelar",
//             accion: () => console.log("Cancelado"),
//             estilos: { background: "#6c757d" }
//         },
//         {
//             texto: "Eliminar",
//             accion: async () => {
//                 await eliminarElemento();
//                 MostrarInfoScreen("Elemento eliminado");
//             },
//             cargando: "Eliminando...",
//             cerrarAlCompletar: true,
//             estilos: { background: "#dc3545" }
//         }
//     ]
// });
// 2. 🏷️ Modo Etiqueta (Minimalista)
// Notificaciones compactas de una sola línea, perfectas para mensajes rápidos.
// 
// javascript
// // Etiqueta en centro (predeterminado)
// MostrarInfoScreen({
//     etiqueta: "center",
//     img: "✅",
//     text: "Guardado exitoso",
//     duration: 2000
// });
// 
// // Diferentes posiciones
// MostrarInfoScreen({ etiqueta: "top", text: "Conectado" });
// MostrarInfoScreen({ etiqueta: "bottom", text: "Desconectado" });
// MostrarInfoScreen({ etiqueta: "left", text: "Nuevo mensaje" });
// MostrarInfoScreen({ etiqueta: "right", text: "Actualizado" });
// 🎨 Configuración Completa
// Parámetros Principales
// Parámetro	Tipo	Default	Descripción
// text	string	""	Texto principal (línea 1)
// text2	string	""	Texto secundario (línea 2)
// text3	string	""	Texto adicional (línea 3)
// img	string	""	URL de imagen a mostrar
// audio	string	""	URL de audio a reproducir
// duration	number	4000	Duración en milisegundos
// etiqueta	string	-	Posición para modo etiqueta
// botones	array	-	Array de botones configurables
// Configuración de Botones
// javascript
// botones: [
//     {
//         texto: "Texto del botón",        // Required
//         accion: función o string,        // Required
//         cargando: "Texto durante carga", // Opcional
//         cerrarAlCompletar: boolean,      // Opcional
//         estilos: objeto CSS,             // Opcional
//         onError: función(error)          // Opcional
//     }
// ]
// 🔧 Funciones Avanzadas
// Ejecutar Métodos Globales
// javascript
// // Ejecutar función global
// MostrarInfoScreen({
//     text: "Ejecutar acción",
//     botones: [{
//         texto: "Ejecutar",
//         accion: "miFuncionGlobal"  // Ejecuta window.miFuncionGlobal()
//     }]
// });
// 
// // Con parámetros
// MostrarInfoScreen({
//     botones: [{
//         texto: "Ejecutar con parámetros",
//         accion: "miFuncionConParametros('parametro')"
//     }]
// });
// Gestión de Múltiples Notificaciones
// Límite automático: Máximo 3 notificaciones visibles
// 
// Scroll inteligente: Scroll con rueda del mouse cuando hay más de 3
// 
// Cerrar todas: Botón automático para limpiar múltiples notificaciones
// 
// 🎨 Personalización CSS
// Clases Principales
// css
// .notification-container       /* Contenedor principal */
// .notification                 /* Notificación individual */
// .notification.visible         /* Estado visible */
// .notification.hiding          /* Animación de salida */
// .etiqueta                     /* Modo etiqueta */
// .notification-buttons         /* Contenedor de botones */
// .notification-button          /* Botones individuales */
// .close-all-btn               /* Botón "Cerrar todas" */

//   ⚡ Ejemplos de Uso en Contexto
//   Sistema de Descargas
//   javascript
//   function descargaCompletada(archivo) {
//       MostrarInfoScreen({
//           img: "./icons/descarga.png",
//           audio: "./sounds/exito.mp3",
//           text: `Descarga completada: ${archivo}`,
//           botones: [{
//               texto: "Abrir carpeta",
//               accion: () => abrirCarpetaDescargas(),
//               cerrarAlCompletar: true
//           }],
//           duration: 5000
//       });
//   }
//   Sistema de Login
//   javascript
//   function usuarioConectado(nombre) {
//       MostrarInfoScreen({
//           etiqueta: "top",
//           img: "👤",
//           text: `Bienvenido ${nombre}`,
//           duration: 3000
//       });
//   }
//   Validación de Formularios
//   javascript
//   function mostrarError(mensaje) {
//       MostrarInfoScreen({
//           etiqueta: "bottom",
//           img: "❌",
//           text: mensaje,
//           duration: 4000
//       });
//   }
//   🐛 Solución de Problemas
//   Problemas Comunes
//   Imagen no carga: Usa onerror en tu HTML o maneja errores en JavaScript
//   
//   Audio no reproduce: Verifica rutas y permisos del navegador
//   
//   Botones no funcionan: Revisa que accion sea una función o string válido
//   
//   Debugging
//   javascript
//   // Verificar que la función esté cargada
//   console.log(typeof MostrarInfoScreen); // debería ser "function"
//   
//   // Probar notificación simple
//   MostrarInfoScreen("Test de funcionamiento");
