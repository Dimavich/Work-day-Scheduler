//variables
var saveBtn = $('.saveBtn');
var today = $('#currentDay');
var date = moment().format('MMMM Do YYYY');
var currentTime = parseInt(moment().format('H'));
var timeBlock = $('.time-block');
var nine = ($('#9').children('textarea').val());
var ten = ($('#10').children('textarea').val());
var eleven = ($('#11').children('textarea').val());
var twelve = ($('#12').children('textarea').val());
var thirteen = ($('#13').children('textarea').val());
var fourteen = ($('#14').children('textarea').val());
var fiveteen = ($('#15').children('textarea').val());
var sixteen = ($('#16').children('textarea').val());
var seventeen = ($('#17').children('textarea').val());
var text = document.querySelectorAll('textarea');

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


var saveTask = function (event) {

    for (let i = 0; i < text.length; i++) {
        localStorage.setItem('task' + i, JSON.stringify(text[i].value));
    };

  
    // var nine = ($('#9').children('textarea').val());
    // var ten = ($('#10').children('textarea').val());
    // var eleven = ($('#11').children('textarea').val());
    // var twelve = ($('#12').children('textarea').val());
    // var thirteen = ($('#13').children('textarea').val());
    // var fourteen = ($('#14').children('textarea').val());
    // var fiveteen = ($('#15').children('textarea').val());
    // var sixteen = ($('#16').children('textarea').val());
    // var seventeen = ($('#17').children('textarea').val());
    // //saves to local storage
    // localStorage.setItem('9', JSON.stringify(nine))
    // localStorage.setItem('10', JSON.stringify(ten))
    // localStorage.setItem('11', JSON.stringify(eleven))
    // localStorage.setItem('12', JSON.stringify(twelve))
    // localStorage.setItem('13', JSON.stringify(thirteen))
    // localStorage.setItem('14', JSON.stringify(fourteen))
    // localStorage.setItem('15', JSON.stringify(fiveteen))
    // localStorage.setItem('16', JSON.stringify(sixteen))
    // localStorage.setItem('17', JSON.stringify(seventeen))
}


// var getTasks = function (){
//     //retrieves the data
//     var nineVal = JSON.parse(localStorage.getItem('9'))
//     var tenVal = JSON.parse(localStorage.getItem('10'))
//     var elevenVal = JSON.parse(localStorage.getItem('11'))
//     var twelveVal = JSON.parse(localStorage.getItem('12'))
//     var thirteenVal = JSON.parse(localStorage.getItem('13'))
//     var fourteenVal = JSON.parse(localStorage.getItem('14'))
//     var fiveteenVal = JSON.parse(localStorage.getItem('15'))
//     var sixteenVal = JSON.parse(localStorage.getItem('16'))
//     var seventeeVal = JSON.parse(localStorage.getItem('17'))
// //populates the blocks 
//     nine.value = nineVal;
//     ten.value = tenVal;
//     eleven.value = elevenVal;
//     twelve.value = twelveVal;
//     thirteen.value = thirteenVal;
//     fourteen.value = fourteenVal;
//     fiveteen.value = fiveteenVal;
//     sixteen.value = sixteenVal;
//     seventeen.value = seventeeVal;
// }
// save btn event listener
saveBtn.on('click', saveTask);





