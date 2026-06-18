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

export { ejecutarMetodoGlobal }