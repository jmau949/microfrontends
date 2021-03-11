import {mount } from 'products/ProductsIndex'
import 'cart/CartShow';



console.log('CONTAINER')

mount(document.querySelector("#my-products"))
// container is host, products is most effective, carts is manual, not optimal