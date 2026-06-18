/**
 * Normaliza un objeto completo (recursivo para objetos anidados)
 * Convierte cualquier valor en español a inglés y normaliza claves bilingües
 */
function normalizarConfig(config, parentKey = null) {
    if (!config || typeof config !== 'object') return config;
    
    // Si es array, normalizar cada elemento usando el padre actual
    if (Array.isArray(config)) {
        return config.map(item => normalizarConfig(item, parentKey));
    }
    
    const resultado = {};
    
    for (const [rawKey, value] of Object.entries(config)) {
        const keyLower = String(rawKey).toLowerCase();
        const isStyleObject = parentKey === 'estilos' || parentKey === 'styles';
        let keyNormalizada = isStyleObject ? rawKey : (CONFIG_KEY_ALIASES[keyLower] || rawKey);

        if (!isStyleObject) {
            if (parentKey === 'botones') {
                keyNormalizada = BUTTON_KEY_ALIASES[keyLower] || keyNormalizada;
            } else if (parentKey === 'input') {
                keyNormalizada = INPUT_KEY_ALIASES[keyLower] || keyNormalizada;
            } else if (parentKey === 'fondo') {
                keyNormalizada = FONDO_KEY_ALIASES[keyLower] || keyNormalizada;
            } else if (parentKey === 'tareaID') {
                keyNormalizada = TASK_KEY_ALIASES[keyLower] || keyNormalizada;
            } else if (parentKey === 'operacion') {
                keyNormalizada = TASK_KEY_ALIASES[keyLower] || keyNormalizada;
            }
        }

        let valorNormalizado = value;

        if (typeof value === 'object' && value !== null) {
            valorNormalizado = normalizarConfig(value, keyNormalizada);
        }

        if (typeof value === 'string') {
            const lowerValue = value.toLowerCase();

            if (BOOLEAN_KEYS.has(keyNormalizada)) {
                if (lowerValue === 'true' || lowerValue === 'verdadero') {
                    valorNormalizado = true;
                } else if (lowerValue === 'false' || lowerValue === 'falso') {
                    valorNormalizado = false;
                }
            }

            switch (keyNormalizada) {
                case 'dialogo':
                    if (NORMALIZADOR.dialogo[lowerValue]) {
                        valorNormalizado = NORMALIZADOR.dialogo[lowerValue];
                    }
                    break;

                case 'duration':
                    if (NORMALIZADOR.duration[lowerValue]) {
                        valorNormalizado = NORMALIZADOR.duration[lowerValue];
                    }
                    break;

                case 'etiqueta':
                    if (NORMALIZADOR.etiqueta[lowerValue]) {
                        valorNormalizado = NORMALIZADOR.etiqueta[lowerValue];
                    }
                    break;

                case 'alinear':
                case 'align':
                    if (NORMALIZADOR.alinear[lowerValue]) {
                        valorNormalizado = NORMALIZADOR.alinear[lowerValue];
                    }
                    break;

                case 'posicion':
                case 'position':
                    if (NORMALIZADOR.posicion[lowerValue]) {
                        valorNormalizado = NORMALIZADOR.posicion[lowerValue];
                    }
                    break;

                case 'direccion':
                case 'direction':
                    if (NORMALIZADOR.direccion[lowerValue]) {
                        valorNormalizado = NORMALIZADOR.direccion[lowerValue];
                    }
                    break;

                case 'tamaño':
                case 'size':
                    if (NORMALIZADOR.tamaño[lowerValue]) {
                        valorNormalizado = NORMALIZADOR.tamaño[lowerValue];
                    }
                    break;

                case 'estado':
                case 'status':
                    if (NORMALIZADOR.estado[lowerValue]) {
                        valorNormalizado = NORMALIZADOR.estado[lowerValue];
                    }
                    break;

                case 'tipo':
                    if (NORMALIZADOR.tipoInput[lowerValue]) {
                        valorNormalizado = NORMALIZADOR.tipoInput[lowerValue];
                    }
                    break;
            }
        }

        if (keyNormalizada === 'botones' && Array.isArray(valorNormalizado)) {
            valorNormalizado = valorNormalizado.map(boton => {
                if (boton && typeof boton === 'object') {
                    const botonNorm = normalizarConfig(boton, 'botones');
                    if (botonNorm.texto && typeof botonNorm.texto === 'string') {
                        const textoLower = botonNorm.texto.toLowerCase();
                        if (NORMALIZADOR.boton[textoLower]) {
                            botonNorm._tipoNormalizado = NORMALIZADOR.boton[textoLower];
                        }
                    }
                    return botonNorm;
                }
                return boton;
            });
        }

        resultado[keyNormalizada] = valorNormalizado;
    }
    
    return resultado;
}

export { normalizarConfig }