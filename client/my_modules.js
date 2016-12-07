angular.module('AtBash', ['myAppControllers', 'myAppServices'] );

angular.module('myAppControllers', [])
	.controller('codeController',
				['$scope',
				 'srvInfo',
				 function ($scope, srvInfo) {
					$scope.decode = function(data) {//run decoder
						var RE = /^[a-z|A-Z]*$/;
							if(document.getElementById('text_to_decode').value.match(RE)){
								srvInfo.Decode(
								function(data) {
									$scope.decoder_result = data;
								});
								document.getElementById('text_to_decode').style='background-color:white;';
								document.getElementById('text_error').style='display:none;';
							}else{
								document.getElementById('text_error').style='display:inline;';
								document.getElementById('text_to_decode').style='background-color:#ffa1a1;';
								document.getElementById('text_error').innerHTML="Put english chars only";
							}
					};
					$scope.code = function(data) {//run coder
						var RE = /^[a-z|A-Z]*$/;
							if(document.getElementById('text_to_code').value.match(RE)){
								srvInfo.Code(
								function(data) {
									$scope.coder_result = data;
								});
								document.getElementById('text_to_code').style='background-color:white;';
								document.getElementById('text_error').style='display:none;';
							}else{
								document.getElementById('text_error').style='display:inline;';
								document.getElementById('text_to_code').style='background-color:#ffa1a1;';
								document.getElementById('text_error').innerHTML="Put english chars only";
							}
					};
					
				 }]);

// communication with the server
angular.module('myAppServices', [])
    .service('srvInfo',
             function($http) {
                 this.Decode = function(callback) {
                     return $http.get('/ajax/AtBashCoderPython/Decode/?text='+document.getElementById('text_to_decode').value+'& ').success(callback);
                 };
                 this.Code = function(callback) {
                     return $http.get('/ajax/AtBashCoderPython/Code/?text='+document.getElementById('text_to_code').value+'& ').success(callback);
                 };
             });


