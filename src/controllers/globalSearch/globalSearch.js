const Item = require("../../controllers/model/item");
const chunkArray = require("../../services/chunkArray");

const globalSearch = (req, res) => {
  const itemStr = req.params.searchStr;

  console.log("TYPE ", typeof itemStr);
  console.log("search request: ", itemStr);

  Item.find({ name: { $regex: itemStr, $options: "i" } })
    .then(arr => {
      const size = 100;
      return chunkArray(arr, size);
    })
    .then(item => {
      if (!item) {
        res.status(400).json({
          item: item,
          stringItem: `Item not Found by this ${itemStr}`
        });
      }
      res.json({
        count: item.length,
        item: item,
        stringItem: "Item success deleted!"
      });
    });
};

module.exports = globalSearch;
