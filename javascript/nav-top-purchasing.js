document.querySelector("#nav-top").innerHTML = `
    <div class="width-limit pt-2">
        <a href="index.html">
            <img src="images/Crossfire-logo-no-bg.png" alt="Crossfire logo"/>
        </a>

        <div class="d-flex align-items-center" id="user">

            <div class="d-flex gap-3 pt-2" id="user-links">
            
                <a href="purchasing-notifications.html" title="Notifications">
                    <i class="fa-solid fa-message"></i><span class="notif-num">5</span>
                </a>
                <a href="#"  title="Profile">
                    <i class="fa-solid fa-address-card"></i>
                </a>
                <a href="#"  title="Settings">
                    <i class="fa-solid fa-gear"></i>
                </a>
            </div>

            <span class="small ms-3">
                <div>Olivia Cross</div>
                <div class="fw-bold text-mid-blue">Purchasing</div>
            </span>

        </div>
    </div>`
      