angular.module('app', []).
controller('UrlEncoderController', function UrlEncoderController($scope) {
  $scope.urlString = '';
  $scope.grade = function() {
    var size = $scope.urlString.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
});
