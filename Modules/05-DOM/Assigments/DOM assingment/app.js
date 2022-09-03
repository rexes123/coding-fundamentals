const addBtn = document.querySelector('.add__button');
const notification = document.querySelector('.notification');
const closeBtn = document.querySelector('.card__cta');
addBtn.addEventListener('click', ()=>{
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
        
    }, 2000);
})

closeBtn.addEventListener('click', ()=>{
    notification.classList.toggle('show');
})

