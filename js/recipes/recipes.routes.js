angular
.module('myrecipe')
.config([
  '$stateProvider',
  '$urlRouterProvider',
  RouterFunction
])


function RouterFunction($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('recipesIndex', {
    url: '/recipes',
    templateUrl: 'js/recipes/index.html',
    controller: 'RecipesIndexController',
    controllerAs: 'vm'
  })
  .state('recipesNew',{
    url: '/recipes/new',
    templateUrl: 'js/recipes/new.html',
    controller: 'RecipesNewController',
    controllerAs: 'vm'
  })
  .state('recipesEdit',{
    url: '/recipes/:id/edit',
    templateUrl: 'js/recipes/edit.html',
    controller: 'RecipesEditController',
    controllerAs: 'vm'
  })
  .state('recipesShow',{
    url: '/recipes/:id',
    templateUrl: 'js/recipes/show.html',
    controller: 'RecipesShowController',
    controllerAs: 'vm'
  })
  $urlRouterProvider.otherwise('/recipes')
}
