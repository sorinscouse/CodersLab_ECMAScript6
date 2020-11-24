<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# ES6 - Snippets
> Short pieces of code that solve various problems, illustrate dependencies, or show how to use some more complicated functions.

#### 1. Webpack configuration

```JavaScript
var path = require('path');

module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'js')
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}
```

#### 2. Abstract class and inheriting class.

```JavaScript
class Animal {
	constructor(type){
		this.type = type;
	}

	breath(){
		console.log("I breathe");
	}
}

class Dog extends Animal {
	constructor(type){
		super(type);
	}

	bark(){
		console.log("Now I am barking")
	}
}
 let dog = new Dog("Mammal");
 dog.breath();
 dog.bark();
```

#### 3. Lazy loading

##### header.js
```JavaScript
const header = document.createElement('header');
header.textContent = 'webpack';

export default header;
```

##### app.js

```JavaScript
document.addEventListener('DOMContentLoaded', function() {

    const body = document
        .querySelector('body');
    const btn = document
        .querySelector('button');

    btn.addEventListener('click', function() {
            import('./header.js')
                .then(function(module) {
                    const header = module.default;

                    body.append(header);
                });
    });

});
```
#### 4. Extended Webpack configuration

```JavaScript
const path = require("path");
const Html = require('html-webpack-plugin');
const MiniCSS = require('mini-css-extract-plugin');
const Compression = require('compression-webpack-plugin');
const Clean = require('clean-webpack-plugin');

module.exports = function(env) {
  const config = {};

  const isDev = env.dev ? true : false;
  const isProd = env.prod ? true : false;

  config.entry = "./app.js";
  config.output = {
    filename: isDev
      ? "[name].js"
      : "[name].[chunkhash].js",
    path: path.resolve(__dirname, "build")
  }

  config.mode = isProd
    ? "production"
    : "development" ;

  config.devtool = isProd
    ? false
    : "source-map" ;

    config.module = {};
    config.module.rules = [];

    const browsers = {
      dev: ['Chrome > 60'],
      prod: ['> 3%']
    }

    const js = {
      test: /\.js$/, exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              targets: {
                browsers: isDev
                  ? browsers.dev
                  : browsers.prod
              }
            }]
          ],
          plugins: [
            'syntax-dynamic-import'
          ]
        }
      }
    }
    config.module.rules.push(js);

    const scss = {
      test: /\.scss$/,
      use: [
        isProd
          ? MiniCSS.loader
          : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: isProd ? false : true,
            minimize: isProd ? true : false
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              new require('autoprefixer')({
                browsers: isProd
                  ? browsers.prod : browsers.dev
              })
            ]
          }
        },
        'sass-loader'
      ]
    }

    config.module.rules.push(scss);

    const images = {
      test: /\.(jpg|jpeg|gif|png|csv)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: isProd
            ? '[name].[hash].[ext]'
            : '[name].[ext]',
          publicPath: 'images',
          outputPath: 'images'
        }
      }
    }

    config.module.rules.push(images);

    const fonts = {                
      test: /\.(eot|ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: isProd
            ? '[name].[hash].[ext]'
            : '[name].[ext]',
          publicPath: 'fonts',
          outputPath: 'fonts'
        }
      }             
    }

    config.module.rules.push(fonts);

    config.plugins = [];

    config.plugins.push(
      new Html({
        filename: 'index.html',
        template: './app.html',
        minify: false
      })
    );

    if(isProd) {
      config.plugins.push( new MiniCSS(
          { filename: 'app.[chunkhash].css' } )
      );

      config.plugins.push(
        new Compression({
          threshold: 0,
          minRatio: 0.8
        })
      );

      config.plugins.push(
        new Clean(['build'])
      );
    }

    if(isDev) {
      config.devServer = {
        port: 8080,
        progress: true,
        overlay: true,
      }
    }

  return config;
}

```
