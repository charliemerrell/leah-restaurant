fetch('/restaurants.json')
    .then(response => response.json())
    .then(renderRestaurants);

function renderRestaurants(restaurants) {
    const restaurantsList = document.getElementById('restaurants');
    for (let i = 0; i < restaurants.length; i++) {
        const currentRestaurant = restaurants[i];
        const restaurantEl = document.createElement('li');  // <li></li>
        restaurantEl.innerText = currentRestaurant.name;  // <li>Leah's Food</li>
        restaurantsList.append(restaurantEl);  // <ul><li>Leah's Food</li><ul>
        restaurantImg = document.createElement('img'); // <img></img>
        restaurantImg.src = currentRestaurant.image; // <img src="http..."></img>
        restaurantsList.append(restaurantImg);
    }
}