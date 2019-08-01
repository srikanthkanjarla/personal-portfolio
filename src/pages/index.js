import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Home from "../sections/home/home";
import Projects from "../sections/projects";
import About from "../sections/about";
import Contact from "../sections/contact";


const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />     
    <Home />
    <Projects />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
