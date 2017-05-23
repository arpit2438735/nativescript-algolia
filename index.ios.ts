/**********************************************************************************
* (c) 2017, Arpit Srivastava.
* Licensed under the MIT license.
*
* Version 0.0.1                                              arpit2438735@gmail.com
**********************************************************************************/
'use strict';

/// <reference path="./Client.ios.d.ts" />
declare var index;
export class Algolia {
  protected client:any;

  constructor(appID: string, apiKey: string) {
    this.client = Client.alloc();
    this.client.initWithAppIDApiKey(appID, apiKey);
  };

  public initIndex(name:string) : void {
    this.client.indexWithName("").isMemberOfClass(Index);
    index = this.client.indexWithName(name);
  }

  public static search(query:string, handler:Promise<any>):void {
    index.searchCompletionHandler(query, handler);
  }
}

