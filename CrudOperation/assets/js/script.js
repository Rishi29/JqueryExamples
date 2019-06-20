//Strike through functionality

/*$("li").click(function(){
	//if your text is green turn it balck 
	console.log($(this).css("color"))

	if($(this).css("color")=="rgb(0, 128, 0)"){
	$(this).css({
		color:"black",
		textDecoration:"none"
	})
	} else{
		$(this).css({
			color: "green",
			textDecoration: "line-through"
		})
	}
})*/

$("ul").on("click", "li", function(){
	$(this).toggleClass("done")
})

//deleting

$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(200,function(){
		$(this).remove()
	})
	event.stopPropagation()
	
})


//adding
$("input").keypress(function(event){
	if(event.which===13){
		//alert("enter pressed")
		var task = $("input").val()
		$("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span>"+ task +"</li>")
		$("input").val("")
	}
})

//toggling the input form 

$("#plus").click(function(){
	$("input").fadeToggle()
})