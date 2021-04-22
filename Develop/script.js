//variables
var saveBtn = $('.saveBtn');
var today = $('#currentDay');
var date = moment().format('MMMM Do YYYY');
var currentTime = parseInt(moment().format('H'));
var timeBlock = $('.time-block');

//display current day
today.text(date);

timeBlock.each(function() {
    //gets the id value of each time block
    var idVal = parseInt($(this).attr('id'));
    
    //color changing based on what time it is 
    if (currentTime === idVal) {
        $(this).children('textarea').attr('class','col-sm-10 description present')
    } else if (currentTime > idVal) {
        $(this).children('textarea').attr('class','col-sm-10 description past')
    } else {
        $(this).children('textarea').attr('class','col-sm-10 description future')
    }
    });






//if hour = day.value
// set that day block to green
// set the block before it to red 
// set the other blocks to grey