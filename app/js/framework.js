$(document).ready(function() {
    // run test on initial page load

    checkSize();

    // run test on resize of the window

    $(window).resize(checkSize);
});

//Function for the sidebar
$(function(){
    $(".nav_trigger").click(function() {
        toggleSideNav();
    });
});

function toggleSideNav(){
    $("body").toggleClass("show_sidebar");
}

//Function to the css rule
function checkSize(){
    if ($(".nav_trigger").css("visibility") == "visible" ){
        if($( "body" ).hasClass( "show_sidebar" ))
        {
            toggleSideNav();
        }
    }
    else{
        if($( "body" ).hasClass( "" )){
            toggleSideNav();
        }
    }
}
