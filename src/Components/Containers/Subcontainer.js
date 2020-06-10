import React from 'react';

const SubContainer = ({ children, classes }) => {
    return (
        <div className={`sub-container ${classes}`}>
            {children}
        </div>
    );
}

export default SubContainer;