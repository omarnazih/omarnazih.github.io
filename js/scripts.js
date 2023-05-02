/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Handle form submission
    // select the form element
    const form = document.querySelector('form');

    // add event listener for form submission
    form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the default form submission

    // select the form fields
    const emailField = form.querySelector('#email');
    const messageField = form.querySelector('#message');

    // get the values of the form fields
    const email = emailField.value;
    const message = messageField.value;

    // send the form data using Fetch API
    fetch(form.action, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        email: email,
        message: message
        })
    })
    .then(response => {
        if (response.ok) {
        // handle successful form submission
        Swal.fire({
            title: 'Successfully sent!',
            text: 'Your message has been sent!',
            icon: 'success'
         })
        emailField.value = '';
        messageField.value = '';
        } else {
        // handle failed form submission
        Swal.fire({
            title: 'Error!',
            text: 'There was an error submitting your message. Please try again later.',
            icon: 'error'
        })
            
        }
    })
    .catch(error => {
        // handle network errors
        Swal.fire({
            title: 'Error!',
            text: 'There was a network error submitting your message. Please try again later.',
            icon: 'error',
        })
    });
    });


});
