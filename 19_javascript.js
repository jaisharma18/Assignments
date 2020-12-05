const dp=document.getElementById('dp');
const f1=document.getElementById('acc');
const f2=document.getElementById('soc');
const f3=document.getElementById('per');

const n1=document.getElementById('n1');
const b1=document.getElementById('b1');
const n2=document.getElementById('n2');
const b2=document.getElementById('b2');

var con = document.getElementById('content');

n1.onclick = function() 
{
    f1.style.left='-375px';
    dp.style.width='240px';
    f2.style.right='0';
    f2.style.left='0';
    f3.style.right='-375px';
    con.style.height='283px';
}

b1.onclick = function() 
{
    dp.style.width='125px';
    f1.style.left='0';
    f2.style.right='-375px';
    f2.style.left='375px';
    f3.style.right='-750px';
    con.style.height='283px';
}

n2.onclick = function() 
{
    dp.style.width='375px';
    f1.style.left='-750px';
    con.style.height='315px';
    f2.style.left='-375px';
    f3.style.right='0';
}

b2.onclick = function() 
{
    dp.style.width='240px';
    f1.style.left='-375px';
    con.style.height='283px';
    f2.style.left='0';
    f3.style.right='-375px';
}