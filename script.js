'use strict';

// Ver 1.2 commit: Logunovich Denis (logunovich@gmail.com)

const text = document.querySelector('#my__text'),
      correctTextField = document.querySelector('#final__text'),
      btn = document.querySelector('.form__button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const correctText = text.value.replace(/ "/gim, ' «')
        .replace(/",/gim, '»,')
        .replace(/" /gim, '» ')
        .replace(/":/gim, '»:')
        .replace(/";/gim, '»;')
        .replace(/"\./gim, '».')
        .replace(/Нм/gm, 'Н·м')
        .replace(/кВтч/gim, 'кВт·ч')
        .replace(/ – /gim, ' — ') // минус
        .replace(/^–(?= )/gim, '—') // минус
        .replace(/,–/gim, ',—') // минус
        .replace(/ - /gim, ' — ') // простой дефис
        .replace(/^-(?= )/gim, '—') // простой дефис
        .replace(/,-/gim, ',—') // простой дефис
        .replace(/--/gim, '—') // двойной дефис
        .replace(/^"/gim, '«')
        .replace(/"$/gim, '»')
        .replace(/"!/gim, '»!')
        .replace(/"\?/gim, '»?')
        .replace(/мвтч/gim, 'МВт·ч')
        .replace(/  /gim, ' ').
        replace(/4х4/gim, '4×4')
        .replace(/4x4/gim, '4×4')
        .replace(/\$ /gim, '$')
        .replace(/€ /gim, '€')
        .replace(/л\.с\./gim, 'л. с.')
        .replace(/ч\.1/gim, 'ч. 1')
        .replace(/ч\.2/gim, 'ч. 2')
        .replace(/ч\.3/gim, 'ч. 3')
        .replace(/ч\.4/gim, 'ч. 4')
        .replace(/ч\.5/gim, 'ч. 5')
        .replace(/ч\.6/gim, 'ч. 6')
        .replace(/ч\.7/gim, 'ч. 7')
        .replace(/ч\.8/gim, 'ч. 8')
        .replace(/ч\.9/gim, 'ч. 9')
        .replace(/ст\.1/gim, 'ст. 1')
        .replace(/ст\.2/gim, 'ст. 2')
        .replace(/ст\.3/gim, 'ст. 3')
        .replace(/ст\.4/gim, 'ст. 4')
        .replace(/ст\.5/gim, 'ст. 5')
        .replace(/ст\.6/gim, 'ст. 6')
        .replace(/ст\.7/gim, 'ст. 7')
        .replace(/ст\.8/gim, 'ст. 8')
        .replace(/ст\.9/gim, 'ст. 9');
    correctTextField.textContent = correctText;
});

