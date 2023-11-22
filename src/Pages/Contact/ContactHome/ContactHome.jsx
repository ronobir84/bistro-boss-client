import React from 'react';
import ContactBanner from '../ContactBanner/ContactBanner';
import Location from '../Location/Location';
import ContactFrom from '../ContactFrom/ContactFrom';

const ContactHome = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <div className='lg:mx-32'>
                <Location></Location>
                <ContactFrom></ContactFrom>
            </div>
        </div>
    );
};

export default ContactHome;