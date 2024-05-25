//getting the HTML element
const decbtn= document.getElementById("Dec");
const incbtn = document.getElementById("Inc");
const reset = document.getElementById("reset");
const disvalue = document.getElementById("displayvalue");

// For decrementing button;
decbtn.addEventListener("click",() => {
    const value = Number(disvalue.innerText);
    if(value >0){
        disvalue.innerText = value -1;
    }else {
        alert("negative value not allowed");
    }
});

//for increment button click;
incbtn.addEventListener("click",() => {
    const value = Number (disvalue.innerText);
    if(value >=100){
        alert("10+ values are not allowed");
    } else {
        disvalue.innerText = value +1;
    }
});
 
//for Reset button;
reset.addEventListener("click",() =>{
    disvalue.innerText =0;
})