# 📢 Notificación-SP Creado por Abraham de Jesús Piñirí Megret

**Notificación-SP** es una **librería de JavaScript versátil** para mostrar notificaciones en pantalla en aplicaciones web. Incluye soporte para texto, imágenes, emojis, iconos (SVG y PNG Base64), audio, inputs, botones interactivos, modo etiqueta minimalista, gestión inteligente de múltiples notificaciones, **ventanas arrastrables con sistema de peso**, **normalización bilingüe (español/inglés)** y **fondos personalizables con blur**.

Con esta librería puedes crear desde **notificaciones simples** hasta **tutoriales paso a paso** sin esfuerzo, controlando duración, posición y comportamiento de forma fácil y predecible.

---

## 📦 Instalación

Incluye la librería en tu proyecto HTML:

```html
<!-- Librería de notificaciones -->
<script src="./Notificacion-SP.js"></script>
⚡ Uso básico
1. Notificación simple
javascript
MostrarInfoScreen("¡Hola Mundo!");
2. Con texto y duración personalizada
javascript
MostrarInfoScreen({
    text: "Operación exitosa",
    duration: 3000
});
3. Con imagen o emoji
javascript
MostrarInfoScreen({
    text: "Nuevo mensaje recibido",
    img: "📩",
    duration: 4000
});
🌍 Normalización bilingüe (español/inglés)
Todos los parámetros aceptan español e inglés indistintamente. Puedes mezclar ambos idiomas en la misma configuración.

Español	Inglés
dialogo: "centro"	dialogo: "center"
dialogo: "arriba"	dialogo: "top"
dialogo: "abajo"	dialogo: "bottom"
dialogo: "izquierda"	dialogo: "left"
dialogo: "derecha"	dialogo: "right"
duration: "infinito"	duration: "infinity"
etiqueta: "centro"	etiqueta: "center"
input.tipo: "clave"	input.tipo: "password"
input.tipo: "texto"	input.tipo: "text"
input.tipo: "numero"	input.tipo: "number"
input.tipo: "correo"	input.tipo: "email"
alinear: "centro"	alinear: "center"
tamaño: "pequeño"	tamaño: "small"
estado: "exito"	estado: "success"
Ejemplo mixto (funciona perfectamente):

javascript
MostrarInfoScreen({
    dialogo: "centro",      // español
    duration: "infinity",   // inglés
    text: "Mezcla de idiomas",
    input: { tipo: "clave" } // español
});
🏷️ Modo etiqueta (minimalista)
Notificaciones compactas de una sola línea. Perfectas para mensajes rápidos.

javascript
MostrarInfoScreen({ etiqueta: "top", text: "Conectado" });
MostrarInfoScreen({ etiqueta: "bottom", text: "Desconectado" });
MostrarInfoScreen({ etiqueta: "left", text: "Nuevo mensaje" });
MostrarInfoScreen({ etiqueta: "right", text: "Actualizado" });
🔔 Iconos del sistema
Clave	Icono	Descripción
pregunta	❓	Pregunta o ayuda
error	❌	Mensaje de error
aviso	⚠️	Advertencia
loader	⏳	Indicador de carga
predeterminado	📦 (Base64)	Icono por defecto
Uso:

javascript
MostrarInfoScreen({
    icono: "error",
    text: "Ocurrió un error inesperado"
});
🔊 Audio
javascript
MostrarInfoScreen({
    text: "Descarga completada",
    audio: "./sounds/exito.mp3",
    duration: 4000
});
📝 Inputs dentro de la notificación
javascript
MostrarInfoScreen({
    text: "Ingresa tu clave:",
    input: {
        tipo: "clave",
        placeholder: "••••••",
        id: "claveInput"
    }
});
🎛️ Botones interactivos
javascript
MostrarInfoScreen({
    text: "¿Deseas eliminar este archivo?",
    botones: [
        {
            texto: "Cancelar",
            accion: () => console.log("Cancelado"),
            estilos: { background: "#6c757d" }
        },
        {
            texto: "Eliminar",
            accion: async () => await eliminarArchivo(),
            cargando: "Eliminando...",
            cerrarAlCompletar: true,
            estilos: { background: "#dc3545", color: "#fff" }
        }
    ]
});
🖱️ Ventanas arrastrables con sistema de peso
Puedes hacer que cualquier notificación sea arrastrable por el usuario, con un sistema de peso que controla la sensibilidad al movimiento.

Peso	Comportamiento
0	Muy liviano (se mueve con facilidad)
5	Neutral (balanceado)
10	Muy pesado (requiere más esfuerzo)
Valores fuera del rango (0-10) se normalizan automáticamente. Decimales se redondean al entero más cercano.

javascript
// Notificación liviana (fácil de arrastrar)
MostrarInfoScreen({
    text: "Ventana liviana",
    arrastrable: 1
});

// Notificación pesada (difícil de arrastrar)
MostrarInfoScreen({
    text: "Ventana pesada",
    arrastrable: 9
});

// Peso neutral (valor por defecto si solo se pone true)
MostrarInfoScreen({
    text: "Ventana normal",
    arrastrable: true  // equivale a peso 5
});

// Sin arrastre (comportamiento original)
MostrarInfoScreen({
    text: "Ventana fija"
    // no incluir arrastrable
});
Características del sistema arrastrable:

✅ Respeta los límites del navegador (no se sale de la pantalla)

✅ No interfiere con botones, inputs o el botón de cerrar

✅ Cambia el cursor a grab / grabbing para feedback visual

✅ La resistencia al movimiento es proporcional al peso configurado

🎨 Fondos personalizables con blur
Puedes agregar fondos con color, imagen, gradiente y efecto blur a tus notificaciones.

javascript
MostrarInfoScreen({
    text: "Notificación con fondo",
    fondo: [
        { color: "#00000080", blur: "5px" },
        { imagen: "./fondo.jpg" }
    ],
    cerrarConClickFondo: true  // Cierra al hacer clic fuera
});
Propiedad de fondo	Descripción
color	Color sólido (formato HEX, RGB, RGBA)
imagen	URL de imagen de fondo
gradiente	Gradiente CSS (ej: linear-gradient(...))
blur	Efecto blur (valor en px, ej: "10px")
estilos	Estilos CSS personalizados adicionales
⏱ Duración
duration puede ser un número en milisegundos, o 'infinito' para que la notificación no desaparezca automáticamente.

La notificación se pausará al hacer hover si es infinita o temporal.

javascript
MostrarInfoScreen({
    text: "Cargando...",
    duration: 'infinito',
    icono: "loader"
});
🗂️ Tutorial paso a paso
javascript
function mostrarTutorial() {
    const tarjetas = [
        { text: "Paso 1", text2: "Descripción paso 1", img: "📦" },
        { text: "Paso 2", text2: "Descripción paso 2", img: "🛡️" },
        { text: "Paso 3", text2: "Descripción paso 3", img: "📥" },
    ];
    
    let currentIndex = 0;

    function mostrarTarjeta(index) {
        const tarjeta = tarjetas[index];
        MostrarInfoScreen({
            dialogo: "centro",
            text: tarjeta.text,
            text2: tarjeta.text2,
            img: tarjeta.img,
            duration: 'infinito',
            botones: [
                {
                    texto: "← Anterior",
                    accion: () => mostrarTarjeta(index - 1),
                    estilos: { background: "#6c757d" },
                    cerrarAlCompletar: true,
                    disabled: index === 0
                },
                {
                    texto: "Siguiente →",
                    accion: () => mostrarTarjeta(index + 1),
                    estilos: { background: "#2dd4bf", color: "#042024" },
                    cerrarAlCompletar: true,
                    disabled: index === tarjetas.length - 1
                }
            ]
        });
    }

    mostrarTarjeta(currentIndex);
}
🌀 Gestión de múltiples notificaciones
Máximo 3 notificaciones visibles.

Scroll con la rueda del mouse si hay más de 3.

Botón "Cerrar todas" aparece automáticamente si hay exceso de notificaciones.

🆔 Sistema de identificación (tareaID)
Puedes asignar un ID a una notificación para controlarla desde cualquier parte de tu código.

javascript
// Crear notificación persistente con ID
MostrarInfoScreen({
    text: "Descargando archivo...",
    duration: "infinito",
    tareaID: [{ id: "descarga_001", operacion: { crear: true } }]
});

// Cerrar notificación por ID desde otro lugar
MostrarInfoScreen({
    tareaID: [{ id: "descarga_001", operacion: { crear: false, cerrar: true } }]
});

// API pública para gestión de notificaciones
window.Notificaciones.crear("mi_id", { text: "Hola" });
window.Notificaciones.cerrar("mi_id");
window.Notificaciones.listar();  // ["mi_id", ...]
window.Notificaciones.cerrarTodas();
🎨 Personalización CSS
css
.notification-container       /* Contenedor principal */
.notification                 /* Notificación individual */
.notification.visible         /* Estado visible */
.notification.hiding          /* Animación de salida */
.notification.arrastrable     /* Notificación arrastrable */
.etiqueta                     /* Modo etiqueta */
.notification-buttons         /* Contenedor de botones */
.notification-button          /* Botones individuales */
.notification-img             /* Imagen de notificación */
.notification-svg             /* Iconos SVG */
.notification-emoji           /* Emoji grande */
.notification-html            /* Contenido HTML */
.close-all-btn                /* Botón cerrar todas */
.backdrop-image               /* Fondo con imagen */
.backdrop-color               /* Fondo con color */
.backdrop-gradient            /* Fondo con gradiente */
.backdrop-blur                /* Fondo con efecto blur */
💡 Tips y buenas prácticas
Usar img o icono explícitamente para evitar que aparezca el predeterminado sin querer.

Combinar texto + icono + audio para notificaciones más atractivas.

Para tutoriales largos, usa un array de tarjetas y un índice para navegar, evitando duplicar funciones.

Inputs permiten interactuar con el usuario sin abrir un modal extra.

Siempre manejar errores en botones o métodos globales para evitar que rompa la notificación.

Usa arrastrable para ventanas que el usuario pueda mover (ideal para tutoriales o modales).

El sistema bilingüe te permite escribir código más natural en español o inglés.

📖 Ejemplo completo
javascript
MostrarInfoScreen({
    dialogo: "centro",
    img: "📚",
    text: "Centro de Ayuda",
    text2: "Aprende a usar la librería al máximo",
    duration: 'infinito',
    arrastrable: 5,  // peso neutral, se puede mover
    fondo: [
        { color: "#00000060", blur: "8px" }
    ],
    cerrarConClickFondo: true,
    botones: [
        { texto: "Comenzar", accion: () => iniciarTutorial(), estilos: { background: "#2dd4bf", color: "#042024" }, cerrarAlCompletar: true },
        { texto: "Cerrar", estilos: { background: "#6c757d" }, cerrarAlCompletar: true }
    ]
});

---

## 🗂️ Tutorial paso a paso

```javascript
function mostrarTutorial() {
    const tarjetas = [
        { text: "Paso 1", text2: "Descripción paso 1", img: "📦" },
        { text: "Paso 2", text2: "Descripción paso 2", img: "🛡️" },
        { text: "Paso 3", text2: "Descripción paso 3", img: "📥" },
    ];
    
    let currentIndex = 0;

    function mostrarTarjeta(index) {
        const tarjeta = tarjetas[index];
        MostrarInfoScreen({
            dialogo: "centro",
            text: tarjeta.text,
            text2: tarjeta.text2,
            img: tarjeta.img,
            duration: 'infinito',
            botones: [
                {
                    texto: "← Anterior",
                    accion: () => mostrarTarjeta(index - 1),
                    estilos: { background: "#6c757d" },
                    cerrarAlCompletar: true,
                    disabled: index === 0
                },
                {
                    texto: "Siguiente →",
                    accion: () => mostrarTarjeta(index + 1),
                    estilos: { background: "#2dd4bf", color: "#042024" },
                    cerrarAlCompletar: true,
                    disabled: index === tarjetas.length - 1
                }
            ]
        });
    }

    mostrarTarjeta(currentIndex);
}
```

---

## 🌀 Gestión de múltiples notificaciones

* Máximo 3 notificaciones visibles.
* Scroll con la rueda del mouse si hay más de 3.
* Botón “Cerrar todas” aparece automáticamente si hay exceso de notificaciones.

---

## 🎨 Personalización CSS

```css
.notification-container       /* Contenedor principal */
.notification                 /* Notificación individual */
.notification.visible         /* Estado visible */
.notification.hiding          /* Animación de salida */
.etiqueta                     /* Modo etiqueta */
.notification-buttons         /* Contenedor de botones */
.notification-button          /* Botones individuales */
.notification-img             /* Imagen de notificación */
.notification-svg             /* Iconos SVG */
.notification-emoji           /* Emoji grande */
.notification-html            /* Contenido HTML */
.close-all-btn                /* Botón cerrar todas */
```

---

## 💡 Tips y buenas prácticas

* Usar `img` o `icono` explícitamente para evitar que aparezca el predeterminado sin querer.
* Combinar texto + icono + audio para notificaciones más atractivas.
* Para tutoriales largos, usa un array de tarjetas y un índice para navegar, evitando duplicar funciones.
* Inputs permiten interactuar con el usuario sin abrir un modal extra.
* Siempre manejar errores en botones o métodos globales para evitar que rompa la notificación.

---

## 📖 Ejemplo completo

```javascript
MostrarInfoScreen({
    dialogo: "centro",
    img: "📚",
    text: "Centro de Ayuda",
    text2: "Aprende a usar la librería al máximo",
    duration: 'infinito',
    botones: [
        { texto: "Comenzar", accion: () => iniciarTutorial(), estilos: { background: "#2dd4bf", color: "#042024" }, cerrarAlCompletar: true },
        { texto: "Cerrar", estilos: { background: "#6c757d" }, cerrarAlCompletar: true }
    ]
});
```

---

## 🚀 Changelog

**v3.1.0**
✅ ✅ Ventanas arrastrables con sistema de peso (0-10)
✅ Normalización bilingüe (español/inglés) para todos los parámetros
✅ Fondos personalizables con imagen, color, gradiente y blur
✅ Sistema de identificación (tareaID) para control remoto de notificaciones
✅ API pública window.Notificaciones
✅ Soporte para alinear, tamaño, estado, direccion

**v3.0.0**
✅ Texto múltiple y notificaciones estándar
✅ Soporte imágenes, audio y emojis
✅ Botones interactivos y promesas
✅ Inputs dentro de notificaciones
✅ Modo etiqueta minimalista
✅ Gestión de múltiples notificaciones
✅ Scroll inteligente con rueda del mouse
✅ Ejecución de métodos globales
✅ Totalmente responsive y configurable