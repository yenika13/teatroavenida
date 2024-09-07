const crearAsientos = (sector, filas, letraSector) => {
    const sectorDiv = document.getElementById(sector);
    for (let i = 1; i <= filas; i++) {
        for (let j = 1; j <= 10; j++) {
            const asiento = document.createElement('div');
            asiento.classList.add('asiento');
            asiento.innerHTML = `<span>${letraSector}${i}-${j}</span>`; // Abreviación con letra
            asiento.addEventListener('click', () => {
                asiento.classList.toggle('seleccionado');
            });
            sectorDiv.appendChild(asiento);
        }
    }
};

// Crear asientos con letra "I" para el sector delantero y "D" para el trasero
crearAsientos('delantero', 10, 'I');
crearAsientos('trasero', 10, 'D');



