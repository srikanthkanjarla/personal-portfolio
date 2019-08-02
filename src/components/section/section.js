import React from 'react';
import './section.css';

const Section = props => {
  const { id, title, children } = props;
  return (
    <section className="container" id={id}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
