import React from 'react';
import ReactDOM from 'react-dom';
import Keep from './Keep';
import registerServiceWorker from './registerServiceWorker';
import sampleData from './sample-data';

ReactDOM.render(<Keep notes={sampleData} />, document.getElementById('root'));
registerServiceWorker();
