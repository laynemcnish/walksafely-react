import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MapCanvas from '../components/map-canvas';
import { ActionCreators } from '../actions';


function mapStateToProps (state) {
  const {
    initMap
  } = state;

  return {
    initMap
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MapCanvas);
