import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";





const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>City Buenos Aires Main St 800 #233</p>
                        </div>

                        <div className="d-flex">
                            <a href="tel:5544556 66" > +7-55226810</a>
                        </div>

                        <div className="d-flex">
                            <p>sadev@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-navbar" >Home</a>
                                <br />
                                <a className="footer-navbar" >About me</a>
                                <br />
                                <a className="footer-navbar" >Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-navbar" >Experience</a>
                                <br />
                                <a className="footer-navbar" >Portfolio</a>
                                <br />
                                <a className="footer-navbar" >Contacts</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">

                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://www.youtube.com"}
                                quote={"FullStack Developer"}
                                hashtag="#developers">
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>

                            <TwitterShareButton
                                url={"https://www.youtube.com"}
                                quote={"FullStack Developer"}
                                hashtag="#developers">
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>

                            <RedditShareButton
                                url={"https://www.youtube.com"}
                                quote={"FullStack Developer"}
                                hashtag="#developers">
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>

                            <LinkedinShareButton
                                url={"https://www.youtube.com"}
                                quote={"FullStack Developer"}
                                hashtag="#developers">
                                <LinkedinIcon className="mx-3" size={36} />
                            </LinkedinShareButton>

                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp; AZ &#60;Dev /&#62; | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
