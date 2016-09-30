var helloApp = angular.module("helloApp", []);

helloApp.controller("CompanyCtrl", function($scope) {
    $scope.integerval = /^\d*$/;
    $scope.companies = [];
    $scope.addRow = function(){
        $scope.companies.push({ 'name':$scope.name, 'employees': $scope.employees, 'headoffice':$scope.headoffice });
        $scope.name='';
        $scope.employees='';
        $scope.headoffice='';
    };

    $scope.removeRow = function(name){
        var index = -1;
        var comArr = eval( $scope.companies );
        for( var i = 0; i < comArr.length; i++ ) {
            if( comArr[i].name === name ) {
                index = i;
                break;
            }
        }
        if( index === -1 ) {
            alert("Something gone wrong");
        }
        $scope.companies.splice( index, 1 );
    };

});

/* Custom directive to allow numbers only */
helloApp.directive('allowOnlyNumbers', function () {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs, ctrl) {
            elm.on('keydown', function (event) {
                if (event.which == 64 || event.which == 16) {
                    // to allow numbers
                    return false;
                } else if (event.which >= 48 && event.which <= 57) {
                    // to allow numbers
                    return true;
                } else if (event.which >= 96 && event.which <= 105) {
                    // to allow numpad number
                    return true;
                } else if ([8, 13, 27, 37, 38, 39, 40].indexOf(event.which) > -1) {
                    // to allow backspace, enter, escape, arrows
                    return true;
                } else if (event.which === 9 ) {
                    //TAB was pressed
                        return true;
                } else {
                    event.preventDefault();
                    // to stop others
                    return false;
                }
            });
        }
    }
});





