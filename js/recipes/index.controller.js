angular
.module('myrecipe')
.controller('RecipesIndexController',[
  'RecipesFactory',
  '$state',
  RecipesIndexControllerFunction
])

function RecipesIndexControllerFunction(RecipesFactory){
  var queries = []
  var filters = []
  this.inputs = []

  this.search = function (search) {
    queries.push(search)
    this.recipes = RecipesFactory.query({
      search: queries
    })
    this.inputs.push(search)
  }

  this.removeAll = function (index) {
    queries.splice(index, 1)
  }

  this.removeFilter = function (index) {
    this.inputs.splice(index, 1)
    filters.splice(index, 1)
  }

  this.filters = function (search) {
    filters.push(search)
    this.inputs.push(search)
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
