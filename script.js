const sophie = {};

sophie.init = function() {
    sophie.mobileNav();
    sophie.nameElement();
    sophie.scrollArrow();
} //end of init function

// mobile menu 
sophie.mobileNav = () => {
    const label = document.querySelector('label[for=mobileNav]');

    const checkbox = document.querySelector('input[type=checkbox]');

    const handleClick = () => {
        label.addEventListener('click', function(e) {
            function closeIcon(icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
    
            if (e.target.tagName === "I") {
                closeIcon(e.target);
            }
        });
    }

    if (checkbox.checked !== true) {
        handleClick();
    }
}

// delay h2 entrance
sophie.nameElement = () => {
    const h1Element = document.createElement('h1');
    h1Element.textContent = `I'm Sophie!`;

    h1Element.classList.add('animate__animated', 'animate__fadeInLeft');

    setTimeout( () => {
        const nameDiv = document.querySelector('.nameDiv');
        nameDiv.appendChild(h1Element);

    }, 3500);
}

// scroll down arrow
sophie.scrollArrow = () => {
    const icon = document.querySelector('.fa-solid');
    
    setTimeout( () => {
        icon.classList.add('fa-angle-down');
        
    }, 4500)
}

// connecting to formspree
    window.formbutton=window.formbutton||function(){(formbutton.q = formbutton.q || []).push(arguments)};
    /* customize formbutton below*/
    formbutton("create", {
        action: "https://formspree.io/f/mdobzzbr",
        title: "Send Sophie a message!",
        fields: [
            {
                type: "email",
            label: "Email:",
            name: "email",
            required: true,
            placeholder: "your@email.com"
            },
            {
                type: "textarea",
            label: "Message:",
            name: "message",
            required: true,
            placeholder: "Your message",
            },
            {type: "submit" }
        ],
    styles: {
        title: {
            backgroundColor: "#EBB859"
        },
        button: {
            backgroundColor: "#7D9276"
        }
    }
});

sophie.init();