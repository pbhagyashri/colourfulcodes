var timelineWidth = 0;
var firstRun = true;
var panelWidth = 0;
var totalPanels = 0;
var currentPanel = 0;

$(document).ready(function() {
    
   panelWidth = $(".timeline .panel").width();
   timelineWidth = $(".timeline").width();
   totalPanels = $(".timeline .panel").length;    
   adjustLayout();
   setInterval(checkWindowSize, 1000);
   mobileNavigation();
   backgroundImage();
       
});

function adjustLayout() {
    
    $(".timeline .panel").each(function(index) {
        
        var newX = panelWidth * index;
        $(this).css("left", newX+"px");
        
        var newLable = $(this).find(".lable, h3").html();
         
        $(".timeline nav").append('<a href= "#">'+ newLable +'</a>');
        
    });
    
    currentPanel = $(".timeline nav a:last-child()").index();
    
    activateNavigation();
    
}

function activateNavigation() {
    
    $(".timeline nav a").on("click", function(e){
        
        currentPanel = $(this).index();
        timelineWidth = $(".timeline").width();
        
        $(".timeline nav a").removeClass('selected');
        $(this).addClass('selected');
        
        var timelineOffset = (timelineWidth - panelWidth) * 0.5;
        var newPosition = ((currentPanel * panelWidth)* -1) + timelineOffset;
        
        $(".panel-slider").animate({left:newPosition+"px"}, 1000);
        e.preventDefault();    
   
    })
    
}

/* for sticky navigation */

$(function() {
    
   $('.js--section-title').waypoint(function(direction) {
       
       if(direction == "down"){
           $('nav').addClass('sticky');
           
       }else{
           
           $('nav').removeClass('sticky');
       }
    
});
       
   },{    
    offset:'60px;'     
 })
   
        

function checkWindowSize() {
    
    var newTimelineWidth = $(".timeline-width").width();
    
    timelineWidth = newTimelinewidth;
    
    if(firstRun == true){
        
        $(".timeline nav a:nth-child("+(currentPanel+1)+")").trigger("click");
        firstRun = false;
    }
        
};

    function mobileNavigation() {
    
    $(".js--nav-icon").on("click", function() {
        var $nav = $(".js--main-nav");
        var $icon =$(".js--nav-icon i");
        var $subNav = $('js-sub-nav ul');
       
        $nav.slideToggle(300);
        
        if($icon.hasClass('ion-navicon-round')){
            
            $icon.addClass('ion-close-round');
            $icon.removeClass('ion-navicon-round');
            
        }else{
        $icon.addClass('ion-navicon-round');
        $icon.removeClass('ion-close-round');    
            
        }
    
   });
};

//home page button animation 

function backgroundImage() {
    
    $(".gear-box h2").animate({
        
        marginTop: "202px",
        opacity: "1"
    
    }, 2000);
    
};

