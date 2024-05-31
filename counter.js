let a=0;
let  incresebtn = document.getElementById('incbtn');
let  decresebtn = document.getElementById('decbtn');
let  resetbtn = document.getElementById('reset');

function increse(){
    a++;
    changedom(a);
}

function decrese(){
    if (a<=0){
        reset()
    }
    else{
        a--;
     changedom(a);
        
    }
}

function reset(){
    a=0
  changedom(a);
}

function changedom(a){
    mainvalue.innerHTML=a;
}

resetbtn.addEventListener('click', reset);
incresebtn.addEventListener('click', increse);
decresebtn.addEventListener('click', decrese);
