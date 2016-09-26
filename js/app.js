(function() {
    "use strict";

    angular.module('ShoppingListCheckOff', [])
        .service('ShoppingListCheckOffService', [ShoppingListCheckOff]);

    angular.module('ShoppingListCheckOff')
        .controller('ToBuyShoppingController', ['$scope', 'ShoppingListCheckOffService', ToBuyShoppingController])
        .controller('AlreadyBoughtShoppingController', ['$scope', 'ShoppingListCheckOffService', AlreadyBoughtShoppingController]);


    function ShoppingListCheckOff($scope) {
        this.items = [{
            "name": "cookies",
            "quantity": 10
        }, {
            "name": "bread",
            "quantity": 11
        }, {
            "name": "eggs",
            "quantity": 10
        }, {
            "name": "yogurt",
            "quantity": 1
        }, {
            "name": "cartons of milk",
            "quantity": 2
        }, {
            "name": "bag of coffee",
            "quantity": 1
        }, {
            "name": "Easter egg from Hell",
            "quantity": -100
        }];

        this.bought = [];
    };

    function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
        $scope.items = ShoppingListCheckOffService.items;
        $scope.alreadyBought = ShoppingListCheckOffService.bought;

        $scope.buy = function(item) {
            var newItem = item;

            ShoppingListCheckOffService.bought.push(newItem);

            var index = ShoppingListCheckOffService.items.indexOf(item);
            ShoppingListCheckOffService.items.splice(index, 1);
        }
    };

    function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
        $scope.alreadyBought = ShoppingListCheckOffService.bought;
    };
})();
