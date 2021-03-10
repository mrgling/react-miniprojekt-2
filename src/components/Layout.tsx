import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'

interface Props {}

interface State {}

class Layout extends Component<Props, State> {
   
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default Layout;