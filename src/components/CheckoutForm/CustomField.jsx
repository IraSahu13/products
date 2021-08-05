import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import {useFormContext, Controller } from 'react-hook-form';

const CustomField = ({name, label, required}) => {
    const {control}= useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller 
            render={({ field }) => ( 
            <TextField {...field} label={label} required={required}/>)}
            as={TextField} 
            defaultValue=""
            control={control}
            fullWidth
            name={name}
            label= {label}
            required={required} />
        </Grid>
    )
}

export default CustomField
