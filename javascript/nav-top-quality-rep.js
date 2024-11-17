
document.querySelector("#nav-top").innerHTML = `
    <div class="width-limit">
        <a href="index.html">
            <img src="images/Crossfire-logo-no-bg.png" alt="Crossfire logo"/>
        </a>

        <div class="links d-flex align-items-center" id="user">
            
            <a class="text-black d-flex align-items-start" id="user-info" href="#">
                <i class="fa-solid fa-user text-crossfire-primary pb-2"></i>

                <span class="small ms-3">
                    <div>Sara Smith</div>
                    <div class="fw-bold text-mid-blue">Quality Rep</div>
                </span>
            </a>
            
            <div id="user-menu-container">
                <div class="hidden" id="user-menu">
                    <ul class="small">
                        <li class="p-2">
                            <a class="text-black d-flex align-items-center" href="#">
                                <i class="fa-solid fa-message text-crossfire-secondary pb-2 me-2" style="font-size: 1rem;"></i>
                                Notifications
                            </a>
                        </li>
                        <li class="p-2 mt-1">
                            <a class="text-black d-flex align-items-center" href="#">
                                <i class="fa-solid fa-address-card text-crossfire-secondary pb-2 me-2" style="font-size: 1rem;"></i>
                                Profile
                            </a>
                        </li>
                        <li class="p-2 mt-1">
                            <a class="text-black d-flex align-items-center" href="#">
                                <i class="fa-solid fa-gear text-crossfire-secondary pb-2 me-2" style="font-size: 1rem;"></i>
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </div?

        </div>
    </div>`

document.querySelector("#user-info").addEventListener("click", () => {
    const userMenu = document.querySelector("#user-menu")
    userMenu.classList.toggle("hidden")
})
      