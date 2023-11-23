let main = document.querySelector('main');
let tank = document.querySelector('.tank');
let gun = document.querySelector('.gun');
let i = tank.offsetLeft;
let t = tank.offsetTop;

window.addEventListener('keydown', (evt) => {
    if (evt.code === 'Space') {
        let bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bullet.style.top = `${tank.offsetTop + 15}px`;
        bullet.style.left = `${tank.offsetLeft + 80}px`;
        main.append(bullet);

        let left = tank.offsetLeft;
        let right = tank.offsetLeft;
        let top = tank.offsetTop;
        let bottom = tank.offsetTop;

        if (tank.classList.contains('right')) {
            let intervalId = setInterval(() => {
                if (right > main.offsetWidth - bullet.offsetWidth - 80) {
                    bullet.remove();
                    clearInterval(intervalId); // Останавливаем setInterval после достижения края
                }
                right++;
                bullet.style.left = `${right + 80}px`; // Обновляем позицию пули
            }, 1);

        };
        if (tank.classList.contains('left')) {
            let intervalId = setInterval(() => {
                if (left < 80) {
                    bullet.remove();
                    clearInterval(intervalId); // Останавливаем setInterval после достижения края
                }
                left--;
                bullet.style.left = `${left - 80}px`; // Обновляем позицию пули
            }, 1);
        }
        if (tank.classList.contains('top')) {
            let intervalId = setInterval(() => {
                if (top < 80) {
                    bullet.remove();
                    clearInterval(intervalId); // Останавливаем setInterval после достижения края
                }
                top--;
                bullet.style.top = `${top - 80}px`;
            }, 1);
            bullet.style.left = `${tank.offsetLeft + 20}px`;
        }
        if (tank.classList.contains('bottom')) {
            let intervalId = setInterval(() => {
                if (bottom > main.offsetHeight - bullet.offsetHeight - 80) {
                    bullet.remove();
                    clearInterval(intervalId); // Останавливаем setInterval после достижения края
                }
                bottom++;
                bullet.style.top = `${bottom + 80}px`;
            }, 1);
            bullet.style.left = `${tank.offsetLeft + 20}px`;
        }
    }
    if (evt.code === 'KeyA') {
        tank.classList.add('left');
        tank.classList.remove('right');
        tank.classList.remove('top');
        tank.classList.remove('bottom');
        i -= 20;
        tank.style.left = `${i}px`;
    }
    if (evt.code === 'KeyD') {
        tank.classList.remove('left');
        tank.classList.add('right');
        tank.classList.remove('top');
        tank.classList.remove('bottom');
        i += 20;
        tank.style.left = `${i}px`;
    }
    if (evt.code === 'KeyS') {
        tank.classList.remove('left');
        tank.classList.remove('right');
        tank.classList.remove('top');
        tank.classList.add('bottom');
        t += 20;
        tank.style.top = `${t}px`;

    }
    if (evt.code === 'KeyW') {
        tank.classList.remove('left');
        tank.classList.remove('right');
        tank.classList.add('top');
        tank.classList.remove('bottom');
        t -= 20;
        tank.style.top = `${t}px`;
    }

    if (i > main.offsetWidth - tank.offsetWidth) {
        i = main.offsetWidth - tank.offsetWidth;
        tank.style.left = `${main.offsetWidth - tank.offsetWidth}px`;
    } else if (i < 0) {
        i = 0;
        tank.style.left = `${0}px`;
    }

    if (t > main.offsetHeight - tank.offsetHeight) {
        t = main.offsetHeight - tank.offsetHeight;
        tank.style.top = `${main.offsetHeight - tank.offsetHeight}px`;
    } else if (t < 0) {
        t = 0;
        tank.style.top = `${0}px`;
    }
});