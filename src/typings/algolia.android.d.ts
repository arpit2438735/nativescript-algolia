declare namespace com {
    namespace algolia {
        namespace search {
            namespace saas {
                class Query {
                    constructor(query: string);

                    set(key: string, value: string);

                    multipleQueriesAsync(query: IndexQuery[], strategy: string, handler: Function);
                }

                class Index {
                    searchAsync(query: Query, handler: Function): void;

                    setSettingsAsync(setting: { [key: string]: string[] }, handler: Function): void;

                    addObjectAsync(object: { [key: string]: string[] }, handler: Function): void;
                }

                class Client {
                    constructor(appId: string, appKey: string);

                    initIndex(name: string): Index;
                }

                class IndexQuery {
                    constructor(indexName: string, query: Query);
                }

                namespace CompletionHandler {
                    export function extend(context: any);

                    /* Need to add all function rather use any */
                }
            }
        }
    }
}
