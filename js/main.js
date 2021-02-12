function templateCard(name, src, price) {
  return `<div class="item-img">
            <img src="" data-src=${src} alt="term" height="150" width="150">
          </div>
          <span class="item-name">${name}</span>
          <span class="item-type">Электронный</span>
          <span class="item-power">--</span>
          <span class="item-voltage">12V</span>
          <span class="item-launch">Ручной</span>
          <span class="item-price">${price} руб.</span>`;
}

document.addEventListener('DOMContentLoaded', () => {

  const name = 'Термометр с самым длинным названием которое можно придумать';

  const imageList = () => {
    let img = [
      './img/term-1.jpg',
      './img/term-2.jpg',
      './img/term-3.jpg',
      './img/term-4.jpg'
    ];
    let index = -1;
    return () => {
      index += 1;
      if (index === img.length) {
        index = 0;
      }
      return img[index];
    };
  };

  const nextImage = imageList();
  const contentElement = document.querySelector('.content');

  for (let i = 0; i < 8; i++) {
    let itemElement = document.createElement('div');
    itemElement.className = 'item';
    itemElement.innerHTML = templateCard(name, nextImage(), Math.floor(Math.random() * 100000));
    contentElement.append(itemElement);
  }

  // Lazy Load для картинок
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
      img.removeAttribute('data-src');
    };
  });

  const toogleTableView = () => {
    contentElement.classList.toggle('table');
  };



});
