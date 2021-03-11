import faker from 'faker';

const cartText = `<div>you have ${faker.random.number()}</div>`


document.querySelector('#cart-dev').innerHTML = cartText