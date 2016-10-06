angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper', 'rzModule'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    ];
  //   $scope.tabimages = [{
  //     inactive : 'img/assdas',
  //     active: 'sadasdas'
  //   },
  //   {
  //     inactive : 'img/assdas',
  //     active: 'sadasdas'
  //   },
  //   {
  //     inactive : 'img/assdas',
  //     active: 'sadasdas'
  //   },{
  //     inactive : 'img/assdas',
  //     active: 'sadasdas'
  //   }]
  // _.each($scope.tabimages,function (key) {
  //   $scope.currentimage.push({
  //     image:key.inactive
  //   })
  // });
  // $scope.activateTab = function (index) {
  //   $scope.currentimage[index].image = $scope.tabimages[index].active;
  // }

})

.controller('FormCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.formSubmitted = false;

    $scope.submitForm = function(data) {
        console.log(data);
        $scope.formSubmitted = true;
    }
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
})

.controller('HomepageCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.mySlides = [{
        heading: "Why customers love us? ",
        fixedContent: "Here's what our customers have to say about us",
        content: "“ I spoke to the Advisory / Sales Team. I had a very good experience interacting with Medimanage. I feel they are the best as i have been getting the best service from the medimanage team. ”",
        img: "img/pic-4.png",
        custName: "Ananya"
    }, {
        heading: "Why customers love us? ",
        fixedContent: "Here's what our customers have to say about us",
        content: "“ I spoke to the Advisory / Sales Team. I had a very good experience interacting with Medimanage. I feel they are the best as i have been getting the best service from the medimanage team. ”",
        img: "img/pic-4.png",
        custName: "Ananya"

    }, {
        heading: "Why customers love us? ",
        fixedContent: "Here's what our customers have to say about us",
        content: "“ I spoke to the Advisory / Sales Team. I had a very good experience interacting with Medimanage. I feel they are the best as i have been getting the best service from the medimanage team. ”",
        img: "img/pic-4.png",
        custName: "Ananya"
    }, {
        heading: "Why customers love us? ",
        fixedContent: "Here's what our customers have to say about us",
        content: "“ I spoke to the Advisory / Sales Team. I had a very good experience interacting with Medimanage. I feel they are the best as i have been getting the best service from the medimanage team. ”",
        img: "img/pic-4.png",
        custName: "Ananya"
    }, ];


})

.controller('CustomCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("custom"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Custom"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();


    })
    .controller('FaqCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("faq"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Faq"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;



    })
    .controller('AskExpertCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("ask-expert"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Ask-expert"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
        $scope.mySlides = [{
            heading: "Why customers love us? ",
            fixedContent: "Here's what our customers have to say about us",
            content: "“ I spoke to the Advisory / Sales Team. I had a very good experience interacting with Medimanage. I feel they are the best as i have been getting the best service from the medimanage team. ”",
            img: "img/pic-4.png",
            custName: "Ananya"
        }, {
            heading: "Why customers love us? ",
            fixedContent: "Here's what our customers have to say about us",
            content: "“ I spoke to the Advisory / Sales Team. I had a very good experience interacting with Medimanage. I feel they are the best as i have been getting the best service from the medimanage team. ”",
            img: "img/pic-4.png",
            custName: "Ananya"

        }, {
            heading: "Why customers love us? ",
            fixedContent: "Here's what our customers have to say about us",
            content: "“ I spoke to the Advisory / Sales Team. I had a very good experience interacting with Medimanage. I feel they are the best as i have been getting the best service from the medimanage team. ”",
            img: "img/pic-4.png",
            custName: "Ananya"
        }, {
            heading: "Why customers love us? ",
            fixedContent: "Here's what our customers have to say about us",
            content: "“ I spoke to the Advisory / Sales Team. I had a very good experience interacting with Medimanage. I feel they are the best as i have been getting the best service from the medimanage team. ”",
            img: "img/pic-4.png",
            custName: "Ananya"
        }, ];

    })

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("login"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Login"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('SignupCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("signup"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Sign Up"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('TeamCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("our-team"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Our Team"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('SeniorcitizenCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("seniorcitizen"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Senior Citizen"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('PaccidentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("personal-accident"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Personal Accident"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('OurstoryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("our-story"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Our Story"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('OurvalueCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("ourvalues"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Our Values"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.tabs = [];
    // $scope.

    for (var i = 0; i < 3; i++) {
        $scope.tabs.push({
            active: false
        });
    }
    $scope.tabs = [{
      active:false
    },{
      active:false
    },{
      active:false
    }]
    $scope.showPassion = function(id) {
            _.each($scope.tabs, function(key) {
                key.active = false;
            });
            $scope.tabs[id - 1].active = true;
            if (id == 1) {
                $scope.passion = true;
                $scope.promise = false;
                $scope.commit = false;
            } else if (id == 2) {
                $scope.passion = false;
                $scope.promise = true;
                $scope.commit = false;
            } else if (id == 3) {
                $scope.passion = false;
                $scope.promise = false;
                $scope.commit = true;
            }

        }
        // $scope.showPassion=function(){
        //   $scope.passion=true;
        //   $scope.promise=false;
        //   $scope.commit=false;
        // }
        // $scope.showPromise=function(){
        //   $scope.passion=false;
        //   $scope.promise=true;
        //   $scope.commit=false;
        // }
        // $scope.showCommit=function(){
        //   $scope.passion=false;
        //   $scope.promise=false;
        //   $scope.commit=true;
        // }




})

.controller('WhyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("why-medimanage"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Why Medimanage"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('Buystep1Ctrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("buying-process-step1"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Buying Process: Step-1"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('Buystep2Ctrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("buying-process-step2"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Buying Process: Step-2"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.slider = {
        minValue: 0,
        maxValue: 796,
        options: {
            floor: 0,
            ceil: 796,
            step: 1
        }
    };

})

.controller('CareersCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("careers"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Careers"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('Propdet1Ctrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("proposer-details"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Proposer Details"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('TrustCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("trust"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Trust & Security"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('GetcallCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("get-call"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Have us call "); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('TestimonialCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("testimonial"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Testimonials"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('PpolicyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("privacy-policy"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Privacy Policy"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('PasswordCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("forgot-password"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Forgot Password"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('BloglistCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("blog-list"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Blog Listing"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})


.controller('PressCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("press"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Press"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();


})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;
