const GlobalServices = require("./globalServices");
const fs = require("fs").promises;
const path = require("path");
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

    if (sort && sort === "min") {
      productFilter = productFilter.toSorted((a, b) => a.price - b.price);
    }

    if (sort && sort === "max") {
      productFilter = productFilter.toSorted((a, b) => b.price - a.price);
    }
    return productFilter;
  }

  async addToBin(params) {
    const data = await this.readDB();
    const { id } = params;
    const findData = data.find((p) => p.id === Number(id));

    await fs.unlink(path.join(__dirname, "..", "db", "bin.json"));
    await fs.writeFile(
      path.join(__dirname, "..", "db", "bin.json"),
      JSON.stringify(findData, null, 2)
    );
    return findData;
  }
}

module.exports = ProductServices;
