import { AlgoliaIndex, CompletionHandler } from './algolia-index';

let client;

export class Algolia {
    constructor(appID: string, apiKey: string) {
        client = new com.algolia.search.saas.Client(appID, apiKey);
    }

    public initIndex(name: string): AlgoliaIndex {
        return new AlgoliaIndex(client, name);
    }

    public search(queries: queryObject[], handler: Function): void {
        const indexQueries = new java.util.ArrayList();

        const completionHandler = new CompletionHandler();
        completionHandler.handler = handler;

        queries.forEach((query) => {
            const _query = new com.algolia.search.saas.Query(query.query);

            if (query.params) {
                Object.keys(query.params).forEach((key) => {
                    _query.set(key, query.params[key].toString());
                });
            }
            indexQueries.add(new com.algolia.search.saas.IndexQuery(query.indexName, _query));
        });

        client.multipleQueriesAsync(indexQueries, null, completionHandler);
    }
}
