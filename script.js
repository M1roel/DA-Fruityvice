function init() {
  fetchDataJson();
}

async function fetchDataJson() {
  let response = await fetch("https://www.fruityvice.com/api/fruit/all");
  data = await response.json();
  showFruit(data);
}

function showFruit(fruits) {
  document.getElementById("content").innerHTML = "";
  
  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    document.getElementById('content').innerHTML += generateFruit(fruit);
  }
}

function generateFruit(fruit) {
    return `
    <table class="table">
        <tr>
            <th scope="col">${fruit.name}</th>
        </tr>
        <tr>
            <td>Fat: ${fruit.nutritions.fat}</td>
            <td>Protein: ${fruit.nutritions.protein}</td>
            <td>Calories: ${fruit.nutritions.calories}</td>
            <td>Sugar: ${fruit.nutritions.sugar}</td>
        </tr>
    </table>
    `;
}