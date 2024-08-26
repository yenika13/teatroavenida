// Función para crear los asientos en cada bloque
function createSeats(blockId, prefix) {
    const block = document.getElementById(blockId);
    for (let row = 1; row <= 20; row++) {
        for (let seat = 1; seat <= 10; seat++) {
            const seatElement = document.createElement('div');
            seatElement.classList.add('seat');
            seatElement.id = `${prefix}${row}-${seat}`;
            seatElement.textContent = `${prefix}${row}-${seat}`;
            block.appendChild(seatElement);
        }
    }
}

// Crear asientos para el bloque izquierdo y derecho
createSeats('block-left', 'I');
createSeats('block-right', 'D');

// Añadir el evento 'click' para cambiar el estado de los asientos
document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('occupied');
    });
});
