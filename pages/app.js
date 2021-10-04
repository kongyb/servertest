const header=document.querySelector('h1');
const btn=document.querySelector('button');

let cnt=0;
btn.addEventListener('click',function(){
    cnt++;
    header.textContent=`${cnt} Clicked!`;
})