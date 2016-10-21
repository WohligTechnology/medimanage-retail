// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template.html",
            controller: 'HomepageCtrl'
        })

    .state('login', {
            url: "/login",
            templateUrl: "views/template.html",
            controller: 'LoginCtrl'
        })
        .state('custom', {
            url: "/custom",
            templateUrl: "views/template.html",
            controller: 'CustomCtrl'
        })
        .state('faq', {
            url: "/faq",
            templateUrl: "views/template.html",
            controller: 'FaqCtrl'
        })
        .state('ask-expert', {
            url: "/ask-expert",
            templateUrl: "views/template.html",
            controller: 'AskExpertCtrl'
        })
        .state('dashboard-download', {
            url: "/dashboard-download",
            templateUrl: "views/template.html",
            controller: 'DashboardDownloadCtrl'
        })
        .state('dashboard-quotes', {
            url: "/dashboard-quotes",
            templateUrl: "views/template.html",
            controller: 'DashboardQuotesCtrl'
        })
        .state('dashboard-contact', {
            url: "/dashboard-contact",
            templateUrl: "views/template.html",
            controller: 'DashboardContactCtrl'
        })
        .state('dashboard-callme', {
            url: "/dashboard-callme",
            templateUrl: "views/template.html",
            controller: 'DashboardCallmeCtrl'
        })
        .state('dashboard-mypolicies', {
            url: "/dashboard-mypolicies",
            templateUrl: "views/template.html",
            controller: 'DashboardMypoliciesCtrl'
        })
        .state('dashboard-mycommunication', {
            url: "/dashboard-mycommunication",
            templateUrl: "views/template.html",
            controller: 'dashboardMycommunicationCtrl'
        })
        .state('dashboard-myprofile', {
            url: "/dashboard-myprofile",
            templateUrl: "views/template.html",
            controller: 'DashboardProfileCtrl'
        })
        .state('dashboard-myclaims', {
            url: "/dashboard-myclaims",
            templateUrl: "views/template.html",
            controller: 'DashboardClaimsCtrl'
        })
        .state('signup', {
            url: "/signup",
            templateUrl: "views/template.html",
            controller: 'SignupCtrl'
        })

    .state('testimonial', {
            url: "/testimonial",
            templateUrl: "views/template.html",
            controller: 'TestimonialCtrl'
        })
        .state('seniorcitizen', {
            url: "/seniorcitizen",
            templateUrl: "views/template.html",
            controller: 'SeniorcitizenCtrl'
        })
        .state('peronal-accident', {
            url: "/personal-accident",
            templateUrl: "views/template.html",
            controller: 'PaccidentCtrl'
        })
        .state('forgot-password', {
            url: "/forgot-password",
            templateUrl: "views/template.html",
            controller: 'PasswordCtrl'
        })
        .state('privacy-policy', {
            url: "/privacy-policy",
            templateUrl: "views/template.html",
            controller: 'PpolicyCtrl'
        })
        .state('our-team', {
            url: "/our-team",
            templateUrl: "views/template.html",
            controller: 'TeamCtrl'
        })

    .state('ourvalues', {
            url: "/ourvalues",
            templateUrl: "views/template.html",
            controller: 'OurvalueCtrl'
        })
        .state('proposer-details', {
            url: "/proposer-details",
            templateUrl: "views/template.html",
            controller: 'Propdet1Ctrl'
        })
        .state('proposer-detail2', {
            url: "/proposer-detail2",
            templateUrl: "views/template.html",
            controller: 'Propdet2Ctrl'
        })
        .state('insured-details', {
            url: "/insured-details",
            templateUrl: "views/template.html",
            controller: 'InsdetCtrl'
        })
        .state('nominee-details', {
            url: "/nominee-details",
            templateUrl: "views/template.html",
            controller: 'NomdetCtrl'
        })
        .state('medical-history', {
            url: "/medical-history",
            templateUrl: "views/template.html",
            controller: 'MedhistoryCtrl'
        })
        .state('medical-history2', {
            url: "/medical-history2",
            templateUrl: "views/template.html",
            controller: 'Medhistory2Ctrl'
        })
        .state('pay-get-insured', {
            url: "/pay-get-insured",
            templateUrl: "views/template.html",
            controller: 'PaygetCtrl'
        })
        .state('our-story', {
            url: "/our-story",
            templateUrl: "views/template.html",
            controller: 'OurstoryCtrl'
        })
        .state('blog-list', {
            url: "/blog-list",
            templateUrl: "views/template.html",
            controller: 'BloglistCtrl'
        })
        .state('careers', {
            url: "/careers",
            templateUrl: "views/template.html",
            controller: 'CareersCtrl'
        })
        .state('trust', {
            url: "/trust",
            templateUrl: "views/template.html",
            controller: 'TrustCtrl'
        })
        .state('buying-process-step1', {
            url: "/buying-process-step1",
            templateUrl: "views/template.html",
            controller: 'Buystep1Ctrl'
        })
        .state('buying-process-step2', {
            url: "/buying-process-step2",
            templateUrl: "views/template.html",
            controller: 'Buystep2Ctrl'
        })
        .state('why-medimanage', {
            url: "/why-medimanage",
            templateUrl: "views/template.html",
            controller: 'WhyCtrl'
        })
        .state('get-call', {
            url: "/get-call",
            templateUrl: "views/template.html",
            controller: 'GetcallCtrl'
        })
        .state('get-quote', {
            url: "/get-quote",
            templateUrl: "views/template.html",
            controller: 'GetquoteCtrl'
        })
        .state('press', {
            url: "/press",
            templateUrl: "views/template.html",
            controller: 'PressCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: "views/template.html",
            controller: 'FormCtrl'
        });
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancybox', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                padding: 0,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

firstapp.directive('autoHeight', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            $element.css("min-height", windowHeight);
        }
    };
});

firstapp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
