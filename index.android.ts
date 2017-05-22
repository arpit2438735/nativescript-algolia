/**********************************************************************************
* (c) 2017, Arpit Srivastava.
* Licensed under the MIT license.
*
* Version 1.0.0                                              arpit2438735@gmail.com
**********************************************************************************/
'use strict';

export class Algolia {
  protected algoliaSearchClient:any;

  constructor(appID: string, apiKey: string) {
    this.algoliaSearchClient = Client.alloc();
    this.algoliaSearchClient.initWithAppIDApiKey(appID, apiKey);
  };

  public initIndex(name:string) : void {
    return this.algoliaSearchClient.indexWithName(name);
  }
}
