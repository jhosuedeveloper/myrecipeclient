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
    console.log(queries)
    this.recipes = RecipesFactory.query({
      search: queries
    })
  }

  this.filters = function (search) {
    filters.push(search)
  }

  this.filterFunction = function (recipe) {
    return filters.every(filter => {
      return recipe.ingredients.some(ingredient => {
        return ingredient.name.includes(filter)
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
