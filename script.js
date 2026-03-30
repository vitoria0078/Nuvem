function createRain() {
    const container = document.querySelector('.container');
    const drop = document.createElement('span');
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    drop.innerText = chars[Math.floor(Math.random() * chars.length)];
    drop.classList.add('drop');
    
    // Área de queda centralizada sob a nuvem desfocada
    const cloudWidth = 300;
    const screenWidth = window.innerWidth;
    const leftPosition = (screenWidth / 2 - cloudWidth / 2) + Math.random() * cloudWidth;
    
    const duration = 1.5; // Segundos de queda
    
    drop.style.left = `${leftPosition}px`;
    drop.style.animationDuration = `${duration}s`;
    
    container.appendChild(drop);

    // Remove a gota e cria o impacto no chão
    setTimeout(() => {
        createSplash(leftPosition);
        drop.remove();
    }, duration * 1000);
}

function createSplash(x) {
    const container = document.querySelector('.container');
    const splash = document.createElement('div');
    
    splash.classList.add('splash');
    splash.style.left = `${x}px`;
    
    container.appendChild(splash);
    
    setTimeout(() => {
        splash.remove();
    }, 300);
}

// Frequência da chuva (ajuste o valor para mais ou menos gotas)
setInterval(createRain, 120);