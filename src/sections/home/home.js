import React from 'react';
import{graphql,useStaticQuery} from 'gatsby';
import Header from '../../components/header/header';
import './home.css';

const Home = () => {
    const data = useStaticQuery(
        graphql`
        query{
            site{
                siteMetadata{
                title
                role
              }
            } 
          }    
        `
    )
    
    return(
            <div className="home-content">
            <Header />
            <div className="profile-container">
                <h1 className="profile-title">
                    Hello, my name is <span className="profile-name" data-text="Srikanth Kanjarla">
                                        {data.site.siteMetadata.title}
                                    </span>
                </h1>
                <h6 className="profile-text">
                I am a <span className="profile-role">{data.site.siteMetadata.role}</span> living in Hyderabad, India
                </h6>
                <a href="#about-me" className="contact-link">
                    Know More <span className="right-arrow">&rarr;</span>
                </a>       
                </div>
            </div>         
    )
}

export default Home;