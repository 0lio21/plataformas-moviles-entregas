document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#data-table tbody');
            data.meals.forEach(meal => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${meal.idMeal}</td>
                    <td>${meal.strMeal}</td>
                    <td>${meal.strCategory}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
