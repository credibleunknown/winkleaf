import React from 'react';
import all from '../../img/cat/all.jpg'
import awards from '../../img/cat/awards.jpg';
import campaign from '../../img/cat/campaign.jpg';
import cinema from '../../img/cat/cinema.jpg';
import club from '../../img/cat/club.jpg';
import concert from '../../img/cat/concert.jpg';
import conference from '../../img/cat/conference.jpg';
import education from '../../img/cat/education.jpg';
import fashion from '../../img/cat/fashion.jpg';
import fundraiser from '../../img/cat/fundraiser.jpg';
import launching from '../../img/cat/launching.jpg';
import paegants from '../../img/cat/paegants.jpg';
import party from '../../img/cat/party.jpg';
import politics from '../../img/cat/politics.jpg';
import reality from '../../img/cat/reality-tv.jpg';
import religion from '../../img/cat/religion.jpg';
import technology from '../../img/cat/technology.jpg';
import thanksgiving from '../../img/cat/thanksgiving.jpg';
import theatre from '../../img/cat/theatre.jpg';
import wedding from '../../img/cat/wedding.jpg';

const CategoryPreference = () => (
  <section className="container bg-white page-section my-events">
    <div className="container-fluid events-category">
      <div>
        <h6 className="invite-heading text-center">You can select the category of events you want to see. This can be changed anytime.</h6><hr />
      </div>
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <Category heading="All" img={all} />
            <Category heading="Awards" img={awards} />
            <Category heading="Campaign" img={campaign} />
            <Category heading="Cinema" img={cinema} />
            <Category heading="Club" img={club} />
            <Category heading="Concert" img={concert} />
            <Category heading="Conference" img={conference} />
            <Category heading="Education" img={education} />
            <Category heading="Fashion" img={fashion} />
            <Category heading="Fundraiser" img={fundraiser} />
            <Category heading="Launching" img={launching} />
            <Category heading="Paegants" img={paegants} />
            <Category heading="Party" img={party} />
            <Category heading="Politics" img={politics} />
            <Category heading="Reality TV" img={reality} />
            <Category heading="Religion" img={religion} />
            <Category heading="Technology" img={technology} />
            <Category heading="Thanksgiving" img={thanksgiving} />
            <Category heading="Theatre" img={theatre} />
            <Category heading="Wedding" img={wedding} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Category = (props) => (
  <div className="col-sm-3 col-md-6 col-xs-12 col-lg-3 category-img">
    <div className="row title">
      <div className="col-10">
        <h6 className="float-left">{props.heading}</h6>
      </div>
      <div className="form-check col-2">
        <input type="checkbox" className="form-check-input" defaultChecked />
      </div>
    </div>
    <div className="row">
      <img src={props.img} className="img-fluid" alt="category cover"/>
    </div>
  </div>
);

export default CategoryPreference;
