import template from './template.html';

const loginModule = angular
    .module('artbase.login', [])
    .component('loginForm', {
        template: template,
           
        controller: ['$state', function($state) {
            this.Login = () => {
                localStorage.setItem('logged', true);
                $state.go('main');
            }
        }]
    })
    .name;

export default loginModule;