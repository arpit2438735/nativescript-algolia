/// <reference path="Algolia.android.d.ts" />

let index;
let _handler_;
export class AlgoliaIndex {
    constructor(client: com.algolia.search.saas.Client, name: string) {
        index = client.initIndex(name);
    }

    public search(query: string, args:any, handler?: Function):void {
        let completionHandler = new CompletionHandler();
        let queryObject = new com.algolia.search.saas.Query(query);
        _handler_ = handler;

        if(typeof args === "function" ) {
            _handler_ = args;
        }else {
            Object.keys(args).forEach((key) => {
                queryObject.set(key, args[key].toString());
            });
        }

        index.searchAsync(queryObject, completionHandler);
    }

    public setSettings(settings: Object, handler: Function):void {
        _handler_ = handler;
        let completionHandler = new CompletionHandler();

        index.setSettingsAsync(settings, completionHandler);
    }

    public addObjects(object: Object, handler: Function):void {
        _handler_ = handler;
        let completionHandler = new CompletionHandler();

        index.addObjectAsync(object, completionHandler);
    }
}

var CompletionHandler = com.algolia.search.saas.CompletionHandler.extend({

    requestCompleted(content:JSON, error:Error):void {
        if(error) {
            return _handler_(null, error);
        }

        return _handler_(JSON.parse(content.toString()));
    }

});

exports.CompletionHandler = CompletionHandler;