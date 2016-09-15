function LunchController($scope) {
    $scope.msgOut = '';
    $scope.countFoods = function() {
        var foods = $scope.foodList;
        if (foods) {
            $scope.textColor = 'green';
            $scope.inputStyle = 'ok';

            var foods = $scope.foodz = $scope.foodList.split(',');
            var len = 0;
            angular.forEach(foods, function(food) {
                if (food) {
                    if (food.trim().length > 0) {
                        len++;
                    }
                }
            });
            if (0 === len) {
                $scope.textColor = 'red';
                $scope.inputStyle = 'error';
                $scope.msgOut = "Please enter data and not just ','s and white-spaces!";
            } else {
                if (len > 3) {
                    $scope.msgOut = "Too much!";
                } else {
                    $scope.msgOut = "Enjoy!";
                }
            }
        } else {
            $scope.textColor = 'red';
            $scope.inputStyle = 'error';
            $scope.msgOut = "Please enter data first!";
        }
    }
}

angular
    .module("LunchChecker", [])
    .controller('LunchController', ['$scope', LunchController]);
