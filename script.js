const container =document.getElementById('container');
const text =document.getElementById('text');

const totallTime = 7500;
const breatheTime = (totallTime/5)*2;
const holdTime = totallTime/5;

breatheAnimation();

//function for dynimise the circle
function breatheAnimation(){

    text.innerText = 'Breath In';
    container.className='container grow';

    setTimeout(() =>{

       text.innerText= 'Hold';

        setTimeout(()=>{

            container.className='container shrink';

            text.innerText ='Breathe Out';

        },holdTime);
    },breatheTime);
}
setInterval(breatheAnimation,totallTime);