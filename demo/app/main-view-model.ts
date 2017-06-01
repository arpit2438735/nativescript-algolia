import {Observable} from 'data/observable';
import {Algolia} from "nativescript-algolia";

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
        let algolia = new Algolia('VG744RBG1B', '5789b99f1c6b86c2656224d477ac186b');
        let index = algolia.initIndex('getstarted_actors');

        index.search('nicolas', {
            attributesToRetrieve: ['firstname', 'lastname'],
            hitsPerPage: 50
        },(success, error) => {
            console.log(JSON.stringify(success));
            console.log(JSON.stringify(error));
        });

        debugger;
    }

    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        this._counter--;
        this.updateMessage();
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}