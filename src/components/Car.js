import React, { Component } from "react";

export default class Car extends Component {
  render() {
    return (
      <div>
        <p>Car Brand : {this.props.brand}</p>
        <p style={{ color: this.props.color }}>
          Car Color : {this.props.color}
        </p>
        <h2>Total Car : {this.props.total}</h2>
        <h2>
          Apakah layak pakai :{" "}
          {this.props.worth ? "Bisa dipakai" : "Perlu diperbaiki"}
        </h2>
        <h3>
          Brand tersisa :{" "}
          {this.props.car.map((e) => {
            return e + ", ";
          })}
        </h3>

        <button onClick={this.props.beli}>Beli</button>
      </div>
    );
  }
}
