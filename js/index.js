// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  document.querySelectorAll('.mushroom').forEach((onemushroom) => {
    if (state.mushrooms) {
      onemushroom.style.visibility = 'visible';
    } else {
      onemushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll('.green-pepper').forEach((greenpep) => {
    if (state.greenPeppers) {
      greenpep.style.visibility = 'visible';
    } else {
      greenpep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`

  if (state.whiteSauce) {
    document.querySelector('.sauce-white').style.visibility = 'visible';
  } else {
    document.querySelector('.sauce-white').style.visibility = 'hidden';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust-gluten-free').style.visibility = 'visible';
  } else {
    document.querySelector('.crust-gluten-free').style.visibility = 'hidden';
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (state.pepperoni) {
    document.querySelector('.btn.btn-pepperoni').classList.add('active');
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active');
  }

  if (state.mushrooms) {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  }

  if (state.greenPeppers) {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  }

  if (state.whiteSauce) {
    document.querySelector('.btn.btn-sauce').classList.add('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  }

  if (state.glutenFreeCrust) {
    document.querySelector('.btn.btn-crust').classList.add('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
let total = 15;
  let container = document.querySelector('.price ul');
  let newElem = document.createElement('li');
  let ulNode = document.querySelectorAll('.price li');

  //console.log(ulNode)

  ulNode.forEach((elem) => {
    // console.log(elem)

    if (state.pepperoni === false && elem.innerText === '$1 pepperoni') {
      elem.remove();
      total--
    }

    if (state.mushrooms === false && elem.innerText === '$1 mushrooms') {
      elem.remove();
      total--
    }
    if (state.greenPeppers === false && elem.innerText === '$1 green peppers') {
      elem.remove();
      total--
    }
    if (state.whiteSauce === false && elem.innerText === '$3 white sauce') {
      elem.remove();
      total-= -3
    }
    if (
      state.glutenFreeCrust === false &&
      elem.innerText === '$5 gluten-free crust'
    ) {
      elem.remove();
      total-= -5
    }
  });

  //   ulNode.forEach((elem) => {

  // console.log(elem.innerText)

  //   })
  if (
    container.innerText.indexOf('$1 pepperoni') === -1 &&
    state.pepperoni === true
  ) {
    newElem.innerText = '$1 pepperoni';
    container.appendChild(newElem);
    total++
  }

  if (
    container.innerText.indexOf('$1 mushrooms') === -1 &&
    state.mushrooms === true
  ) {
    newElem.innerText = '$1 mushrooms';
    container.appendChild(newElem);
    total++
  }
  
  if (
    container.innerText.indexOf('$1 green peppers') === -1 &&
    state.greenPeppers === true
  ) {
    newElem.innerText = '$1 green peppers';
    container.appendChild(newElem);
    total++
  }

  if (
    container.innerText.indexOf('$3 white sauce') === -1 &&
    state.whiteSauce === true
  ) {
    newElem.innerText = '$3 white sauce';
      container.appendChild(newElem);
      total+= 3
  }

  if (
    container.innerText.indexOf('$5 gluten-free crust') === -1 &&
    state.glutenFreeCrust === true
  ) {
    newElem.innerText = '$5 gluten-free crust';
      container.appendChild(newElem);
      total+= 5
  }


 
  document.querySelector('.price strong').innerText=total



 






}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
