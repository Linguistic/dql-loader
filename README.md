DatQL Webpack Loader
--------------------
Allows you to `require()` vanilla [DatQL](https://github.com/golinguistic/dql) (.dql / .datql) files. Usage with Webpack is simple:

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
