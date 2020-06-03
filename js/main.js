//DOM elements

const time = document.getElementById('time'),
     greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');



// Options 
const showPmAn = true;



// Show the time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

//set PM || AM
    
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 hours format

    hour = hour % 12 || 12;

    // output the time

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showPmAn ? amPm : ''}`;

    setTimeout(showTime, 1000);
}
//ADDzero 
function addZero(n) {

    return (parseInt(n, 10) < 10 ? '0' : '') + n;
    
}

//  set backgournds 
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12) {
        //morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good morning';
    } else if (hour < 18) {
        //afternno
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good afternoon';
    } else {
        //evening
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = 'Good evening';
        document.body.style.color = 'white';
    }
}

// Get Name 
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter name]'
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// set name

function setName(e) {
    if (e.type === 'keypress') {
      if (e.which === 13 || e.keycode === 13) {
          localStorage.setItem('name', e.target.innerText);
          name.blur();
          
      }  
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}
//Get focus of the day
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus]'
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// set focus 
function setFocus(e) {
    if (e.type === 'keypress') {
      if (e.which === 13 || e.keycode === 13) {
          localStorage.setItem('focus', e.target.innerText);
          focus.blur();
          
      }  
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// run
showTime();
setBgGreet();
getName();
getFocus();