//variables
var saveBtn = $('.saveBtn');
var today = $('#currentDay');
var date = moment().format('MMMM Do YYYY');
var currentTime = parseInt(moment().format('H'));
var timeBlock = $('.time-block');
var text = $('textarea');

//display current day
today.text(date);

//loops thriugh the timeblocks
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

//saves tasks to local storage
var saveTask = function (event) {
// loops through the textareas and saves values inside
    for (let i = 0; i < text.length; i++) {
        localStorage.setItem('task' + i, JSON.stringify(text[i].value));
    }
};

//get Tasks from local storage
var getTasks = function (){
// goes throught the local values and pulls them back on the page 
    for (let i = 0; i < text.length; i++) {
        var localVal = JSON.parse(localStorage.getItem('task' + i));
        text[i].textContent = localVal;
    }
};

// save btn event listener
saveBtn.on('click', saveTask);
getTasks();





