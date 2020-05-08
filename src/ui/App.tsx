import React from 'react';
import './App.css';
import Button from "../accets/Button/Button";
import Input from "../accets/Input/Input";
import Link from "../accets/Link/Link";
import Header from "../accets/Header/Header";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../bll/store";
import NavBar from "./navbar/NavBar";
import Content from "../ui/Content"
import SignIn from "./content/SignIn";

function App() {
    return (
        <HashRouter >
            <Provider store={store}>
                <div className="App">
                    <NavBar/>
                    <Input type={'text'}/>
                    <Input type={'password'}/>
                    <Link title={'forgot password?'}/>
                    <Button title={'Click'}/>
                    <Link title={'registration'}/>
                    <Content/>
                </div>
            </Provider>
        </HashRouter >
    );
}

export default App;
