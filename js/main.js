function templateCard(name, src, price) {
  return `<div class="item-img">
            <img src="" data-src=${src} alt="term" height="150" width="150">
          </div>
          <span class="item-name">${name}</span>
          <span class="item-type">Электронный</span>
          <span class="item-power">--</span>
          <span class="item-voltage">12V</span>
          <span class="item-launch">Ручной</span>
          <div class="buy">
            <span class="item-price">${price} руб.</span>
            <button class="btn">В корзину</button>
          </div>`;
}

document.addEventListener('DOMContentLoaded', () => {

  const URL = 'https://jsonplaceholder.typicode.com/posts';
  const name = 'Термометр с самым длинным названием которое можно придумать';

  const contentElement = document.querySelector('.content');
  const hideMenuElement = document.querySelector('.hide-menu');
  const menu = document.querySelector('.menu');

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

  const post = async (data) => {
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  };

  for (let i = 0; i < 8; i++) {
    let itemElement = document.createElement('div');
    itemElement.id = i + 101 + '';
    itemElement.className = 'item';
    itemElement.innerHTML = templateCard(name, nextImage(), Math.floor(Math.random() * 100000));
    itemElement.querySelector('.item-name')
        .addEventListener('click',(event) => {
          event.preventDefault();
          event.target.setAttribute('contenteditable', true);
          event.target.focus();
        });
    itemElement.querySelector('.item-name')
        .addEventListener('blur', (event) => {
          event.preventDefault();
          event.target.removeAttribute('contenteditable');
          const data = {
            id: event.target.parentElement.id,
            newName: event.target.innerText
          };
          post(data);
        });
    contentElement.append(itemElement);
  }

  // Lazy Load для картинок
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
      img.removeAttribute('data-src');
    };
  });

  const toggleTableView = () => {
    contentElement.classList.toggle('table');
  };

  hideMenuElement.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('toggle-content')) {
      toggleTableView();
    } else {
      menu.classList.remove('hide');
    }
  });

  hideMenuElement.addEventListener('mouseout', (event) => {
    menu.classList.add('hide');
  });



});
