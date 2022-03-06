 // starter JavaScript for disabling form submissions if there are invalid fields
 (function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('akan-form');
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
                 
                // get date of birth and gender from html
                const dateOfBirth = document.getElementById('bday').value;
                const gender = document.getElementById('gender').value;
                // convert date to readable format then extract month day and year
                const date = new Date(dateOfBirth),
                month = '' + (date.getMonth() + 1),
                day = '' + date.getDate(),
                year = date.getFullYear();

                 // Use the year to extract century

                 const CC = Math.floor((year - 1) / 100) + 1;
                 

