document.addEventListener("DOMContentLoaded", () => {


    const unreadButtons = document.querySelectorAll('.notif-row.unread');
    
    unreadButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            this.classList.remove('unread');
            this.classList.add('read');
       
            const notifNumElement = document.querySelector('.notif-num');
           
            if (notifNumElement) {
                let notifCount = parseInt(notifNumElement.innerHTML);
                if (notifCount > 0) {
                    notifCount -= 1;
                    notifNumElement.innerHTML = notifCount; 
                }
            }
        });
    });
})
