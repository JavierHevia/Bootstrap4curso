$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    //$("#carousel-pause").click(function(){
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
    //});
    //$("#carousel-play").click(function(){ 
    //    $("#mycarousel").carousel('cycle');
    //});

    $("#myreserve").click(function () {
        $("#reserveform").modal('show');
    });
     

    $("#brlogin").click(function() {
        $("#loginModal").modal('show');
    });
    

});


// package.json
    // npm run watch:all
        // npm install --save-dev onchange@3.3.0 parallelshell@3.0.1

// npm run copyfonts
    // npm run clean  