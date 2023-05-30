// it will return an array
document.getElementsByTagName("li");
// to select particular item from array 
document.getElementsByTagName("li")[2].style.color="blue";
document.querySelector("#title")
document.querySelector("li a");
// it is in the same tag so no space between li & .item
document.querySelector("li.item")
// to select all elements or to get all elements,array of elements
document.querySelectorAll("#list .item")
document.querySelectorAll("#list .item")[2].style.color="black"
// to add new class and so we don't have to write css individually for color,font etc.. 
document.querySelector("button").classList.add("button-1");
// it gives attributes linked to 'a' tag
document.querySelector("a").attributes;
// to get a particular attribute
document.querySelector("a").getAttribute("href")
// manipulating html attributes like href.setting youtube link in place of google link
document.querySelector("a").setAttribute("href","www.youtube.com")