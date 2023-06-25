document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('shuffle-button').addEventListener('click', shuffleValues);
  document.getElementById('change-button').addEventListener('click', changeValues);
  document.getElementById('show-button').addEventListener('click', showSelectedValues);
});

function shuffleValues() {
  let checkboxesContainer = document.getElementById('checkbox-form');
  let checkboxArray = Array.from(checkboxesContainer.getElementsByTagName('input'));

  checkboxArray.sort(() => Math.random() - 0.5);

  checkboxArray.forEach(function(checkbox) {
    checkboxesContainer.appendChild(checkbox.parentNode);
  });
}

function changeValues() {
  let checkboxes = document.getElementsByTagName('input');

  Array.from(checkboxes).forEach(function(checkbox, index) {
    checkbox.value = "Pabau " + (index + 1);
    checkbox.nextSibling.textContent = checkbox.value;
  });
}

function showSelectedValues() {
  let selectedValues = Array.from(document.getElementsByTagName('input'))
    .filter(function(checkbox) {
      return checkbox.checked;
    })
    .map(function(checkbox) {
      return checkbox.value;
    }); 

    document.getElementById('selected-values').textContent = "Selected Values: " + selectedValues.join(", ");
    document.getElementById('selected-values').classList.add('selected-values');}
