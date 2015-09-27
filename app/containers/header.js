import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/header';
import { ActionCreators } from '../actions';


function mapStateToProps (state) {
  const {
    crimeDataRequested,
    crimeData,
    startingLocation,
    endingLocation,
  } = state;

  return {
    crimeDataRequested,
    crimeData,
    startingLocation,
    endingLocation,
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
