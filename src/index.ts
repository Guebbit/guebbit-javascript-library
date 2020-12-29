/**/
export * from './components';
export * from './defaults';
/**/

if(process.env.NODE_ENV && process.env.NODE_ENV === "development")
	require('../tests');

/*
import * as components from './components';
import * as defaults from './defaults';

const Guebbit = {
	...components,
	...defaults
}

export default Guebbit;
/**/
