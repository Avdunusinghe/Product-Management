import React, { Component } from "react";
import { ProductModel } from "../../../models/dashboard/product/productModel";
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: new ProductModel(),
    };
  }

  render() {
    return (
      <div>
        <p>Add New Products</p>
        <label>Product Name:</label>
        <input
          type="text"
          placeholder="Please enter Produnt Name"
          value={this.state.newProduct.productName}
        ></input>
        <br />
        <label>Company Name :</label>
        <input
          type="text"
          placeholder="Please enter Company Name"
          value={this.state.newProduct.companyName}
        ></input>
        <br />
        <label>Discription:</label>
        <input
          type="text"
          placeholder="Discription"
          value={this.state.newProduct.discription}
        ></input>
        <br />

        <button>Submit Data</button>
      </div>
    );
  }
}

export default ProductDetails;
