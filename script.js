const sophie = {};

sophie.init = function() {
    sophie.mobileNav();
    sophie.nameElement();
    sophie.scrollArrow();
    sophie.form();
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

// form submit event listener
sophie.form = () => {
    const form = document.querySelector('form');
    const name = document.querySelector('#name');
    const fieldset = document.querySelector('fieldset');
    console.log(fieldset);
    
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // console.log(name.value);
        const senderName = name.value;
        console.log('senderName:', senderName);
        const senderGreeting = senderName.toUpperCase();

        fieldset.innerHTML = "";

        fieldset.classList.add('thankYouBg');

        const pElement = document.createElement('p');
        pElement.textContent = `Thank you for sending Sophie an email, ${senderGreeting}!`;
        fieldset.append(pElement);

        const p2Element = document.createElement('p');
        p2Element.textContent = 'She will get back to you as soon as possible. ☺️';
        fieldset.append(p2Element);

    })
}

// form validation
sophie.formValidation = () => {
    
}

sophie.init();