const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema(
  {
    productID: Number,
    product_code: String,
    date_added: Date,
    date_modified: Date,
    actionID: Number,
    warranty: String,
    is_archive: Boolean,
    is_exclusive: Boolean,
    vendorID: Number,
    articul: String,
    volume: Number,
    weight: Number,
    kbt: Number,
    is_price_cut: Boolean,
    is_new: Boolean,
    name: String,
    brief_description: String,
    description: String,
    categoryID: Number,
    country: String,
    price: String,
    price_uah: String,
    recommendable_price: String,
    retail_price_uah: String,
    prepayment_amount: Number,
    bonus: Number,
    self_delivery: String,
    small_image: String,
    medium_image: String,
    large_image: String,
    full_image: String,
    quantity_package_sale: Number,
    koduktved: String,
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemsSchema, "products");

module.exports = Item;
