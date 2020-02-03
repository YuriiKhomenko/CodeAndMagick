'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomElFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getWizardData = function () {
  var wizard = {
    'name': getRandomElFromArray(NAMES) + ' ' + getRandomElFromArray(SURNAMES),
    'coatColor': getRandomElFromArray(COAT_COLORS),
    'eyesColor': getRandomElFromArray(EYES_COLOR)
  };
  return wizard;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(getWizardData()));
}
similarListElement.appendChild(fragment);

var userDialog = document.querySelector('.setup');
if (userDialog.classList.contains('hidden')) {
  userDialog.classList.remove('hidden');
}

userDialog.querySelector('.setup-similar').classList.remove('hidden');
