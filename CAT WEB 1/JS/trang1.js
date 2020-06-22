jQuery(function($){
    $(".hamburger").click(function()
    {
        $(".navigation").toggleClass("open");
    })
    $(window).scroll(function() {
        var vitri = $(window).scrollTop();
        if(vitri > 40){
            $('.hamburger').hide();
        }
        else {
            $('.hamburger').show();
        }
    }); 
    $("button.slick-prev.slick-arrow").on("click", function(){
        setTimeout( $(".hinhan1").fadeOut(0).fadeIn(2000) , 2000);
    });
    $("button.slick-next.slick-arrow").on("click", function(){
        setTimeout( $(".hinhan1").fadeOut(0).fadeIn(2000) , 2000);
    });

});




