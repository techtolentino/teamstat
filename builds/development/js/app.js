var myApp = angular.module('myApp', 
	['ngRoute', 'firebase', 'appControllers'])
.constant('FIREBASE_URL', 'https://teamstat.firebaseio.com/');

// Setting Firebase Dependency
var appControllers = angular.module('appControllers',['firebase']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/team', {
			templateUrl: 'views/team.html',
			controller: 'MembersController'
		}).
		when('/views/dashboard/:uId/:mId', {
			templateUrl: 'views/dashboard.html',
			controller: 'DashboardController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		otherwise({
			redirectTo: '/login'
		});
}]);