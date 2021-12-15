import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.scss';

class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };

  render() {
    const { title, children } = this.props;
    return (
      <section className={s.Section}>
        <h2 className={s.Title}>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;
