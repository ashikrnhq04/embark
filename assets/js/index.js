/*
 ** initialize tab
 */
{
  let tabElem = document.querySelectorAll(".tabs");
  let instance = M.Tabs.init(tabElem);
}

/**
 * initialize mobile nav
 */
{
  document.addEventListener("DOMContentLoaded", function () {
    let sideNavElem = document.querySelector(".sidenav");
    let instances = M.Sidenav.init(sideNavElem);
  });
}
/**
 * initialize notification sidebar
 */
{
  document.addEventListener("DOMContentLoaded", function () {
    let dashboardNav = document.querySelector(
      "#dashboard-nav-expanded .sidenav-close"
    );
    let notificationBar = document.querySelectorAll("#notification-sidebar");
    let instances = M.Sidenav.init(notificationBar, {
      edge: "right",
      onOpenStart: function () {
        dashboardNav.click();
      },
    });
  });
}
/**
 * initialize dashboard menu
 */
{
  let headerNav = document.querySelector("header.navbar-fixed");
  let dashboardInner = document.querySelector("main.dashboard");
  let dashboardNav = document.querySelector(
    "#dashboard-nav-expanded .sidenav-close"
  );

  async function shrinkNavNBody(sidenav) {
    let sidenavOverlay = await document.querySelector(".sidenav-overlay");
    let innerWidth = window.innerWidth;
    if (sidenav) {
      sidenav.M_Sidenav._overlay.remove();
    }
    if (innerWidth < 759) {
      return;
    }
    if (
      headerNav.classList.contains("navbar-shrink") &&
      dashboardInner.classList.contains("dashboard-shrink")
    ) {
      headerNav.classList.remove("navbar-shrink");
      dashboardInner.classList.remove("dashboard-shrink");
    } else {
      headerNav.classList.add("navbar-shrink");
      dashboardInner.classList.add("dashboard-shrink");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    let dashboardNav = document.querySelectorAll("#dashboard-nav-expanded");
    let instances = M.Sidenav.init(dashboardNav, {
      onOpenStart: shrinkNavNBody,
      onCloseStart: shrinkNavNBody,
    });
  });
}
/**
 * Initialize dashboard menu accordion
 */
{
  var collapseMenu = document.querySelector(".collapsible.expandable");
  var instance = M.Collapsible.init(collapseMenu, {
    accordion: true,
  });
}
/**
 * Password show
 */
{
  let passBtns = document.querySelectorAll(".password .icon");
  passBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.previousElementSibling.type === "password") {
        btn.previousElementSibling.setAttribute("type", "text");
        btn.classList.remove("fa-eye");
        btn.classList.add("fa-eye-slash");
      } else {
        btn.previousElementSibling.setAttribute("type", "password");
        btn.classList.remove("fa-eye-slash");
        btn.classList.add("fa-eye");
      }
    });
  });
}
/**
 * sign up form part loop
 */
{
  let counter = 1;
  let dotsCounter = 0;
  let formHeading = document.querySelector(".signup-form .heading-big");
  let lineActive = document.querySelector(".step-indicator .line");
  let formParts = document.querySelectorAll(".form_part");
  let nextBtn = document.getElementById("next");
  let signupBtn = document.getElementById("signupBtn");
  let stepIndicator = document.querySelector(".step-indicator");
  let dots = document.querySelectorAll(".step-indicator .dot");
  let showFormParts = () => {
    if (counter === formParts.length) {
      return;
    }
    for (let i = 0; i < formParts.length; i++) {
      formParts[i].classList.remove("active");
      formParts[counter].classList.add("active");
    }

    if (dotsCounter === 1) {
      lineActive.dataset.progress = "50";
    } else if (dotsCounter === 2) {
      lineActive.dataset.progress = "100";
    }
    if (dotsCounter >= 0) {
      stepIndicator.classList.add("active");
      dots[dotsCounter].classList.add("active");
      formHeading.innerText = "Tell us more about yourself";
      lineActive.style.width = `${lineActive.dataset.progress}%`;
    }
    console.log(counter);

    if (counter >= formParts.length - 1) {
      nextBtn.classList.add("d-none");
      signupBtn.classList.remove("d-none");
    }
    counter += 1;
    dotsCounter += 1;
  };
  if (nextBtn) {
    nextBtn.addEventListener("click", showFormParts);
  }
}
