// Función para crear los asientos en un solo bloque
function createSeats(containerId) {
    const container = document.getElementById(containerId);
    for (let row = 1; row <= 20; row++) {
        for (let seat = 1; seat <= 10; seat++) {
            const seatElement = document.createElement('div');
            seatElement.classList.add('seat');
            seatElement.id = `seat${row}-${seat}`;  // Cambiar el prefijo para unificar los asientos
            seatElement.textContent = `Fila ${row}, Asiento ${seat}`;
            container.appendChild(seatElement);
        }
    }
}

// Crear los asientos en el contenedor principal
createSeats('seats-grid');

// Añadir el evento 'click' para cambiar el estado de los asientos
document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('occupied');
    });
});

