describe('mainctrl tests', function() {

  beforeEach(module('FunApp'));

  var scope;
  var controller;
  var deferred_reg;

  // //we modify services so we can test them with controllers
  // beforeEach(inject(function(_authService_) {
  //   // The injector unwraps the underscores (_) from around the parameter names when matching
  // 	authService = {
  //     register: function() {
  //       deferred_reg = q.defer();
  //       return deferred_reg.promise;
  //     },
  //   };
  // }));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
  	controller = $controller('MainCtrl', {
  		$scope: scope,
  		data: [
			{
				name: 'Reggie Miller',
				team: 'Pacers'
			},
			{
				name: 'Patrick Ewing',
				team: 'Knicks'
			},
			{
				name: 'Karl Malone',
				team: 'Jazz'
			},
			{
				name: 'Michael Jordan',
				team: 'Bulls'
			},
			{
				name: 'Magic Johnson',
				team: 'Lakers'
			},
		]
  	});
  }));

	it('filterData removes names with M', function() {
  		scope.data = scope.filterData();
  		for(var i = 0; i<scope.data.length; i++) {
  			expect(scope.data[i].name.charAt(0)).not.toBe('M');
  		}
    });
	it('filterData removes them with case sensitivity', function() {
  		scope.data = scope.filterData();
  		for(var i = 0; i<scope.data.length; i++) {
  			expect(scope.data[i].name.charAt(0).toLowerCase()).not.toBe('m');
  		}
    });

    // //fake test if we had a service
    // it('filterData removes them with case sensitivity', function() {
  		// deferred_reg.resolve(scope.user);
  		// //logic to test controller method with service
    // });
});