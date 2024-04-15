//* HTML Elements


//* Variables


//* functions 



// * events

// close aside
$("#closeIcon").on("click", function(){
    $("header").removeClass("collapse-header");
    $("aside").hide();
});


// open aside
$("#openBtn").on("click", function(){
    $("header").addClass("collapse-header");
    $("aside").show();
});


// scroll spy
$("aside a").on("click", function () {
    const currentSectionSelector = $(this).attr("href");
    const currentSectionTopOffset = $(currentSectionSelector).offset().top;
    $("html, body").animate({ scrollTop: currentSectionTopOffset }, 1000);
});


// duration to 5/5/2025
$(document).ready(function() {

    var targetDate = new Date("5/5/2025").getTime();

    // Update countdown every second
    var countdownInterval = setInterval(function() {
        var currentDate = new Date().getTime();

        // Calculate the time remaining in milliseconds
        var timeRemaining = targetDate - currentDate;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the HTML elements
        $(".day").html(days + " D");
        $(".hours").html(hours + " h");
        $(".minutes").html(minutes + " m");
        $(".seconds").html(seconds + " s");

        // Check if the target date has passed
        if (timeRemaining < 0) {
            clearInterval(countdownInterval); // Stop the countdown
            $(".duration").html("The countdown has ended!"); // Display a message
        }
    }, 1000); // Update every second
});


// char Reminding
$(".contact form textarea").on("input", function(){
    let charReminding = 100 - $(this).val().length ;
    if(charReminding >= 0)
        $(".chars-num").html(charReminding); 
    else
        $(this).val($(this).val().slice(0, 100));
    
});