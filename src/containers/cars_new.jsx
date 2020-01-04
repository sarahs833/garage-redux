import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import postCars from '../actions';
import { Link } from 'react-router-dom';


class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.postCars(this.props.garage, values,() => {
      this.props.history.push("/");
    })
  }
  render() {
    return [
     <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')"}}>
        <div className="overlay"></div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div class="form-group">
          <label HtmlFor="InputBrand">Brand</label>
          <Field name="brand" type="text" class="form-control" placeholder="Aston Martin" component="input" />
          </div>
        <div class="form-group">
          <label HtmlFor="InputModel">Model</label>
          <Field name="model" type="text" class="form-control" placeholder="DB Mark III" component="input" />
        </div>
        <div className="form-group">
          <label htmlFor="InputOwner">Owner</label>
          <Field name="owner" type="text" placeholder="James Bond" component="input" className="form-control" />
         </div>
         <div className="form-group">
           <label htmlFor="InputPlate">Plate</label>
           <Field name="plate" type="text" placeholder="DB Mark III" component="input" className="form-control" />
         </div>
        <button type="submit">Add car</button>
        </form>
      </div>
    ]
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm{(
  form: 'newCarForm'
  )}(connect(mapStateToProps, {postCars}) (CarsNew));
