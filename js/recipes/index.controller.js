angular
.module('myrecipe')
.controller('RecipesIndexController',[
  'RecipesFactory',
  '$state',
  RecipesIndexControllerFunction
])

var queries = []
var filters = []
function RecipesIndexControllerFunction(RecipesFactory){

  this.search = function (search) {
    queries.push(search)
    this.recipes = RecipesFactory.query({
      search: queries
    })
  }

  this.filters = function (search) {
    console.log(search)
    filters.push(search)
    console.log(filters)
  }

  this.filterFunction = function (recipe) {
    filters.every(filter => {
      recipe.ingredients.some(ingredient => {
        ingredient.name.includes(filter)
      })
    })
  }
}

  // this.enterSearch = function (search, $event) {
  //   if ($event.keyCode === 13) {
  //     console.log($event.keyCode)
  //     queries.push(search)
  //     this.recipes = RecipesFactory.query({
  //       search: queries
  //     })
  //     $event.preventDefault()
  //   }
  // }
