document.addEventListener('DOMContentLoaded', () => {
    const botonChino = document.getElementById('china');
    const botonItaliano = document.getElementById('italiana');
    const botonAmericano = document.getElementById('americana');
    const listaRecetas = document.getElementById('lista-recetas');
    const cargando = document.getElementById('cargando');

    botonChino.addEventListener('click', () => obtenerRecetas('Chinese'));
    botonItaliano.addEventListener('click', () => obtenerRecetas('Italian'));
    botonAmericano.addEventListener('click', () => obtenerRecetas('American'));

    function obtenerRecetas(comida) {
        listaRecetas.innerHTML = '';
        cargando.style.display = 'block';

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${comida}`)
            .then(response => response.json())
            .then(data => {
                cargando.style.display = 'none';
                data.meals.forEach(comida => {
                    const tarjeta = document.createElement('div');
                    tarjeta.className = 'col-md-4 mb-3';
                    tarjeta.innerHTML = `
                        <div class="card">
                            <img src="${comida.strMealThumb}" class="card-img-top" alt="${comida.strMeal}">
                            <div class="card-body">
                                <h5 class="card-title">${comida.strMeal}</h5>
                                <button class="btn btn-primary" onclick="mostrarDetallesReceta(${comida.idMeal})">Ver Detalles</button>
                            </div>
                        </div>
                    `;
                    listaRecetas.appendChild(tarjeta);
                });
            })
            .catch(error => {
                cargando.style.display = 'none';
                console.error('Error al obtener los datos:', error);
            });
    }
});

function mostrarDetallesReceta(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            const comida = data.meals[0];
            const modalHtml = `
                <div class="modal fade" id="modalReceta" tabindex="-1" aria-labelledby="modalRecetaLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalRecetaLabel">${comida.strMeal}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                            </div>
                            <div class="modal-body">
                                <img src="${comida.strMealThumb}" class="img-fluid mb-3" alt="${comida.strMeal}">
                                <p><strong>Categoría:</strong> ${comida.strCategory}</p>
                                <p><strong>Área:</strong> ${comida.strArea}</p>
                                <p><strong>Instrucciones:</strong></p>
                                <p>${comida.strInstructions}</p>
                                <p><strong>Ingredientes:</strong></p>
                                <ul>
                                    ${obtenerListaIngredientes(comida)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            const modal = new bootstrap.Modal(document.getElementById('modalReceta'));
            modal.show();
        })
        .catch(error => console.error('Error al obtener los detalles:', error));
}

function obtenerListaIngredientes(comida) {
    let ingredientes = '';
    for (let i = 1; i <= 20; i++) {
        const ingrediente = comida[`strIngredient${i}`];
        const medida = comida[`strMeasure${i}`];
        if (ingrediente && ingrediente.trim()) {
            ingredientes += `<li>${ingrediente} - ${medida}</li>`;
        }
    }
    return ingredientes;
}
