addEventListener('click',(e)=>{
    start = document.getElementById('start').value
    end = document.getElementById('end').value
    
    // console.log(e.target)
    imagename = e.target.src

    localStorage.setItem("counterImage",JSON.stringify ({
        'imagename':imagename,
        'start':start,
        'end':end,
    }))
})





