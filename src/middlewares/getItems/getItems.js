const Item = require("../../controllers/model/item");

const getItems = async (req, res) => {
  try {
    // const result = req.split(" ");
    const result = req.params.str;
    console.log("result: ", result);
    const items = await Item.find(result);
    res.json({
      items
    });
  } catch (error) {
    res.status(400).json({ err: error });
  }
};

module.exports = getItems;
