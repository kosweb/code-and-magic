var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');

var setupSimilarWindow = document.querySelector('.setup-similar');
var similarList = setupSimilarWindow.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']

var getRandomIndex = function(maxLength) {
  return Math.floor(Math.random() * Math.floor(maxLength));
};

var wizards = [
  {
    name: WIZARD_NAMES[getRandomIndex(WIZARD_NAMES.length)],
    secondName: WIZARD_SECOND_NAMES[getRandomIndex(WIZARD_SECOND_NAMES.length)],
    coatColor: WIZARD_COAT_COLORS[getRandomIndex(WIZARD_COAT_COLORS.length)],
    eyesColor: WIZARD_EYE_COLORS[getRandomIndex(WIZARD_EYE_COLORS.length)]
  },
  {
    name: WIZARD_NAMES[getRandomIndex(WIZARD_NAMES.length)],
    secondName: WIZARD_SECOND_NAMES[getRandomIndex(WIZARD_SECOND_NAMES.length)],
    coatColor: WIZARD_COAT_COLORS[getRandomIndex(WIZARD_COAT_COLORS.length)],
    eyesColor: WIZARD_EYE_COLORS[getRandomIndex(WIZARD_EYE_COLORS.length)]
  },
  {
    name: WIZARD_NAMES[getRandomIndex(WIZARD_NAMES.length)],
    secondName: WIZARD_SECOND_NAMES[getRandomIndex(WIZARD_SECOND_NAMES.length)],
    coatColor: WIZARD_COAT_COLORS[getRandomIndex(WIZARD_COAT_COLORS.length)],
    eyesColor: WIZARD_EYE_COLORS[getRandomIndex(WIZARD_EYE_COLORS.length)]
  },
  {
    name: WIZARD_NAMES[getRandomIndex(WIZARD_NAMES.length)],
    secondName: WIZARD_SECOND_NAMES[getRandomIndex(WIZARD_SECOND_NAMES.length)],
    coatColor: WIZARD_COAT_COLORS[getRandomIndex(WIZARD_COAT_COLORS.length)],
    eyesColor: WIZARD_EYE_COLORS[getRandomIndex(WIZARD_EYE_COLORS.length)]
  }
];

var renderWizard = function(wizard) {
  var wizardClone = similarWizardTemplate.cloneNode('true');
  wizardClone.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.secondName;
  wizardClone.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardClone.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardClone;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
};

similarList.appendChild(fragment);
setupSimilarWindow.classList.remove('hidden');

// ЛЕКЦИЯ 4 ОБРАБОТЧИК СОБЫТИЙ

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  };
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name')

userNameInput.addEventListener('invalid', function(evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// СМЕНА ЦВЕТА МАНТИИ

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardHead = setupWizard.querySelector('.wizard-head');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardHands = setupWizard.querySelector('.wizard-hands');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var firstIndex = 0;

wizardCoat.addEventListener('click', function() {
  wizardCoat.style.fill = WIZARD_COAT_COLORS[firstIndex += 1];
  if (firstIndex === WIZARD_COAT_COLORS.length) {
    firstIndex = 0;
    wizardCoat.style.fill = WIZARD_COAT_COLORS[firstIndex];
  };
});

wizardEyes.addEventListener('click', function() {
  wizardEyes.style.fill = WIZARD_EYE_COLORS[firstIndex += 1];

  if (firstIndex === WIZARD_EYE_COLORS.length) {
    firstIndex = 0;
    wizardEyes.style.fill = WIZARD_EYE_COLORS[firstIndex];
  };
});

wizardFireball.addEventListener('click', function() {
  wizardFireball.style.backgroundColor = WIZARD_FIREBALL_COLORS[firstIndex += 1];
  wizardFireball.querySelector('input').value = WIZARD_FIREBALL_COLORS[firstIndex];

  if (firstIndex === WIZARD_FIREBALL_COLORS.length) {
    firstIndex = 0;
    wizardFireball.style.backgroundColor = WIZARD_FIREBALL_COLORS[firstIndex];
    wizardFireball.querySelector('input').value = WIZARD_FIREBALL_COLORS[firstIndex];
  };
});
