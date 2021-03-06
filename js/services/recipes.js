/* global angular */
angular.module('myrecipe')
.factory('RecipesFactory',[
  '$resource',
  RecipeService
])

function RecipeService($resource){
  return $resource('http://localhost:3000/recipes/:id.json', {}, {
    update: {
      method: 'PUT'
    }
  })
}
