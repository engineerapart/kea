webpackJsonp([7],{552:function(e,a,t){"use strict";function r(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function n(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function o(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"default",function(){return p});var l=t(6),c=t.n(l),s=t(150),u=t(226),i=function(){function e(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,t,r){return t&&e(a.prototype,t),r&&e(a,r),a}}(),d={package:t(667),store:t(668),cli:t(669),craInstall:t(670),craPackage:t(671),craStore:t(672),craIndex:t(673),craCustom1:t(674),craCustomEnv:t(675)},p=function(e){function a(){return r(this,a),n(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return o(a,e),i(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"counter-singleton-scene"},c.a.createElement("div",{className:"description"},c.a.createElement("h2",null,"Installation"),c.a.createElement("p",null,"Installing ",c.a.createElement("code",null,"kea")," is rather straightforward. You need to add the ",c.a.createElement("code",null,"kea")," package, hook it up to your reducers and run the saga."),c.a.createElement("p",null,"This guide describes three ways to install:"),c.a.createElement("ol",null,c.a.createElement("li",null,"Adding kea to an existing app that already uses ",c.a.createElement("code",null,"redux")," (and ",c.a.createElement("code",null,"redux-saga"),"?)"),c.a.createElement("li",null,"Adding to apps made with ",c.a.createElement("code",null,"create-redux-app")),c.a.createElement("li",null,"Starting a new kea app from scratch")),c.a.createElement("h3",null,"1. Adding to an existing app that already uses ",c.a.createElement("code",null,"redux")," (and ",c.a.createElement("code",null,"redux-saga"),"?)"),c.a.createElement("h4",null,"1.1. Packages"),c.a.createElement("p",null,"First install the packages:"),c.a.createElement(u.default,{className:"bash"},d.package),c.a.createElement("h4",null,"1.2. Store"),c.a.createElement("p",null,"Then configure the store:"),c.a.createElement(u.default,{className:"javascript"},d.store),c.a.createElement("p",null,"NB! Make sure the store is loaded before any ",c.a.createElement("code",null,"kea()")," calls. In practice this usually means you should import your store before your components in your app's entrypoint."),c.a.createElement("h4",null,"1.3. Optional: Enable decorators"),"Kea makes use of an experimental support for decorators to make your code nicer to read. If you wish to use this feature, follow the guide here: ",c.a.createElement("a",{href:"https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy"},"babel-plugin-transform-decorators-legacy"),".",c.a.createElement("h3",null,"2. Adding to apps made with ",c.a.createElement("code",null,"create-redux-app")),c.a.createElement("h4",null,"2.1. Create your app"),c.a.createElement("p",null,"Follow the ",c.a.createElement("a",{href:"https://github.com/facebookincubator/create-react-app"},"create-react-app guide")," to create an app"),c.a.createElement(u.default,{className:"bash"},d.craInstall),c.a.createElement("h4",null,"2.2. Install kea, redux, redux-saga and reselect"),c.a.createElement(u.default,{className:"bash"},d.craPackage),c.a.createElement("h4",null,"2.3. Configure your store"),c.a.createElement("p",null,"Create a file called ",c.a.createElement("code",null,"src/store.js")," and enter the following code"),c.a.createElement(u.default,{className:"javascript"},d.craStore),c.a.createElement("h4",null,"2.4. Update your app's entrypoint to use redux"),c.a.createElement("p",null,"You need to add the following lines to your ",c.a.createElement("code",null,"src/index.js")," to make your app work with redux and redux-saga:"),c.a.createElement(u.default,{className:"javascript"},d.craIndex),c.a.createElement("h4",null,"2.5. Optional: Enable decorators"),c.a.createElement("p",null,"To support calls such as ",c.a.createElement("code",null,"@kea({})")," before your React components, you must enable an experimental ES feature called ",c.a.createElement("a",{href:"https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy"},"decorators"),"."),c.a.createElement("p",null,"You may either do it by ejecting your webpack configuration and following the steps of 1.3. If you wish to avoid that, you have to find some other way. The easiest option is to replace ",c.a.createElement("code",null,"react-scripts")," with ",c.a.createElement("a",{href:"https://github.com/kitze/custom-react-scripts"},c.a.createElement("code",null,"custom-react-scripts")),"."),c.a.createElement("p",null,"To do this, first run these commands:"),c.a.createElement(u.default,{className:"bash"},d.craCustom1),c.a.createElement("p",null,"Then create a file called ",c.a.createElement("code",null,".env")," in the root of your project and add this:"),c.a.createElement(u.default,{className:"bash"},d.craCustomEnv),c.a.createElement("p",null,"Now you will be able to use decorators in your code"),c.a.createElement("h3",null,"3. Starting a new kea app from scratch"),c.a.createElement(u.default,{className:"bash"},d.cli),c.a.createElement("h2",null,"Continue with the guide"),"Next page: ",c.a.createElement(s.a,{to:"/guide/counter"},"Counter")))}}]),a}(l.Component)},667:function(e,a){e.exports="# if you're using yarn\nyarn add kea\nyarn add reselect redux-saga     # you will need these if not already installed\nyarn add react redux react-redux # you probably have these\n\n# if you're using npm\nnpm install kea --save\nnpm install reselect redux-saga --save     # you will need these if not already installed\nnpm install react redux react-redux --save # you probably have these\n"},668:function(e,a){e.exports="import { keaReducer, keaSaga } from 'kea' // add this\n\nconst reducers = combineReducers({\n  scenes: keaReducer('scenes'), // add this\n  routing: routerReducer\n  // ... other reducers you might have\n})\n\nconst sagaMiddleware = createSagaMiddleware()\nconst finalCreateStore = compose(\n  applyMiddleware(sagaMiddleware),\n  applyMiddleware(routerMiddleware(browserHistory))\n)(createStore)\n\nconst store = finalCreateStore(reducers)\n\nsagaMiddleware.run(keaSaga) // add this\n"},669:function(e,a){e.exports="npm install -g kea-cli\nkea new my-project\ncd my-project\nyarn       # ... or npm install\nyarn start # ... or npm start\n"},670:function(e,a){e.exports="create-react-app my-app\ncd my-app\nyarn start\n"},671:function(e,a){e.exports="yarn add kea redux react-redux redux-saga reselect\n"},672:function(e,a){e.exports="import { createStore, applyMiddleware, combineReducers, compose } from 'redux'\nimport createSagaMiddleware from 'redux-saga'\nimport { keaSaga, keaReducer } from 'kea'\n\nconst reducers = combineReducers({\n  scenes: keaReducer('scenes')\n  // other app reducers here\n})\n\nconst sagaMiddleware = createSagaMiddleware()\n\nconst finalCreateStore = compose(\n  applyMiddleware(sagaMiddleware),\n  // more middlewares here\n)(createStore)\n\nconst store = finalCreateStore(reducers)\n\nsagaMiddleware.run(keaSaga)\n\nexport default store\n"},673:function(e,a){e.exports="import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Provider } from 'react-redux' // add this\nimport './index.css';\nimport store from './store'; // add this (before import App !!!)\nimport App from './App';\nimport registerServiceWorker from './registerServiceWorker';\n\nReactDOM.render( // update this\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n);\n\nregisterServiceWorker();\n"},674:function(e,a){e.exports="yarn add custom-react-scripts\nyarn remove react-scripts\n"},675:function(e,a){e.exports="REACT_APP_DECORATORS=true\n"}});