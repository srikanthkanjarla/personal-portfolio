import React from 'react';
import './section.css';

const Section = props => {
  const { id, title, style, children } = props;
  return (
    <section className="container" id={id} style={style && style}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
