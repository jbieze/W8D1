import { connect } from 'react-redux';

import { asArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  benches: asArray(state.entities),
  minSeating: state.ui.filters.minSeating,
  maxSeating: state.ui.filters.maxSeating
});

const mapDispatchToProps = dispatch => ({
  benches: bench => dispatch(fetchBench(this.props.bench.id));
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
