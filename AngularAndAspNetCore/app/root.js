import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import uiRoute from 'angular-ui-router';
import _ from 'lodash';

import login from './src/login/module'
import main from './src/main/module'

const root = angular
    .module(
        'artbase', 
        [
            uiRoute,

            login,
            main
        ]
    )
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        
        const loginState = {
            name: 'login',
            url: '/login',
            component: 'loginForm'
        }

        const mainState = {
            name: 'main',
            url: '/',
            component: 'mainTemplate'
        }

        $stateProvider.state(loginState);
        $stateProvider.state(mainState);

        // enable html5Mode for pushstate ('#'-less URLs)
        $locationProvider.html5Mode(true).hashPrefix('!');

        $urlRouterProvider.otherwise('/login');
        
    }])
    .name;

export default root;

//import icon from './src/img/cat.png';

//function component() {
//  var element = document.createElement('div');

//  // Add the image to our existing div.
//  var myIcon = new Image();
//  myIcon.src = icon;
//  element.appendChild(myIcon);
  
//  return element;
//}

//document.getElementById('main').appendChild(component());