import React from 'react';

async function promiseApi() {
    await timeout()
    return true;
  }
  
  async function timeout() {
    return new Promise(resolve => setTimeout(resolve, 1500))
  }

  export default function OrderConfirmation() {
    const [api, setApi] = React.useState();
  }