const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const itemsTitle = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul li").length;

  console.log(`Category: ${itemsTitle}`);
  console.log(`Elements: ${itemsCount}`);
});
