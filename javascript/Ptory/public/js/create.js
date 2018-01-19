	
	var myApp=angular.module("myApp", ["ngRoute"]);

	// single page 라우터 설정
	myApp.config(function($routeProvider){
		$routeProvider
		.when("/home",{templateUrl:"/views/home.html"})
		.when("/table",{templateUrl:"/views/table.html"})
    .when("/write",{templateUrl:"/views/write.html"})
		.when("/invitaion",{templateUrl:"/views/invitation.html"})
		.when("/login",{templateUrl:"/views/login.html"})
    .when("/info",{templateUrl:"/views/info.html"})
    .when("/food",{templateUrl:"/views/food.html"})
		.when("/signUp",{templateUrl:"/views/signUp.html"})
		.when("/travel",{templateUrl:"/views/travel.html"})
		.when("/it",{templateUrl:"/views/it.html"})
    .when("/myCarousel",{templateUrl:"/views/travel.html"})
    .when("/myCarousel2",{templateUrl:"/views/travel2.html"})
    .when("/myCarousel3",{templateUrl:"/views/travel3.html"})
    .when("/food",{templateUrl:"/views/food.html"})
    .when("/food1",{templateUrl:"/views/food1.html"})
    .when("/food2",{templateUrl:"/views/food2.html"})
    .when("/food3",{templateUrl:"/views/food3.html"})
    .when("/food4",{templateUrl:"/views/food4.html"})
    .when("/food5",{templateUrl:"/views/food5.html"})
		.otherwise({redirectTo:"/home"});
	});


	myApp.controller("navCtrl", function($scope){
		$scope.activated="home";

	});


// it scitp
   var lazyct=0;
    var sct=0;
    var lightct=0;

        // slick 클릭시 이미지 생성
    $('#myTab [href="#slick"]').click(function(){
      if(sct==0){
        for(var i=1; i<21; i++){
          var link="images/1/"+i+".jpg"
          $("<img/>").attr("src",link).css("height","200px").appendTo("#slick");
        }

        $('.variable-width').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        });
      }
      sct++;
    });



    // lazy 클릭시 lazy 이미지 생성
    $('#myTab [href="#lazy"]').click(function(){
      if(lazyct==0){
        for(var i=1; i<21; i++){
          $("<img/>").attr("data-src","images/1/"+i+".jpg").addClass("lazyload").css("width","100%").appendTo("div#lazy");
          $("<div/>").appendTo("div#lazy");

        }
      }
      lazyload();
      lazyct++;
    });





  // lightbox 클릭시 이미지 생성
    $('#myTab [href="#lightbox"]').click(function(){
      if(lightct==0){
        for(var i=1; i<21; i++){
          var link="images/1/"+i+".jpg"
          $("<a/>").attr("href",link).attr("id","lb"+i).appendTo("div#links");
          $("<img/>").attr("src",link).css("width","100px").appendTo("#lb"+i);
          // if(i%6==0){
          //   $("<br/>").appendTo("div#links");
          // }
        }
      }
      lightct++;
          document.getElementById('links').onclick = function (event) {
      event = event || window.event;
      var target = event.target || event.srcElement,
          link = target.src ? target.parentNode : target,
          options = {index: link, event: event},
          links = this.getElementsByTagName('a');
      blueimp.Gallery(links, options);
    };

    });

// 검색창
