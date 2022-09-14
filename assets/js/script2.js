// set image to count
countImage =  JSON.parse(localStorage.getItem("counterImage"))
const count = document.getElementById('count')

// count.src = countImage

// generate random number

var numbers = [0,0,0]

function randomInteger(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
for(i=0;i<3;i++){
    // n = Math.round(Math.random()*10)
    // if (n==0){
    //     n = Math.round(Math.random()*10)
    // }
    numbers[i]=randomInteger(parseInt(countImage.start), parseInt(countImage.end))
}

numsOptions = document.getElementById('numbers')
for(i=0;i<3;i++){
    sp = document.createElement('li')
    sp.classList.add('number')
    sp.innerHTML = `<span class="number">${numbers[i]}</span>`
    numsOptions.appendChild(sp)
}

num = Math.floor(Math.random()*numbers.length)

for(i=0;i<numbers[num];i++){
    li = document.createElement('li')
    li.innerHTML = `<img src=${countImage.imagename}>`
    count.appendChild(li)
}

addEventListener('click',(e)=>{
    if(e.target.classList.contains('number')){
        const el = document.getElementById('answer')
        el.style.opacity = 1;
    if (numbers[num] == parseInt(e.target.innerText)){
        el.innerText = `Correct Answer`
        el.style.background = 'rgb(212, 255, 235)';
        el.style.color = 'rgb(11, 167, 63)';
        setTimeout(()=>{
            location.reload()
        },2000)

    }else{
        el.style.background = 'rgb(255, 220, 186)';
        el.style.color = 'rgb(88, 15, 15)';
        el.innerText = `Wrong Answer`;
        setTimeout(()=>{
            el.innerText = ""
            el.style.opacity = 0;
        },1500)

    }
}
})
