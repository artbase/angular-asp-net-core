import template from './shared/template.html';

const mainModule = angular
    .module('artbase.main', [])
    .component('mainTemplate', {
        template: template,
           
        controller: ['$state', function($state) {
            if (!localStorage.getItem('logged')) {
                $state.go('login');
            }
        }]
    })
    .name;

export default mainModule;