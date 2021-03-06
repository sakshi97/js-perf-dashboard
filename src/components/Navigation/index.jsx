import PropTypes from 'prop-types';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Pickers from '../Pickers';

class Navigation extends Component {
  static propTypes = {
    benchmark: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { name, value } = event.target;
    let newPlatform;
    let newBenchmark;
    if (name === 'platform') {
      newPlatform = value;
      newBenchmark = 'overview';
    } else {
      newPlatform = this.props.platform;
      newBenchmark = value;
    }
    // eslint-disable-next-line react/prop-types
    this.props.history.push(`/${newPlatform}/${newBenchmark}`);
  }

  render() {
    return (
      <Pickers onChange={this.onChange} {...this.props} />
    );
  }
}

// withRouter() allow us to use this.props.history to push a new address
export default withRouter(Navigation);
