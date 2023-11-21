import React from 'react';
import ContactBanner from '../ContactBanner/ContactBanner';
import Location from '../Location/Location';

const ContactHome = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <div className='lg:mx-32'>
                <Location></Location>
            </div>
        </div>
    );
};

export default ContactHome;