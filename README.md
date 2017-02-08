![](http://jpsierens.com/wp-content/uploads/2016/06/react-eco-wp.gif)

# react-redux-rockstarter
A boilerplate for getting started with react, redux and react-router with the help of webpack.

Contains: 

* a working example of a filterable table, and an AJAX api call.
* ES6 - 7 Support with Babel
* Redux dev tools to help you keep track of the app's state
* Routing
* hot module replacement support so you can change modules or react components without having to reload the browser
* a webpack production config so you can build the app and make it ready for production
* Sass support, just import your styles wherever you need them
* eslint to keep your js readable
* mocha/chai unit testing and istanbul code coverage
* much more...

## UI Resources
- [Gx](http://jxnblk.com/gx/) minimal responsive grid system
- [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid)


## Run the app

0. ```npm install```
0. ```npm start```

Once running, if you want to hide the redux dev monitor: ```CTRL+H```

Yes, it takes a while to load the first time you open the app.

### Is the hot module replacement really working?

Yup! The app updates without the browser having to reload. You don't lose state!  
*(unless you modify state-related code like actions or reducers)*

## Build the app
```npm run build```

This will build the app into the "dist" directory in the root of the project. It contains the index.html along with the minified assets, ready for production.

## I don't understand anything!

Visit this series of posts on this project:

* [configuring webpack](http://jpsierens.com/tutorial-react-redux-webpack/)
* [understanding the app, part 1 (filterable-table.actions.js, store, reducers)](http://jpsierens.com/simple-react-redux-application/)
* [understanding the app, part 2 ( root.js, router and the rest of the app)](http://jpsierens.com/simple-react-redux-application-2/)

## Credits
This repository was influenced by https://github.com/jpsierens/webpack-react-redux
