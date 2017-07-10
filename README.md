<img src="https://dadi.tech/assets/products/dadi-web-full.png" alt="DADI Web" height="65"/>

## Handlebars.js engine interface

[![npm (scoped)](https://img.shields.io/npm/v/@dadi/web-handlebars.svg?maxAge=10800&style=flat-square)](https://www.npmjs.com/package/@dadi/web-handlebars)
[![coverage](https://img.shields.io/badge/coverage-85%25-yellow.svg?style=flat?style=flat-square)](https://github.com/dadi/web-handlebars)
[![Build Status](https://travis-ci.org/dadi/web-handlebars.svg?branch=master)](https://travis-ci.org/dadi/web-handlebars)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

This module allows [Handlebars.js](http://handlebarsjs.com/) templates to be used with [DADI Web](https://github.com/dadi/web).

## Installation

- Add this module as a dependency:

   ```
   npm install @dadi/web-handlebars --save
   ```

- Include it in the `engines` array passed to Web:

   ```js
   require('@dadi/web')({
     engines: [
       require('@dadi/web-handlebars')
     ]
   })
   ```

## Configuration

The following configuration parameters can be added to the global Web config file, under `engines.handlebars`.

### `paths`

Paths required by Handlebars.

- Format: `Object`
- Default:
   ```
   {
     {
       helpers: 'workspace/utils/helpers'
     }
   }
   ```

## Partials

Partials must be registered with Handlebars before they can be used in a template. This library takes care of the registration for you, simply supply the path to your partials as a configuration option.

See the [Handlebars documentation](http://handlebarsjs.com/partials.html) for more information.

The base directory for absolute paths is the `pages/` directory. Take the following directory tree.

```
pages/
|_ partials/
|_ |_ common/
|_ |_ |_ header.hbs
|_ |_ contact-info.hbs
|_ home.hbs
```

To include `header.hbs` from `contact-info.hbs`, you can do:

```hbs
{{> 'partials/common/header' }}
```

## Helpers

This module automatically includes the official set of [helpers by LinkedIn](https://github.com/linkedin/dustjs-helpers). Other helper modules will need to be required manually, using a loader file placed in the helpers directory defined in config (e.g. `workspace/utils/helpers/loader.js`)

*Example:*

```js
const handlebars = require('handlebars')

/*
 * Returns the full name and price of the supplied product
 * Usage: {{ renderProduct product }}
 */
handlebars.registerHelper('renderProduct', product => {
  return `helper: ${product.name} - £${product.price}`
})
```
