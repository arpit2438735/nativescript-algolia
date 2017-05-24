import { AlgoliaIndex } from './algolia-index';

export declare class Algolia {
    protected client: any;
    constructor(appID: string, apiKey: string);
    initIndex(name: string): AlgoliaIndex;
}
