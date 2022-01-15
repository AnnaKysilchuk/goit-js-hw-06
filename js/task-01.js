const categoriesList = document.querySelectorAll(".item")

const numberOfCategories = categoriesList.length;
console.log(`Number of categories: ${numberOfCategories}`);

for (let i = 0; i < numberOfCategories; i += 1) {
    const categoryName = categoriesList[i].firstElementChild.textContent;
    console.log(`Category: ${categoryName}`);

    const numberOfEl = categoriesList[i].lastElementChild.querySelectorAll("li").length;
    console.log(`Elements: ${numberOfEl}`);
}