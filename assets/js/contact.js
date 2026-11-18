/* jshint esversion: 6 */
(function () {
    const form = document.querySelector('#contact-form');
    const status = document.querySelector('#form-status');
    const fields = [
        {
            input: document.querySelector('#contact-name'),
            error: document.querySelector('#name-error'),
            pattern: /^[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ .’'-]{1,79}$/,
            message: 'Enter 2–80 characters using letters, spaces, apostrophes, hyphens or full stops.'
        },
        {
            input: document.querySelector('#contact-email'),
            error: document.querySelector('#email-error'),
            pattern: /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/,
            message: 'Enter a valid email address, such as you@example.com.'
        },
        {
            input: document.querySelector('#contact-message'),
            error: document.querySelector('#message-error'),
            pattern: /^[\s\S]{10,2000}$/,
            message: 'Enter a message between 10 and 2,000 characters.'
        }
    ];

    function validate(field) {
        const value = field.input.value.trim();
        const valid = field.pattern.test(value) && value.length <= field.input.maxLength;
        field.input.setAttribute('aria-invalid', String(!valid));
        field.error.textContent = valid ? '' : value ? field.message : 'This field is required.';
        return valid;
    }

    fields.forEach(function (field) {
        field.input.addEventListener('blur', function () {
            validate(field);
        });
        field.input.addEventListener('input', function () {
            status.textContent = '';
            if (field.input.hasAttribute('aria-invalid')) {
                validate(field);
            }
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let firstInvalid = null;
        fields.forEach(function (field) {
            if (!validate(field) && !firstInvalid) {
                firstInvalid = field.input;
            }
        });
        if (firstInvalid) {
            status.textContent = 'Please correct the highlighted fields.';
            firstInvalid.focus();
            return;
        }
        status.textContent = 'Your form passed validation. This assessment demo does not send messages.';
    });
}());
