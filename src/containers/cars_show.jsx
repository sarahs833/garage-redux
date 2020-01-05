import React , { component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCar } from '../actions'

class CarsShow extends Component {
   componentWillReceiveProps(nextProps) {
    if (nextProps.car.id !== this.props.car.id) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }
  render() {

  }
}

function mapStateToProps(state, ownProps) {
  const urlId = pareseInt(ownProps.match.params.id,10);
  const car = state.cars.find((car) => car.id === urlId);
    return { car };

}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchCar}), dispatch );
}

