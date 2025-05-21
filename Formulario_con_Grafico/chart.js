let ventas = JSON.parse(localStorage.getItem('ventas')) || [];

const ctx = document.getElementById('graficoVentas').getContext('2d');
const grafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ventas.map(item => item.mes),
        datasets: [{
            label: 'Ventas por Mes ($)',
            data: ventas.map(item => item.venta),
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function actualizarGrafico() {
    grafico.data.labels = ventas.map(item => item.mes);
    grafico.data.datasets[0].data = ventas.map(item => item.venta);
    grafico.update();
}

function actualizarLista() {
    const lista = document.getElementById('listaDatos');
    lista.innerHTML = '';
    ventas.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            ${item.mes}: $${item.venta}
            <div class="acciones">
                <button onclick="editar(${index})">Editar</button>
                <button onclick="eliminar(${index})">Eliminar</button>
            </div>
        `;
        lista.appendChild(div);
    });
}

function guardarEnLocalStorage() {
    localStorage.setItem('ventas', JSON.stringify(ventas));
}

function editar(index) {
    document.getElementById('mes').value = ventas[index].mes;
    document.getElementById('venta').value = ventas[index].venta;
    ventas.splice(index, 1); // elimina el dato para reemplazarlo
    actualizarGrafico();
    actualizarLista();
    guardarEnLocalStorage();
}

function eliminar(index) {
    ventas.splice(index, 1);
    actualizarGrafico();
    actualizarLista();
    guardarEnLocalStorage();
}

document.getElementById('ventaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const mes = document.getElementById('mes').value;
    const venta = parseFloat(document.getElementById('venta').value);

    ventas.push({ mes, venta });

    actualizarGrafico();
    actualizarLista();
    guardarEnLocalStorage();

    document.getElementById('ventaForm').reset();
});

// Inicializar si hay datos guardados
actualizarGrafico();
actualizarLista();
