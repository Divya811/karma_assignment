var app=angular.module('myApp',['ui.bootstrap','pascalprecht.translate']);


	var arr=[{
			'taskid':100,
			'taskname':'task1'
		},
		{
			'taskid':101,
			'taskname':'task2'
		},
		{
			'taskid':102,
			'taskname':'task3'
		},
		{
			'taskid':103,
			'taskname':'task4'
		}
		];

app.config(function($translateProvider, $translatePartialLoaderProvider){
  
  $translatePartialLoaderProvider.addPart('home'); 
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: '/i18n/home/{lang}.json'
  });

  

});
	app.controller('to-do-ctrl',['$scope','$uibModal','$translate','$translatePartialLoader',function($scope,$uibModal,$translate,$translatePartialLoader){

        $translatePartialLoader.addPart('home');
        $translate.use('eng');
		$scope.val='eng';

    $scope.change = function(value) {
        $translatePartialLoader.addPart('home');
        $translate.use(value);
    }
		$scope.arr=arr;
			$scope.open = function () {
			console.log('opening pop up');
			var modalInstance = $uibModal.open({
					templateUrl: 'popup.html',
					controller:'popup-ctrl'

				});
			}
		$scope.btnhide=true;
		$scope.addhide=false;
		$scope.tabhide=false;
		
		$scope.btnadd=function(){
			$scope.btnhide=false;
			$scope.addhide=true;
		}
		
		
			$scope.remo=function($index){
				$scope.arr.splice($index,1);
			}
		
	}]);

app.controller('popup-ctrl',['$scope','$uibModalInstance','$translate',function($scope,$uibModalInstance,$translate){
	$scope.addtask=function(){
			$scope.tabhide=false;
			var flag=0;
			if ($scope.boxid!=undefined && $scope.boxid!=null && $scope.boxname!=undefined && $scope.boxname!=null) {
			for(var i=0;i<arr.length;i++){
				if ($scope.boxid==arr[i].taskid) {
						flag=1;
						alert("already exists");
						break;	
				}
				else{
					flag=0;
				}
			}
		
			if(flag==0){


		arr.push({taskid:$scope.boxid,taskname:$scope.boxname});
			$scope.boxid='';
			$scope.boxname='';
			}
		}
	}

	 $scope.cncltask = function () {
            $uibModalInstance.dismiss('cancel');
        }; 
}]);


