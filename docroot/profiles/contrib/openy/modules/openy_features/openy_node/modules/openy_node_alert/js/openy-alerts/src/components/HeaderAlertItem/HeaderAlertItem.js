import React from 'react';

import renderHTML from 'react-render-html';

let iconStyle = {
    color: '#123456',
};

let linkStyle = {
    color: '#123456',
    borderColor: '#123456'
};

/**
 * Renders alert item.
 */
const HeaderAlertItem = ({ iconColor, label, linkTitle, linkUrl, description }) => (
    <div className="container header-alert">
        <div className="row site-alert__wrapper">
            {iconColor &&
                <div className="site-alert__icon" style={iconStyle}>
                  <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                </div>
            }
            <div className="col-xs-12 col-sm-6 col-md-7 col-lg-8">
                <div className="site-alert__title">{renderHTML(label)}</div>
                <div className="site-alert__content header-alert__content">
                    {renderHTML(description)}
                </div>
            </div>
            {linkTitle &&
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-3 site-alert__cta">
                <div className="field-alert-link">
                    <a href={linkUrl} style={linkStyle}>{linkTitle}</a>
                </div>
            </div>      
            }

            <a href="#close" className="site-alert__dismiss"><i className="fa fa-times" aria-hidden="true"><span
                className="visually-hidden">Close alert {renderHTML(label)}</span></i></a>
        </div>
    </div>
);

export default HeaderAlertItem;