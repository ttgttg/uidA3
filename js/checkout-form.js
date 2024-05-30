// JavaScript for Step Headings - flip through
const headings = document.querySelectorAll('.heading');
const fieldsets = document.querySelectorAll('fieldset');

let currentStep = 0;

function showStep(stepIndex) {
  fieldsets.forEach((fieldset, index) => {
    if (index === stepIndex) {
      fieldset.style.display = 'block';
    } else {
      fieldset.style.display = 'none';
    }
  });
}

function setActiveStep(stepIndex) {
  headings.forEach((heading, index) => {
    if (index === stepIndex) {
      heading.classList.add('active');
    } else {
      heading.classList.remove('active');
    }
  });
}

function goToStep(stepIndex) {
  currentStep = stepIndex;
  showStep(currentStep);
  setActiveStep(currentStep);
}

headings.forEach((heading, index) => {
  heading.addEventListener('click', () => {
    goToStep(index);
  });
});

showStep(currentStep);
setActiveStep(currentStep); // Show the first step and set the first step heading as active initially