import {Observable} from 'data/observable';
import {Algolia} from "nativescript-algolia";

let index;
export class HelloWorldModel extends Observable {

    private _message: Array<Object>;
    private _searchText: string;

    constructor() {
        super();
        let algolia = new Algolia('VG744RBG1B', '5789b99f1c6b86c2656224d477ac186b');
        index = algolia.initIndex('getstarted_actors');

         //index.search('nicolas', (success, error) => {
         //    if(error) {
         //        console.log(JSON.stringify(error));
         //        return;
         //    }
         //
         //    this.message = success.hits;
         //    console.log(JSON.stringify(success));
         //});

        /* Example of multiple quries */
        //var queries = [{
        //    indexName: 'getstarted_actors',
        //    query: 'nicolas',
        //    params: {
        //        hitsPerPage: 3
        //    }
        //}, {
        //    indexName: 'getstarted_actors',
        //    query: 'kate',
        //    params: {
        //        hitsPerPage: 3
        //    }
        //}];
        //
        //algolia.search(queries, (success, error) => {
        //    console.log(JSON.stringify(success));
        //});

        debugger;
    }

    get message(): Array<Object> {
        return this._message;
    }
    
    set message(value: Array<Object>) {
        this._message = value;
        this.notifyPropertyChange('message', value)
    }

    get searchText(): string {
        return this._searchText;
    }

    set searchText(value: string) {
        if (this._searchText !== value) {
            this._searchText = value;
            this.notifyPropertyChange('searchText', value);
        }
    }

    public onTap() {
        index.search(this.searchText, (success, error) => {
            this.message = success.hits;
        });
    }
}