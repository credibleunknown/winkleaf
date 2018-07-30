import React, { Component } from 'react';
import { UncontrolledCollapse } from 'reactstrap';

class Banner extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid">
          <div className="row banner align-items-center justify-content-center">
            <div className="banner-content shadow">
              <div className="container">
                <h3>
                  <i className="fa fa-quote-left text-gray" /> 
                    It's not just about your ideas, it's about making your ideas into events. 
                  <i className="fa fa-quote-right text-gray" /><br />
                  <small>- LBS, 2016.</small>
                </h3>
                <button className="search-toggler shadow" type="button" id="search">
                  <span className="fa fa-search" />
                </button>
                <SearchForm class="main-search" />
              </div>
            </div>
          </div>
          {/* Mobile Search */}
          <UncontrolledCollapse toggler="#search">
            <div className="container-fluid">
              <span className="fa fa-times close-search" />
              <SearchForm />
            </div>
          </UncontrolledCollapse>
          {/* End of Mobile Search */}
        </section>
      </div>
      
    );
  }
}

const SearchForm = (props) => (
  <div>
    <form className={props.class}>
      <div className="form-row">
        <span className="search-by">Search By:</span>
        <div className="col name">
          <input className="form-control banner-search" type="search" placeholder="Name or keyword" aria-label="Search" />
        </div>
        <div className="col location">
          <input className="form-control" type="search" placeholder="Location" aria-label="Search" />
        </div>
        <div className="col category">
          <select className="form-control custom-select" data-style="btn-warning">
            <option defaultValue>Category</option>
            <option>Fashion</option>
            <option>Paegants</option>
            <option>Religion</option>
            <option>Concert</option>
            <option>Wedding</option>
            <option>Launching</option>
            <option>Campaign</option>
            <option>Awards</option>
            <option>Politics</option>
            <option>Party</option>
            <option>Fundraiser</option>
            <option>Thanksgiving</option>
            <option>Conference</option>
          </select>
        </div>
        <div className="btn-search">
          <button className="btn btn-block btn-banner">Search</button>
        </div>
      </div>
    </form>
  </div>
);

export default Banner;
