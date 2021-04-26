import { AlgoliaIndex } from './algolia-index';
import { buildQuery, convertToJSON } from './utils';

let client;

export class Algolia {
    constructor(appID: string, apiKey: string) {
        client = Client.alloc();
        client = client.initWithAppIDApiKey(appID, apiKey);
    }

    public initIndex(name: string): AlgoliaIndex {
        return new AlgoliaIndex(client, name);
    }

    public search(queries: queryObject[], handler: Function): void {
        const indexQueries = [];

        queries.forEach((query) => {
            const _query = Query.alloc().initWithQuery(query.query);

            if (query.params) {
                Object.keys(query.params).forEach((key) => {
                    if (key === 'aroundRadius' && query.params[key] === 'all') {
                        _query.setParameterWithNameTo('aroundRadius', 'all');
                    } else {
                        _query[key] = buildQuery(key, query.params[key]);
                    }
                });
            }
            indexQueries.push(IndexQuery.alloc().initWithIndexNameQuery(query.indexName, _query));
        });

        client.multipleQueriesStrategyCompletionHandler(indexQueries, null, (success, error) => {
            if (error) {
                return handler(null, { status: error.code, reason: error.localizedDescription });
            }

            return handler(convertToJSON(success));
        });
    }
}
