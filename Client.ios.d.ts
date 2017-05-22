declare class Client {
    static alloc(): Client;
    initWithAppIDApiKey(appID:string, apiKey:string): void;
    indexWithName(name:string): void;
}