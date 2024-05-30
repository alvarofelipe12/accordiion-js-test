document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion-item');
  //first item desc open by default
  items[0].classList.add('expanded');

  items.forEach(element => {
    // use query selector to get the title node of each item
    const title = element.querySelector('.accordion-title');
    title.addEventListener('click', () => {
      items.forEach(otherElements => {
        // removing expanded from all other elements
        if (otherElements !== element) {
          otherElements.classList.remove('expanded');
        }
      });
      element.classList.toggle('expanded');
    });
  });
});
