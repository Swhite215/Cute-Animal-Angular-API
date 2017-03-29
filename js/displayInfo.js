var app = angular.module("myModule");

app.controller("displayController", function($scope, myRedditFactory, $timeout) {
  //empty array that will store the data.
  $scope.info = [];

  //call factory function to perform information request.
  $scope.makeRequest = function() {
      myRedditFactory.requestInfo($scope.userInput).then(function() {
        $scope.info = myRedditFactory.getInfo();
        console.log($scope.info[0].data.author);
        console.log($scope.info[0].data.title);
        console.log($scope.info[0].data.url);
        console.log($scope.info[0].data.preview.images[0].source.url);
      });
  }

});
