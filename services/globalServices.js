const fs = require('fs').promises
const path = require('path')

class GlobalServices {
    async readDB() {
        return JSON.parse(await fs.readFile(path.join(__dirname, '..','db','product.json'),'utf8'))  
   
  }
}

module.exports =GlobalServices