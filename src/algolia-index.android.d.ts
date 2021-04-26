export declare class AlgoliaIndex {
    constructor(client: com.algolia.search.saas.Client, name: string);
    search(query: string, args: any, handler?: Function): void;
    setSettings(settings: Object, handler: Function): void;
    addObjects(object: Object, handler: Function): void;
}
