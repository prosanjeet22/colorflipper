var  simple=document.querySelector('.simple');
var hex=document.querySelector('.hex1');
var fliper=document.querySelector('.fliper');
var getcolor=document.querySelector('.gencolor');
var btn=document.querySelector('.btn');
var main=document.querySelector('.main');
simple.addEventListener('click',function(){
var bcolor=generatecolor_rest('rgb');
main.style.background=bcolor;
getcolor.textContent=bcolor;

})
hex.addEventListener('click',function simple(){
    var bcolor=generatecolor_rest('hex');
       main.style.background=bcolor;
       getcolor.textContent=bcolor;

})
fliper.addEventListener('click',function(){
    var c=confirm("Let's Start Game");
    alert(c);
})
btn.addEventListener('click',function(){
   var bcolor= generatecolor_rest('rgb');
   //bcolor="rgb("+bcolor+")";
   main.style.background=bcolor;
   getcolor.textContent=bcolor;
})
function generatecolor_rest(val)
{

    var res=val;
   // var t='rgb'.localeCompare(val);
   
    if('rgb'===res)
    {   
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
     res= "rgb("+r+","+g+","+b+")";
   // return r+","+g+","+b;
    }
    else
    {
        var color=Math.floor(Math.random()*16777215).toString(16);
        res= "#"+color;
    }
    return res;
}

