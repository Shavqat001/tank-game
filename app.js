let main = document.querySelector('main');
let tank = document.querySelector('.tank');
let i = tank.offsetLeft;
let t = tank.offsetTop;
window.addEventListener('keydown', (evt) => {

    if (evt.code === 'Space') {
        let bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bullet.style.left = `${tank.offsetLeft}px`;
        bullet.style.top = `${tank.offsetTop}px`;
        main.append(bullet);

        let left = tank.offsetLeft;
        let right = tank.offsetLeft;
        let top = tank.offsetTop;
        let bottom = tank.offsetTop;

        if (tank.classList.contains('right')) {
            setInterval(() => {
                if (right > main.offsetWidth - bullet.offsetWidth) {
                    bullet.remove();
                    right = tank.offsetLeft;
                }
                right++;
                bullet.style.left = `${right}px`;
            }, 1);
        }

        if (tank.classList.contains('left')) {
            setInterval(() => {
                if (left < 0) {
                    bullet.remove();
                    left = tank.offsetLeft;
                }
                left--;
                bullet.style.left = `${left}px`;
            }, 1);
        }
        if (tank.classList.contains('top')) {
            setInterval(() => {
                if (top < 0) {
                    bullet.remove();
                    top = tank.offsetTop;
                }
                top--;
                bullet.style.top = `${top}px`;
            }, 1);
        }
        if (tank.classList.contains('bottom')) {
            setInterval(() => {
                if (bottom > main.offsetHeight - bullet.offsetHeight) {
                    bullet.remove();
                    bottom = tank.offsetTop;
                }
                bottom++;
                bullet.style.top = `${bottom}px`;
            }, 1);
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
    // localStorage.setItem('top', tank.offsetTop);
    // localStorage.setItem('left', tank.offsetLeft);
});


// window.addEventListener('load', () => {
//     let top = localStorage.getItem('top');
//     let left = localStorage.getItem('left');
//     tank.style.left = `${left}px`;
//     tank.style.top = `${top}px`;
// });