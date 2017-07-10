const handlebars = require('handlebars')

/*
 * Returns the full name and price of the supplied product
 * Usage: {{ renderProduct product }}
 */
handlebars.registerHelper('renderProduct', product => {
  return `helper: ${product.name} - £${product.price}`
})
