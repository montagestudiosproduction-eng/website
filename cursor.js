const cursor = document.createElement('div');

cursor.classList.add('custom-cursor');

document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {

  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

});

const hoverItems = document.querySelectorAll(
'a, button, .project-card, .project-row'
);

hoverItems.forEach((item) => {

  item.addEventListener('mouseenter', () => {
    cursor.classList.add('active');
  });

  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
  });

});
