$(document).ready(function(){
    $(".mobile-menu-button").on("click", function(){
        console.log('clicked')
        $("ul.menu").slideToggle();
    })
})
