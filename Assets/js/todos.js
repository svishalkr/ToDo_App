//part 1 
//todo content color change and strike-through decoration
$("ul").on("click", "li",function(){ //using "on" because we want to apply same logic for all future li contents
    //if li is gray
    if($(this).css("color") === "rgb(128, 128, 128)")
    {
     // turn it black
     $(this).css({                       //object
        color:"black",
        textDecoration: "none"
    });

    }

     else {
      //turn it gray
    $(this).css({                      //object
        color:"gray",
        textDecoration: "line-through"
    });
}
});

//Above code changes the color of todo and strike-through the text . Same functionality can be written
//with the help of css class

// $("ul").on("click","li",function (){
//    $(this).toggleClass("completed");  // its just adding and removing the "completed" css class
// });

//---------------------------------------------------------------------------------------


//part 2 
//Delete the todo when we click the x (delete button)
$("ul").on("click","span",function (event){
    $(this).parent().fadeOut(500,function() //we used parent() to retrieve the li that is enclosing the span that was clicked on
    {
     $(this).remove();
    });
    event.stopPropagation(); // this will stop the triggering of parrent element of span and let on span trigger
});

//-----------------------------------------------------------------------------------------
//part 3
//Add new todo functionality
$("input[type='text']").keypress(function(event) { 
    if(event.which === 13){ // 13 is code for Enter Key
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val(""); // making input section empty
    //create a new li with span and add to ul
    $("ul").append("<li><Span><i class='fa fa-trash'></i></Span>" +" " +todoText +"</li>")
}
});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});
