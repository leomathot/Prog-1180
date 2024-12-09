document.addEventListener("DOMContentLoaded", () => {
    const notifRows = document.querySelectorAll('.notif-row');

    function updateUnreadCount() {
        const unreadCount = document.querySelectorAll('.notif-row.unread').length;
        const notifNumElement = document.querySelector('.notif-num');

        if (notifNumElement) {
            notifNumElement.innerHTML = unreadCount; // Update based on actual unread count
        }
    }

    notifRows.forEach(row => {
        // Create Mark Read/Unread toggle text
        const toggleText = document.createElement("span");
        toggleText.classList.add("toggle-text");
        toggleText.style.cursor = "pointer";

        // Set initial state based on row class
        if (row.classList.contains('unread')) {
            toggleText.textContent = "Mark Read";
        } else {
            toggleText.textContent = "Mark Unread";
        }

        // Toggle between Read/Unread when clicking the text
        toggleText.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent triggering the row click event
            if (row.classList.contains('unread')) {
                row.classList.remove('unread');
                row.classList.add('read');
                toggleText.textContent = "Mark Unread";
            } else {
                row.classList.remove('read');
                row.classList.add('unread');
                toggleText.textContent = "Mark Read";
            }
            updateUnreadCount(); // Recalculate and update the unread count
        });

        // Append the toggle text to the row
        row.appendChild(toggleText);

        // Handle row click to automatically mark as read
        row.addEventListener('click', function () {
            if (row.classList.contains('unread')) {
                row.classList.remove('unread');
                row.classList.add('read');
                toggleText.textContent = "Mark Unread";
                updateUnreadCount(); // Recalculate and update the unread count
            }
        });
    });

    // Initial update on page load
    updateUnreadCount();
});
