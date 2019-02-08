

//PROBLEM1...........................................................................

//GRABS FIRST BUTTON. WHEN CLICKED ADDS GREEN BORDER AND COUNTS ALL P TAGS
$("button:first").click(function () {
    var number = 0;
    $("p").css("border", "3px solid green").each(function () {
        number++;
        console.log(number)
    });
    alert("The number of paragraphs in the document is " + number)
});

//GRABS SECOND BUTTON USING. WHEN CLICKED ADDS RED BORDER AND COUNTS ALL P TAGS IN FIRST DIV
$("#button2").click(function () {
    var number = 0;
    $("div:first > p").css("border", "3px solid red").each(function () {
        number++;
        console.log(number)
    });
    alert("The number of paragraphs in the document is " + number)
});


//GRABS SECOND BUTTON USING ID. WHEN CLICKED ADDS RED BORDER AND COUNTS ALL P TAGS IN LAST DIV
$("#button3").click(function () {
    var number = 0;
    $("div:last > p").css("border", "3px solid blue").each(function () {
        number++;
        console.log(number)
    });
    alert("The number of paragraphs in the document is " + number)
});




//PROBLEM 2......................................
//THESE FUNCTIONS SWAP DISABILITY BETWEEN THE LAST TWO BUTTONS
$("#button4").click(function(){
   $(this).attr("disabled","");
    $("#button5").removeAttr("disabled");

});

$("#button5").click(function(){
    $(this).attr("disabled","");
    $("#button4").removeAttr("disabled");

});
