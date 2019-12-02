import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/selector/directorySelector';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';




const Directory = ({ sections }) => {    
    return (
        <div className="directory-menu">
            {sections.map(o => <MenuItem key={o.id}
                title={o.title}
                imageUrl={o.imageUrl}
                size={o.size}
                slug={o.linkUrl} />
            )}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
