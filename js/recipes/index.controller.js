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

  this.search = function (search) {
    console.log(search)
    queries.push(search)
    console.log(queries)
    // $state.go("recipesIndex", {}, {reload:"recipesIndex"})
    this.recipes = RecipesFactory.query({
      search: queries
    })
  }

  this.enterSearch = function (search, $event) {
    if ($event.keyCode === 13) {
      console.log($event.keyCode)
      queries.push(search)
      this.recipes = RecipesFactory.query({
        search: queries
      })
      $event.preventDefault()
    }
  }
}
