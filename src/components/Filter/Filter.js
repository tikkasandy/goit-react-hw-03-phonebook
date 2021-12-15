import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.scss';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { value, onChange } = this.props;

    return (
      <label className={s.Label}>
        <p>Find contacs by name</p>
        <input
          className={s.Input}
          onChange={onChange}
          value={value}
          type="text"
        />
      </label>
    );
  }
}

export default Filter;
