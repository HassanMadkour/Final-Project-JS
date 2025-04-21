export class FilterHelper {
  static filterByCategory(products, category) {
    if (category === "All") return products;
    return products.filter((product) => product.category === category);
  }

  static filterByBrand(products, brandsArr) {
    if (brandsArr.length === 0) return products;
    return products.filter((product) => brandsArr.includes(product.brand));
  }

  static filterByPrice(products, minPrice, maxPrice) {
    return products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  }

  static filterByRating(products, rating) {
    return products.filter((product) => product.rating >= rating);
  }

  static filterByTags(products, tags) {
    return products.filter((product) => product.tags.includes(tags));
  }
  static filterBySearch(products, search) {
    if (search === "") return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
