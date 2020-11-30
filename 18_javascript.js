var user=document.getElementById('user');
var email=document.getElementById('email');
var pass=document.getElementById('pass');
var cp=document.getElementById('cp');

var user_msg=document.getElementById('user_msg');
var email_msg=document.getElementById('email_msg');
var pass_msg=document.getElementById('pass_msg');
var cp_msg=document.getElementById('cp_msg');

var u=document.getElementById('u');
var em=document.getElementById('e');
var p=document.getElementById('p');
var cpass=document.getElementById('cpass');


function nok(v1,v2,field){
 v2.innerHTML=field+" can't be blank."
 v1.classList.remove('tick');
 v1.classList.add('cross');
}

        var pa=/([\w \d])+([@]){1}([\w])+[.]{1}((com)|(co)|(in))$/;
        var pa1=/[^a-z]/g;
        // var pa2=/ /;
        var btn=document.getElementById('btn');
        btn.onclick=function(e){
            
            e.preventDefault();

            u.value.trim();
            if(u.value === ''){
                nok(user,user_msg,"Username");
            }
            else if(u.value.match(pa1)){
                user.classList.remove('tick');
                user_msg.innerHTML='Invalid Format';
                user.classList.add('cross');
            }
            else{
                user.classList.remove('cross')
                user.classList.add('tick');
            }

            if(em.value === '')
                nok(email,email_msg,"Email");
            else if(!em.value.match(pa)){
                email.classList.remove('tick');
                email_msg.innerHTML='Invalid Format';
                email.classList.add('cross');
            }
            else{
                email.classList.remove('cross');
                email.classList.add('tick');
            }

            if(p.value === '')
                nok(pass,pass_msg,"Password");
            else{
                pass.classList.remove('cross');
                pass.classList.add('tick');
            }

            if(cpass.value === '')
                nok(cp,cp_msg,"Confirm Password");
            else if(p.value != cpass.value){
                cp.classList.remove('tick');
                cp.classList.add('cross');
                cp_msg.innerHTML="Password did't match."
            }
            else{
                cp.classList.remove('cross');
                cp.classList.add('tick');
            }
        }

