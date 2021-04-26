declare interface queryObject {
    indexName: string;
    query: string;
    params?: Object;
}

declare class Index {
    static alloc(): Index;
    static searchCompletionHandler(query: string, handler: Promise<any>): void;
    isMemberOfClass(interface: any): Boolean;
    searchCompletionHandler(query: Query, handler: Function): void;
    setSettingsCompletionHandler(settings: { [key: string]: string[] }, handler: Function): void;
    addObjectsCompletionHandler(object: Object, handler: Function): void;
}

declare class Client {
    static alloc(): Client;
    initWithAppIDApiKey(appID: string, apiKey: string): void;
    indexWithName(name: string): Index;
    multipleQueriesStrategyCompletionHandler(indexQueries: [IndexQuery], strategy: string, handler: Function): void;
}

declare class Query {
    static alloc(): Query;
    initWithQuery(query: string): Query;
    setParameterWithNameTo(param: string, value: string | object): Query;
}

declare class IndexQuery {
    static alloc(): IndexQuery;
    initWithIndexNameQuery(indexName: string, query: Query): IndexQuery;
}

declare class LatLng {
    static alloc(): LatLng;
    initWithLatLng(lat: string, lng: string): LatLng;
}
