angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper', 'rzModule'])

.controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.formSubmitted = false;

        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        }
    })
    .controller('menuCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {

        // $scope.navigation = NavigationService.getnav();
        console.log($state);
        $scope.formSubmitted = false;
        $scope.states = $state;
        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        }
    })

.controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);
    $scope.getClass = "";
    $scope.contentClass = "";
    $scope.menuOpen = function () {
        if ($scope.getClass == "" && $scope.contentClass == "") {
            $scope.getClass = "slide-out";
            $scope.contentClass = "content-slide";
        } else {
            $scope.getClass = "";
            $scope.contentClass = "";
        }
    }
})

.controller('HomepageCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    TemplateService.menu = "";

    $scope.clicks = [];
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

    $scope.activateTab = function (index) {
        console.log(index);
        for (var i = 0; i < 6; i++) {
            $scope.clicks[i] = {};
            $scope.clicks[i].status = false;

        }
        $scope.clicks[index].status = true;
    }
})

.controller('CustomCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("custom"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Custom"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        TemplateService.menu = "";
        $scope.navigation = NavigationService.getnav();


    })
    .controller('DashboardDownloadCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("dashboard-download"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Dashboard-download"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();




    })
    .controller('DashboardQuotesCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("dashboard-quotes"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Dashboard-quotes"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('DashboardContactCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("dashboard-contact"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Dashboard-contact"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('DashboardCallmeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("dashboard-callme"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Dashboard Callme"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('DashboardMypoliciesCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("dashboard-mypolicies"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Dashboard-mypolicies"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
    })
    .controller('dashboardMycommunicationCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("dashboard-mycommunication"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Dashboard-mycommunication"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.view = false;

        $scope.showNextRow = function () {
            //console.log("show");
            $scope.view = true;

        }

        $scope.hideNextRow = function () {
            //console.log("show");
            $scope.view = false;

        }




    })

.controller('DashboardProfileCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("dashboard-myprofile"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Dashboard My Profile"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };

})


.controller('DashboardClaimsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("dashboard-myclaims"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Dashboard My Claims"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.oneAtATime = true;
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };

})


.controller('FaqCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("faq"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Faq"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
        TemplateService.menu = "";


    })
    .controller('AskExpertCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("ask-expert"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Ask-expert"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.oneAtATime = true;
        TemplateService.menu = "";
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

.controller('LoginCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("login"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Login"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('SignupCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("signup"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Sign Up"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('TeamCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("our-team"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Our Team"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('SeniorcitizenCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("seniorcitizen"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Senior Citizen"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('PaccidentCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("personal-accident"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Personal Accident"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('OurstoryCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("our-story"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Our Story"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('OurvalueCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("ourvalues"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Our Values"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    TemplateService.menu = "";
    $scope.navigation = NavigationService.getnav();
    $scope.tabs = [];
    // $scope.

    for (var i = 0; i < 3; i++) {
        $scope.tabs.push({
            active: false
        });
    }
    $scope.tabs = [{
        active: false
    }, {
        active: false
    }, {
        active: false
    }]
    $scope.showPassion = function (id) {
            _.each($scope.tabs, function (key) {
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

.controller('WhyCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("why-medimanage"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Why Medimanage"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('Buystep1Ctrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("buying-process-step1"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Buying Process: Step-1"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('Buystep2Ctrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("buying-process-step2"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Buying Process: Step-2"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    TemplateService.menu = "";
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

.controller('CareersCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("careers"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Careers"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('Propdet1Ctrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("proposer-details"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Proposer Details"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('Propdet2Ctrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("proposer-detail2"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Proposer Detail2"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('InsdetCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("insured-details"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Insured Details"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('NomdetCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("nominee-details"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Nominee Details"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('MedhistoryCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("medical-history"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Medical history"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('Medhistory2Ctrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("medical-history2"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Medical history2"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";
    $scope.oneAtATime = true;

})

.controller('PaygetCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("pay-get-insured"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Pay & get Insured"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})


.controller('TrustCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("trust"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Trust & Security"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('GetcallCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("get-call"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Have us call "); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('GetquoteCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("get-quote"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Get a quote "); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    TemplateService.menu = "";
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

.controller('TestimonialCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("testimonial"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Testimonials"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('PpolicyCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("privacy-policy"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Privacy Policy"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('PasswordCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("forgot-password"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Forgot Password"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})

.controller('BloglistCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("blog-list"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Blog Listing"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.menu = "";

})


.controller('PressCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("press"); //Use same name of .html file
    $scope.menutitle = NavigationService.makeactive("Press"); //This is the Title of the Website
    TemplateService.title = $scope.menutitle;
    TemplateService.menu = "";
    $scope.navigation = NavigationService.getnav();
    $scope.release = true;
    $scope.tabs = [];

    $scope.tabs = [{
        active: true
    }, {
        active: false
    }, {
        active: false
    }, {
        active: false
    }]
    $scope.showPress = function (id) {
        _.each($scope.tabs, function (key) {
            key.active = false;
        });
        $scope.tabs[id - 1].active = true;
        if (id == 1) {
            $scope.release = true;
            $scope.coverage = false;
            $scope.award = false;
            $scope.mediac = false;
        } else if (id == 2) {
            $scope.release = false;
            $scope.coverage = true;
            $scope.award = false;
            $scope.mediac = false;
        } else if (id == 3) {
            $scope.release = false;
            $scope.coverage = false;
            $scope.award = true;
            $scope.mediac = false;
        } else if (id == 4) {
            $scope.release = false;
            $scope.coverage = false;
            $scope.award = false;
            $scope.mediac = true;
        }

    }


})

.controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function () {
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
