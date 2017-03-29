var app = angular.module("myModule");

//Factory for performing HTTP request and obtaining information.
app.factory("myRedditFactory", function($http) {
  var obj = {};

  //Include $http request here and save that information as obj*
  return {
    requestInfo: requestInfo,
    getInfo: getInfo
  }

  function requestInfo(userInput) {
    var promise = $http({
      url: "https://www.reddit.com/r/aww/search/.json?q=" + userInput + "&restrict_sr=on",
      method: 'GET'
    }).then(function successfulCallback(response) {
      obj = response.data.data.children;
    }, function(error) {
      console.log(error);
    });
    return promise;
  }

  function getInfo() {
    return obj;
  }

});
