console.log('MARKETING HI THERE')
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';



console.log('changes')
// mount function to start up app
const mount = el => {
    ReactDOM.render(
        <App/>,
        el
    )
}

// if we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')
    if (devRoot){
        mount(devRoot)
    }
}


// else we are running through container, and we should export the mount function
export { mount }

