const sophie = {};

sophie.init = function() {
    sophie.form();

    sophie.h2Element();
} //end of init function



// delay h2 entrance
sophie.h2Element = () => {
    const h2Element = document.createElement('h2');
    h2Element.textContent = `I'm Sophie!`;

    h2Element.classList.add('animate__animated', 'animate__fadeInLeft');

    setTimeout( () => {
        const h2div = document.querySelector('.h2div');
        h2div.appendChild(h2Element);

    }, 3500);
}

// form submit event listener
sophie.form = () => {
    const form = document.querySelector('form');
    const name = document.querySelector('#name');
    const fieldset = document.querySelector('fieldset');
    
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // console.log(name.value);
        const senderName = name.value;
        console.log('senderName:', senderName);
        const senderGreeting = senderName.toUpperCase();

        fieldset.innerHTML = "";

        const pElement = document.createElement('p');
        pElement.textContent = `Thank you for sending Sophie an email, ${senderGreeting}!`;
        fieldset.append(pElement);

        const p2Element = document.createElement('p');
        p2Element.textContent = 'She will get back to you as soon as possible. ☺️';
        fieldset.append(p2Element);

    })
}

sophie.init();