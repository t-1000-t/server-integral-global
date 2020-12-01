const router = require("express").Router();
const products = require("../controllers/products/products");
const products_search = require("../controllers/products_search/products_search");
const products_search_params = require("../controllers/products_search_params/products_search_params");
const product = require("../controllers/product/product");
const vendors = require("../controllers/vendors/vendors");
const product_code = require("../controllers/product_code/product_code");
const filters = require("../controllers/filters/filters");
const filters_all = require("../controllers/filters_all/filters_all");
const getfilterdb = require("../middlewares/getfilterdb/getfilterdb");
const categories = require("../controllers/categories/categories");
const productsallbase = require("../controllers/productsallbase/productsallbase");
const allproductsday = require("../controllers/allproductsday/allproductsday");
const comments = require("../controllers/comments/comments");
const product_pictures = require("../controllers/product_pictures/product_pictures");
const listmainproducts = require("../controllers/listMainProducts/listMainProducts");
const main = require("../controllers/main/main");
const notebookall = require("../controllers/categories/notebooksALL/notebookall");
const globalSearch = require("../controllers/globalSearch/globalSearch");

router.get("/main", main);

router.get("/search/:searchStr", globalSearch);

router.get("/filterdb/:query/:num", getfilterdb);

router.get("/products/:category/:pagenum", products);

router.get("/products_search/:category", products_search);

router.get(
  "/products_search_params/:category/:filters",
  products_search_params
);

router.get("/product/:num", product);

router.get("/vendors/:category", vendors);

router.get("/product/product_code/:num", product_code);

router.get("/filters/:category", filters);

router.get("/filters_all/:category", filters_all);

router.get("/categories", categories);

router.get("/productsallbase", productsallbase);

router.get("/allproductsday", allproductsday);

router.get("/comments", comments);

router.get("/product_pictures", product_pictures);

router.get("/listmainproducts", listmainproducts);

router.get("/notebookall", notebookall); //до 12 секунд при каждом запросе по 50 позиций

router.all("/", (req, res) => {
  res.status(404).json({ error: "request not found" });
});

module.exports = router;
