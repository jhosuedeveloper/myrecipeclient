angular
.module('myrecipe')
.controller('RecipesIndexController',[
  'RecipesFactory',
  RecipesIndexControllerFunction
])


function RecipesIndexControllerFunction(RecipesFactory){
  this.recipes = RecipesFactory.query()
}
