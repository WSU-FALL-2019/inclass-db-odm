# MongoDB via Mongoose
We use mongoose to add object modeling to MongoDB.

## Installation
### Packages
To install mongoose:

```bash
npm install mongoose
```

To be able to use ES6 with node, we need babel and babel-node:

```bash
npm install --save-dev @babel/core @babel/preset-env @babel/node
```

### Configuration
We need a configuration file named `.babelrc`. It should have the following:

```json
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

### Running the application
```bash
npm start
```

or 

```bash
npx babel-node index.js
```
