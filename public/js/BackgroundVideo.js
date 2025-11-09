import React from 'react';

import classes from '../css/BackgroundVideo.module.css';

const BackgroundVideo = () => {
   
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={'/PXL_RRR.mp4'} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    )
}

export default BackgroundVideo
