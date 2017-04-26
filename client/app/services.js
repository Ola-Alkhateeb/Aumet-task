angular.module('myapp.services', [])

.factory('Data',function ($http) {

  var getAll = function () {
    return $http({
      method : 'GET',
      url : '/egypt'
    }).then(function (resp) {
      console.log(resp)
      return resp.data
    })
  }

  return {
    getAll : getAll
  }
})
