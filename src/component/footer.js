import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {

    const quickLinks = {
        left: '17em',
    };
    const address = {
        left: '41em'
    };

    return (
        <footer className="bg-green-600 text-black">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto py-8">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 p-4">
                            <h2 className="text-2xl font-semibold mb-4 ml-12 font-bold uppercase">Web Logo</h2>
                            <p className='ml-12'>Some footer text about the<br />
                                Agency. Just a little description to<br />
                                help people understand you better</p><br />
                            <div className="flex ml-12 text-white">
                                <div className="icon-circle mr-3">
                                    <a href="https://facebook.com"><FaFacebook className="text-2xl" /></a>
                                </div>
                                <div className="icon-circle mr-3">
                                    <a href="https://twitter.com"><FaTwitter className="text-2xl" /></a>
                                </div>
                                <div className="icon-circle mr-3">
                                    <a href="https://linkedin.com"><FaLinkedin className="text-2xl" /></a>
                                </div>
                                <div className="icon-circle mr-3">
                                    <a href="https://instagram.com"><FaInstagram className="text-2xl" /></a>
                                </div>
                            </div>
                            <p className="ml-12 text-base mt-14 -mb-8">Copyright Design Agency 2022</p>
                        </div>
                        <div className="absolute w-full md:w-1/3 ml-80 mt-2" style={quickLinks}>
                            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                            <p>
                                Services<br />
                                Portfolio<br />
                                About Us<br />
                                Contact Us<br />
                            </p>
                        </div>
                        <div className="absolute w-full md:w-1/3 p-4 ml-80" style={address}>
                            <h2 className="text-lg font-semibold mb-2">Address</h2>
                            <p>Design Agency Head Office.<br />
                                Airport Road<br />
                                United Arab Emirates<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
