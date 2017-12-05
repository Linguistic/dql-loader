DatQL Webpack Loader
====================
Allows you to `require()` vanilla [DatQL](https://github.com/golinguistic/dql) (.dql / .datql) files. 

Installing
----------
The loader can be installed via NPM or Yarn:

```bash
$ npm install dql-loader --save-dev
$ yarn add dql-loader --dev
```

Usage
-----
Usage with Webpack is simple:

```$javascript
// webpack.config.js
module: {
    rules: [
        {
            test: /\.(dql|datql)$/,
            loader: 'dql-loader',
            options: {
                flavor: 'postgres'
            }
        }
    ]
}
```

The only available option is `flavor` and can be either mysql, mssql, or postgres.
