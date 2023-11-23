import React from 'react';
import ContactBanner from '../ContactBanner/ContactBanner';
import Location from '../Location/Location';
import ContactFrom from '../ContactFrom/ContactFrom';
import { Helmet } from 'react-helmet-async';

const ContactHome = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <ContactBanner></ContactBanner>
            <div className='lg:mx-32'>
                <Location></Location>
                <ContactFrom></ContactFrom>
            </div>
        </div>
    );
};

export default ContactHome;