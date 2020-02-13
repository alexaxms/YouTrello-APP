import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import App from '../app/App';
import IAppState from '../store/IAppState.interface';
import {Profiler} from "react";

interface IProps {
    store: Store<IAppState>;
}

const Root: React.SFC<IProps> = ({store}) => (
     <Profiler id={"id"} onRender={()=> console.log('Carlitos')}>
         <Provider store={store}>
             <App/>
         </Provider>
     </Profiler>
);

export default Root;