// example: http://localhost:5000/api/allproductsday

const allproductsday = function (req, res) {
  res.status(200).json({
    products: process.env.ARRAY,
  });
};

module.exports = allproductsday;
