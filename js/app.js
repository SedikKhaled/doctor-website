const slider=[...document.querySelectorAll('.contin-slider')]

let nxt=[...document.querySelectorAll('.nxt')]

let prev=[...document.querySelectorAll('.prev')]

slider.forEach((item,i)=>{
    let contd=item.getBoundingClientRect();
    let conw=contd.width;

    nxt[i].addEventListener("click",()=>{
        item.scrollLeft+=conw
    })

    prev[i].addEventListener("click",()=>{
        item.scrollLeft-=conw
    })
})

console.log(slider)