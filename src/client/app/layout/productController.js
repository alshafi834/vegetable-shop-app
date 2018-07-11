angular.module('app.product', ['ngMaterial'])
.controller('productController', function($scope, $mdDialog) {
  $scope.openFromLeft = function() {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Vegetables title will be here')
        .textContent('Here the details of the product will be added. Here the details of the product will be added.Here the details of the product will be added.Here the details of the product will be added.Here the details of the product will be added.')
        .ariaLabel('Left to right demo')
        .ok('Okay')
        // You can specify either sting with query selector
        .openFrom('#left')
        // or an element
        .closeTo(angular.element(document.querySelector('#right')))
    );
  };

  $scope.openOffscreen = function() {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Vegetable Title here')
        .textContent('Here the details of the vegetables will be shown.')
        .ariaLabel('Offscreen Demo')
        .ok('Amazing!')
        // Or you can specify the rect to do the transition from
        .openFrom({
          top: -50,
          width: 80,
          height: 120
        })
        .closeTo({
          left: 1500
        })
    );
  };

  var vm = $scope;
  vm.updatedCart= 0;
  vm.updatedPrice= 0;
  $scope.addcartt = function(count,price) {
    vm.updatedCart = vm.updatedCart+count;
    vm.updatedPrice = vm.updatedPrice+(price*count);
    console.log(updatedCart);
  };

});