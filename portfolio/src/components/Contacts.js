import React from "react";

const Contacts = () => {
    return (
        <div className="contacts" id="contacts">

            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form, describe your project needs and I will contact you as soon as possible.</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* name input */}
                        <div className="text-center">
                            <input className="form-control" type="text"
                                placeholder="Name"
                                name="name"
                            />
                            <div className="line">

                            </div>
                        </div>
                        {/* phone input */}
                        <div className="text-center">
                            <input className="form-control" type="text"
                                placeholder="Phone"
                                phone="phone"
                            />
                            <div className="line">

                            </div>
                        </div>
                        {/* email input */}
                        <div className="text-center">
                            <input className="form-control" type="email"
                                placeholder="Email"
                                email="email"
                            />
                            <div className="line">
                            </div>
                        </div>

                        {/* subject input */}
                        <div className="text-center">
                            <input className="form-control" type="text"
                                placeholder="Subject"
                                subject="subject"

                            />
                            <div className="line">

                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12">
                        {/* Description */}
                        <div className="text-center">
                            <textarea type="text" className="form-control" placeholder="Please describe shortly your project..." description="description"></textarea>
                            <div className="line">

                            </div>
                        </div>

                        <button className="btn-main-offer contact-btn" type="submit">  contact me                      </button>





                    </div>



                </div>


            </div>
        </div>

    )
}

export default Contacts
