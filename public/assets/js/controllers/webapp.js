
module.config(function($routeProvider,$locationProvider){
    $routeProvider
        .when('/home',{
            templateUrl:"app/Views/Home/Views/Home.html",
            controller:"homeController",
        })
        .when('/home/pricing',{
            templateUrl:"app/Views/Home/Views/pricing.html",
            controller:"homeController",
        })
          .when('/home/work',{
            templateUrl:"app/Views/Home/Views/work.html",
            controller:"homeController",
        })
        .when('/home/about',{
            templateUrl:"app/Views/Home/Views/about.html",
            controller:"homeController",
        })
         .when('/home/policy',{
            templateUrl:"app/Views/Home/Views/policy.html",
            controller:"homeController",
        })
           .when('/home/career-path',{
            templateUrl:"app/Views/Home/Views/career-path.html",
            controller:"homeController",
        })
         .when('/home/become-a-partner',{
            templateUrl:"app/Views/Home/Views/become-a-partner.html",
            controller:"homeController",
        })
        .when('/home/contact',{
            templateUrl:"app/Views/Home/Views/contact.html",
            controller:"homeController",
        })
        .when('/home/start-a-project',{
            templateUrl:"app/Views/Home/Views/start-a-project.html",
            controller:"homeController",
        })
        .when('/home/trainee-registration:tid',{
            templateUrl:"app/Views/Home/Views/trainee-registration.html",
            controller:"homeController",
        })
        .when('/home/blog',{
            templateUrl:"app/Views/Home/Views/blog.html",
            controller:"homeController",
        })
          .when('/home/blogcat:id',{
            templateUrl:"app/Views/Home/Views/blogcat.html",
            controller:"homeController",
        })
           .when('/home/project-detail:pid',{
            templateUrl:"app/Views/Home/Views/project-detail.html",
            controller:"homeController",
        })
             .when('/home/agentpost:aid',{
            templateUrl:"app/Views/Home/Views/agentpost.html",
            controller:"homeController",
        })
         .when('/home/fullpost:sid',{
            templateUrl:"app/Views/Home/Views/fullpost.html",
            controller:"homeController",
        })
         .when('/home/strategy',{
            templateUrl:"app/Views/Home/Views/strategy.html",
            controller:"homeController",
        })
            .when('/home/services',{
            templateUrl:"app/Views/Home/Views/services.html",
            controller:"homeController",
        })
             .when('/home/our-process',{
            templateUrl:"app/Views/Home/Views/our-process.html",
            controller:"homeController",
        })
                .when('/home/web-design',{
            templateUrl:"app/Views/Home/Views/web-design.html",
            controller:"homeController",
        }) 
            .when('/home/prototyping',{
            templateUrl:"app/Views/Home/Views/prototyping.html",
            controller:"homeController",
        }) 
              .when('/home/enterprise-solution',{
            templateUrl:"app/Views/Home/Views/enterprise-solution.html",
            controller:"homeController",
        }) 
              .when('/home/web-app',{
            templateUrl:"app/Views/Home/Views/web-app.html",
            controller:"homeController",
        }) 
         .when('/home/mobile-app',{
            templateUrl:"app/Views/Home/Views/mobile-app.html",
            controller:"homeController",
        })
         .when('/home/contact',{
            templateUrl:"app/Views/Home/Views/contact.html",
            controller:"homeController",
        })
            .when('/home/training',{
            templateUrl:"app/Views/Home/Views/training.html",
            controller:"homeController",
        })
      
        .otherwise({
            redirectTo:"/home"
        })
        $locationProvider.html5Mode(true);
})