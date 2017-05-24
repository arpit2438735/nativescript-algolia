declare class Index {
    static alloc(): Index;
    static searchCompletionHandler(query:string, handler:Promise<any>):void;
    isMemberOfClass(interface: any):Boolean;
    searchCompletionHandler(query: Query, handler:Function):void;
    setSettingsCompletionHandler(settings: {[key:string]: Array<string>}, handler:Function):void;
    addObjectsCompletionHandler(object:Object, handler:Function):void;
}

declare class Client {
    static alloc(): Client;
    initWithAppIDApiKey(appID:string, apiKey:string): void;
    indexWithName(name:string): Index;
}

declare class Query {
    static alloc(): Query;
    initWithQuery(query:string): Query;
}