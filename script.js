'use strict';

// Ver 1.6 commit: Logunovich Denis (logunovich@gmail.com)

const text = document.querySelector('#my__text'),
      correctTextField = document.querySelector('#final__text'),
      btn = document.querySelector('.form__button'),
      btnMova = document.querySelector('.form__button-lang');

function correctTextFun(num) {
    var correctText = text.value.replace(/ "/gim, ' «')
    .replace(/ – /gim, ' — ') // минус
    .replace(/^–(?= )/gim, '—') // минус
    .replace(/,–/gim, ',—') // минус
    .replace(/ - /gim, ' — ') // простой дефис
    .replace(/^-(?= )/gim, '—') // простой дефис
    .replace(/,-/gim, ',—') // простой дефис
    .replace(/--/gim, '—') // двойной дефис
    .replace(/",/gim, '»,')
    .replace(/" /gim, '» ')
    .replace(/":/gim, '»:')
    .replace(/";/gim, '»;')
    .replace(/"\./gim, '».')
    .replace(/^"/gim, '«')
    .replace(/"$/gim, '»')
    .replace(/"!/gim, '»!')
    .replace(/"\?/gim, '»?')
    .replace(/мвтч/gim, 'МВт·ч')
    .replace(/Нм/gm, 'Н·м')
    .replace(/кВтч/gim, 'кВт·ч')
    .replace(/  /gim, ' ') // двойной пробел
    .replace(/4х4/gim, '4×4')
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
    .replace(/ст\.9/gim, 'ст. 9')
    .replace(/г.р./gim, 'г. р.')
    .replace(/№ 1/gim, '№1') // обрабатываем номера
    .replace(/№ 2/gim, '№2')
    .replace(/№ 3/gim, '№3')
    .replace(/№ 4/gim, '№4')
    .replace(/№ 5/gim, '№5')
    .replace(/№ 6/gim, '№6')
    .replace(/№ 7/gim, '№7')
    .replace(/№ 8/gim, '№8')
    .replace(/№ 9/gim, '№9')
    .replace(/№ 0/gim, '№0') 
    .replace(/0 °/gim, '0°') // градусы
    .replace(/1 °/gim, '1°')
    .replace(/2 °/gim, '2°')
    .replace(/3 °/gim, '3°')
    .replace(/4 °/gim, '4°')
    .replace(/5 °/gim, '5°')
    .replace(/6 °/gim, '6°')
    .replace(/7 °/gim, '7°')
    .replace(/8 °/gim, '8°')
    .replace(/9 °/gim, '9°'); 
    correctTextField.textContent = correctText;

    // условие для кнопки бел. языка (остальные replace подставятся автоматически)
    if (num == 0) {
        let belCorrectText = correctText
        .replace(/ау/gm, 'аў') // а
        .replace(/Ау/gm, 'Аў')
        .replace(/АУ/gm, 'АЎ')
        .replace(/а у/gm, 'а ў')
        .replace(/А у/gm, 'А ў')
        .replace(/А У/gm, 'А Ў')
        .replace(/еу/gm, 'еў') // е
        .replace(/Еу/gm, 'Еў')
        .replace(/ЕУ/gm, 'ЕЎ')
        .replace(/е у/gm, 'е ў')
        .replace(/Е у/gm, 'Е ў')
        .replace(/Е У/gm, 'Е Ў')
        .replace(/ёу/gm, 'ёў') // ё
        .replace(/Ёу/gm, 'Ёў')
        .replace(/ЁУ/gm, 'ЁЎ')
        .replace(/ё у/gm, 'ё ў')
        .replace(/Ё у/gm, 'Ё ў')
        .replace(/Ё У/gm, 'Ё Ў')
        .replace(/иу/gm, 'иў') // и
        .replace(/Иу/gm, 'Иў')
        .replace(/ИУ/gm, 'ИЎ')
        .replace(/и у/gm, 'и ў')
        .replace(/И у/gm, 'И ў')
        .replace(/И У/gm, 'И Ў')
        .replace(/оу/gm, 'оў') // о
        .replace(/Оу/gm, 'Оў')
        .replace(/ОУ/gm, 'ОЎ')
        .replace(/о у/gm, 'о ў')
        .replace(/О у/gm, 'О ў')
        .replace(/О У/gm, 'О Ў')
        .replace(/уу/gm, 'уў') // у
        .replace(/Уу/gm, 'Уў')
        .replace(/УУ/gm, 'УЎ')
        .replace(/у у/gm, 'у ў')
        .replace(/У у/gm, 'У ў')
        .replace(/У У/gm, 'У Ў')
        .replace(/ыу/gm, 'ыў') // ы
        .replace(/Ыу/gm, 'Ыў')
        .replace(/ЫУ/gm, 'ЫЎ')
        .replace(/ы у/gm, 'ы ў')
        .replace(/Ы у/gm, 'Ы ў')
        .replace(/Ы У/gm, 'Ы Ў')
        .replace(/эу/gm, 'эў') // э
        .replace(/Эу/gm, 'Эў')
        .replace(/ЭУ/gm, 'ЭЎ')
        .replace(/э у/gm, 'э ў')
        .replace(/Э у/gm, 'Э ў')
        .replace(/Э У/gm, 'Э Ў')
        .replace(/юу/gm, 'юў') // ю
        .replace(/Юу/gm, 'Юў')
        .replace(/ЮУ/gm, 'ЮЎ')
        .replace(/ю у/gm, 'ю ў')
        .replace(/Ю у/gm, 'Ю ў')
        .replace(/Ю У/gm, 'Ю Ў')
        .replace(/яу/gm, 'яў') // я
        .replace(/Яу/gm, 'Яў')
        .replace(/ЯУ/gm, 'ЯЎ')
        .replace(/я у/gm, 'я ў')
        .replace(/Я у/gm, 'Я ў')
        .replace(/Я У/gm, 'Я Ў');

        belCorrectText = belCorrectText.replace(/и/gm, 'i').replace(/И/gm, 'I');
        correctTextField.textContent = belCorrectText;
    }

};

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputMova = document.querySelector('#mova');
    if (inputMova.checked === true) {
        correctTextFun(0);
    } else {
    correctTextFun(); // вызывать функцию без аргумента! 
}
});

// обработчик события для кнопки бел. языка 

// btnMova.addEventListener('click', (e) => {
//     e.preventDefault();
//     correctTextFun(0); // вызывать функцию только с нулем в качестве аргумента! 

// });

// функция подсчета симолов в исходном тексте

const count = document.querySelector('.form__count span');
count.style.cssText = 'font-size: 15px; font-weight: bold; color: #6d6d6d'; 

text.addEventListener('input', ()=> {
    count.textContent = text.value.length;
});

// работаем над ссылками, которые добавляются под текст

const autoLinks = document.querySelector('.form__button-auto'),
      otherLinks = document.querySelector('.form__button-other');

autoLinks.addEventListener('click', (e) => {
    e.preventDefault();
    correctTextField.innerHTML += `
--code--
<p style="text-align: right;"><strong>Auto.Onliner в </strong><a href="https://t.elegram.ru/autoonliner"><strong>Telegram</strong></a><strong>: обстановка на дорогах и только самые важные новости</strong></p>
<p style="text-align: right;"><strong>Есть о чем рассказать? Пишите в наш </strong><a href="http://t.elegram.ru/newsonliner_bot"><strong>телеграм-бот</strong></a><strong>. Это анонимно и быстро</strong></p>
`;
});

otherLinks.addEventListener('click', (e) => {
    e.preventDefault();
    correctTextField.innerHTML += `
--code--
<p style="text-align: right;"><strong>Наш канал в <a href="https://t.elegram.ru/onlinerby" target="_blank">Telegram</a>. Присоединяйтесь!</strong></p>
<p style="text-align: right;"><strong>Есть о чем рассказать? Пишите в наш <a href="https://t.elegram.ru/newsonliner_bot" target="_blank">телеграм-бот</a>. Это анонимно и быстро</strong></p>`;
});