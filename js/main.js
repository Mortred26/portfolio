const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if(nav.classList.toggle("open")){
        navBtnImg.src = "./img/svgfile/nav-close.svg";
    }else{
        navBtnImg.src = "./img/svgfile/NAV.svg";                                                                                                                                  
    }
}

AOS.init({
    once: true
});