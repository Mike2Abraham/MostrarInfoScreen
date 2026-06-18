# 📢 Notificación-SP Creado por Abraham de Jesús Piñirí Megret

[https://img.shields.io/badge/versi%C3%B3n-4.0.0-blue](https://img.shields.io/badge/versi%C3%B3n-4.0.0-blue)
[https://img.shields.io/badge/licencia-MIT-green](https://img.shields.io/badge/licencia-MIT-green)
[https://img.shields.io/badge/tama%C3%B1o-25KB-orange](https://img.shields.io/badge/tama%C3%B1o-25KB-orange)

Una librería de notificaciones versátil y potente para aplicaciones web con soporte para notificaciones estándar, etiquetas minimalistas, botones interactivos, fondos personalizados y gestión inteligente de múltiples notificaciones.

## 📋 Índice

* [Características Principales]()
* [Instalación]()
* [Uso Básico]()
* [Parámetros Completos]()
* [Modos de Notificación]()
* [Sistema de Iconos]()
* [Sistema de Fondos]()
* [Sistema de Tareas/IDs]()
* [API de Notificaciones]()
* [Ejemplos Prácticos]()
* [Solución de Problemas]()
* [Changelog]()

## ✨ Características Principales

* ✅ **Notificaciones estándar** con texto múltiple (hasta 6 líneas)
* ✅ **Modo etiqueta** minimalista para mensajes rápidos
* ✅ **Sistema de iconos** SVG integrados (pregunta, error, aviso, loader)
* ✅ **Botones interactivos** con callbacks y estados de carga
* ✅ **Fondos personalizables** (imágenes, colores, gradientes, blur)
* ✅ **Gestión por ID** para notificaciones persistentes
* ✅ **Control de múltiples notificaciones** con límite automático
* ✅ **Scroll inteligente** con rueda del mouse
* ✅ **Soporte para audio** en notificaciones
* ✅ **Totalmente responsive** y animado
* ✅ **API pública** para control programático

## 📦 Instalación

### Método 1: Inclusión directa

**html**

```
<script src="MostrarInfoScreen.js"></script>
```

### Método 2: Como módulo ES6

**javascript**

```
import './MostrarInfoScreen.js';
```

## 🚀 Uso Básico

### Notificación simple

**javascript**

```
// Texto simple
MostrarInfoScreen("¡Hola Mundo!");

// Con duración personalizada
MostrarInfoScreen({
    text: "Operación exitosa",
    duration: 3000
});
```

### Notificación con imagen y audio

**javascript**

```
MostrarInfoScreen({
    img: "./recursos/icono.png",
    audio: "./recursos/sonido.mp3",
    text: "Descarga completada",
    text2: "El archivo se guardó correctamente",
    duration: 5000
});
```

## Parámetros Completos

### Estructura básica

**javascript**

```
MostrarInfoScreen({
    // Texto (puedes usar hasta text6)
    text: "Texto principal",
    text2: "Texto secundario",
    text3: "Texto adicional",
    text4: "Cuarta línea",
    text5: "Quinta línea",
    text6: "Sexta línea",
  
    // Multimedia
    img: "url/a/imagen.jpg",
    audio: "url/a/audio.mp3",
    emoji: "🎉", // Emoji grande
  
    // Tiempo
    duration: 4000, // ms o "infinito"
  
    // Modos especiales
    etiqueta: "center", // Activa modo etiqueta
    dialogo: "izquierda", // Posición para diálogos
  
    // Iconos del sistema
    icono: "pregunta", // "pregunta", "error", "aviso", "loader", "predeterminado"
  
    // Botones interactivos
    botones: [...],
  
    // Fondos personalizados
    fondo: [...],
  
    // Sistema de IDs/tareas
    tareaID: [...],
  
    // HTML personalizado
    html: "<div>Contenido HTML</div>",
  
    // Inputs
    input: {
        tipo: "text", // "text" o "clave"
        placeholder: "Escribe algo...",
        valorInicial: "",
        id: "miInput"
    }
});
```

## 🎯 Modos de Notificación

### 1. 🔔 Notificación Estándar

**javascript**

```
MostrarInfoScreen({
    img: "./recursos/alerta.png",
    text: "Confirmación requerida",
    text2: "¿Estás seguro de eliminar este elemento?",
    text3: "Esta acción no se puede deshacer",
    duration: 10000,
    botones: [
        {
            texto: "Cancelar",
            accion: () => console.log("Cancelado"),
            estilos: { background: "#6c757d" }
        },
        {
            texto: "Eliminar",
            accion: async () => {
                await eliminarElemento();
                MostrarInfoScreen("Elemento eliminado");
            },
            cargando: "Eliminando...",
            cerrarAlCompletar: true,
            estilos: { background: "#dc3545" }
        }
    ]
});
```

### 2. 🏷️ Modo Etiqueta (Minimalista)

**javascript**

```
// Etiqueta en diferentes posiciones
MostrarInfoScreen({ etiqueta: "top", text: "Conectado" });
MostrarInfoScreen({ etiqueta: "bottom", text: "Desconectado" });
MostrarInfoScreen({ etiqueta: "left", text: "Nuevo mensaje" });
MostrarInfoScreen({ etiqueta: "right", text: "Actualizado" });
MostrarInfoScreen({ etiqueta: "center", text: "Guardado" });

// Con emoji y duración personalizada
MostrarInfoScreen({
    etiqueta: "center",
    emoji: "✅",
    text: "Guardado exitoso",
    duration: 2000,
    audio: "./sounds/click.mp3"
});
```

### 3. 💬 Modo Diálogo

**javascript**

```
MostrarInfoScreen({
    text: "Usuario dice:",
    text2: "¡Hola! ¿Cómo estás?",
    dialogo: "izquierda", // "izquierda", "derecha", "centro"
    img: "./avatars/usuario1.png",
    duration: 5000
});

MostrarInfoScreen({
    text: "Sistema responde:",
    text2: "Todo funcionando correctamente",
    dialogo: "derecha",
    icono: "pregunta",
    duration: 5000
});
```

## 🎨 Sistema de Iconos

### Iconos disponibles

**javascript**

```
// Icono de pregunta (azul)
MostrarInfoScreen({
    text: "¿Estás seguro?",
    icono: "pregunta"
});

// Icono de error (rojo)
MostrarInfoScreen({
    text: "¡Error!",
    text2: "No se pudo completar la operación",
    icono: "error"
});

// Icono de advertencia (amarillo)
MostrarInfoScreen({
    text: "Advertencia",
    text2: "El espacio está por acabarse",
    icono: "aviso"
});

// Icono de carga animado
MostrarInfoScreen({
    text: "Cargando...",
    icono: "loader",
    duration: "infinito"
});

// Icono predeterminado (Base64 PNG)
MostrarInfoScreen({
    text: "Notificación del sistema",
    icono: "predeterminado"
});
```

## 🖼️ Sistema de Fondos

### Fondos simples

**javascript**

```
// Fondo con color
MostrarInfoScreen({
    text: "Modal de confirmación",
    fondo: [
        {
            color: "#00000080", // Negro semi-transparente
            blur: "5px"
        }
    ]
});

// Fondo con imagen
MostrarInfoScreen({
    text: "Procesando video...",
    fondo: [
        {
            imagen: "./fondos/loading-bg.png",
            estilos: {
                opacity: "0.8",
                backgroundSize: "cover"
            }
        },
        {
            blur: true
        }
    ]
});
```

### Fondos con gradientes

**javascript**

```
// Gradiente lineal
MostrarInfoScreen({
    text: "¡Felicidades!",
    fondo: [
        {
            gradiente: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            estilos: { opacity: "0.95" }
        }
    ]
});

// Gradiente radial
MostrarInfoScreen({
    text: "Atención",
    fondo: [
        {
            gradiente: "radial-gradient(circle, rgba(255,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)",
            blur: "3px"
        }
    ]
});
```

### Combinación múltiple

**javascript**

```
MostrarInfoScreen({
    text: "Ventana emergente",
    fondo: [
        {
            imagen: "./fondos/pattern.png",
            estilos: { backgroundSize: "200px" }
        },
        {
            color: "#161616d9"
        },
        {
            blur: "10px"
        }
    ],
    cerrarConClickFondo: true
});
```

## Sistema de Tareas/IDs

### Notificaciones persistentes

**javascript**

```
// Crear notificación persistente
MostrarInfoScreen({
    text: "⏳ Procesando datos...",
    tareaID: [{
        id: "proceso_123",
        operacion: { crear: true }
    }],
    duration: "infinito" // Omitir duration también funciona
});

// En otro lugar, cerrarla
MostrarInfoScreen({
    text: "✅ Proceso completado",
    tareaID: [{
        id: "proceso_123",
        operacion: { crear: false, cerrar: true }
    }],
    duration: 3000
});
```

### Actualización de progreso

**javascript**

```
// Paso 1: Iniciar
MostrarInfoScreen({
    text: "Paso 1/3: Descargando...",
    tareaID: [{ id: "proceso_descarga", operacion: { crear: true } }],
    icono: "loader"
});

// Paso 2: Actualizar (sin cerrar)
setTimeout(() => {
    MostrarInfoScreen({
        text: "Paso 2/3: Procesando...",
        tareaID: [{ 
            id: "proceso_descarga", 
            operacion: { crear: false, cerrar: false } 
        }]
    });
}, 2000);

// Paso 3: Completar y cerrar
setTimeout(() => {
    MostrarInfoScreen({
        text: "✅ ¡Completado!",
        tareaID: [{ 
            id: "proceso_descarga", 
            operacion: { crear: false, cerrar: true } 
        }],
        duration: 3000
    });
}, 5000);
```

### Con función callback

**javascript**

```
MostrarInfoScreen({
    text: "Ejecutando tarea...",
    tareaID: [{
        id: "tarea_async",
        operacion: { 
            crear: false, 
            cerrar: true,
            llamar: () => {
                console.log("Tarea completada");
                actualizarUI();
            }
        }
    }]
});
```

## 🛠️ API de Notificaciones

### Métodos disponibles

**javascript**

```
// Crear notificación persistente
const notif = window.Notificaciones.crear("upload_123", {
    text: "Subiendo archivo...",
    icono: "loader"
});

// Actualizar notificación existente
window.Notificaciones.actualizar("upload_123", {
    text: "Subiendo archivo... 75%"
});

// Cerrar notificación por ID
window.Notificaciones.cerrar("upload_123", () => {
    console.log("Upload completado");
});

// Listar todas las notificaciones activas
const activas = window.Notificaciones.listar();
console.log(activas); // ["upload_123", "proceso_456"]

// Cerrar todas las notificaciones
window.Notificaciones.cerrarTodas();

// Buscar notificación específica
const registro = obtenerNotificacion("mi_id");
if (registro) {
    console.log("Notificación encontrada:", registro);
}
```

## 🔧 Ejemplos Prácticos

### Sistema de Login

**javascript**

```
function usuarioConectado(nombre) {
    MostrarInfoScreen({
        etiqueta: "top",
        emoji: "👤",
        text: `Bienvenido ${nombre}`,
        duration: 3000,
        audio: "./sounds/login.mp3"
    });
}

function usuarioDesconectado() {
    MostrarInfoScreen({
        etiqueta: "top",
        emoji: "🚪",
        text: "Sesión cerrada",
        duration: 2000
    });
}
```

### Validación de Formularios

**javascript**

```
function mostrarError(mensaje) {
    MostrarInfoScreen({
        etiqueta: "bottom",
        emoji: "❌",
        text: mensaje,
        duration: 4000,
        fondo: [
            {
                color: "#dc354550",
                blur: "2px"
            }
        ]
    });
}

function mostrarExito(mensaje) {
    MostrarInfoScreen({
        etiqueta: "bottom",
        emoji: "✅",
        text: mensaje,
        duration: 3000,
        fondo: [
            {
                color: "#28a74550",
                blur: "2px"
            }
        ]
    });
}
```

### Sistema de Descargas

**javascript**

```
async function iniciarDescarga(archivo) {
    const notifId = `descarga_${Date.now()}`;
  
    MostrarInfoScreen({
        text: `📥 Descargando: ${archivo}`,
        text2: "Preparando archivo...",
        tareaID: [{ id: notifId, operacion: { crear: true } }],
        icono: "loader",
        fondo: [{ color: "#00000040", blur: "3px" }]
    });
  
    try {
        // Simular descarga
        await new Promise(resolve => setTimeout(resolve, 2000));
  
        MostrarInfoScreen({
            text: "✅ Descarga completada",
            text2: `${archivo} está listo`,
            tareaID: [{
                id: notifId,
                operacion: { 
                    crear: false, 
                    cerrar: true,
                    llamar: () => abrirCarpetaDescargas()
                }
            }],
            botones: [
                {
                    texto: "Abrir carpeta",
                    accion: () => abrirCarpetaDescargas(),
                    cerrarAlCompletar: true
                }
            ],
            duration: 10000
        });
  
    } catch (error) {
        MostrarInfoScreen({
            text: "❌ Error en la descarga",
            text2: error.message,
            tareaID: [{ id: notifId, operacion: { crear: false, cerrar: true } }],
            duration: 5000
        });
    }
}
```

### Chat/Dialogo

**javascript**

```


function mostrarMensajeChat(usuario, mensaje, avatar, lado = "izquierda") {
    MostrarInfoScreen({
        text: `${usuario}:`,
        text2: mensaje,
        dialogo: lado,
        img: avatar,
        duration: 7000,
        fondo: lado === "izquierda" ? 
            [{ color: "#49505730", blur: "2px" }] :
            [{ color: "#0d6efd30", blur: "2px" }]
    });
}

// Uso
mostrarMensajeChat("Juan", "¡Hola! ¿Cómo estás?", "./avatars/juan.png", "izquierda");
mostrarMensajeChat("Sistema", "Todo funciona correctamente", null, "derecha");
```

### Cambiar Colores

javascript

```
// Notificación con colores personalizados
MostrarInfoScreen({
    text: "¡Hola mundo!",
    text2: "Este es un texto con colores personalizados",
    text3: "Puedes cambiar todo fácilmente",
    colorText: '#ffd700',        // Texto dorado
    colorNotif: '#1a1a2e',       // Fondo oscuro azulado
    colorResalte: '#ff6b6b',     // Borde rojo
    duration: 5000,
    img: 'https://ejemplo.com/imagen.png'
});
```

**javascript**

```
// Notificación con colores en español (alias)
MostrarInfoScreen({
    texto: "Notificación en español",
    texto2: "Con colores personalizados",
    colorText: '#00ff88',        // Texto verde neón
    colorNotif: '#2d2d44',       // Fondo morado oscuro
    colorResalte: '#00ff88',     // Borde verde neón
    duracion: 4000
});
```

**javascript**

```
// Diálogo con colores personalizados
MostrarInfoScreen({
    text: "Confirmación",
    text2: "¿Estás seguro de continuar?",
    colorText: '#ffffff',
    colorNotif: 'rgba(20, 20, 40, 0.95)',
    colorResalte: '#4facfe',
    dialogo: 'center',
    botones: [
        {
            texto: "Cancelar",
            accion: () => console.log("Cancelado")
        },
        {
            texto: "Aceptar",
            accion: () => console.log("Aceptado")
        }
    ]
});
```


### Sistema de Progreso

**javascript**

```
class ProgresoNotificacion {
    constructor(id, totalPasos) {
        this.id = id;
        this.totalPasos = totalPasos;
        this.pasoActual = 0;
    }
  
    iniciar(titulo) {
        this.pasoActual = 0;
        MostrarInfoScreen({
            text: titulo,
            text2: `Paso ${this.pasoActual}/${this.totalPasos}`,
            tareaID: [{ id: this.id, operacion: { crear: true } }],
            icono: "loader",
            duration: "infinito"
        });
    }
  
    siguiente(mensaje) {
        this.pasoActual++;
        MostrarInfoScreen({
            text: mensaje,
            text2: `Paso ${this.pasoActual}/${this.totalPasos}`,
            tareaID: [{ id: this.id, operacion: { crear: false, cerrar: false } }]
        });
    }
  
    completar(mensajeFinal) {
        MostrarInfoScreen({
            text: "✅ Completado",
            text2: mensajeFinal,
            tareaID: [{ 
                id: this.id, 
                operacion: { crear: false, cerrar: true } 
            }],
            duration: 3000
        });
    }
}

// Uso
const progreso = new ProgresoNotificacion("instalacion_123", 3);
progreso.iniciar("Instalando aplicación...");

setTimeout(() => {
    progreso.siguiente("Copiando archivos...");
  
    setTimeout(() => {
        progreso.siguiente("Configurando sistema...");
  
        setTimeout(() => {
            progreso.completar("Instalación exitosa");
        }, 2000);
    }, 2000);
}, 2000);
```

### Inputs en Notificaciones

**javascript**

```
function solicitarNombre() {
    MostrarInfoScreen({
        text: "👤 Registro de usuario",
        text2: "Por favor ingresa tu nombre:",
        input: {
            tipo: "text",
            placeholder: "Tu nombre completo",
            id: "inputNombre"
        },
        botones: [
            {
                texto: "Cancelar",
                accion: () => console.log("Cancelado"),
                estilos: { background: "#6c757d" }
            },
            {
                texto: "Continuar",
                accion: () => {
                    const input = document.getElementById("inputNombre");
                    if (input.value.trim()) {
                        guardarNombre(input.value);
                        MostrarInfoScreen(`¡Hola ${input.value}!`);
                    } else {
                        MostrarInfoScreen("❌ El nombre no puede estar vacío");
                    }
                },
                cerrarAlCompletar: true,
                estilos: { background: "#0d6efd" }
            }
        ],
        duration: "infinito"
    });
}

function solicitarClave() {
    MostrarInfoScreen({
        text: "🔒 Ingresa tu contraseña",
        input: {
            tipo: "clave",
            placeholder: "Contraseña segura",
            id: "inputClave"
        },
        botones: [
            {
                texto: "Verificar",
                accion: () => {
                    const clave = document.getElementById("inputClave").value;
                    if (clave === "1234") {
                        MostrarInfoScreen("✅ Contraseña correcta");
                    } else {
                        MostrarInfoScreen("❌ Contraseña incorrecta");
                    }
                },
                cerrarAlCompletar: true
            }
        ]
    });
}
```

## 🐛 Solución de Problemas

### Problemas Comunes

| Problema                                        | Causa                                      | Solución                                                        |
| ----------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
| **Imagen no carga**                       | Ruta incorrecta o imagen no existe         | Verifica la ruta, usa `onerror` para manejar errores           |
| **Audio no reproduce**                    | Navegador bloquea autoplay                 | Añadir interacción del usuario primero o usar `userGesture`  |
| **Botones no funcionan**                  | `accion` no es función o string válido | Asegurar que sea función o string como `"miFuncion()"`        |
| **Notificación no desaparece**           | `duration: "infinito"` sin cerrar        | Usar `tareaID` para cerrar programáticamente                  |
| **Fondo no se muestra**                   | Error en configuración de `fondo`       | Verificar que sea array y tenga propiedades válidas             |
| **Multiples notificaciones desordenadas** | Más de 3 notificaciones                   | El sistema añade scroll automático, usar botón "Cerrar todas" |

### Debugging

**javascript**

```
// Verificar que la función esté cargada
console.log(typeof MostrarInfoScreen); // Debería ser "function"

// Verificar registro de notificaciones
console.log("Notificaciones activas:", window.Notificaciones.listar());

// Probar notificación simple
MostrarInfoScreen("Test de funcionamiento");

// Verificar errores en consola
MostrarInfoScreen({
    text: "Test con error",
    icono: "icono_inexistente" // Debería mostrar icono predeterminado
});
```

### Manejo de Errores en Botones

**javascript**

```
MostrarInfoScreen({
    text: "Acción riesgosa",
    botones: [{
        texto: "Ejecutar",
        accion: async () => {
            throw new Error("Algo salió mal");
        },
        onError: (error) => {
            MostrarInfoScreen({
                text: "❌ Error",
                text2: error.message,
                duration: 5000
            });
        }
    }]
});
```

## 📊 Changelog

### v4.0.0 (Actual)

* ✅ **Sistema completo de notificaciones** con múltiples modos
* ✅ **Iconos SVG integrados** (pregunta, error, aviso, loader)
* ✅ **Sistema de fondos** (imágenes, colores, gradientes, blur)
* ✅ **Gestión por ID** para notificaciones persistentes
* ✅ **API pública** (`window.Notificaciones`) para control programático
* ✅ **Botones interactivos** con callbacks y estados de carga
* ✅ **Inputs en notificaciones** para formularios rápidos
* ✅ **Modo diálogo** para conversaciones
* ✅ **Límite automático** de 3 notificaciones visibles
* ✅ **Scroll inteligente** con rueda del mouse
* ✅ **Animaciones CSS3** fluidas y personalizables
* ✅ **Totalmente responsive** en todos los dispositivos

### v3.0.0

* ✅ Sistema básico de notificaciones
* ✅ Modo etiqueta minimalista
* ✅ Soporte para imágenes y audio
* ✅ Botones básicos

### v2.0.0

* ✅ Notificaciones simples con texto
* ✅ Duración configurable
* ✅ Animaciones básicas

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles.

## 📧 Soporte

Para reportar bugs o solicitar características, por favor usa el [sistema de issues](https://github.com/Mike2Abraham/MostrarInfoScreen/issues).

---

**Desarrollado con ❤️ para la comunidad de desarrollo web**

*¿Te gusta este proyecto? ¡Dale una estrella en GitHub!*
