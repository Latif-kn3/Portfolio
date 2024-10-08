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