describe('popup-ctrl', function() {
    var $controller;
  beforeEach(module('myApp'));
  var modalInstance;

          modalInstance = {                    // Create a mock object using spies
        close: jasmine.createSpy('modalInstance.close'),
        dismiss: jasmine.createSpy('modalInstance.dismiss'),
        result: {
          then: jasmine.createSpy('modalInstance.result.then')
        }
      };   
  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  })); 
describe('addtask', function() {
    it('check whether the new item is added to tha array', function() {
      var $scope = {};
       
      var controller = $controller('popup-ctrl', { $scope: $scope,$uibModalInstance:modalInstance  });
      $scope.boxid="111";
      $scope.boxname="abc";
      $scope.addtask();
      console.log(arr);
      expect(arr[4]).toEqual(jasmine.objectContaining(Object({taskid: '111',taskname:"abc"}))); 
    });

  }); 
describe('remo', function() {
    it('check whether the item is removed from tha array', function() {
      var $scope = {};
         var eachtask={};
      var controller = $controller('to-do-ctrl', { $scope: $scope});
     
      $scope.remo(0);
      expect(arr[0]).not.toEqual(jasmine.objectContaining(Object({taskid: 100,taskname:"Task1"}))); 
    });

  });
}); 