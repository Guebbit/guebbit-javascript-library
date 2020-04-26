import extend from "../main/extend";
import dataMatch from "./match";
import dataMatchFuzzy from "./matchfuzzy";


/**
* 	filtra / cerca (autocomplete senza elemento)
* 	@param object data 			= oggetto dove effettuare le ricerche
* 	@param object settings
**/


type functionMap = (found:object) => object;

interface parametersMap{
	search: string,
	label: string,
}

interface settingsMap{
	sensitive:boolean,
	fuzzy:boolean,
	onSearch:functionMap | boolean,
	onSelect:functionMap | boolean,
	parameters:parametersMap,
	search:string[]
}


class searchBy{

	_settings: settingsMap;
	data:any[];

	constructor(data:any[] = [], settings:object = {}){
		this._settings = extend({
			sensitive: false,	//case sensitive
			fuzzy: false,
			onSearch: false,
			onSelect: false,
			parameters: {
				search: "searchable",
				label: "label",
			},
			//array di parametri da cercare (se non è già impostato un searchable)
			search: [
				"label"
			]
		}, settings);
		this.data=[];
		this.loadMe(data as any[]);
		return this;
	}

	/**
	*	Load new items in the searchable object
	**/
	loadMe(data:any[]){
		this.data = [
			...this.data,
			...data
		]
		this._createObject();
		return this;
	}

	_createObject(){
		let id:string, i:number;
		for(id in this.data){
			if(this.data.hasOwnProperty(id)){

				//default label = vuoto
				if(!this.data[id].hasOwnProperty(this._settings.parameters.label))
					this.data[id][this._settings.parameters.label]="";

				//se non ha un searchable, glielo do io
				if(!this.data[id].hasOwnProperty(this._settings.parameters.search)){
					this.data[id][this._settings.parameters.search]="";
					for(i = this._settings.search.length; i--; )
						if(this._settings.sensitive)
							this.data[id][this._settings.parameters.search] += this.data[id][this._settings.search[i]];
						else
							this.data[id][this._settings.parameters.search] += this.data[id][this._settings.search[i]].toLowerCase();
				}
			}
		}
		return this;
	}

	/**
	*	search in the object for similar results
	*	@param string search
	**/
	search(search:string):object | boolean{
		let found:object;
		if(search === "" || search === " ")
			return false;

		found = this._match(search);
		if(this._settings.onSearch && found)
			(this._settings.onSearch as functionMap).call(this, found);

		return found;
	}


	/**
	*	choose a result by id
	*	@param integer id: index of object
	**/
	select(id:number){
		return this._select( this.data[id] );
	}
	/**
	*	choose a result
	*	@param object result
	**/
	_select(result:object){
		if(this._settings.onSelect && result)
			(this._settings.onSelect as functionMap).call(this, result);
		return result;
	}

	/**
	*	Filtri di ricerca
	*	"netto" e "fuzzy"
	*	@param string search: stringa da comparare
	*	@param object data: lista dati tra cui cercare (false = default list)
	*	@return object: dati trovati
	**/
	_match(search:string = ""){
		if(!search || search === "")
			return this.data;
		//mostro soltanto quelle che trovo
		if(this._settings.fuzzy)
			return dataMatchFuzzy(search, this.data, this._settings.parameters.search);
		else
			return dataMatch(search, this.data, this._settings.parameters.search);
	}
}


export default (data:any[], settings:object = {}) => {
	return new searchBy(data, settings);
}
