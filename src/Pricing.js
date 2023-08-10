import React from 'react';
import './Pricing.css';


function Pricing() {
  return (
  	<div className="wrapper">
	    <div className="pageTitle"> 
	     Pricing.
	    </div>
	    <div id="exposition"> 
	     	Look, we get it. We’ve all worked at startups. Sometimes it isn’t possible to hire a full-time designer in your first month or year (or 5 years).
	    <br /><br />
	     	At Flock, we want to help out where and when you need it most. Need a pitch deck for investors? Can’t visualize your MVP? Looking for quick turnaround on a new feature so your engineers can get started already? We’re here to help!
	     <br /><br />
	    	[Also, we know it’s weird to put pricing up like this. But we don’t want to waste 30m of your time on “getting a quote.” If you’re interested in working with us, just know these numbers are starting points and we’re very flexible. Again, we’ve been there.]
	    </div>
	    <div className="pageSubtitle">Project types</div>
	    <div id="project-types">
	    	<div className="project-type">
				<b>Fledgling</b><br />
				For when you’re juuuust starting up.

				<br /><br />
				6 - 8 weeks<br />
				10-20 hrs / wk<br />
				$3,000 – $6,000 / wk
				<br /><br />

				Includes:
				<ul>
					<li>Preliminary branding & design language</li>
					<li>Branded pitch deck</li>
					<li>Basic website design</li>
					<li>Product V1 mocks (depending on how complex your product is, this may require more time or hours)</li>
				</ul>

			</div>
			<div className="project-type">
			<b>Seed</b><br />
			For when you’ve got SOMETHING built.

			<br /><br />
			1 – 3 months<br />
			10 - 20 hrs / wk<br />
			$12,000 – $24,000 / month
			<br /><br />


			Includes:
			<ul>
				<li>“V2” design. We’ll improve on whatever it is you’ve already built, working with your existing branding and information architecture.</li>
				<li>Want a refresh? We can add-on new branding and a new design language.</li>
				
			</ul>

			</div>
			<div className="project-type">
				<b>Co-Pilot</b><br />
				For when you could use an extra set of hands.

				<br /><br />
				Month-to-month<br />
				10 - 20 hrs / wk<br />
				$12,000 – $24,000 / month
				<br /><br />

				Includes:
				<ul>
					<li>Whatever you need! This can be an ongoing way for you to get a little extra design help while you’re hiring or during a particularly busy season. This of this as the independent contractor option. Ad hoc and flexible.
					</li>
				</ul>
			</div>
	    </div>
    </div>
  );
}

export default Pricing;
