import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.scss';

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  render() {
    const { label, type, onClick } = this.props;

    return (
      <button className={s.Button} type={type} onClick={onClick}>
        {' '}
        {label}
      </button>
    );
  }
}
export default Button;
