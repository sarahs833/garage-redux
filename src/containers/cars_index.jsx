import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';
import Aside from '../components/aside.jsx';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }


  render() {
  if (this.props.cars.length === 0) {
    return [
      <Aside key="aside" garage={this.props.garage}>
          <Link to="/cars/new">Add a car</Link>
      </Aside>,
      <div className="no-car" key="nocar">No car yet</div>
    ];
   }
   return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/cars/new">Add a car</Link>
      </Aside>,
      <div className="list-container" key="cars">
        {this.props.cars.map((car) => {
          return (
            <div key={car.id} className="car-smallad">
              <Link to={`/cars/${car.id}`} key={car.id} />
              <div className="car-logo" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560454356-3412f0c59eb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}} ></div>
              <div className="car-details">
                <span>{car.brand} - {car.model}</span>
                <ul>
                  <li><strong>Owner:</strong> {car.owner}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    ];
  }
};

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
