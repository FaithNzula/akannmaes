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
                  // use year to get last two digits for year eg if its 2022will get 22
                  const YY = year.toString().slice(-2);

                  const dow = date.getDay();
                  let name = "";


                  if (gender === "M") {
                    if (dow === 1) {
                        name = "Kwadwo";
                    } else if (dow === 2) {
                        name = "Kwabena";
                    } else if (dow === 3) {
                        name = "Kwaku";
                    } else if (dow === 4) {
                        name = "Yaw";
                    } else if (dow === 5) {
                        name = "Kofi";
                    } else if (dow === 6) {
                        name = "Kwame";
                    } else if (dow === 7) {
                        name = "Kwasu";
                    }
                }



                if (gender === "F") {
                    if (dow === 1) {
                        name = "Adwoa";
                    } else if (dow === 2) {
                        name = "Abenaa";
                    } else if (dow === 3) {
                        name = "Akua";
                    } else if (dow === 4) {
                        name = "Yaa";
                    } else if (dow === 5) {
                        name = "Afua";
                    } else if (dow === 6) {
                        name = "Ama";
                    } else if (dow === 7) {
                        name = "Akosua";
                    }
                }

                if (form.checkValidity()===true){
                    alert('Akan name is: ' + name)
               }

            

            });
        });
    }, false);
})();       




