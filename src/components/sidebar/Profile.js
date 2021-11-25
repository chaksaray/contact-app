import React from 'react';
import { Image } from 'react-bootstrap';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <Image
                src="/assets/images/profile.jpg"
                roundedCircle
                thumbnail
                style={{ width: '14rem' }}
            />
            <h1>John Doe</h1>
            <h5 className="primary-color">SunScript, CEO</h5>
        </div>
    );
};

export default Profile;
