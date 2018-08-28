import { AlgoliaIndex } from './algolia-index';
export declare class Algolia {
    constructor(appID: string, apiKey: string);
    initIndex(name: string): AlgoliaIndex;
    search(queries: Array<queryObject>, handler: Function): void;
}
