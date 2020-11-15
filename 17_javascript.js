const time = document.getElementById("time");
const greet = document.getElementById("greet");
const name = document.getElementById("name");
const day = document.getElementById("day");

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
name.onclick = clear;

function show()
{
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let date = today.toDateString();

    const ampm = hour >=12 ? 'PM' : 'AM';

    hour = hour%12 || 12;

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`;
    setTimeout(show,1000);
    day.innerHTML = `${date}`;

}
 
function addZero(n)
{
    return (( parseInt(n,10) < 10 ? '0' : '')+n);
}

function greeet()
{
    let today = new Date();
    let hour = today.getHours();

    if(hour<=12)
    {
        greet.innerHTML = `Good Morning`;
        document.body.style.backgroundImage = 'url("https://jaisharma18.github.io/Assignments/img/tree-2916763_1920.jpg")';
    }
    else if(hour<=16)
    {
        greet.innerHTML = `Good Afternoon`;
        document.body.style.backgroundImage = 'url("https://jaisharma18.github.io/Assignments/img/landscape-3874123_1920.jpg")';
    }
    else if(hour<=20)
    {
        greet.innerHTML = `Good Evening`;
        document.body.style.backgroundImage = 'url("https://jaisharma18.github.io/Assignments/img/sky-2479211_1920.jpg")';
    }
    else 
    {
        document.body.style.backgroundImage = 'url("https://jaisharma18.github.io/Assignments/img/night-5222267_1920.jpg")';
        greet.innerHTML = `Good Night`;
    }
}

function getName()
{
    if(localStorage.getItem('myName')==null)
    {
        name.innerHTML = "Type......"
    }
    else 
    {
        name.innerHTML = localStorage.getItem('myName')
    }
}

function setName(e)
{
    if(e.type == "keypress")
    {
        if(e.keyCode == 13)
        {
            localStorage.setItem('myName',e.target.innerHTML)
            name.blur();
        }
    }
    else 
    {
        localStorage.setItem('myName',e.target.innerHTML)
    }
}

function clear()
{
    if(localStorage.getItem('myName')==null)
    {
        name.innerHTML = ""
    }
}

show();
greeet();
getName();
