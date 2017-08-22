angular
.module('myrecipe')
.controller('RecipesIndexController',[
  'RecipesFactory',
  '$state',
  RecipesIndexControllerFunction
])

var queries = []

function RecipesIndexControllerFunction(RecipesFactory){
  this.recipes = RecipesFactory.query({
    search: queries
  })

  this.search = function (q) {
    console.log(q)
    queries.push(q)
    console.log(queries)
    // $state.go("recipesIndex", {}, {reload:"recipesIndex"})
    this.recipes = RecipesFactory.query({
      search: queries
    })
  }
}
