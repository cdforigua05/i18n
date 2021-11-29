import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const Table =() =>{
    const language = navigator.language.startsWith('es')? 'es': 'en';
    const getMessages = (language_op) =>{
        if (language_op==="es"){
            return localeEsMessages
        }
        else{
            return  localeEnMessages
        }
    }
    return (<IntlProvider locale={language} messages={getMessages(language)}>
            <JobsList/>
            </IntlProvider>)
}

ReactDOM.render(<Table/>, document.getElementById("root"));