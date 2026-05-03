// Admission form alert
document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("admissionForm");

    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            alert("Form Submitted Successfully!");
        });
    }
});