import React from 'react';
import './section.css';

const Section = (props) =>{
    return(
        <section className="container">
            {props.children}
        </section>
    )
}

export default Section;