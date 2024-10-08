const profileWidget = document.querySelector('.profile-widget');
profileWidget.addEventListener('mouseover', () =>{
    profileWidget.style.transform = 'scale(1.2)';
    profileWidget.style.transition = 'transform 0.3s ease';
})

profileWidget.addEventListener('mouseout', () =>{
    profileWidget.style.transform = 'scale(1)';
})

const languageIcons = document.querySelectorAll('.programming-languages img, .programming-languages i');
languageIcons.forEach(icon =>{
    icon.addEventListener('mouseover', (event) =>{
        const tooltip = document.createElement('div')
        tooltip.className = "tooltip"
        tooltip.textContent = event.target.title
        document.body.appendChild(tooltip)
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    })

    icon.addEventListener('mouseout', () =>{
        document.querySelector(".tooltip").remove();
    })

    icon.addEventListener('mousemove', (event) =>{
        const tooltip = document.querySelector(".tooltip")
        tooltip.style.left = `${event.pageX + 10}px`;
        tooltip.style.top = `${event.pageY + 10}px`;
    })
})

function stars() {
    let e = document.createElement("div");
    e.setAttribute("class", "star");
    document.body.appendChild(e);
    e.style.left = Math.random() * +innerWidth + "px";

    let size = Math.random() * 4;
    let duration = Math.random() * 2;

    e.style.fontSize = size + "px";
    e.style.animationDuration = 2 + duration + "s";
    setTimeout(function () {
        document.body.removeChild(e);
    }, 5000);
}

setInterval(function () {
    stars();
}, 30);
