'use strict';

function calc(b) {
    const button = document.querySelectorAll('button');
    const res = document.querySelector('#res');

    console.log(b.value);
    const liczba = b.value;
    //res.value = liczba;

    if (b.value == "=") {
        res.value = eval(res.value);
        } else {

        if (b) {
            res.value += liczba;
        }
            
        if (b.value == "C") {
            res.value = '';
        }
    }
}
