const allCategoriesList = document.querySelector('#categories');

const items = allCategoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const allCategoryTitle = item.querySelector('h2').textContent;
    const allCategoryItems = item.querySelectorAll('li').length;

    console.log(`Category: ${allCategoryTitle}`);
    console.log(`Elements ${allCategoryItems}`);
});