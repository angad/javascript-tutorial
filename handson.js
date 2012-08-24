/*
 * JavaScript Workshop hands on
 * code 
 */

//Change text
var hello = document.getElementById("hello");
hello.innerHTML = "Hello World!<br/>";

box = document.createElement("button");
box.id = "clickme";
box.innerHTML = "clickme!";
box.onclick = function() { alert("clicked!"); }
hello.appendChild(box);


//Imports jQuery into the console
var jq = document.createElement('script');
jq.src = "http://code.jquery.com/jquery-latest.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);


//Change text
$("#hello").html("hello world");

//Add a button to #hello
$("<button>", {id: "clickme"}).html("clickme!").appendTo($("#hello"));

//Add event listener
$("#clickme").click(function() { alert("hello world!")});