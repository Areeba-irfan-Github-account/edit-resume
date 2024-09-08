document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const resultDiv = document.getElementById('result');
    const editButton = document.getElementById('editButton');
    const editform = document.getElementById('editform');

    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');
    const displayPhone = document.getElementById('displayPhone');
    const displayEducation = document.getElementById('displayEducation');
    const displaySkills = document.getElementById('displaySkills');

    const editName = document.getElementById('editname');
    const editEmail = document.getElementById('editemail');
    const editPhone = document.getElementById('editphone');
    const editEducation = document.getElementById('editeducation');
    const editSkills = document.getElementById('editskills');

    // Handle form submission to display resume
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form submission

        // Get the form input values
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const phoneInput = document.getElementById('phone').value;
        const educationInput = document.getElementById('education').value;
        const skillsInput = document.getElementById('skills').value;

        // Display input values on the page
        displayName.textContent = `Name: ${nameInput}`;
        displayEmail.textContent = `Email: ${emailInput}`;
        displayPhone.textContent = `Phone: ${phoneInput}`;
        displayEducation.textContent = `Education: ${educationInput}`;
        displaySkills.textContent = `Skills: ${skillsInput}`;
        form.classList.add('hidden');
        resultDiv.classList.remove('hidden');
    });


    editButton.addEventListener('click', () => {
        editName.value = displayName.textContent.replace('Name: ', "");
        editEmail.value = displayEmail.textContent.replace('Email: ', "");
        editPhone.value = displayPhone.textContent.replace('Phone: ', "");
        editEducation.value = displayEducation.textContent.replace('Education: ', "");
        editSkills.value = displaySkills.textContent.replace('Skills: ', "");
        resultDiv.classList.add('hidden');
        editform.classList.remove('hidden');
    });
    editform.addEventListener('submit', (event) => {
        event.preventDefault();
        displayName.textContent = `Name: ${editName.value}`;
        displayEmail.textContent = `Email: ${editEmail.value}`;
        displayPhone.textContent = `Phone: ${editPhone.value}`;
        displayEducation.textContent = `Education: ${editEducation.value}`;
        displaySkills.textContent = `Skills: ${editSkills.value}`;
        editform.classList.add('hidden');
        resultDiv.classList.remove('hidden');
    });
});
