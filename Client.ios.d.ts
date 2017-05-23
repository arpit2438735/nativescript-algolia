declare class Index {
    static alloc(): Index;
    static searchCompletionHandler(query:string, handler:Promise<any>):void;
}

declare class Client {
    static alloc(): Client;
    initWithAppIDApiKey(appID:string, apiKey:string): void;
    indexWithName(name:string): Index;
}