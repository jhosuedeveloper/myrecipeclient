angular
.module('myrecipe')
.controller('RecipesIndexController',[
  'RecipesFactory',
  RecipesIndexControllerFunction
])

function RecipesIndexControllerFunction(RecipesFactory){
  this.recipes = RecipesFactory.query({
    search: 'chicken'
  })

  this.search = function (q) {
    console.log("dfs")
    this.recipes = RecipeFactory.query({
      search: q
    })
  }
}
