import React, {useState, useEffect} from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline} from '@material-ui/core';
import useStyles from './style';
import {Link, useHistory} from 'react-router-dom';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import {commerce} from '../../../lib/commerce'

const steps= ['Shipping address', 'Payment details'];

const Checkout = ({cart, onCaptureCheckout, order, error}) => {
    const [activeStep, setActiveStep]= useState(0);
    const [shippingData, setShippingData] = useState({});
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [isFinished , setIsFinished] = useState(false);
    const classes= useStyles();
    const history= useHistory();
    
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
                setCheckoutToken(token);
            } catch (error){
                history.push('/');
            }
        }
        generateToken();
    }, [cart, history]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep +1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep -1);

    const next = (data) => {
       setShippingData(data);
       
       nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000);
    }

    let Confirmation= () => (isFinished ? (
        <>
          <div>
            <Typography variant= "h6">Your Order has been Confirmed!</Typography>
            <Divider className={classes.divider} />
          </div>
        <br />
        <Button component={Link} to='/' variant="outlined" type="button" >Continue Shopping</Button>
        </> 
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    ));

    
    const Form= () => activeStep === 0
    ? <AddressForm next={next} />
    : <PaymentForm timeout={timeout} checkoutToken={checkoutToken} shippingData={shippingData} backStep={backStep} onCaptureCheckout={onCaptureCheckout} nextStep={nextStep} />

    return (
        <>
          <CssBaseline />
          <div className={classes.toolbar} />
          <main className={classes.layout}>
              <Paper className={classes.paper}>
                  <Typography variant="h4" align="center">Checkcout</Typography>
                  <Stepper activeStep={activeStep} className={classes.stepper}>
                      {steps.map((step) => (
                          <Step key={step}>
                              <StepLabel>{step}</StepLabel>
                          </Step>
                      ))}
                  </Stepper>
                  {activeStep === steps.length ? <Confirmation /> : <Form /> }
              </Paper>
          </main>
        </>
    )
}

export default Checkout
