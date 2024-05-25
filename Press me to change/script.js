const btn = document.getElementById("btn");
const randomColor = () => { //arrow fucntion
    let val ="0123456789ABCDEF";
    let cons="#"
    for (let i=0; i<6; ++i){
        cons =cons + val[Math.ceil(Math.random() * 16)]; //ciel,floor,round

    }
    return cons;
};
function changeRandomColor(){
    document.body.style.backgroundColor= randomColor();
}
btn.addEventListener("click",changeRandomColor);


// [Math.floor(Math.random() * 16)]
