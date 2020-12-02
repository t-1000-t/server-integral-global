const Item = require("../../controllers/model/item");

// http://localhost:5000/api/filterdb/планшет

const getfilterdb = async (req, res) => {
  const { query, num } = req.params;

  const data = {
    query: query,
    num: num,
  };

  console.log(data.query);
  console.log(data.num);

  try {
    const filterprod = await Item.find({
      name: { $regex: `${data.query}` },
    })
      .limit(20)
      .skip(Number(data.num));
    res.json({
      filterprod,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = getfilterdb;
