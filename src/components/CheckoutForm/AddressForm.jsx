import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import {useForm , FormProvider } from 'react-hook-form';
import CustomField from './CustomField';
import {Link} from 'react-router-dom';


const AddressForm = ({next}) => {
    
    const methods= useForm();

    return (
        <>
          <Typography variant="h6" gutterBottom >Shipping Address</Typography>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({ ...data }))}>
               <Grid container spacing={3}>
                  <CustomField required name='FullName' label='Full name' />
                  <CustomField required name='address1' label='Address' />
                  <CustomField required name='email' label='Email' />
                  <CustomField required name='City' label='City' />
                  <CustomField required name='State' label='State' />
                  <CustomField required name='Pincode' label='Pincode' />
               </Grid>
               <br />
               <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                 <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                 <Button type="submit" variant="contained" color="primary">Next</Button>
               </div>
            </form>
          </FormProvider>
        </>
    )
}

export default AddressForm
