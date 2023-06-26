import React, { useState } from 'react';
import "./VegNonVegFilter.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { FormGroup, RadioGroup } from '@mui/material';




function VegNonVegFilter(props) {
    const [veg, setVeg] = useState(false)
    const [nonVeg, setNonVeg] = useState(false)


    const onClickHandeler = (e) => {
        if (e.target.value === "VEG") {
            if (!e.target.checked) { setVeg(false); props.setFilterParam("") }
            else {
                setVeg(true)
                props.setFilterParam("veg")
            }
            setNonVeg(false)
        }
        else {
            if (!e.target.checked) { setNonVeg(false); props.setFilterParam("") }
            else {
                setNonVeg(true)
                props.setFilterParam("non-veg")
            }
            setVeg(false);
        }
    }

    return (
        <div className="flipswitch">

            <FormControlLabel control={<Switch onClick={onClickHandeler} checked={veg} value={"VEG"} name='filter' size='small' />} label="Veg" />
            <FormControlLabel control={<Switch onClick={onClickHandeler} checked={nonVeg} name='filter' size='small' />} label="Non-Veg" value={"NONVEG"} />


        </div>

    );
}

export default VegNonVegFilter;
