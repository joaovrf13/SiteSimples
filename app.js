'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;

    if (document.body.classList.contains("light-theme")) {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    
    console.log('current class name: ' + className);
});
