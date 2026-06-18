import { injectNotificationStyles } from './Estilos';

import { } from './VariablesSVG';

import { } from './VariablesNormalizadorBilenguaje';

import { } from './FuncionesInternas/Config_Fondo';
import { } from './FuncionesInternas/NormalizadorLenguaje';
import { } from './VariablesSVG';

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

// ============================================
// FUNCIÓN ARRASTRABLE CON PESO
// ============================================
function hacerArrastrable(elemento, peso = 5) {
    if (!elemento) return;
    
    // Normalizar peso (0-10)
    let pesoNormalizado = parseFloat(peso);
    
    // Si no es número válido o es NaN, usar 5 (neutral)
    if (isNaN(pesoNormalizado)) {
        pesoNormalizado = 5;
    }
    
    // Limitar entre 0 y 10
    pesoNormalizado = Math.min(10, Math.max(0, pesoNormalizado));
    
    // Si es decimal raro (ej: 2.2) redondear al entero más cercano
    if (pesoNormalizado % 1 !== 0) {
        pesoNormalizado = Math.round(pesoNormalizado);
    }
    
    // Calcular factor de inercia (0 = muy liviano, 10 = muy pesado)
    // La fórmula: cuanto más pesado, más difícil mover
    const factorInercia = pesoNormalizado / 10; // 0 a 1
    const resistencia = 0.3 + (factorInercia * 0.6); // 0.3 (liviano) a 0.9 (pesado)
    
    let posX = 0, posY = 0;
    let offsetX = 0, offsetY = 0;
    let mouseX = 0, mouseY = 0;
    let dragging = false;
    
    // Estilo para indicar que es arrastrable (opcional)
    elemento.style.cursor = 'grab';
    elemento.style.userSelect = 'none';
    
    const onMouseMove = (e) => {
        if (!dragging) return;
        e.preventDefault();
        
        const nextX = e.clientX - offsetX;
        const nextY = e.clientY - offsetY;
        const dx = (nextX - posX) * (1 - resistencia);
        const dy = (nextY - posY) * (1 - resistencia);
        
        mouseX = e.clientX;
        mouseY = e.clientY;
        posX += dx;
        posY += dy;
        
        // Limitar dentro de la ventana del navegador
        const rect = elemento.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;
        
        posX = Math.min(maxX, Math.max(0, posX));
        posY = Math.min(maxY, Math.max(0, posY));
        
        elemento.style.position = 'fixed';
        elemento.style.left = `${posX}px`;
        elemento.style.top = `${posY}px`;
        elemento.style.right = 'auto';
        elemento.style.bottom = 'auto';
        elemento.style.margin = '0';
    };
    
    const onMouseUp = () => {
        dragging = false;
        elemento.style.cursor = 'grab';
        document.body.style.userSelect = '';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
    
    const onMouseDown = (e) => {
        // Solo arrastrar con click izquierdo
        if (e.button !== 0) return;
        
        // No arrastrar si se hizo clic en un botón, input, o close button
        const target = e.target;
        if (target.closest('.notification-button') || 
            target.closest('.notification-close') || 
            target.closest('input') || 
            target.closest('button')) {
            return;
        }
        
        e.preventDefault();
        dragging = true;
        
        const rect = elemento.getBoundingClientRect();
        posX = rect.left;
        posY = rect.top;
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        elemento.style.position = 'fixed';
        elemento.style.left = `${posX}px`;
        elemento.style.top = `${posY}px`;
        elemento.style.right = 'auto';
        elemento.style.bottom = 'auto';
        elemento.style.margin = '0';
        elemento.style.transform = 'none';
        elemento.style.cursor = 'grabbing';
        elemento.style.transition = 'none';
        
        // Evitar selección de texto mientras arrastra
        document.body.style.userSelect = 'none';
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    
    elemento.addEventListener('mousedown', onMouseDown);
    
    // Devolver función para deshabilitar arrastre si es necesario
    return () => {
        elemento.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
}


function MostrarInfoScreen(config) {

    //Inyecion de css
    injectNotificationStyles();

    //NORMALIZAR TODO (español/inglés)
    config = normalizarConfig(config);

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
    
    // ===== NUEVO: HACER ARRASTRABLE =====
    if (config.arrastrable !== undefined && config.arrastrable !== false) {
        let peso = 5; // valor por defecto (neutral)
        
        if (typeof config.arrastrable === 'number') {
            peso = config.arrastrable;
        } else if (typeof config.arrastrable === 'string') {
            peso = parseFloat(config.arrastrable);
        }
        
        // Normalizar peso (0-10, enteros)
        let pesoNormalizado = isNaN(peso) ? 5 : Math.min(10, Math.max(0, peso));
        if (pesoNormalizado % 1 !== 0) pesoNormalizado = Math.round(pesoNormalizado);
        
        hacerArrastrable(notification, pesoNormalizado);
        
        // Agregar clase visual opcional para indicar que es arrastrable
        notification.classList.add('arrastrable');
    }


    // NUEVO: APLICAR CLASE DE DIÁLOGO SEGÚN POSICIÓN
    //if (dialogo && typeof dialogo === 'string') {
    //    const posicionDialogo = dialogo.toLowerCase();
    //    notification.classList.add(`dialogo-${posicionDialogo}`);
    //}
    
    // ===== DIÁLOGO =====
    // dialogo puede ser: string ("center", "bottom", etc.) o objeto { posicion: "center", tamaño: {...} }
    let posicionDialogo = null;
    
    if (dialogo) {
        if (typeof dialogo === 'string') {
            posicionDialogo = dialogo; // ya viene normalizado a inglés por el normalizador
        } else if (typeof dialogo === 'object' && dialogo.posicion) {
            posicionDialogo = dialogo.posicion;
        }
    }
    
    if (posicionDialogo && posicionDialogo !== 'none') {
        notification.classList.add('dialogo');
        notification.classList.add(posicionDialogo);
        
        if (typeof dialogo === 'object' && dialogo.tamaño) {
            if (dialogo.tamaño.width) notification.style.width = dialogo.tamaño.width;
            if (dialogo.tamaño.maxHeight) notification.style.maxHeight = dialogo.tamaño.maxHeight;
        }
    }


    if (img) {
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.className = 'notification-img';
        imgElement.onerror = function() { this.style.display = 'none'; };
        notification.appendChild(imgElement);
    }

    // NUEVO: SISTEMA DE PRIORIDAD
    // Obtener prioridad (default 0, rango -9999 a 9999)
    let prioridad = 0;
    if (config.prioridad !== undefined) {
        prioridad = parseInt(config.prioridad);
        if (isNaN(prioridad)) prioridad = 0;
        // Limitar rango
        prioridad = Math.min(9999, Math.max(-9999, prioridad));
    }
    
    // Guardar prioridad en el elemento para ordenamiento
    notification.dataset.prioridad = prioridad;
    
    // Reordenar notificaciones en el contenedor según prioridad (mayor a menor)
    function reordenarPorPrioridad(container) {
        const notificaciones = Array.from(container.querySelectorAll('.notification'));
        
        // Ordenar por prioridad descendente (mayor primero)
        notificaciones.sort((a, b) => {
            const prioridadA = parseInt(a.dataset.prioridad) || 0;
            const prioridadB = parseInt(b.dataset.prioridad) || 0;
            return prioridadB - prioridadA;
        });
        
        // Reinsertar en orden
        notificaciones.forEach(notif => {
            container.appendChild(notif);
        });
    }
    
    // Insertar notificación con prioridad
    if (container) {
        const notificacionesExistentes = Array.from(container.querySelectorAll('.notification'));
        
        // Buscar posición según prioridad
        let posicionInsert = 0;
        for (let i = 0; i < notificacionesExistentes.length; i++) {
            const prioridadExistente = parseInt(notificacionesExistentes[i].dataset.prioridad) || 0;
            if (prioridad > prioridadExistente) {
                posicionInsert = i;
                break;
            }
            posicionInsert = notificacionesExistentes.length;
        }
        
        if (posicionInsert === 0) {
            container.insertBefore(notification, container.firstChild);
        } else if (posicionInsert >= notificacionesExistentes.length) {
            container.appendChild(notification);
        } else {
            container.insertBefore(notification, notificacionesExistentes[posicionInsert]);
        }
        
        // Reordenar para asegurar consistencia
        reordenarPorPrioridad(container);
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
    const inputType = inputConfig.tipo || inputConfig.type;
    input.type = inputType === "clave" || inputType === "password" ? "password" : "text";
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

    let audioElement = null;
    if (audio) {
        audioElement = new Audio(audio);
        audioElement.play().catch(e => console.log('No se pudo reproducir el audio:', e));
        notification.audioElement = audioElement;
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
                        
                        console.log(` Notificación persistente creada: ${tarea.id}`);
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
        // Detener audio asociado a esta notificación si existe
        if (notificationEl.audioElement && typeof notificationEl.audioElement.pause === 'function') {
            notificationEl.audioElement.pause();
            notificationEl.audioElement.currentTime = 0;
            delete notificationEl.audioElement;
        }

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
//if (typeof module !== "undefined" && module.exports) {
//  module.exports = { MostrarInfoScreen, ICONOS_SP };
//} else {
//  window.MostrarInfoScreen = MostrarInfoScreen;
//  window.ICONOS_SP = ICONOS_SP;
//}
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
//     img: "",
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

//    Ejemplos de Uso en Contexto
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
//           img: "ruta",
//           text: `Bienvenido ${nombre}`,
//           duration: 3000
//       });
//   }
//   Validación de Formularios
//   javascript
//   function mostrarError(mensaje) {
//       MostrarInfoScreen({
//           etiqueta: "bottom",
//           img: "ruta",
//           text: mensaje,
//           duration: 4000
//       });
//   }
//  

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
