window.addEventListener('load',function(){
    let input =document.querySelector('input')
    let text =document.querySelector('textarea');
    let span =document.querySelector('.tips>span');
    let button =document.querySelector('button');
    let message =document.querySelector('.message')
    let list =document.querySelectorAll('.list');

    text.onkeyup=function () {
        let value =this.value;
        span.innerText =value.length;
    };
    message.onmouseover=function(e){
        let element =e.target;
        if(element.nodeName =='DIV' && element.classList.contains('list')){
            element.classList.add('active');
        }
    }
    button.onclick=function () {
        let title =input.value;
        let con =text.value;
        input.value ='';
        text.value ='';
        /*
        *message 插入list
         */
        let str =`<div class="list">
            <div class="img">
                <img src="img/w.png" alt="">
            </div>
            <div class="info">
                <h3>${title}</h3>
                <p>${con}</p>
            </div>
        </div>`;
        message.innerHTML +=str;

    }
})