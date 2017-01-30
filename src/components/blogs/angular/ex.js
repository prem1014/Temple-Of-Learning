<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.5/angular.min.js"></script>
</head>

<body ng-app="myapp">

  <div ng-controller="MyController" >
      <span ng-show="myData.isShowIt">Hello Show</span>
      <span ng-hide="myData.isShowIt">Hello Hide</span>
  </div>

  <script>
    angular.module("myapp", [])
    .controller("MyController", function($scope) {
      $scope.myData = {};
      $scope.myData.isShowIt = true;
    });
  </script>

</body>
</html>