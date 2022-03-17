import React from 'react';
import './About.css';

function About() {
  return (
  	<div className="wrapper">
	    <div className="pageTitle">
	    About.
	    </div>
	    <div id="about">
	      	We’re a UI/UX design firm based in San Francisco. Our work has run the gamut from consumer to b2b, from branding to front-end development, from biotech to crypto. We’re led by founder <a href="https://www.norakako.com" target="_blank">Nora Kako</a>.
	      	<br /><br />
			We love working with early-stage startups, but we want to hear about your project, however big or small!
			<br /><br />
			Let’s chat – <a href="mailto:hello@flocksf.com?Subject=Hello%20there" target="_blank">hello@flocksf.com</a>.
	    </div>
    </div>
  );
}

export default About;
