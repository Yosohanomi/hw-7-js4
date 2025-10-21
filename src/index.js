import { products } from './data/data';
import productsTemplate from './templates/products.hbs';
const container = document.getElementById('container');

const productsList = productsTemplate({products});

container.innerHTML = productsList;
