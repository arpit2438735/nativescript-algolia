export declare class Algolia {
    protected algoliaSearchClient: any;
    constructor(appID: string, apiKey: string);
    initIndex(name: string): void;
}
