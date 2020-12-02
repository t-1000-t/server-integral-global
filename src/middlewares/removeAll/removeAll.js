const Item = require("../../controllers/model/item");

const removeall = (req, res) => {
  itemID = req.params.id;

  Item.deleteMany({}).then((item) => {
    if (!item) {
      res.status(400).json({ item: item, messege: "Item not Found" });
    }

    res.json({ item: item, messege: "Item success REMOVE ALL!" });
  });
};

module.exports = removeall;
