$(document).ready(function(){

    $("button").click(function(){
        
        $("span.red-circle").fadeOut();
        $("section.notification-panel").removeClass("unread");
        $("h1+p").fadeOut();


    });
});