console.log('masuk');


const items = document.querySelectorAll('.notification-item');
const unread = document.querySelector('.mark-read');
unread.addEventListener('click', unreadEvent(items));

const unreadEvent = (items)=>{
    items.forEach((item) => {
        if(item.classList.contains('unread')){
            item.classList.remove('unread')
        }
        console.log(item);
    });
}