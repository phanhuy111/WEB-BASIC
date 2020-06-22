
 $(document).ready(function () {
    $('.topnho1').hide();
    
    $(window).scroll(function() {
        var vitri = $(window).scrollTop();
        console.log(vitri);
        if( vitri > 1800 && vitri < 1900 ){
            $('#lines').animateNumber({ number: 500 });
            $('#lines1').animateNumber({ number: 100 });
            $('#lines2').animateNumber({ number: 30 });
        }
        else 
            return
    });

    
    $(window).scroll(function() {
        var vitri = $(window).scrollTop();
        if(vitri > 100){
            $('.topnho1').show();
        }
        else {
            $('.topnho1').hide();
        }
    });


})
