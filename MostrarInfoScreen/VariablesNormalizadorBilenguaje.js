
// ============================================
// NORMALIZADOR BILINGÜE COMPLETO
// ============================================
const NORMALIZADOR = {
    // Posiciones de diálogo (valores normalizados a clases españolas)
    dialogo: {
        // Español e inglés → valor CSS final
        'centro': 'center', 'centrar': 'center', 'medio': 'center', 'centered': 'center',
        'center': 'center',
        'arriba': 'top', 'superior': 'top', 'top': 'top',
        'abajo': 'bottom', 'inferior': 'bottom', 'bottom': 'bottom',
        'izquierda': 'left', 'left': 'left',
        'derecha': 'right', 'right': 'right',
        'arriba-izquierda': 'top-left', 'top-left': 'top-left',
        'arriba-derecha': 'top-right', 'top-right': 'top-right',
        'abajo-izquierda': 'bottom-left', 'bottom-left': 'bottom-left',
        'abajo-derecha': 'bottom-right', 'bottom-right': 'bottom-right',
        'none': 'none', 'desactivado': 'none', 'disable': 'none', 'disabled': 'none'
    },
    
    // Duración
    duration: {
        'infinito': 'infinito', 'infinity': 'infinito', 'infinite': 'infinito', 'siempre': 'infinito', 'forever': 'infinito'
    },
    
    // Tipo de etiqueta
    etiqueta: {
        'centro': 'center', 'centrar': 'center', 'medio': 'center', 'center': 'center',
        'arriba': 'top', 'superior': 'top', 'top': 'top',
        'abajo': 'bottom', 'inferior': 'bottom', 'bottom': 'bottom'
    },
    
    // Posición para diálogos y alias de diálogo
    posicion: {
        'centro': 'centro', 'center': 'centro',
        'arriba': 'arriba', 'top': 'arriba',
        'abajo': 'abajo', 'bottom': 'abajo',
        'izquierda': 'izquierda', 'left': 'izquierda',
        'derecha': 'derecha', 'right': 'derecha'
    },
    
    // Tipo de input (tipo)
    tipoInput: {
        'texto': 'text', 'text': 'text',
        'clave': 'password', 'contraseña': 'password', 'password': 'password',
        'numero': 'number', 'number': 'number',
        'email': 'email', 'correo': 'email',
        'telefono': 'tel', 'tel': 'tel'
    },
    
    // Alineación de texto
    alinear: {
        'centro': 'center', 'centrar': 'center', 'center': 'center',
        'izquierda': 'left', 'left': 'left',
        'derecha': 'right', 'right': 'right',
        'justificado': 'justify', 'justify': 'justify'
    },
    
    // Dirección de scroll o animación
    direccion: {
        'arriba': 'up', 'up': 'up',
        'abajo': 'down', 'down': 'down',
        'izquierda': 'left', 'left': 'left',
        'derecha': 'right', 'right': 'right'
    },
    
    // Tamaños comunes
    tamaño: {
        'pequeño': 'small', 'pequeno': 'small', 'small': 'small',
        'mediano': 'medium', 'medium': 'medium',
        'grande': 'large', 'large': 'large'
    },
    
    // Estado/condición
    estado: {
        'exito': 'success', 'éxito': 'success', 'success': 'success',
        'error': 'error', 'fail': 'error',
        'advertencia': 'warning', 'warning': 'warning',
        'info': 'info', 'informacion': 'info'
    },
    
    // Botones comunes
    boton: {
        'aceptar': 'accept', 'ok': 'accept', 'accept': 'accept',
        'cancelar': 'cancel', 'cancel': 'cancel',
        'cerrar': 'close', 'close': 'close',
        'guardar': 'save', 'save': 'save',
        'eliminar': 'delete', 'borrar': 'delete', 'delete': 'delete'
    }
};

const CONFIG_KEY_ALIASES = {
    // Texto / imagen / multimedia
    'texto': 'text', 'text': 'text',
    'texto2': 'text2', 'text2': 'text2',
    'texto3': 'text3', 'text3': 'text3',
    'imagen': 'img', 'image': 'img', 'img': 'img',
    'audio': 'audio', 'sonido': 'audio',
    
    // Duración / tiempo
    'duracion': 'duration', 'duration': 'duration', 'tiempo': 'duration', 'time': 'duration',
    
    // Diálogo / posición
    'dialogo': 'dialogo', 'dialog': 'dialogo', 'posicion': 'dialogo', 'position': 'dialogo',
    
    // Etiquetas
    'etiqueta': 'etiqueta', 'tag': 'etiqueta', 'label': 'etiqueta',
    
    // Botones
    'botones': 'botones', 'buttons': 'botones', 'boton': 'botones', 'button': 'botones',
    
    // Arrastre
    'arrastrable': 'arrastrable', 'draggable': 'arrastrable', 'drag': 'arrastrable',
    
    // Fondos / backdrop
    'fondo': 'fondo', 'background': 'fondo', 'backdrop': 'fondo',
    'cerrarconclickfondo': 'cerrarConClickFondo', 'closeonbackdropclick': 'cerrarConClickFondo', 'closeonbackgroundclick': 'cerrarConClickFondo',
    
    // Tarea / ID
    'tareaid': 'tareaID', 'taskid': 'tareaID', 'taskId': 'tareaID',
    
    // Iconos
    'icono': 'icono', 'icon': 'icono',
    
    // Estilos
    'estilos': 'estilos', 'styles': 'estilos',
    
    // HTML / emoji
    'html': 'html', 'emoji': 'emoji',
    
    // Input
    'input': 'input',
    
    // Otros valores que pueden usarse como alias
    'cerrarconclickfondo': 'cerrarConClickFondo',

    // ===== NUEVOS COLORES =====
    'colortext': 'colorText', 'colorText': 'colorText',
    'colornotif': 'colorNotif', 'colorNotif': 'colorNotif',
    'colorresalte': 'colorResalte', 'colorResalte': 'colorResalte',
    'colorresaltar': 'colorResalte',
    'colorborde': 'colorResalte', 'bordercolor': 'colorResalte'
};

const BUTTON_KEY_ALIASES = {
    'texto': 'texto', 'text': 'texto',
    'accion': 'accion', 'action': 'accion',
    'cargando': 'cargando', 'loading': 'cargando',
    'cerraralcompletar': 'cerrarAlCompletar', 'closeoncomplete': 'cerrarAlCompletar',
    'estilos': 'estilos', 'styles': 'estilos', 'style': 'estilos',
    'onerror': 'onError'
};

const INPUT_KEY_ALIASES = {
    'tipo': 'tipo', 'type': 'tipo',
    'valorinicial': 'valorInicial', 'initialvalue': 'valorInicial', 'value': 'valorInicial',
    'placeholder': 'placeholder',
    'id': 'id'
};

const FONDO_KEY_ALIASES = {
    'imagen': 'imagen', 'image': 'imagen',
    'color': 'color',
    'gradiente': 'gradiente', 'gradient': 'gradiente',
    'blur': 'blur',
    'estilos': 'estilos', 'styles': 'estilos', 'style': 'estilos'
};

const TASK_KEY_ALIASES = {
    'operacion': 'operacion', 'operation': 'operacion',
    'crear': 'crear', 'create': 'crear',
    'cerrar': 'cerrar', 'close': 'cerrar',
    'llamar': 'llamar', 'call': 'llamar'
};

const BOOLEAN_KEYS = new Set([
    'arrastrable',
    'cerrarConClickFondo',
    'cerrarAlCompletar',
    'crear',
    'cerrar'
]);

export {

       NORMALIZADOR,
       CONFIG_KEY_ALIASES,
       BUTTON_KEY_ALIASES,
       INPUT_KEY_ALIASES,
       FONDO_KEY_ALIASES,
       TASK_KEY_ALIASES,
       BOOLEAN_KEYS

    };