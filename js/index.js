//=<reference types="../@types/jquery" />

/*loading*/
$(function(){
    $(".loading").fadeOut(2000,function(){
        $("body").css("overflow","auto");
        $(".loading").remove();
    });

})

/*sideNav*/
let sideNav = $(".side-nav");
let sideNavWidth = sideNav.innerWidth();
// console.log(sideNav);
sideNav.css("left", -sideNavWidth);

$(".open-nav").click(function() {
  sideNav.animate({ left: "0px" }, 500);
});
$(".closebtn").click(function() {
  sideNav.animate({ left: -sideNavWidth }, 500);
});

/*Scroll Nav*/
$("a[href^='#'").click(function(e) {
  let targetHref = $($(e.target).attr("href"));
  // console.log(targetHref);
  let positionOfSection = $(targetHref).offset().top;
  // console.log(positionOfSection);
  $('body,html').animate({ scrollTop: positionOfSection }, 1000);
});

/*Accordion*/
$(".toggle").click(function(e) {
  $(".p-text").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});

/*Counter*/

$(document).ready(function() {
  countDownn("10 october 2021 9:56:00");
});

function countDownn(eventDateString) {
  let eventDate = new Date(eventDateString);
  console.log(eventDate);
  let eventDateSec = eventDate.getTime() / 1000;
  //   console.log(eventDateSec);
  let currentDate = new Date();
  // console.log(currentDate);
  let currentDatesec = currentDate.getTime() / 1000;
  // console.log(currentDatesec);
  let timeDifference = eventDateSec - currentDatesec;
  // console.log(timeDifference);
  let days = Math.floor(timeDifference / (24 * 60 * 60));
  // console.log(days);
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  // console.log(hours);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  // console.log(mins);
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );
  console.log(secs);
  $(".days").text(`${days} D`);
  $(".hours").text(`${hours} h`);
  $(".mins").text(`${mins} m`);
  $(".secs").text(`${secs} s`);
  setInterval(function() { countDownn(eventDateString); }, 1000);
  // console.log(days + " "+ secs);
}


// $("#duration").countdown("2040/12/31", function(event) {
//     $("#days").text(event.strftime("%D D"));
//     $("#hours").text(event.strftime("%H h"));
//     $("#minutes").text(event.strftime("%M m"));
//     $("#seconds").text(event.strftime("%S s"));
//   });

/*contact*/

let max = 100;
$("textarea").keyup(function(e) {
  let typedLength = $(e.target).val().length;
//   console.log(typedLength);
  let charactersLeft = max - typedLength;
//   console.log(charactersLeft);
  if (charactersLeft <= 0) {
    $(".characters").text("Your available character finished");
  } else {
    $(".characters").text(charactersLeft)
  }
});