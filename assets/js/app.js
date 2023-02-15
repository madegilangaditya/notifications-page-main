const unread = document.querySelector('.mark-read');
const unreadItems = document.querySelectorAll('.notification-item.unread');

const unreadEvent = ()=>{
    const items = document.querySelectorAll('.notification-item');
    const notifCount = document.querySelector('.header-wrap span');
    items.forEach((item) => {
        if(item.classList.contains('unread')){
            item.classList.remove('unread')
        }
    });
    notifCount.style.display ='none';
}

unreadItems.forEach((unreadItem)=>{
    unreadItem.addEventListener('click', unreadClick);
});

function unreadClick(){
    let count = parseInt(document.querySelector('.header-wrap span').textContent);
    console.log(count);
    this.classList.remove('unread');
    count -= 1;
    if(count == 0){
        document.querySelector('.header-wrap span').style.display ='none';
    }else{
        document.querySelector('.header-wrap span').textContent = count;
    }
    
}