function hide(TagName)
{
    var obj = document.getElementById(TagName);
    if(obj.style.display == "")
    {
        obj.setAttribute("style","display: none;");
    }
    else
    {
        obj.setAttribute("style","display: ;");
    }
}

function switchTable(TagName1, TagName2)
{
    var obj2 = document.getElementById(TagName1);
    var obj1 = document.getElementById(TagName2);
    if(obj1.style.dispaly == "none")
    {
        obj1.setAttribute("style","display: ;");
        obj2.setAttribute("style","display: none;");
    }
    else if(obj2.style.display == "none")
    {
        obj1.setAttribute("style","display: none;");
        obj2.setAttribute("style","display: ;");
    }
}