movieStubApp.config(function ($routeProvider) {
    console.log("in router.js");
    $routeProvider
        .when('/', {
            templateUrl: 'tmpl/home.html',
            controller: 'movieStubController'
        }).when('/movie/:id', {
            templateUrl: 'tmpl/movie.html',
            controller: 'movieDetailsController'
        }).otherwise({
            redirectTo: '/'
        });
});