(function () {
    //2. create the controller and give it $scope
         function RecipeListController ($scope) {
            $scope.new_recipe = { };

            $scope.recipes = [
                { name: 'Pasta el Pesto',
                  type: 'Italian',
                  summary: 'A quick and simple dish for any Italian household.'},
                { name: 'Garlic Pork',
                  type: 'Thai',
                  summary: 'A quick and simple meat dish for any Thai table.'},
                { name: 'Garlic Broccoli',
                  type: 'Chinese',
                  summary: 'Healthy and full of flavor, a simple dish.'},
                { name: 'Black Pepper Beef',
                  type: 'Chinese',
                  summary: 'Delicious and rich in flavor. A Chinese classic'}

            ];

            $scope.addRecipe = function(recipe_data) {
                $scope.recipes.push(recipe_data);
                $scope.new_recipe = { };
            };
         }
         recipesApp.controller("RecipeListController", ['$scope', RecipeListController]);
}) ();