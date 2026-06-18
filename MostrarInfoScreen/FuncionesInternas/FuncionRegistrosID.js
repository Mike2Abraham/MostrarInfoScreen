import { Notificaciones } from './ApiPublica.js'


// ===== SISTEMA DE REGISTRO DE NOTIFICACIONES POR ID =====
const NOTIFICATION_REGISTRY = new Map(); // Map<id, notificationElement>

// Función para registrar notificación
function registrarNotificacion(id, elemento, config) {
    NOTIFICATION_REGISTRY.set(id, {
        elemento: elemento,
        config: config,
        creada: Date.now()
    });
    
    console.log(` Notificación registrada: ${id}`, elemento);
}

// Función para obtener notificación por ID
function obtenerNotificacion(id) {
    return NOTIFICATION_REGISTRY.get(id);
}

// Función para eliminar registro
function eliminarRegistro(id) {
    NOTIFICATION_REGISTRY.delete(id);
    console.log(` Registro eliminado: ${id}`);
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

export { NOTIFICATION_REGISTRY, registrarNotificacion, obtenerNotificacion, eliminarRegistro, cerrarNotificacionPorId };