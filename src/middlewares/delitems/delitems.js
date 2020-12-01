const Item = require("../../controllers/model/item");

const delitems = (req, res) => {
  itemID = req.params.id;

  Item.findByIdAndDelete({ _id: itemID }).then((item) => {
    if (!item) {
      res
        .status(400)
        .json({ item: item, messege: `Item not Found by this ${itemID}` });
    }

    res.json({ item: item, messege: "Item success deleted!" });
  });
};

module.exports = delitems;
