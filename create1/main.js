var menu = document.getElementById("bar")
var item = document.getElementById("item")


item.style.right = '-230px';
menu.onclick = function() {
    if(item.style.right == '-230px'){
    item.style.right ='0';
}
else{
    item.style.right='-230px';
}
}