import React from 'react';

class Preloader extends React.Component {
    render () {
        return (
            <div className="preloader" data-ix="preloader">
                <img src="assets/img/preloader.svg" width="50" />
            </div>
        );
    }
}

export default Preloader;
