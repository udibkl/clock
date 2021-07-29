setInterval(() => {
    let dat= new Date;
    elem=document.getElementById('text');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   let date = dat.toLocaleDateString(undefined, options);
    let time=dat.getHours()+":"+dat.getMinutes()+":"+dat.getSeconds();
elem.innerHTML="<h1>Date and Time is <br></h1>"+date+"<br>"+time;


}, 1000);

light=document.getElementById('light');
light.addEventListener('click',()=>
{
    document.body.classList.toggle('light');
   
   
    
})
