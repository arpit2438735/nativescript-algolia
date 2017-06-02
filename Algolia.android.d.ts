declare module com {
    module algolia {
        module search {
            module saas {
                class Query {
                    constructor(query: string);
                    set(key:string, value:string);
                }

                class Index {
                    searchAsync(query: com.algolia.search.saas.Query, handler:Function):void;
                    setSettingsAsync(setting:{[key:string]: Array<string>}, handler:Function):void;
                    addObjectAsync(object:{[key:string]: Array<string>}, handler:Function):void;
                }

                class Client {
                    constructor(appId:string, appKey:string);
                    initIndex(name:string):Index;
                }

                module CompletionHandler {
                     export function extend(context:any); /* Need to add all function rather use any */
                }
            }
        }
    }
}