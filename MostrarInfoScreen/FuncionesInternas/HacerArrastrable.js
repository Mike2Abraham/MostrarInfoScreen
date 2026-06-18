import { Notificaciones } from './ApiPublica.js'

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

export { hacerArrastrable }