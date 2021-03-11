import faker from 'faker'







const mount = (el) => {
    let products = '';
    for (let i =0; i<3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
    }
    el.innerHTML = products
    // ReactDOM.render(<App/>, el)

}

// Context / Situation #1
// we are running this file in development in isolation
// we are using our local index.html file
// which definitely has an element with an id of "dev-product"
// we want to immediately render our app into that element
 

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    // below is assuming the container/host app doesnt have an element with id "dev-products"..
    if (el) {
        // we are prob running in isolation
        mount(el);
    }
}

// Context / Situation #2
// we are running this file in development or production
// through the container app
// there is no guarantee that an element with the id of 'dev-products' exists
// we do not want to try to immediately render the app

export { mount };