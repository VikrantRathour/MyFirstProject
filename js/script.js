$(document).ready(function(){
    $(function(){
        $.scrollify({
            section: "section",
            easing:"easeOutExpo",
            touchScroll:true,
        });
        
    });

    $('.nav-circle-home').click(function(){
        $('.home').fadeOut(1500);
        $('.navbar').show();
        $('.navbar').css('animation',"nav-animate-nav-show 1s ease 0s");
        // document.getElementById('navbar').style.animation = "nav-animate 2s ease 1s";
    });
    $('.nav-exit-home').click(function(){
        $('.navbar').fadeOut(2000);
        $('.home').fadeIn(1500);
        $('.navbar').css('animation',"nav-animate-nav-hide 2s ease 0s");
    });
    // $('.dotstyle .work').click(function(){
    //     $('.center-work').show();
    //     $('.center-trainers').hide();
    //     $('.center-team').hide();
    //     $('.center-values').hide();
    //     $('.dotstyle .work').addClass("current");
    //     $('.dotstyle .trainers').removeClass("current");
    //     $('.dotstyle .team').removeClass("current");
    //     $('.dotstyle .values').removeClass("current");
    // });
    // $('.dotstyle .trainers').click(function(){
    //     $('.center-work').hide();
    //     $('.center-trainers').show();
    //     $('.center-team').hide();
    //     $('.center-values').hide();
    //     $('.dotstyle .work').removeClass("current");
    //     $('.dotstyle .trainers').addClass("current");
    //     $('.dotstyle .team').removeClass("current");
    //     $('.dotstyle .values').removeClass("current");
    // });
    // $('.dotstyle .team').click(function(){
    //     $('.center-work').hide();
    //     $('.center-trainers').hide();
    //     $('.center-team').show();
    //     $('.center-values').hide();
    //     $('.dotstyle .work').removeClass("current");
    //     $('.dotstyle .trainers').removeClass("current");
    //     $('.dotstyle .team').addClass("current");
    //     $('.dotstyle .values').removeClass("current");
    // });
    // $('.dotstyle .values').click(function(){
    //     $('.center-work').hide();
    //     $('.center-trainers').hide();
    //     $('.center-team').hide();
    //     $('.center-values').show();
    //     $('.dotstyle .work').removeClass("current");
    //     $('.dotstyle .trainers').removeClass("current");
    //     $('.dotstyle .team').removeClass("current");
    //     $('.dotstyle .values').addClass("current");
    // });
});
// $(document).keydown(function(e){
//     if (e.keyCode == 38){
//         $('.home').animate({ scrollTop: window.pageYOffset + $(window).height()}, 300);
//     }
//     if (e.keyCode == 40){
//         $('.home').animate({ scrollTop: window.pageYOffset + $(window).height()}, 300);
//     }
// });
// document.addEventListener('scroll',function(e){
//     var currScroll = document.body.scrollTop;
//     document.body.scrollTop = calc(~"currScroll + 100vh")
// });