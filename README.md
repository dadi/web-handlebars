<img src="https://dadi.tech/assets/products/dadi-web-full.png" alt="DADI Web" height="65"/>

## Handlebars.js engine interface

[![npm (scoped)](https://img.shields.io/npm/v/@dadi/web-handlebars.svg?maxAge=10800&style=flat-square)](https://www.npmjs.com/package/@dadi/web-handlebars)
[![coverage](https://img.shields.io/badge/coverage-66%25-yellow.svg?style=flat?style=flat-square)](https://github.com/dadi/web-handlebars)
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

Partials must be registered with Handlebars before they can be used in a template. This library takes care of the registration for you, simply supply the path to your partials in the configuration option `additionalTemplates`.

```
pages/
|_ partials/
|_ |_ common/
|_ |_ |_ header.hbs
|_ contact-info.hbs
|_ home.hbs
```

Partials are referenced by their relative path, minus the file extension. After loading the above hierarchy of templates and partials, to include `header.hbs` from the page `contact-info.hbs`, you would use the following syntax:

```hbs
{{> 'partials/common/header' }}
```

See the [Handlebars documentation](http://handlebarsjs.com/partials.html) for more information regarding the use of partials.

## Helpers

To use helpers supply the path to your helpers in the main Web configuration file:

```json
"engines": {
  "handlebars": {
    "paths": {
      "helpers": "workspace/helpers"
    }
  }
}
```

Helpers can be individual JavaScript files within the specifed directory, or all in a single file.

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
