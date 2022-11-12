// https://schoolsw3.com/js/js_random.php
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

getRndInteger();

// https://learn.javascript.ru/task/truncate

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

truncate();
