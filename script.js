let icon = document.getElementById('icon');
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    //toggling the icon to sun-moon
    if(document.body.classList.contains("dark-theme"))
    {
        icon.src ="img/sun.png";  
    } 
    else {
        icon.src ="img/moon.png";
    }
}