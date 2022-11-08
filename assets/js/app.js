console.log('masuk');



const unread = document.querySelector('.mark-read');


const unreadEvent = ()=>{
    const items = document.querySelectorAll('.notification-item');
    items.forEach((item) => {
        if(item.classList.contains('unread')){
            item.classList.remove('unread')
        }
        console.log(item);
    });
}