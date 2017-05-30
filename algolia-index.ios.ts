/// <reference path="./Algolia.ios.d.ts" />

let index;
let _Query_;

export class AlgoliaIndex {
    constructor(client: Client, name:string) {
        /*
            This is hack as Index is not returning from else condition
            https://github.com/algolia/algoliasearch-client-swift/blob/master/Source/Client.swift#L99
        */

        client.indexWithName("").isMemberOfClass(Index);
        index = client.indexWithName(name);
        _Query_ = Query.alloc();
    }

    public search(query:string, handler:Function):void {

        index.searchCompletionHandler(_Query_.initWithQuery(query), (success, error) => {
            if(error) {
                handler(error);
            }

            handler(success);
        });
    }

    public setSettings(settings:Object, handler:Function):void {
        index.setSettingsCompletionHandler(settings, (success, error) => {
            if(error) {
                handler(error);
            }

            handler(success);
        });
    }

    public addObjects(object:Object, handler:Function):void {
        index.addObjectsCompletionHandler(object, (success, error) => {
            if(error) {
                handler(error);
            }

            handler(success);
        });
    }
}