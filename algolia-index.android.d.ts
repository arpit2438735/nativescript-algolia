/// <reference path="Algolia.android.d.ts" />
export declare class AlgoliaIndex {
    constructor(client: com.algolia.search.saas.Client, name: string);
    search(query: string, handler: Function): void;
}
