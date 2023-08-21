const C = document.getElementById('bar');
const D = document.getElementById('navbar');
 C.addEventListener('click' , () => {
        D.classList.add('active');
    })
const A = document.getElementById('cross');
   A.addEventListener('click', () =>{
        D.classList.remove('active');
    })

const image = document.getElementById('main');
const image2 = document.getElementsByClassName('smallimg1');
const price = document.querySelector('.op');

    image2[0].onclick = function(){
        image.src = image2[0].src;
        price.innerText = '$78.56';
    }
    image2[1].onclick = function(){
        image.src = image2[1].src;
        price.innerText = '$56.99';
    }
    image2[2].onclick = function(){
        image.src = image2[2].src;
        price.innerText = '$63.78';
    }
    image2[3].onclick = function(){
        image.src = image2[3].src;
        price.innerText = '$60.43';
    }
    