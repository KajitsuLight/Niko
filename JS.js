const gallery = document.getElementById('gallery');
const netflix = document.getElementById('netflix');
const netflixprev = document.getElementById('netflixprev');

let scrollAmount = 0;
const scrollStep = 560; // Шаг прокрутки
const totalWidth = gallery.scrollWidth; // Общая ширина галереи
const visibleWidth = gallery.clientWidth; 

const scrollToPosition = (amount) => {
    gallery.scrollTo({
        left: amount,
        behavior: 'smooth' // Плавная прокрутка
    });
};

const handleScroll = (direction) => {
    scrollAmount += direction * scrollStep; // Увеличиваем или уменьшаем scrollAmount
    if (scrollAmount < 0) scrollAmount = 0; // Не даем прокрутить в отрицательную сторону
    scrollToPosition(scrollAmount);
};

netflix.addEventListener('click', () => handleScroll(1)); // Прокрутка вправо
netflixprev.addEventListener('click', () => handleScroll(-1)); // Прокрутка влево

const openFormBtn1 = document.getElementById('openFormBtn1');
const openFormBtn2 = document.getElementById('openFormBtn2');
const openFormBtn3 = document.getElementById('openFormBtn3');
const openFormBtn4 = document.getElementById('openFormBtn4');
const openFormBtn5 = document.getElementById('openFormBtn5');
const formContainer = document.getElementById('formContainer');
const overlay = document.getElementById('overlay');
const closeFormBtn = document.getElementById('closeFormBtn');

// Функция для открытия формы
function openForm() {
    formContainer.style.display = 'block';
    overlay.style.display = 'block';
}

// Добавляем обработчики событий для обеих кнопок
openFormBtn1.addEventListener('click', openForm);
openFormBtn2.addEventListener('click', openForm);
openFormBtn3.addEventListener('click', openForm);
openFormBtn4.addEventListener('click', openForm);
openFormBtn5.addEventListener('click', openForm);

// Закрываем форму и затемнение при нажатии на кнопку закрытия
closeFormBtn.addEventListener('click', () => {
    formContainer.style.display = 'none';
    overlay.style.display = 'none';
});

// Закрываем форму при клике на затемнение
overlay.addEventListener('click', () => {
    formContainer.style.display = 'none';
    overlay.style.display = 'none';
});

const follower = document.getElementById('follower');
const shadow = document.getElementById('shadow');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

const followerRect = follower.getBoundingClientRect();
const followerCenterX = followerRect.left + followerRect.width / 2;
const followerCenterY = followerRect.top + followerRect.height / 2;

    // Вычисляем расстояние между курсором и центром изображения
    const distanceX = mouseX - followerCenterX;
    const distanceY = mouseY - followerCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Проверяем, находится ли курсор в пределах 150 пикселей от изображения
    if (distance < 1550) {
        // Изменяем позицию изображения для эффекта шевеления
        const offsetX = (distanceX / 1550) * 30; // Максимальное смещение 10 пикселей
        const offsetY = (distanceY / 1550) * 30; // Максимальное смещение 10 пикселей
        follower.style.transform = `translate(${offsetX}px, ${offsetY}px)`;


        // Появление затемненной копии
        shadow.style.opacity = 0.8;
        shadow.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        shadoww.style.opacity = 0.5;
        shadoww.style.transform = `translate(${offsetX + (index + 1) * 5}px, ${offsetY + (index + 1) * 5}px)`;
    } else {
        // Возвращаем изображение и копию на место
        follower.style.transform = 'translate(0, 0)';
        shadow.style.opacity = 0;
    }
});
