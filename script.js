const sophie = {};

sophie.init = function() {
    sophie.form()
} //end of init function


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

        fieldset.innerHTML = "";

        const pElement = document.createElement('p');
        pElement.textContent = `Thank you for sending Sophie an email, ${senderName}! She will get back to you as soon as possible. ☺️`
        fieldset.append(pElement);

    })
}

sophie.init();