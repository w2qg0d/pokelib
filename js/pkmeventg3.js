// var timeline = document.getElementById('timeline');
// var category = document.getElementById('category');
// var show_timeline = document.getElementById('show_timeline');
// var show_category = document.getElementById('show_category');
// var button_timeline = document.getElementById('button_timeline');
// var button_category = document.getElementById('button_category');

// button_category.onclick = function() {
//     show_timeline.setAttribute("style","display: none;");
//     show_category.setAttribute("style","display: ;");
//     timeline.setAttribute("style","display: none;");
//     category.setAttribute("style","display: ;");
// }

// button_timeline.onclick = function() {
//     show_timeline.setAttribute("style","display: ;");
//     show_category.setAttribute("style","display: none;");
//     timeline.setAttribute("style","display: ;");
//     category.setAttribute("style","display: none;");
// }

function hide(TagName) {
    var obj = document.getElementById(TagName);
    if(obj.style.display == ""){
        obj.setAttribute("style","display: none;");
    }else{
        obj.setAttribute("style","display: ;");
    }
}