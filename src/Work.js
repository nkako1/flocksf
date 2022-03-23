import React from 'react';
import Case from './Case.js';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import thumbnail_downdog from './img/thumbnail_downdog.png';
import downdog from './img/downdog.png';
import thumbnail_mindful_mamas from './img/thumbnail_mindful_mamas.png';
import mindful_mamas from './img/mindful_mamas.png';
import thumbnail_retain from './img/thumbnail_retain.png';
import retain from './img/retain.png';
import thumbnail_kapwing from './img/thumbnail_kapwing.png';
import kapwing from './img/kapwing.png';
import thumbnail_reduct from './img/thumbnail_reduct.png';
import reduct from './img/reduct.png';
import thumbnail_eiq_mobility from './img/thumbnail_eiq_mobility.png';
import eiq_mobility from './img/eiq_mobility.png';
import thumbnail_betteromics from './img/thumbnail_betteromics.png';
import betteromics from './img/betteromics.png';
import thumbnail_figment from './img/thumbnail_figment.png';
import figment from './img/figment.png';
import thumbnail_xip from './img/thumbnail_xip.png';
import xip from './img/xip.png';
import thumbnail_wowd from './img/thumbnail_wowd.png';
import wowd from './img/wowd.png';
import './Work.css';

const cases = [
  { thumbnail: thumbnail_wowd, alt:"wowd_case_study_thumbnail", content: wowd, title: "Wowd", subtitle: "An app to connect creators and fans", closeColor: "white" },
  { thumbnail: thumbnail_xip, alt:"xip_case_study_thumbnail", content: xip, title: "Xip", subtitle: "A platform for personalized advice", closeColor: "white" },
  { thumbnail: thumbnail_figment, alt:"figment_case_study_thumbnail", content: figment, title: "Figment", subtitle: "A platform for Web3 developers", closeColor: "black" },
  { thumbnail: thumbnail_betteromics, alt:"betteromnics_case_study_thumbnail", content: betteromics, title: "Betteromics", subtitle: "Software for the life sciences", closeColor: "black" },
  { thumbnail: thumbnail_downdog, alt:"down dog_case_study_thumbnail", content: downdog, title: "Down Dog", subtitle: "An app for practicing yoga", closeColor: "white" },
  { thumbnail: thumbnail_kapwing, alt:"kapwing_case_study_thumbnail", content: kapwing, title: "Kapwing", subtitle: "An online content creation platform", closeColor: "black" },
  { thumbnail: thumbnail_mindful_mamas, alt:"mindful mamas_case_study_thumbnail", content: mindful_mamas, title: "Mindful Mamas", subtitle: "A meditation app for new moms", closeColor: "black" },
  { thumbnail: thumbnail_retain, alt:"retain_case_study_thumbnail", content: retain, title: "Retain", subtitle: "A tool to understand the time cost of customers", closeColor: "black" },
  { thumbnail: thumbnail_reduct, alt:"reduct_case_study_thumbnail", content: reduct, title: "Reduct", subtitle: "A new text / audio artifact", closeColor: "black" },
  { thumbnail: thumbnail_eiq_mobility, alt:"eiq mobility_case_study_thumbnail", content: eiq_mobility, title: "eIQ Mobility", subtitle: "A company helping electrify commercial fleets", closeColor: "white" }
]

function Work() {
  return (
  	<div className="wrapper">
       <div className="pageTitle">
      	Work.
      </div>
      <div id="work">
          {cases.map(it => (
            <Case
              key={it.title}
              thumbnail={it.thumbnail}
              content={it.content}
              title={it.title}
              subtitle={it.subtitle}
              closeColor={it.closeColor}
              alt={it.alt}
            />
          ))}
      </div>
    </div>
  );
}

export default Work;
