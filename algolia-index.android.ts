/// <reference path="Algolia.android.d.ts" />

let index;
let _handler_;
export class AlgoliaIndex {
    constructor(client: com.algolia.search.saas.Client, name: string) {
        index = client.initIndex(name);
    }

    public search(query: string, handler: Function):void {
        _handler_ = handler;
        let completionHandler = new CompletionHandler();

        index.searchAsync(new com.algolia.search.saas.Query(query), completionHandler);
    }
}

var CompletionHandler = com.algolia.search.saas.CompletionHandler.extend({

    requestCompleted(content:JSON, error:Error):void {
        if(error) {
            _handler_(error);
        }

        _handler_(content);
    }

});

exports.CompletionHandler = CompletionHandler;