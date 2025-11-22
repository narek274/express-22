const GlobalServices = require("./globalServices");

class ProductServices extends GlobalServices {
  async showAllData(query) {
    const data = await this.readDB();
    const { title, price, sort } = query;


    let productFilter = [...data];

    if (title) {
      productFilter = productFilter.filter((p) =>
        p.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (price) {
      productFilter = productFilter.filter((p) => p.price === +price);
    }

    if (sort && sort === 'min') {
      productFilter = productFilter.toSorted((a,b) => a.price - b.price)
    }

    if (sort && sort === 'max') {
      productFilter = productFilter.toSorted((a,b) => b.price - a.price)
    }
    return productFilter;
  }
}

module.exports = ProductServices;
