'use strict';

const text = document.querySelector('#my__text'),
      correctTextField = document.querySelector('#final__text'),
      btn = document.querySelector('.form__button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const correctText = text.value.replace(/ "/gim, ' «').replace(/",/gim, '»,').replace(/" /gim, '» ').replace(/":/gim, '»:').replace(/";/gim, '»;').replace(/"\./gim, '».').replace(/Нм/gm, 'Н·м').replace(/кВтч/gim, 'кВт·ч').replace(/ -/gim, ' —').replace(/- /gim, '— ').replace(/ - /gim, ' — ').replace(/^"/gim, '«').replace(/"$/gim, '»').replace(/мвтч/gim, 'МВт·ч').replace(/  /gim, ' ').replace(/4х4/gim, '4×4').replace(/4x4/gim, '4×4').replace(/\$ /gim, '$').replace(/€ /gim, '€').replace(/л.с./gim, 'л. с.');
    correctTextField.textContent = correctText;
});