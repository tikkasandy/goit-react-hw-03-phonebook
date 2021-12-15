import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import s from './ContactItem.module.scss';

class ContactItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { id, name, number, onClick } = this.props;

    return (
      <>
        <p className={s.Contact}>
          {name}: {number}
        </p>
        <Button
          label="Delete"
          type="button"
          onClick={() => onClick(id)}
        ></Button>
      </>
    );
  }
}

export default ContactItem;
