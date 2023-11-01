let result='';
let select=document.querySelector(".captcha");

function generatepic(){
    let random=Math.floor((Math.random()*4));
    if(random === 1){
        result= 'captcha1.jpg';
    }
    else if(random === 0){
        result= 'captcha.jpg';
    }
    else if(random === 2){
        result= 'captcha2.jpg';
    }
    else if(random === 3){
        result= 'captcha3.jpg';
    }
    select.src=result;
}
generatepic();

