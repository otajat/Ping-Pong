let ball=document.querySelector(".ball")
let raquette=document.querySelector(".raquette")
let score=document.querySelector("h2")
let button=document.querySelector("button")
by=Math.floor(Math.random()*450);
ball.style.cssText=`margin-left:${by}px`;
sc=0
xr=120
xl=0
bt=0
bb=50
by=0
window.addEventListener("keydown",e=>{
    console.log(e)
    if(e.keyCode==39 && xr<500){
    xr+=10
    xl+=10
    raquette.style.cssText=`margin-left:${xl}px`
    }
})
window.addEventListener("keydown",e=>{
    console.log(e)
    if(e.keyCode==37 && xl>0){
    xr-=10
    xl-=10
    raquette.style.cssText=`margin-left:${xl}1px`
    }
})
setInterval(()=> {
    if(bt<450){
        // bb+=10;
        bt+=10;
        ball.style.cssText=`margin-top:${bt}px;margin-left:${by}px`; 
    }
    if(bt==420){
        if(by<xr+25 && by>xl-25){
            bt=0
            sc+=1
            score.innerText=sc;
            by=Math.floor(Math.random()*450);
            ball.style.cssText=`margin-left:${by}px; margin-top=${bt}px`;
    }}
    if(bt==450){
        sc=0
        score.innerText=sc
        button.style.cssText='display:block';
    }
}, 100);
button.addEventListener('click',(e)=>{
    sc=0
    xr=120
    xl=0
    bt=0
    bb=50
    by=0
    button.style.cssText='display:none';
    raquette.style.cssText=`margin-left:${xl}px`
    window.addEventListener("keydown",e=>{
        console.log(e)
        if(e.keyCode==37 && xl>0){
        xr-=10
        xl-=10
        raquette.style.cssText=`margin-left:${xl}px`
        }
    })
}
)