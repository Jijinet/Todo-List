
let input=document.getElementById("input");
let ul=document.querySelector("ul");
let add=document.getElementById("btnAdd");
let textHolder=document.getElementsByClassName("text-holder");





function AddItems(){

    var text=input.value;

if (text != "") {


var li = document.createElement("li");

var trash=document.createElement("i");
trash.className="fas fa-trash-alt";

var done=document.createElement("i");
done.className="fas fa-chevron-circle-down";
var text = input.value;

li.appendChild(document.createTextNode(text));
ul.appendChild(li);
li.appendChild(trash);
li.appendChild(done);


input.value="";
}

trash.addEventListener("click",function(){
    
    ul.removeChild(li);
});


done.addEventListener("click",function(){
    li.classList.toggle("done");
    
});

}

add.addEventListener("click",AddItems);


input.addEventListener("keypress", function(event) {
    var text=input.value;
  if (text != "" && event.keyCode === 13) {

    AddItems();

  }

});

