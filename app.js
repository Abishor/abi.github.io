function LunchController($scope) {
    $scope.msgOut = '';
    $scope.countFoods = function() {
        var foods = $scope.foodList;
        if (foods) {
            $scope.textColor = 'green';
            $scope.inputStyle = 'ok';

            var foods = $scope.foodz = $scope.foodList.split(',');
            var len = 0;
            for (var food in foods) {
                if (food && !(0===food)) {
                    if (food.trim().length > 0) {
                        len++;
                    }
                }
            }
            if (len > 3) {
                $scope.msgOut = "Too much!";
            } else {
                $scope.msgOut = "Enjoy!";
            }
        } else {
            $scope.textColor = 'red';
            $scope.inputStyle = 'error';
            $scope.msgOut = "Please enter data first";
        }
    }
}


angular
    .module("LunchChecker", [])
    .controller('LunchController', ['$scope', LunchController]);
