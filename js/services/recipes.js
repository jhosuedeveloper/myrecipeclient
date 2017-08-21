/* global angular */
angular.module('myrecipe')
.factory('RecipeFactory',[
  '$resource',
  RecipeService
])


function RecipeService($resource){
  return $resource('https://api.edamam.com/search?q=salmon&app_id=495091ab&app_key=53498ba8d4b2061499db5197b986469e', {}, {
    update: {
      method: 'PUT'
    }
  })
}
