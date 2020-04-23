import guebbitTest from './components/'

const G = function(){

	/**
	*	Iteration throught fetch api (data in array)
	*	@param string url: destinazione
	*	@param array array
	*		@param object data to send with fetch
	*	@param function callback: called at every iteration (with response)
	*	@param integer mode (for this.fetch())
	*	@return promise (after the queue ended)
	**/
	// @ts-ignore
	this.fetchIteration = function(url, array, callback=false, mode=0){
		return this.fetch(url, array[0], mode)
			// @ts-ignore
			.then((response) => {
				if(this._fetchIterator(array, callback, response))
					return this.fetchIteration(url, array, callback, mode);
			})
	}

	// @ts-ignore
	this._fetchIterator = function(array, callback=false, response=false){
		if(typeof array === 'string' || array instanceof String)
			return false;
		if(callback)
			// @ts-ignore
			callback(response, array[0]);
		//rimuovo i dati che ho usato
		array.shift();
		//se ce ne sono ancora, true (riparto)
		if(array.length > 0)
			return true;
		return false;
	}


	/**
	*	Multiple fetch
	*	@param array fetches: array of fetch instances
	*	@return promise: .then that happens when everything is done (array of data)
	**/
	// @ts-ignore
	this.fetchMultiple = function(url, array, mode=0){
		return Promise.all(this.fetchFor(url, array, mode));
	}

	/**
	*	Create an array of fetches based on data
	*	@param string url: destinazione
	*	@param array array
	*		@param object data to send with fetch
	*	@return array: of fetches
	**/
	// @ts-ignore
	this.fetchFor = function(url, array, mode=0){
		var i :number, len :number, fetchArray = [];
		for(i = 0, len = array.length; i<len; i++)
			// @ts-ignore
			fetchArray.push(this.fetch(url, array[i], mode));
		return fetchArray;
	}


	/**
	*	Divido in 2 funzioni separate (poi accorpate) per avere una chiara queue e relativi callbacks
	*	Divide the fetch array into subarrays and then iterate each of them
	*	ndt: Divide a queue in more queues but without altering the service order
	*	@param string url
	*	@param array array of data
	*	@param integer group: how many simultaneus connections I want
	*	@return matrix
	**/
	//TODO quando la matrice non è quadrata, i gruppi aumentano\diminuiscono (per via della trasposizione), risolvere
	// @ts-ignore
	this._fetchGroupPrepare = function(url, array, group=false){
		var i :number, len :number;
		//if auto, use the numerical root to keep the future matrix squared (best way)
		if(!group)
			// @ts-ignore
			group = Math.trunc(Math.sqrt(array.length))+1;
		//no division, single fetch
		// @ts-ignore
		if(group < 2)
			return [array[0]];
		// Divide array of data into chunks
		// even (not balanced), so when transposed is balanced
		array = this.chunks_array(array, group);
		// Transpose the generated matrix, invert column and rows
		array = this.matrix_transpose(array);
		//remove empty values
		for(i=0, len=array.length; i<len; i++)
			array[i] = array[i].filter(function (el) {
				return el != null;
			});
		return array;
	}

	// @ts-ignore
	this._fetchGroupIterator = function(url, array, onStart=false, onFinish=false){
		return this.http(url, this.toFormData(array[0]))
			// @ts-ignore
			.then((response) => {
				if(onStart)
					// @ts-ignore
					onStart(response, array[0]);
				return this._fetchProcessData(response);
			})
			// @ts-ignore
			.catch((response) => this._fetchErrorData(response))
			// @ts-ignore
			.then((response) => {
				if(this._fetchIterator(array, onFinish, response))
					return this._fetchGroupIterator(url, array, onStart, onFinish);
			});
	}
	// @ts-ignore
	this.fetchGroup = function(url, array, onStart=false, onFinish=false, group=false){
		var i :number, len :number, fetchArray = [];
		array = this._fetchGroupPrepare(url, array, group);
		for(i = 0, len = array.length; i<len; i++)
			fetchArray.push(
				// @ts-ignore
				this._fetchGroupIterator(url, array[i], onStart, onFinish)
			);
		return Promise.all(fetchArray);
	}





	/**
	*	processo l'informazione
	*	@param object response
	*	@param object data (data sent, if any)
	*	@param function callback
	*	@return string/json contenuto
	**/
	// @ts-ignore
	this._fetchProcessData = function(response){
		if(!response.ok)
			throw Error(response.statusText);
		//if json, send json
		var contentType = response.headers.get("content-type");
		if(contentType && contentType.includes("application/json")) {
			return response.json();
		}
		//generic
		return response.text();
	}
	/**
	*	catturo eventuali errori
	*	@param string error
	*	@return stringa di errore
	**/
	// @ts-ignore
	this._fetchErrorData = function(error){
		return '[Error] '+error;
	}

}

const Guebbit = new G();


console.log(Guebbit, guebbitTest);
