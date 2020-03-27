/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt.

При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию.

Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендуется каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

let i11 = document.querySelector('.i-11'); //инпут 
let keyel = document.querySelectorAll('.key-el');  //получаем клавишу

function t11down(event) {
    console.log(event.key);
    keyel.forEach(element => {
        // console.log(element);
        // console.log(event);
        if (element.dataset.keyEl == event.key || element.dataset.keyEl == event.code) {
            element.classList.add('hold');
        }
    });
}

function t11up(event) {
    keyel.forEach(element => {
        // console.log(element);
        // console.log(event);

        if (element.dataset.keyEl == event.key || element.dataset.keyEl == event.code) {
            element.classList.remove('hold');
        }
    });
}
i11.addEventListener('keydown', t11down, false);
i11.addEventListener('keyup', t11up, false);
