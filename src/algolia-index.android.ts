let index;
export class AlgoliaIndex {
    constructor(client: com.algolia.search.saas.Client, name: string) {
        index = client.initIndex(name);
    }

    public search(query: string, args: any, handler?: Function): void {
        const completionHandler = new CompletionHandler();
        const queryObject = new com.algolia.search.saas.Query(query);
        completionHandler.handler = handler;

        if (typeof args === 'function') {
            completionHandler.handler = args;
        } else {
            Object.keys(args).forEach((key) => {
                queryObject.set(key, args[key].toString());
            });
        }

        index.searchAsync(queryObject, completionHandler);
    }

    public setSettings(settings: Object, handler: Function): void {
        const completionHandler = new CompletionHandler();
        completionHandler.handler = handler;

        index.setSettingsAsync(settings, completionHandler);
    }

    public addObjects(object: Object, handler: Function): void {
        const completionHandler = new CompletionHandler();
        completionHandler.handler = handler;

        index.addObjectAsync(object, completionHandler);
    }
}

const CompletionHandler = com.algolia.search.saas.CompletionHandler.extend({
    init(): void {
        return global.__native(this);
    },

    requestCompleted(content: JSON, error: Error): void {
        if (error) {
            return this.handler(null, error);
        }

        return this.handler(JSON.parse(content.toString()));
    }
});

exports.CompletionHandler = CompletionHandler;
