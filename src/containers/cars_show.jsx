import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { fetchCar, deleteCar } from '../actions';
import Aside from '../components/aside';


class CarsShow extends Component {
  handleClick= () => {
    this.props.deleteCar(this.props.history, this.props.car)
  }
   componentDidlMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }
  render() {
    const car = this.props.car
    if (!car) {
      return (
         <Aside key="aside" garage={this.props.garage}>
          <Link to="/">Back to list</Link>
        </Aside>);
    }
    return [
      <div key={car} className="car-container">
        <div className="car-card">
          <img className="car-picture" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560454356-3412f0c59eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}} />
          <div className="car-details">
            <span>{car.brand} - {car.model}</span>
            <ul>
              <li><strong>Owner:</strong> {car.owner}</li>
            </ul>
            <span className="plate">{car.plate}</span>
          </div>
          <button className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            Delete
          </button>
        </div>
      </div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  const urlId = parseInt(ownProps.match.params.id, 10);
  return {
    car: state.cars.find((car) => car.id === urlId)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CarsShow));
