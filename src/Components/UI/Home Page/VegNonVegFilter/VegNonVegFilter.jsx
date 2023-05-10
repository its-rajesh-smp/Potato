import React from 'react';
import "./VegNonVegFilter.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';




function VegNonVegFilter(props) {
    return (
        <div className="flipswitch">
            <FormControlLabel control={<Switch size='small' />} label="Veg" />
            <FormControlLabel control={<Switch size='small' />} label="Non-Veg" />
        </div>

    );
}

export default VegNonVegFilter;
