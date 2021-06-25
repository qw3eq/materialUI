import React from 'react';
import Lottie from 'lottie-react';
import { makeStyles } from '@material-ui/core';

import animationData from '../animations/landinganimation/data';

const useStyles = makeStyles(theme => ({

}))

export default function LandingPage() {
  const clasess = useStyles();


  return (
    <Lottie animationData={animationData} height={"100%"} width={"100%"} />  
    
  )
}