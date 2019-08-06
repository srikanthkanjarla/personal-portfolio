import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Home from '../sections/home/home';
import Projects from '../sections/projects/projects';
import About from '../sections/about/about';
import Contact from '../sections/contact/contact';
import Footer from '../components/footer/footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Home />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </Layout>
);
export default IndexPage;
