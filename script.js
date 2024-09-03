// script.js
function createSeats(blockId, prefix) {
    const block = document.getElementById(blockId);
    for (let row = 1; row <= 20; row++) {
        for (let seat = 1; seat <= 10; seat++) {
            const seatElement = document.createElement('div');
            seatElement.classList.add('seat');
            seatElement.id = `${prefix}${row}-${seat}`;
            seatElement.textContent = `${prefix}${row}-${seat}`;
            
            // Añadir un event listener para seleccionar/desmarcar el asiento
            seatElement.addEventListener('click', function() {
                seatElement.classList.toggle('occupied');
            });

            block.appendChild(seatElement);
        }
    }
}

createSeats('block-left', 'L');
createSeats('block-right', 'R');
