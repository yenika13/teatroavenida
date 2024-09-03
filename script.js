// script.js

// Función para generar asientos
function generateSeats(block, rows, columns) {
    const container = document.querySelector(`.block-${block} .seats-container`);
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= columns; j++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            seat.dataset.row = i;
            seat.dataset.column = j;
            seat.addEventListener('click', toggleSeatSelection);
            container.appendChild(seat);
        }
    }
}

// Función para alternar la selección de un asiento
function toggleSeatSelection() {
    this.classList.toggle('selected');
}

