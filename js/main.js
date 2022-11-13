// https://schoolsw3.com/js/js_random.php
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
getRndInteger();

// Длина строки
const truncate = (str, maxlength) => str.length > maxlength;
truncate();
