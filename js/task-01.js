const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);
itemEl.forEach(item => {
    const titleEl = item.firstElementChild.textContent;
    const countEl = item.lastElementChild.children.length;
    console.log('Category:', titleEl);
    console.log('Elements:', countEl);
});
