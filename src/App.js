import React from 'react';
import Route from 'react-router-dom/Route';
import { BrowserRouter } from 'react-router-dom';
import FirstPage from "./components/FirstPage"


export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                 <Route
                    path="/"
                    exact
                    render={(props) => <FirstPage {...props} />}
                />
            </BrowserRouter>
        )
    }

}
