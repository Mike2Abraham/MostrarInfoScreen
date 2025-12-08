# 📢 Notificación-SP Creado por Abraham de Jesús Piñirí Megret

**Notificación-SP** es una **librería de JavaScript versátil** para mostrar notificaciones en pantalla en aplicaciones web. Incluye soporte para texto, imágenes, emojis, iconos (SVG y PNG Base64), audio, inputs, botones interactivos, modo etiqueta minimalista y gestión inteligente de múltiples notificaciones.

Con esta librería puedes crear desde **notificaciones simples** hasta **tutoriales paso a paso** sin esfuerzo, controlando duración, posición y comportamiento de forma fácil y predecible.

---

## 📦 Instalación

Incluye la librería en tu proyecto HTML:

```html
<!-- Librería de notificaciones -->
<script src="./Notificacion-SP.js"></script>
```

---

## ⚡ Uso básico

### 1. Notificación simple

```javascript
MostrarInfoScreen("¡Hola Mundo!");
```

### 2. Con texto y duración personalizada

```javascript
MostrarInfoScreen({
    text: "Operación exitosa",
    duration: 3000
});
```

### 3. Con imagen o emoji

```javascript
MostrarInfoScreen({
    text: "Nuevo mensaje recibido",
    img: "📩",
    duration: 4000
});
```

---

## 🏷️ Modo etiqueta (minimalista)

Notificaciones compactas de una sola línea. Perfectas para mensajes rápidos.

```javascript
MostrarInfoScreen({ etiqueta: "top", text: "Conectado" });
MostrarInfoScreen({ etiqueta: "bottom", text: "Desconectado" });
MostrarInfoScreen({ etiqueta: "left", text: "Nuevo mensaje" });
MostrarInfoScreen({ etiqueta: "right", text: "Actualizado" });
```

---

## 🔔 Iconos del sistema

| Clave            | Icono       | Descripción        |
| ---------------- | ----------- | ------------------ |
| `pregunta`       | ❓           | Pregunta o ayuda   |
| `error`          | ❌           | Mensaje de error   |
| `aviso`          | ⚠️          | Advertencia        |
| `loader`         | ⏳           | Indicador de carga |
| `predeterminado` | 📦 (Base64) | Icono por defecto  |

**Uso:**

```javascript
MostrarInfoScreen({
    icono: "error",
    text: "Ocurrió un error inesperado"
});
```

---

## 🔊 Audio

```javascript
MostrarInfoScreen({
    text: "Descarga completada",
    audio: "./sounds/exito.mp3",
    duration: 4000
});
```

---

## 📝 Inputs dentro de la notificación

```javascript
MostrarInfoScreen({
    text: "Ingresa tu clave:",
    input: {
        tipo: "clave",
        placeholder: "••••••",
        id: "claveInput"
    }
});
```

---

## 🎛️ Botones interactivos

```javascript
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
```

---

## ⏱ Duración

* `duration` puede ser un número en milisegundos, o `'infinito'` para que la notificación no desaparezca automáticamente.
* La notificación se pausará al hacer hover si es infinita o temporal.

```javascript
MostrarInfoScreen({
    text: "Cargando...",
    duration: 'infinito',
    icono: "loader"
});
```

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
