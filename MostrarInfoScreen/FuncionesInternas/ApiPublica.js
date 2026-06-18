import { NOTIFICATION_REGISTRY, registrarNotificacion, obtenerNotificacion, eliminarRegistro, cerrarNotificacionPorId } from './FuncionRegistrosID.js';
/**
 * API Pública para manejar notificaciones por ID
 */
const Notificaciones = {
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

export { Notificaciones }