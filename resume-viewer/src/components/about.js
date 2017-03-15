import React, { Component } from 'react';

class About extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name,
          city = this.props.data.address.city,
          bio = this.props.data.bio,
          street = this.props.data.address.street,
          state = this.props.data.address.state,
          zip = this.props.data.address.zip,
          email = this.props.data.email,
          image = 'images/' + this.props.data.image,

          phone = this.props.data.phone
    }

    return (

      <section id="about">

         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src={image} alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>

               <p>{bio}</p>

               <div className="row">

                  <div className="columns contact-details">

                     <h2>Contact Details</h2>
                     <p className="address">
   						   <span>{name}</span><br />
   						   <span>{street}<br />
   						         {city}, {state} {zip} US
                        </span><br />
   						   <span>{phone}</span><br />
                        <span>{email}</span>
   					   </p>

                  </div>

                  <div className="columns download">
                     <p>
                        <a href="#" className="button"><i className="fa fa-download"></i>Download Resume</a>
                     </p>
                  </div>

               </div>

            </div>

         </div>

      </section>
    );
  }
}

export default About;
