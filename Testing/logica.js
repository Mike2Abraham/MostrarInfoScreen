
// ============================================================
// 2. DEFINIR EJEMPLOS
// ============================================================
const ejemplos = [
    // ===== BÁSICO =====
    {
        id: 'basico-1',
        categoria: 'basico',
        titulo: '🔤 Notificación Simple',
        descripcion: 'La forma más básica de usar la función, solo con texto.',
        codigo: `MostrarInfoScreen("¡Hola Mundo!");`,
        test: () => MostrarInfoScreen("¡Hola Mundo!")
    },
    {
        id: 'basico-2',
        categoria: 'basico',
        titulo: '📝 Múltiples Líneas',
        descripcion: 'Hasta 6 líneas de texto para mensajes más detallados.',
        codigo: `MostrarInfoScreen({
    text: "Título principal",
    text2: "Subtítulo o descripción",
    text3: "Detalles adicionales",
    duration: 5000
});`,
        test: () => MostrarInfoScreen({
            text: "📦 Actualización disponible",
            text2: "Versión 4.0.0 lista para instalar",
            text3: "Nuevas características y mejoras",
            duration: 5000
        })
    },
    {
        id: 'basico-3',
        categoria: 'basico',
        titulo: '⏱️ Duración Personalizada',
        descripcion: 'Controla cuánto tiempo se muestra la notificación.',
        codigo: `MostrarInfoScreen({
    text: "Esta notificación dura 2 segundos",
    duration: 2000
});`,
        test: () => MostrarInfoScreen({
            text: "⏱️ Notificación rápida (2 segundos)",
            duration: 2000
        })
    },

    // ===== ETIQUETA =====
    {
        id: 'etiqueta-1',
        categoria: 'etiqueta',
        titulo: '🏷️ Etiqueta Center',
        descripcion: 'Modo minimalista en el centro de la pantalla.',
        codigo: `MostrarInfoScreen({
    etiqueta: "center",
    text: "¡Guardado exitoso!",
    duration: 3000
});`,
        test: () => MostrarInfoScreen({
            etiqueta: "center",
            text: "✅ ¡Guardado exitoso!",
            duration: 3000
        })
    },
    {
        id: 'etiqueta-2',
        categoria: 'etiqueta',
        titulo: '🏷️ Etiqueta Top',
        descripcion: 'Etiqueta en la parte superior de la pantalla.',
        codigo: `MostrarInfoScreen({
    etiqueta: "top",
    emoji: "🔔",
    text: "Nuevo mensaje recibido",
    duration: 4000
});`,
        test: () => MostrarInfoScreen({
            etiqueta: "top",
            emoji: "🔔",
            text: "Nuevo mensaje recibido",
            duration: 4000
        })
    },
    {
        id: 'etiqueta-3',
        categoria: 'etiqueta',
        titulo: '🏷️ Etiqueta con Emoji',
        descripcion: 'Etiquetas minimalistas con emojis grandes.',
        codigo: `MostrarInfoScreen({
    etiqueta: "bottom",
    emoji: "🎉",
    text: "¡Felicitaciones!",
    duration: 3000
});`,
        test: () => MostrarInfoScreen({
            etiqueta: "bottom",
            emoji: "🎉",
            text: "¡Felicitaciones!",
            duration: 3000
        })
    },

    // ===== DIÁLOGO =====
    {
        id: 'dialogo-1',
        categoria: 'dialogo',
        titulo: '💬 Diálogo centro',
        descripcion: 'Simula un mensaje de chat a la izquierda.',
        codigo: `MostrarInfoScreen({
    text: "Usuario dice:",
    text2: "¡Hola! ¿Cómo estás?",
    dialogo: "izquierda",
    img: "./japan-artistic_resultado.png",
    duration: 5000
});`,
        test: () => MostrarInfoScreen({
            text: "👤 Usuario:",
            text2: "¡Hola! ¿Cómo estás?",
            dialogo: "centro",
            img: "japan-artistic_resultado.png",
            duration: 5000
        })
    },
    {
        id: 'dialogo-2',
        categoria: 'dialogo',
        titulo: '💬 Diálogo Derecha',
        img: "japan-artistic_resultado.png",
        descripcion: 'Simula un mensaje de chat a la derecha.',
        codigo: `MostrarInfoScreen({
    text: "Sistema:",
    text2: "Todo funcionando correctamente",
    dialogo: "derecha",
    icono: "pregunta",
    duration: 5000
});`,
        test: () => MostrarInfoScreen({
            text: "🤖 Sistema:",
            text2: "Todo funcionando correctamente",
            dialogo: "derecha",
            icono: "pregunta",
            duration: 5000
        })
    },

    // ===== ICONOS =====
    {
        id: 'iconos-1',
        categoria: 'iconos',
        titulo: '❓ Icono Pregunta',
        descripcion: 'Icono SVG de pregunta para confirmaciones.',
        codigo: `MostrarInfoScreen({
    text: "¿Estás seguro?",
    text2: "Esta acción no se puede deshacer",
    icono: "pregunta",
    botones: [{ texto: "Cancelar" }, { texto: "Confirmar" }]
});`,
        test: () => MostrarInfoScreen({
            text: "❓ ¿Estás seguro?",
                dialogo: "centro",
            text2: "Esta acción no se puede deshacer",
            icono: "pregunta",
            duration: 8000,
            botones: [
                { texto: "❌ Cancelar" },
                { texto: "✅ Confirmar", cerrarAlCompletar: true }
            ]
        })
    },
    {
        id: 'iconos-2',
        categoria: 'iconos',
        titulo: '⚠️ Icono Aviso',
        descripcion: 'Icono de advertencia para alertas importantes.',
        codigo: `MostrarInfoScreen({
    text: "⚠️ Advertencia",
    text2: "El espacio de almacenamiento está por acabarse",
    icono: "aviso",
    duration: 6000
});`,
        test: () => MostrarInfoScreen({
            text: "⚠️ Advertencia",
            text2: "El espacio de almacenamiento está por acabarse",
            icono: "aviso",
            duration: 6000
        })
    },
    {
        id: 'iconos-3',
        categoria: 'iconos',
        titulo: '🔄 Icono Loader',
        descripcion: 'Icono animado para procesos en curso.',
        codigo: `MostrarInfoScreen({
    text: "Cargando archivos...",
    text2: "Por favor espera",
    icono: "loader",
    duration: "infinito"
});`,
        test: () => {
            const notif = MostrarInfoScreen({
                text: "🔄 Cargando archivos...",
                text2: "Por favor espera",
                icono: "loader",
                duration: "infinito"
            });
            // Cerrar automáticamente después de 3 segundos
            setTimeout(() => {
                if (notif && notif.parentNode) {
                    window.closeNotification(notif);
                    MostrarInfoScreen("✅ Carga completada");
                }
            }, 3000);
        }
    },

    // ===== DIÁLOGO TUTORIAL CON HTML =====
{
    id: 'dialogo-tutorial',
    categoria: 'dialogo',
    titulo: '📚 Diálogo Tutorial con HTML',
    descripcion: 'Diálogo centrado con contenido HTML enriquecido y botones de navegación.',
    codigo: `MostrarInfoScreen({
    text: "📚 Tutorial Interactivo",
    text2: "Aprende paso a paso",
    dialogo: "centro",
    img: "japan-artistic_resultado.png",
    arrastrable: 5,
    duration: "infinito",
    html: \`
        <div style="text-align:center;padding:10px;">
            <div style="background:#1f6feb20;border-radius:12px;padding:15px;margin:10px 0;">
                <p style="font-size:1.1rem;color:#58a6ff;">📖 Paso 1 de 3</p>
                <p style="color:#e6edf3;">Bienvenido al tutorial interactivo</p>
                <div style="display:flex;gap:5px;justify-content:center;margin:10px 0;">
                    <span style="width:10px;height:10px;border-radius:50%;background:#1f6feb;"></span>
                    <span style="width:10px;height:10px;border-radius:50%;background:#30363d;"></span>
                    <span style="width:10px;height:10px;border-radius:50%;background:#30363d;"></span>
                </div>
            </div>
        </div>
    \`,
    botones: [
        {
            texto: "⬅️ Anterior",
            estilos: { background: "#21262d" },
                    cerrarAlCompletar: true
        },
        {
            texto: "Siguiente ➡️",
            accion: () => {
                MostrarInfoScreen({
                    text: "📚 Tutorial - Paso 2",
                    text2: "¡Vas por buen camino!",
                    dialogo: "centro",
                    img: "japan-artistic_resultado.png",
                    arrastrable: 5,
                    duration: "infinito",
                    html: \`
                        <div style="text-align:center;padding:10px;">
                            <div style="background:#23863620;border-radius:12px;padding:15px;margin:10px 0;">
                                <p style="font-size:1.1rem;color:#3fb950;">✅ Paso 2 de 3</p>
                                <p style="color:#e6edf3;">Has completado el paso 1 correctamente</p>
                                <div style="display:flex;gap:5px;justify-content:center;margin:10px 0;">
                                    <span style="width:10px;height:10px;border-radius:50%;background:#238636;"></span>
                                    <span style="width:10px;height:10px;border-radius:50%;background:#1f6feb;"></span>
                                    <span style="width:10px;height:10px;border-radius:50%;background:#30363d;"></span>
                                </div>
                            </div>
                        </div>
                    \`,
                    botones: [
                        {
                            texto: "⬅️ Anterior",
                            accion: () => {
                                MostrarInfoScreen({
                                    text: "📚 Tutorial - Paso 1",
                                    text2: "¡Bienvenido al tutorial!",
                                    dialogo: "centro",
                                    img: "japan-artistic_resultado.png",
                                    arrastrable: 5,
                                    duration: "infinito",
                                    html: \`
                                        <div style="text-align:center;padding:10px;">
                                            <div style="background:#1f6feb20;border-radius:12px;padding:15px;margin:10px 0;">
                                                <p style="font-size:1.1rem;color:#58a6ff;">📖 Paso 1 de 3</p>
                                                <p style="color:#e6edf3;">Bienvenido al tutorial interactivo</p>
                                                <div style="display:flex;gap:5px;justify-content:center;margin:10px 0;">
                                                    <span style="width:10px;height:10px;border-radius:50%;background:#1f6feb;"></span>
                                                    <span style="width:10px;height:10px;border-radius:50%;background:#30363d;"></span>
                                                    <span style="width:10px;height:10px;border-radius:50%;background:#30363d;"></span>
                                                </div>
                                            </div>
                                        </div>
                                    \`,
                                    botones: [
                                        { texto: "⬅️ Anterior", estilos: { background: "#21262d" } },
                                        { texto: "Siguiente ➡️", estilos: { background: "#1f6feb" }, cerrarAlCompletar: false }
                                    ]
                                });
                            },
                            estilos: { background: "#21262d" },
                    cerrarAlCompletar: true
                        },
                        {
                            texto: "Siguiente ➡️",
                            accion: () => {
                                MostrarInfoScreen({
                                    text: "🎉 ¡Tutorial completado!",
                                    text2: "Has finalizado todos los pasos",
                                    dialogo: "centro",
                                    img: "japan-artistic_resultado.png",
                                    arrastrable: 5,
                                    duration: "infinito",
                                    html: \`
                                        <div style="text-align:center;padding:10px;">
                                            <div style="background:#f0883e20;border-radius:12px;padding:15px;margin:10px 0;">
                                                <p style="font-size:1.1rem;color:#f0883e;">🎊 ¡Felicidades!</p>
                                                <p style="color:#e6edf3;">Has completado el tutorial</p>
                                                <div style="display:flex;gap:5px;justify-content:center;margin:10px 0;">
                                                    <span style="width:10px;height:10px;border-radius:50%;background:#238636;"></span>
                                                    <span style="width:10px;height:10px;border-radius:50%;background:#238636;"></span>
                                                    <span style="width:10px;height:10px;border-radius:50%;background:#238636;"></span>
                                                </div>
                                                <p style="color:#8b949e;font-size:0.8rem;margin-top:5px;">🏆 ¡Completado!</p>
                                            </div>
                                        </div>
                                    \`,
                                    botones: [
                                        {
                                            texto: "✅ Finalizar",
                                            cerrarAlCompletar: true,
                                            estilos: { background: "#238636" }
                                        }
                                    ]
                                });
                            },
                            estilos: { background: "#1f6feb" }
                        }
                    ]
                });
            },
            estilos: { background: "#1f6feb" }
        }
    ]
});`,
    test: () => {
        MostrarInfoScreen({
            text: "📚 Tutorial Interactivo",
            text2: "Aprende paso a paso",
            dialogo: "centro",
            img: "japan-artistic_resultado.png",
            arrastrable: 5,
            duration: "infinito",
            html: `
                <div style="text-align:center;padding:10px;">
                    <div style="background:#1f6feb20;border-radius:12px;padding:15px;margin:10px 0;">
                        <p style="font-size:1.1rem;color:#58a6ff;">📖 Paso 1 de 3</p>
                        <p style="color:#e6edf3;">Bienvenido al tutorial interactivo</p>
                        <div style="display:flex;gap:5px;justify-content:center;margin:10px 0;">
                            <span style="width:10px;height:10px;border-radius:50%;background:#1f6feb;"></span>
                            <span style="width:10px;height:10px;border-radius:50%;background:#30363d;"></span>
                            <span style="width:10px;height:10px;border-radius:50%;background:#30363d;"></span>
                        </div>
                    </div>
                </div>
            `,
            botones: [
                {
                    texto: "⬅️ Anterior",
                    estilos: { background: "#21262d" },
                    cerrarAlCompletar: true
                },
                {
                    texto: "Siguiente ➡️",
                    accion: () => {
                        MostrarInfoScreen({
                            text: "📚 Tutorial - Paso 2",
                            text2: "¡Vas por buen camino!",
                            dialogo: "centro",
                            img: "japan-artistic_resultado.png",
                            arrastrable: 5,
                            duration: "infinito",
                            html: `
                                <div style="text-align:center;padding:10px;">
                                    <div style="background:#23863620;border-radius:12px;padding:15px;margin:10px 0;">
                                        <p style="font-size:1.1rem;color:#3fb950;">✅ Paso 2 de 3</p>
                                        <p style="color:#e6edf3;">Has completado el paso 1 correctamente</p>
                                        <div style="display:flex;gap:5px;justify-content:center;margin:10px 0;">
                                            <span style="width:10px;height:10px;border-radius:50%;background:#238636;"></span>
                                            <span style="width:10px;height:10px;border-radius:50%;background:#1f6feb;"></span>
                                            <span style="width:10px;height:10px;border-radius:50%;background:#30363d;"></span>
                                        </div>
                                    </div>
                                </div>
                            `,
                            botones: [
                                {
                                    texto: "⬅️ Anterior",
                                    accion: () => {
                                        // Volver al paso 1
                                    },
                                    estilos: { background: "#21262d" },
                                    cerrarAlCompletar: true
                                },
                                {
                                    texto: "Siguiente ➡️",
                                    accion: () => {
                                        MostrarInfoScreen({
                                            text: "🎉 ¡Tutorial completado!",
                                            text2: "Has finalizado todos los pasos",
                                            dialogo: "centro",
                                            img: "japan-artistic_resultado.png",
                                            arrastrable: 5,
                                            duration: "infinito",
                                            html: `
                                                <div style="text-align:center;padding:10px;">
                                                    <div style="background:#f0883e20;border-radius:12px;padding:15px;margin:10px 0;">
                                                        <p style="font-size:1.1rem;color:#f0883e;">🎊 ¡Felicidades!</p>
                                                        <p style="color:#e6edf3;">Has completado el tutorial</p>
                                                        <div style="display:flex;gap:5px;justify-content:center;margin:10px 0;">
                                                            <span style="width:10px;height:10px;border-radius:50%;background:#238636;"></span>
                                                            <span style="width:10px;height:10px;border-radius:50%;background:#238636;"></span>
                                                            <span style="width:10px;height:10px;border-radius:50%;background:#238636;"></span>
                                                        </div>
                                                        <p style="color:#8b949e;font-size:0.8rem;margin-top:5px;">🏆 ¡Completado!</p>
                                                    </div>
                                                </div>
                                            `,
                                            botones: [
                                                {
                                                    texto: "✅ Finalizar",
                                                    cerrarAlCompletar: true,
                                                    estilos: { background: "#238636" }
                                                }
                                            ]
                                        });
                                    },
                                    estilos: { background: "#1f6feb" },
                                    cerrarAlCompletar: true
                                    
                                }
                            ]
                        });
                    },
                    estilos: { background: "#1f6feb" },
                    cerrarAlCompletar: true
                }
            ]
        });
    }
},

// ===== DIÁLOGO CON BOTONES DE PREGUNTA =====
{
    id: 'dialogo-pregunta',
    categoria: 'dialogo',
    titulo: '❓ Diálogo de Pregunta/Confirmación',
    descripcion: 'Diálogo centrado con botones para decisiones (eliminar, cancelar, etc.).',
    codigo: `MostrarInfoScreen({
    text: "⚠️ ¿Eliminar elemento?",
    text2: "Esta acción no se puede deshacer",
    dialogo: "centro",
    img: "japan-artistic_resultado.png",
    arrastrable: 5,
    duration: "infinito",
    icono: "pregunta",
    html: \`
        <div style="text-align:center;padding:5px;">
            <div style="background:#f8514920;border-radius:12px;padding:10px;border:1px solid #f8514940;">
                <p style="color:#f85149;font-size:0.9rem;">⚠️ Advertencia de seguridad</p>
                <p style="color:#8b949e;font-size:0.8rem;">Elemento: "archivo_importante.pdf"</p>
                <p style="color:#8b949e;font-size:0.8rem;margin-top:5px;">Tamaño: 2.4 MB</p>
            </div>
        </div>
    \`,
    botones: [
        {
            texto: "❌ Cancelar",
            accion: () => {
                MostrarInfoScreen({
                    etiqueta: "center",
                    emoji: "✅",
                    text: "Operación cancelada",
                    duration: 2000
                });
            },
            estilos: { background: "#21262d" }
        },
        {
            texto: "🗑️ Eliminar",
            accion: async () => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        MostrarInfoScreen({
                            etiqueta: "center",
                            emoji: "🗑️",
                            text: "Elemento eliminado correctamente",
                            duration: 3000
                        });
                        resolve();
                    }, 1500);
                });
            },
            cargando: "⏳ Eliminando...",
            cerrarAlCompletar: true,
            estilos: { background: "#f85149" }
        }
    ]
});`,
    test: () => {
        MostrarInfoScreen({
            text: "⚠️ ¿Eliminar elemento?",
            text2: "Esta acción no se puede deshacer",
            dialogo: "centro",
            img: "japan-artistic_resultado.png",
            arrastrable: 5,
            duration: "infinito",
            icono: "pregunta",
            html: `
                <div style="text-align:center;padding:5px;">
                    <div style="background:#f8514920;border-radius:12px;padding:10px;border:1px solid #f8514940;">
                        <p style="color:#f85149;font-size:0.9rem;">⚠️ Advertencia de seguridad</p>
                        <p style="color:#8b949e;font-size:0.8rem;">Elemento: "archivo_importante.pdf"</p>
                        <p style="color:#8b949e;font-size:0.8rem;margin-top:5px;">Tamaño: 2.4 MB</p>
                    </div>
                </div>
            `,
            botones: [
                {
                    texto: "❌ Cancelar",
                    accion: () => {
                        MostrarInfoScreen({
                            etiqueta: "center",
                            emoji: "✅",
                            text: "Operación cancelada",
                            duration: 2000
                        });
                    },
                    estilos: { background: "#21262d" },
                    cerrarAlCompletar: true
                },
                {
                    texto: "🗑️ Eliminar",
                    accion: async () => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                MostrarInfoScreen({
                                    etiqueta: "center",
                                    emoji: "🗑️",
                                    text: "Elemento eliminado correctamente",
                                    duration: 3000
                                });
                                resolve();
                            }, 1500);
                        });
                    },
                    cargando: "⏳ Eliminando...",
                    cerrarAlCompletar: true,
                    estilos: { background: "#f85149" }
                }
            ]
        });
    }
},

// ===== DIÁLOGO CON BARRA DE PROGRESO HTML =====
{
    id: 'dialogo-progreso',
    categoria: 'dialogo',
    titulo: '📊 Diálogo con Barra de Progreso',
    descripcion: 'Diálogo centrado con barra de progreso animada en HTML.',
    codigo: `MostrarInfoScreen({
    text: "📊 Procesando archivos",
    text2: "Subiendo documentos al servidor",
    dialogo: "centro",
    img: "japan-artistic_resultado.png",
    arrastrable: 5,
    duration: "infinito",
    html: \`
        <div style="padding:15px;">
            <div style="background:#21262d;border-radius:8px;padding:15px;margin:5px 0;">
                <div style="display:flex;justify-content:space-between;color:#8b949e;font-size:0.8rem;margin-bottom:8px;">
                    <span>📤 Subiendo archivos...</span>
                    <span id="progresoTexto">0%</span>
                </div>
                <div style="background:#30363d;border-radius:4px;height:20px;overflow:hidden;position:relative;">
                    <div id="barraProgreso" style="width:0%;height:100%;background:linear-gradient(90deg,#1f6feb,#58a6ff);transition:width 0.5s ease;border-radius:4px;"></div>
                    <span style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:0.7rem;color:#e6edf3;font-weight:bold;">0%</span>
                </div>
                <div style="margin-top:10px;display:flex;justify-content:space-between;color:#8b949e;font-size:0.7rem;">
                    <span>📁 5 archivos</span>
                    <span>⏱️ Estimado: 30s</span>
                </div>
            </div>
        </div>
    \`,
    botones: [
        {
            texto: "🚀 Iniciar Progreso",
            accion: () => {
                let progreso = 0;
                const barra = document.getElementById('barraProgreso');
                const texto = document.getElementById('progresoTexto');
                
                if (!barra || !texto) {
                    MostrarInfoScreen("❌ Error: Elementos no encontrados");
                    return;
                }
                
                const interval = setInterval(() => {
                    progreso += Math.random() * 8 + 2;
                    if (progreso > 100) progreso = 100;
                    
                    barra.style.width = progreso + '%';
                    texto.textContent = Math.round(progreso) + '%';
                    barra.nextElementSibling.textContent = Math.round(progreso) + '%';
                    
                    if (progreso >= 100) {
                        clearInterval(interval);
                        MostrarInfoScreen({
                            etiqueta: "center",
                            emoji: "✅",
                            text: "¡Carga completada!",
                            duration: 3000
                        });
                    }
                }, 300);
            },
            cargando: "⏳ Procesando...",
            estilos: { background: "#1f6feb" }
        },
        {
            texto: "❌ Cancelar",
            accion: () => {
                MostrarInfoScreen({
                    etiqueta: "center",
                    emoji: "⏹️",
                    text: "Proceso cancelado",
                    duration: 2000
                });
            },
            estilos: { background: "#8b949e" }
        }
    ]
});`,
    test: () => {
        MostrarInfoScreen({
            text: "📊 Procesando archivos",
            text2: "Subiendo documentos al servidor",
            dialogo: "centro",
            img: "japan-artistic_resultado.png",
            arrastrable: 5,
            duration: "infinito",
            html: `
                <div style="padding:15px;">
                    <div style="background:#21262d;border-radius:8px;padding:15px;margin:5px 0;">
                        <div style="display:flex;justify-content:space-between;color:#8b949e;font-size:0.8rem;margin-bottom:8px;">
                            <span>📤 Subiendo archivos...</span>
                            <span id="progresoTexto">0%</span>
                        </div>
                        <div style="background:#30363d;border-radius:4px;height:20px;overflow:hidden;position:relative;">
                            <div id="barraProgreso" style="width:0%;height:100%;background:linear-gradient(90deg,#1f6feb,#58a6ff);transition:width 0.5s ease;border-radius:4px;"></div>
                            <span style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:0.7rem;color:#e6edf3;font-weight:bold;">0%</span>
                        </div>
                        <div style="margin-top:10px;display:flex;justify-content:space-between;color:#8b949e;font-size:0.7rem;">
                            <span>📁 5 archivos</span>
                            <span>⏱️ Estimado: 30s</span>
                        </div>
                    </div>
                </div>
            `,
            botones: [
                {
                    texto: "🚀 Iniciar Progreso",
                    accion: () => {
                        let progreso = 0;
                        const barra = document.getElementById('barraProgreso');
                        const texto = document.getElementById('progresoTexto');
                        
                        if (!barra || !texto) {
                            MostrarInfoScreen("❌ Error: Elementos no encontrados");
                            return;
                        }
                        
                        const interval = setInterval(() => {
                            progreso += Math.random() * 8 + 2;
                            if (progreso > 100) progreso = 100;
                            
                            barra.style.width = progreso + '%';
                            texto.textContent = Math.round(progreso) + '%';
                            barra.nextElementSibling.textContent = Math.round(progreso) + '%';
                            
                            if (progreso >= 100) {
                                clearInterval(interval);
                                MostrarInfoScreen({
                                    etiqueta: "center",
                                    emoji: "✅",
                                    text: "¡Carga completada!",
                                    duration: 3000
                                });
                            }
                        }, 300);
                    },
                    cargando: "⏳ Procesando...",
                    estilos: { background: "#1f6feb" },
                    cerrarAlCompletar: true
                },
                {
                    texto: "❌ Cancelar",
                    accion: () => {
                        MostrarInfoScreen({
                            etiqueta: "center",
                            emoji: "⏹️",
                            text: "Proceso cancelado",
                            duration: 2000
                        });
                    },
                    estilos: { background: "#8b949e" },
                    cerrarAlCompletar: true
                }
            ]
        });
    }
},
    // ===== BOTONES =====
    {
        id: 'botones-1',
        categoria: 'botones',
        titulo: '🔘 Botón con Callback',
        descripcion: 'Botones interactivos que ejecutan acciones.',
        codigo: `MostrarInfoScreen({
    text: "📧 ¿Deseas enviar el correo?",
    botones: [
        {
            texto: "📤 Enviar",
            accion: () => {
                MostrarInfoScreen("✅ Correo enviado");
            },
            cerrarAlCompletar: true,
            estilos: { background: "#1f6feb" }
        },
        {
            texto: "❌ Cancelar",
            estilos: { background: "#8b949e" }
        }
    ]
});`,
        test: () => MostrarInfoScreen({
            text: "📧 ¿Deseas enviar el correo?",
            text2: "Se enviará a todos los destinatarios",
            botones: [
                {
                    texto: "📤 Enviar",
                    accion: () => {
                        MostrarInfoScreen("✅ Correo enviado exitosamente");
                    },
                    cerrarAlCompletar: true,
                    estilos: { background: "#1f6feb" }
                },
                {
                    texto: "❌ Cancelar",
                    estilos: { background: "#8b949e" }
                }
            ]
        })
    },
    {
        id: 'botones-2',
        categoria: 'botones',
        titulo: '🔘 Botón con Estado de Carga',
        descripcion: 'Botón que muestra estado "Cargando..." mientras ejecuta.',
        codigo: `MostrarInfoScreen({
    text: "🔄 Procesar datos",
    botones: [{
        texto: "Procesar",
        cargando: "Procesando...",
        accion: async () => {
            await new Promise(r => setTimeout(r, 2000));
            MostrarInfoScreen("✅ Procesado");
        },
        cerrarAlCompletar: true,
        estilos: { background: "#238636" }
    }]
});`,
        test: () => MostrarInfoScreen({
            text: "🔄 Procesar datos",
            text2: "Haz clic para iniciar el procesamiento",
            botones: [{
                texto: "🚀 Procesar",
                cargando: "⏳ Procesando...",
                accion: async () => {
                    await new Promise(r => setTimeout(r, 2000));
                    MostrarInfoScreen("✅ Procesado exitosamente");
                },
                cerrarAlCompletar: true,
                estilos: { background: "#238636" }
            }]
        })
    },

    // ===== NUEVOS EJEMPLOS CON COLORES =====
{
    id: 'colores-1',
    categoria: 'avanzado',
    titulo: '🎨 Colores Personalizados',
    descripcion: 'Cambia el color del texto, fondo y borde de la notificación.',
    codigo: `MostrarInfoScreen({
    text: "🎨 Colores personalizados",
    text2: "Texto dorado sobre fondo oscuro",
    text3: "Borde rojo intenso",
    colorText: '#ffd700',
    colorNotif: '#1a1a2e',
    colorResalte: '#ff6b6b',
    duration: 5000
});`,
    test: () => MostrarInfoScreen({
        text: "🎨 Colores personalizados",
        text2: "Texto dorado sobre fondo oscuro",
        text3: "Borde rojo intenso",
        colorText: '#ffd700',
        colorNotif: '#1a1a2e',
        colorResalte: '#ff6b6b',
        duration: 5000
    })
},
{
    id: 'colores-2',
    categoria: 'avanzado',
    titulo: '🌈 Tema Éxito',
    descripcion: 'Tema predefinido de éxito con colores verdes.',
    codigo: `MostrarInfoScreen({
    text: "✅ ¡Operación exitosa!",
    text2: "Todos los datos fueron guardados",
    colorText: '#00ff88',
    colorNotif: 'rgba(0, 30, 20, 0.95)',
    colorResalte: '#00ff88',
    duration: 4000
});`,
    test: () => MostrarInfoScreen({
        text: "✅ ¡Operación exitosa!",
        text2: "Todos los datos fueron guardados correctamente",
        colorText: '#00ff88',
        colorNotif: 'rgba(0, 30, 20, 0.95)',
        colorResalte: '#00ff88',
        duration: 4000
    })
},
{
    id: 'colores-3',
    categoria: 'avanzado',
    titulo: '🔥 Tema Error',
    descripcion: 'Tema predefinido de error con colores rojos.',
    codigo: `MostrarInfoScreen({
    text: "❌ ¡Error crítico!",
    text2: "No se pudo completar la operación",
    colorText: '#ff4757',
    colorNotif: 'rgba(30, 0, 0, 0.95)',
    colorResalte: '#ff4757',
    duration: 4000
});`,
    test: () => MostrarInfoScreen({
        text: "❌ ¡Error crítico!",
        text2: "No se pudo completar la operación",
        colorText: '#ff4757',
        colorNotif: 'rgba(30, 0, 0, 0.95)',
        colorResalte: '#ff4757',
        duration: 4000
    })
},
{
    id: 'colores-4',
    categoria: 'avanzado',
    titulo: '💎 Tema Info',
    descripcion: 'Tema predefinido de información con colores azules.',
    codigo: `MostrarInfoScreen({
    text: "ℹ️ Información importante",
    text2: "Actualización disponible",
    colorText: '#4facfe',
    colorNotif: 'rgba(0, 20, 40, 0.95)',
    colorResalte: '#4facfe',
    duration: 4000
});`,
    test: () => MostrarInfoScreen({
        text: "ℹ️ Información importante",
        text2: "Una nueva versión está disponible para descargar",
        colorText: '#4facfe',
        colorNotif: 'rgba(0, 20, 40, 0.95)',
        colorResalte: '#4facfe',
        duration: 4000
    })
},
{
    id: 'colores-5',
    categoria: 'avanzado',
    titulo: '🌙 Tema Oscuro Premium',
    descripcion: 'Tema oscuro elegante con acentos morados.',
    codigo: `MostrarInfoScreen({
    text: "🌙 Modo Oscuro Premium",
    text2: "Diseño elegante con acentos morados",
    text3: "Ideal para apps modernas",
    colorText: '#e2e8f0',
    colorNotif: 'rgba(26, 26, 46, 0.95)',
    colorResalte: '#9b59b6',
    duration: 5000
});`,
    test: () => MostrarInfoScreen({
        text: "🌙 Modo Oscuro Premium",
        text2: "Diseño elegante con acentos morados",
        text3: "Ideal para aplicaciones modernas",
        colorText: '#e2e8f0',
        colorNotif: 'rgba(26, 26, 46, 0.95)',
        colorResalte: '#9b59b6',
        duration: 5000
    })
},
{
    id: 'colores-6',
    categoria: 'avanzado',
    titulo: '🎪 Tema Neón',
    descripcion: 'Colores neón vibrantes para notificaciones llamativas.',
    codigo: `MostrarInfoScreen({
    text: "🎪 ¡Espectáculo!",
    text2: "Colores neón muy llamativos",
    colorText: '#ff6bff',
    colorNotif: 'rgba(10, 0, 20, 0.95)',
    colorResalte: '#ff6bff',
    duration: 4000
});`,
    test: () => MostrarInfoScreen({
        text: "🎪 ¡Espectáculo!",
        text2: "Colores neón muy llamativos",
        colorText: '#ff6bff',
        colorNotif: 'rgba(10, 0, 20, 0.95)',
        colorResalte: '#ff6bff',
        duration: 4000
    })
},
{
    id: 'colores-7',
    categoria: 'dialogo',
    titulo: '💬 Diálogo con Colores',
    descripcion: 'Diálogo centrado con colores personalizados.',
    codigo: `MostrarInfoScreen({
    text: "💬 Diálogo Personalizado",
    text2: "Con colores únicos",
    dialogo: "centro",
    colorText: '#ffffff',
    colorNotif: 'rgba(20, 20, 40, 0.95)',
    colorResalte: '#4facfe',
    botones: [
        { texto: "Aceptar", cerrarAlCompletar: true },
        { texto: "Cancelar" }
    ]
});`,
    test: () => MostrarInfoScreen({
        text: "💬 Diálogo Personalizado",
        text2: "Con colores únicos para destacar",
        dialogo: "centro",
        colorText: '#ffffff',
        colorNotif: 'rgba(20, 20, 40, 0.95)',
        colorResalte: '#4facfe',
        botones: [
            { texto: "✅ Aceptar", cerrarAlCompletar: true, estilos: { background: "#1f6feb" } },
            { texto: "❌ Cancelar", estilos: { background: "#8b949e" } }
        ],
        duration: 5000
    })
},

// ===== EJEMPLOS CON DIÁLOGOS TIPO CHAT =====
{
    id: 'chat-1',
    categoria: 'dialogo',
    titulo: '💬 Chat Izquierda',
    descripcion: 'Simula un mensaje de chat a la izquierda (como WhatsApp).',
    codigo: `MostrarInfoScreen({
    text: "👤 Usuario Dice:",
    text2: "¡Hola! ¿Cómo estás hoy?",
    text3: "Me alegra verte",
    dialogo: "izquierda",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=user1",
    colorText: '#e2e8f0',
    colorNotif: 'rgba(30, 30, 50, 0.95)',
    colorResalte: '#4facfe',
    duration: 5000
});`,
    test: () => MostrarInfoScreen({
        text: "👤 Usuario Dice:",
        text2: "¡Hola! ¿Cómo estás hoy?",
        text3: "Me alegra verte por aquí",
        dialogo: "izquierda",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=user1",
        colorText: '#e2e8f0',
        colorNotif: 'rgba(30, 30, 50, 0.95)',
        colorResalte: '#4facfe',
        duration: 5000
    })
},
{
    id: 'chat-2',
    categoria: 'dialogo',
    titulo: '💬 Chat Derecha',
    descripcion: 'Simula un mensaje de chat a la derecha (como WhatsApp).',
    codigo: `MostrarInfoScreen({
    text: "🤖 Asistente:",
    text2: "¡Hola! Estoy aquí para ayudarte",
    text3: "¿En qué puedo asistirte?",
    dialogo: "derecha",
    img: "https://api.dicebear.com/7.x/bottts/svg?seed=bot",
    colorText: '#e2e8f0',
    colorNotif: 'rgba(20, 40, 30, 0.95)',
    colorResalte: '#00ff88',
    duration: 5000
});`,
    test: () => MostrarInfoScreen({
        text: "🤖 Asistente:",
        text2: "¡Hola! Estoy aquí para ayudarte",
        text3: "¿En qué puedo asistirte?",
        dialogo: "derecha",
        img: "https://api.dicebear.com/7.x/bottts/svg?seed=bot",
        colorText: '#e2e8f0',
        colorNotif: 'rgba(20, 40, 30, 0.95)',
        colorResalte: '#00ff88',
        duration: 5000
    })
},

// ===== EJEMPLOS CON HTML AVANZADO =====
{
    id: 'html-1',
    categoria: 'avanzado',
    titulo: '📊 HTML con Tabla',
    descripcion: 'Contenido HTML con tabla de datos.',
    codigo: `MostrarInfoScreen({
    text: "📊 Datos del sistema",
    text2: "Estado de los servicios",
    dialogo: "centro",
    colorText: '#e2e8f0',
    colorNotif: 'rgba(20, 20, 40, 0.95)',
    colorResalte: '#4facfe',
    html: \`
        <table style="width:100%;border-collapse:collapse;margin-top:10px;font-size:12px;">
            <tr style="background:#1f6feb40;">
                <th style="padding:6px;text-align:left;color:#58a6ff;">Servicio</th>
                <th style="padding:6px;text-align:left;color:#58a6ff;">Estado</th>
            </tr>
            <tr><td style="padding:4px;border-bottom:1px solid #30363d;">API</td><td style="padding:4px;border-bottom:1px solid #30363d;color:#3fb950;">✅ Online</td></tr>
            <tr><td style="padding:4px;border-bottom:1px solid #30363d;">Base de Datos</td><td style="padding:4px;border-bottom:1px solid #30363d;color:#3fb950;">✅ Online</td></tr>
            <tr><td style="padding:4px;">Servidor Web</td><td style="padding:4px;color:#f85149;">❌ Caído</td></tr>
        </table>
    \`,
    duration: 6000
});`,
    test: () => MostrarInfoScreen({
        text: "📊 Datos del sistema",
        text2: "Estado de los servicios en tiempo real",
        dialogo: "centro",
        colorText: '#e2e8f0',
        colorNotif: 'rgba(20, 20, 40, 0.95)',
        colorResalte: '#4facfe',
        html: `
            <table style="width:100%;border-collapse:collapse;margin-top:10px;font-size:12px;">
                <tr style="background:#1f6feb40;">
                    <th style="padding:6px;text-align:left;color:#58a6ff;">Servicio</th>
                    <th style="padding:6px;text-align:left;color:#58a6ff;">Estado</th>
                </tr>
                <tr><td style="padding:4px;border-bottom:1px solid #30363d;">API REST</td><td style="padding:4px;border-bottom:1px solid #30363d;color:#3fb950;">✅ Online</td></tr>
                <tr><td style="padding:4px;border-bottom:1px solid #30363d;">Base de Datos</td><td style="padding:4px;border-bottom:1px solid #30363d;color:#3fb950;">✅ Online</td></tr>
                <tr><td style="padding:4px;">Servidor Web</td><td style="padding:4px;color:#f85149;">❌ Caído</td></tr>
            </table>
        `,
        duration: 6000
    })
},
{
    id: 'html-2',
    categoria: 'avanzado',
    titulo: '🎵 HTML con Reproductor',
    descripcion: 'Contenido HTML con botones de control de música.',
    codigo: `MostrarInfoScreen({
    text: "🎵 Reproductor de Música",
    text2: "Escuchando: 'Oceans'",
    dialogo: "centro",
    colorText: '#e2e8f0',
    colorNotif: 'rgba(20, 10, 30, 0.95)',
    colorResalte: '#ff6bff',
    html: \`
        <div style="text-align:center;padding:10px;">
            <div style="background:#1f6feb20;border-radius:12px;padding:15px;">
                <p style="font-size:2rem;margin:0;">🎵</p>
                <p style="color:#58a6ff;font-weight:bold;">Oceans - Hillsong</p>
                <div style="display:flex;gap:15px;justify-content:center;margin-top:10px;">
                    <span style="cursor:pointer;font-size:1.5rem;">⏪</span>
                    <span style="cursor:pointer;font-size:1.5rem;color:#1f6feb;">⏸️</span>
                    <span style="cursor:pointer;font-size:1.5rem;">⏩</span>
                </div>
                <div style="background:#30363d;border-radius:4px;height:4px;margin-top:10px;position:relative;">
                    <div style="width:45%;height:100%;background:#1f6feb;border-radius:4px;"></div>
                </div>
                <p style="color:#8b949e;font-size:0.7rem;margin-top:5px;">01:45 / 04:32</p>
            </div>
        </div>
    \`,
    duration: 6000
});`,
    test: () => MostrarInfoScreen({
        text: "🎵 Reproductor de Música",
        text2: "Escuchando: 'Oceans'",
        dialogo: "centro",
        colorText: '#e2e8f0',
        colorNotif: 'rgba(20, 10, 30, 0.95)',
        colorResalte: '#ff6bff',
        html: `
            <div style="text-align:center;padding:10px;">
                <div style="background:#1f6feb20;border-radius:12px;padding:15px;">
                    <p style="font-size:2rem;margin:0;">🎵</p>
                    <p style="color:#58a6ff;font-weight:bold;">Oceans - Hillsong</p>
                    <div style="display:flex;gap:15px;justify-content:center;margin-top:10px;">
                        <span style="cursor:pointer;font-size:1.5rem;">⏪</span>
                        <span style="cursor:pointer;font-size:1.5rem;color:#1f6feb;">⏸️</span>
                        <span style="cursor:pointer;font-size:1.5rem;">⏩</span>
                    </div>
                    <div style="background:#30363d;border-radius:4px;height:4px;margin-top:10px;position:relative;">
                        <div style="width:45%;height:100%;background:#1f6feb;border-radius:4px;"></div>
                    </div>
                    <p style="color:#8b949e;font-size:0.7rem;margin-top:5px;">01:45 / 04:32</p>
                </div>
            </div>
        `,
        duration: 6000
    })
},

// ===== EJEMPLOS CON PRIORIDAD =====
{
    id: 'prioridad-1',
    categoria: 'avanzado',
    titulo: '🔴 Prioridad Máxima',
    descripcion: 'Notificación con prioridad alta (z-index: 99999) que se superpone a todas.',
    codigo: `MostrarInfoScreen({
    text: "🔴 ¡ALERTA URGENTE!",
    text2: "Esta notificación tiene prioridad máxima",
    prioridad: 99999,
    colorResalte: '#ff0000',
    colorNotif: 'rgba(30, 0, 0, 0.95)',
    colorText: '#ff0000',
    duration: 5000
});`,
    test: () => MostrarInfoScreen({
        text: "🔴 ¡ALERTA URGENTE!",
        text2: "Esta notificación tiene prioridad máxima",
        prioridad: 99999,
                dialogo: "centro",
        arrastrable: true,
        colorResalte: '#ff0000',
        colorNotif: 'rgba(30, 0, 0, 0.95)',
        colorText: '#ff0000',
        duration: 5000
    })
},
{
    id: 'prioridad-2',
    categoria: 'avanzado',
    titulo: '🟢 Prioridad Baja',
    descripcion: 'Notificación con prioridad baja (z-index: 1) que queda debajo.',
    codigo: `MostrarInfoScreen({
    text: "🟢 Información normal",
    text2: "Prioridad baja, queda debajo",
    prioridad: 1,
    colorResalte: '#00ff88',
    colorNotif: 'rgba(0, 30, 20, 0.95)',
    colorText: '#00ff88',
    duration: 4000
});`,
    test: () => MostrarInfoScreen({
        text: "🟢 Información normal",
        text2: "Prioridad baja, queda debajo",
        prioridad: 1,
                dialogo: "centro",
        arrastrable: true,
        colorResalte: '#00ff88',
        colorNotif: 'rgba(0, 30, 20, 0.95)',
        colorText: '#00ff88',
        duration: 4000
    })
},
{
    id: 'prioridad-3',
    categoria: 'avanzado',
    titulo: '📊 Comparación de Prioridades',
    descripcion: 'Muestra dos notificaciones con diferentes prioridades para ver el efecto.',
    codigo: `// Notificación con prioridad alta
MostrarInfoScreen({
    text: "🔔 ALERTA IMPORTANTE",
    text2: "Prioridad: 100 (arriba)",
    prioridad: 100,
    colorResalte: '#ff6b6b',
    colorNotif: 'rgba(30, 0, 0, 0.95)',
    colorText: '#ff6b6b',
    duration: 6000
});

// Notificación con prioridad baja (se muestra debajo)
setTimeout(() => {
    MostrarInfoScreen({
        text: "ℹ️ Información secundaria",
        text2: "Prioridad: 1 (abajo)",
        prioridad: 1,
        colorResalte: '#4facfe',
        colorNotif: 'rgba(0, 20, 40, 0.95)',
        colorText: '#4facfe',
        duration: 5000
    });
}, 500);`,
    test: () => {
        // Notificación con prioridad alta
        MostrarInfoScreen({
            text: "🔔 ALERTA IMPORTANTE",
            text2: "Prioridad: 100 (arriba)",
            prioridad: 100,
                    dialogo: "centro",
        arrastrable: true,
            colorResalte: '#ff6b6b',
            colorNotif: 'rgba(30, 0, 0, 0.95)',
            colorText: '#ff6b6b',
            duration: 6000
        });

        // Notificación con prioridad baja (se muestra debajo)
        setTimeout(() => {
            MostrarInfoScreen({
                text: "ℹ️ Información secundaria",
                text2: "Prioridad: 1 (abajo)",
                        dialogo: "centro",
        arrastrable: true,
                prioridad: 1,
                colorResalte: '#4facfe',
                colorNotif: 'rgba(0, 20, 40, 0.95)',
                colorText: '#4facfe',
                duration: 5000
            });
        }, 500);
    }
},
{
    id: 'prioridad-4',
    categoria: 'dialogo',
    titulo: '💬 Diálogo con Prioridad',
    descripcion: 'Diálogo centrado con prioridad alta para que siempre esté visible.',
    codigo: `MostrarInfoScreen({
    text: "💬 Diálogo Prioridad",
    text2: "Siempre visible por encima",
    dialogo: "centro",
    prioridad: 999999,
    colorText: '#ffffff',
    colorNotif: 'rgba(20, 20, 40, 0.95)',
    colorResalte: '#4facfe',
    botones: [
        { texto: "✅ Aceptar", cerrarAlCompletar: true }
    ],
    duration: "infinito"
});`,
    test: () => MostrarInfoScreen({
        text: "💬 Diálogo Prioridad",
        text2: "Siempre visible por encima",
        dialogo: "centro",
        arrastrable: true,
        prioridad: 999999,
        colorText: '#ffffff',
        colorNotif: 'rgba(20, 20, 40, 0.95)',
        colorResalte: '#4facfe',
        botones: [
            { texto: "✅ Aceptar", cerrarAlCompletar: true, estilos: { background: "#1f6feb" } }
        ],
        duration: "infinito"
    })
},

// ===== EJEMPLOS CON EMOJI Y COLOR =====
{
    id: 'emoji-color',
    categoria: 'basico',
    titulo: '😊 Emoji con Color',
    descripcion: 'Emoji grande combinado con colores personalizados.',
    codigo: `MostrarInfoScreen({
    text: "¡Bienvenido!",
    text2: "Has iniciado sesión correctamente",
    emoji: "😊",
    colorText: '#4facfe',
    colorNotif: 'rgba(0, 20, 40, 0.95)',
    colorResalte: '#4facfe',
    duration: 4000
});`,
    test: () => MostrarInfoScreen({
        text: "¡Bienvenido!",
        text2: "Has iniciado sesión correctamente",
        emoji: "😊",
        colorText: '#4facfe',
        colorNotif: 'rgba(0, 20, 40, 0.95)',
        colorResalte: '#4facfe',
        duration: 4000
    })
},
    // ===== FONDOS =====
    {
        id: 'fondo-1',
        categoria: 'fondo',
        titulo: '🖼️ Fondo con Color',
        descripcion: 'Fondo personalizado con color y blur.',
        codigo: `MostrarInfoScreen({
    text: "🎨 Modal con fondo",
    text2: "Fondo semi-transparente con blur",
    fondo: [{
        color: "#00000080",
        blur: "5px"
    }],
    duration: 4000
});`,
        test: () => MostrarInfoScreen({
            text: "🎨 Modal con fondo",
            text2: "Fondo semi-transparente con blur",
            dialogo: "centro",
            colorText: '#00ff88',        // Texto verde neón
            colorNotif: '#2d2d44',       // Fondo morado oscuro
            colorResalte: '#00ff88',
            fondo: [{
                color: "#00000080",
                blur: "5px"
            }],
            duration: 4000,
            cerrarConClickFondo: true
        })
    },
    {
        id: 'fondo-2',
        categoria: 'fondo',
        titulo: '🌈 Fondo con Gradiente',
        descripcion: 'Fondo con gradiente lineal personalizado.',
        codigo: `MostrarInfoScreen({
    text: "🌟 Gradiente",
    text2: "Fondo con gradiente de colores",
    fondo: [{
        gradiente: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        estilos: { opacity: "0.95" }
    }],
    duration: 4000
});`,
        test: () => MostrarInfoScreen({
            text: "🌟 Gradiente",
            text2: "Fondo con gradiente de colores",
            dialogo: "centro",
            colorText: '#00ff88',        // Texto verde neón
            colorNotif: '#2d2d44',       // Fondo morado oscuro
            colorResalte: '#00ff88',
            fondo: [{
                gradiente: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                estilos: { opacity: "0.95" }
            }],
            duration: 4000,
            cerrarConClickFondo: true
        })
    },

    // ===== TAREAS/ID =====
    {
        id: 'tarea-1',
        categoria: 'tarea',
        titulo: '🆔 Notificación Persistente',
        descripcion: 'Notificaciones que pueden ser actualizadas o cerradas por ID.',
        codigo: `// Crear notificación persistente
MostrarInfoScreen({
    text: "⏳ Procesando tarea...",
    tareaID: [{ id: "tarea_123", operacion: { crear: true } }],
    duration: "infinito"
});

// Cerrar después de 3 segundos
setTimeout(() => {
    MostrarInfoScreen({
        text: "✅ Tarea completada",
        tareaID: [{
            id: "tarea_123",
            operacion: { crear: false, cerrar: true }
        }],
        duration: 3000
    });
}, 3000);`,
        test: () => {
            // Crear notificación persistente
            MostrarInfoScreen({
                text: "⏳ Procesando tarea...",
                text2: "ID: tarea_123",
                tareaID: [{ id: "tarea_123", operacion: { crear: true } }],
                icono: "loader",
                duration: "infinito"
            });

            // Cerrar después de 3 segundos
            setTimeout(() => {
                MostrarInfoScreen({
                    text: "✅ Tarea completada",
                    text2: "Proceso finalizado exitosamente",
                    tareaID: [{
                        id: "tarea_123",
                        operacion: { 
                            crear: false, 
                            cerrar: true,
                            llamar: () => {
                                console.log("🔔 Callback ejecutado: tarea completada");
                            }
                        }
                    }],
                    duration: 3000
                });
            }, 3000);
        }
    },

    // ===== INPUTS =====
    {
        id: 'input-1',
        categoria: 'input',
        titulo: '⌨️ Input de Texto',
        descripcion: 'Campos de entrada dentro de la notificación.',
        codigo: `MostrarInfoScreen({
    text: "👤 Registro",
    text2: "Ingresa tu nombre:",
    input: {
        tipo: "text",
        placeholder: "Tu nombre",
        id: "inputNombre"
    },
    botones: [{
        texto: "Enviar",
        accion: () => {
            const input = document.getElementById("inputNombre");
            MostrarInfoScreen("¡Hola " + input.value + "!");
        },
        cerrarAlCompletar: true
    }]
});`,
        test: () => {
            MostrarInfoScreen({
                text: "👤 Registro de usuario",
                text2: "Ingresa tu nombre:",
                dialogo: "centro",
                input: {
                    tipo: "text",
                    placeholder: "Tu nombre completo",
                    id: "inputNombre"
                },
                botones: [{
                    texto: "📤 Enviar",
                    accion: () => {
                        const input = document.getElementById("inputNombre");
                        if (input && input.value.trim()) {
                            MostrarInfoScreen(`👋 ¡Hola ${input.value}! Bienvenido`);
                        } else {
                            MostrarInfoScreen("❌ Por favor ingresa tu nombre");
                        }
                    },
                    cerrarAlCompletar: true,
                    estilos: { background: "#1f6feb" }
                }]
            });
        }
    },
    {
        id: 'input-2',
        categoria: 'input',
        titulo: '🔒 Input de Contraseña',
        descripcion: 'Campo tipo contraseña (oculto).',
        codigo: `MostrarInfoScreen({
    text: "🔒 Verificación",
    text2: "Ingresa tu contraseña:",
    input: {
        tipo: "clave",
        placeholder: "Contraseña",
        id: "inputClave"
    },
    botones: [{
        texto: "Verificar",
        accion: () => {
            const input = document.getElementById("inputClave");
            if (input.value === "1234") {
                MostrarInfoScreen("✅ Correcto");
            } else {
                MostrarInfoScreen("❌ Incorrecto");
            }
        }
    }]
});`,
        test: () => {
            MostrarInfoScreen({
                text: "🔒 Verificación de seguridad",
                text2: "Ingresa tu contraseña:",
                dialogo: "centro",
                input: {
                    tipo: "clave",
                    placeholder: "Contraseña (ej: 1234)",
                    id: "inputClave"
                },
                botones: [{
                    texto: "🔑 Verificar",
                    accion: () => {
                        const input = document.getElementById("inputClave");
                        if (input && input.value === "1234") {
                            MostrarInfoScreen("✅ Contraseña correcta");
                        } else {
                            MostrarInfoScreen("❌ Contraseña incorrecta");
                        }
                    },
                    cerrarAlCompletar: true,
                    estilos: { background: "#1f6feb" }
                }]
            });
        }
    },

    // ===== AVANZADO =====
    {
        id: 'avanzado-1',
        categoria: 'avanzado',
        titulo: '🔧 Combinación Completa',
        descripcion: 'Todas las características juntas.',
        codigo: `MostrarInfoScreen({
    text: "🎯 Acción Avanzada",
    text2: "Selecciona una opción",
    icono: "pregunta",
    emoji: "🚀",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
    fondo: [{ color: "#00000070", blur: "8px" }],
    botones: [
        { texto: "✅ Aceptar", cerrarAlCompletar: true },
        { texto: "❌ Cancelar" }
    ],
    duration: "infinito"
});`,
        test: () => {
            MostrarInfoScreen({
                text: "🎯 Acción Avanzada",
                text2: "Todas las características combinadas",
                text3: "Fondo, icono, emoji, imagen y botones",
                dialogo: "centro",
                emoji: "🚀",
                img: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
                fondo: [{ 
                    color: "#00000070", 
                    blur: "8px",
                    estilos: { backgroundSize: "cover" }
                }],
                botones: [
                    { 
                        texto: "✅ Aceptar", 
                        cerrarAlCompletar: true,
                        estilos: { background: "#238636" }
                    },
                    { 
                        texto: "❌ Cancelar",
                        estilos: { background: "#8b949e" }
                    }
                ],
                duration: "infinito",
                cerrarConClickFondo: true
            });
        }
    },
    {
        id: 'avanzado-2',
        categoria: 'avanzado',
        titulo: '📊 API Pública',
        descripcion: 'Usando window.Notificaciones para control programático.',
        codigo: `// Crear con API
const notif = window.Notificaciones.crear("api_demo", {
    text: "📊 API en acción",
    icono: "loader"
});

// Actualizar después de 2s
setTimeout(() => {
    window.Notificaciones.actualizar("api_demo", {
        text: "📊 Actualizado!"
    });
}, 2000);

// Cerrar después de 4s
setTimeout(() => {
    window.Notificaciones.cerrar("api_demo");
    MostrarInfoScreen("✅ API completada");
}, 4000);`,
        test: () => {
            if (typeof window.Notificaciones === 'undefined') {
                MostrarInfoScreen("❌ API no disponible");
                return;
            }
            
            // Crear con API
            window.Notificaciones.crear("api_demo", {
                text: "📊 API en acción",
                text2: "Control programático",
                icono: "loader",
                duration: "infinito"
            });

            // Actualizar después de 2s
            setTimeout(() => {
                window.Notificaciones.actualizar("api_demo", {
                    text: "📊 ¡Actualizado!",
                    text2: "Segundo paso completado"
                });
            }, 2000);

            // Cerrar después de 4s
            setTimeout(() => {
                window.Notificaciones.cerrar("api_demo", () => {
                    MostrarInfoScreen("✅ API completada");
                });
            }, 4000);
        }
    }
];
