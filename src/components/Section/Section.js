// import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.scss';

const Section = ({ title, children }) => (
  <section className={styles.Section}>
    <h2 className={styles.Title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
