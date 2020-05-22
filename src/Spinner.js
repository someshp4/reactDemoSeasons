import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.loaderMsg}
            </div>
        </div>
    );
}

Spinner.defaultProps = {
    loaderMsg: "Loading..."
};

export default Spinner;