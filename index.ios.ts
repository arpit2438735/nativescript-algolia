/**********************************************************************************
* (c) 2017, Arpit Srivastava.
* Licensed under the MIT license.
*
* Version 0.0.1                                              arpit2438735@gmail.com
**********************************************************************************/
'use strict';

/// <reference path="./Algolia.ios.d.ts" />

import { AlgoliaIndex } from './algolia-index';

export class Algolia{
  protected client:any;

  constructor(appID: string, apiKey: string) {
    this.client = Client.alloc();
    this.client.initWithAppIDApiKey(appID, apiKey);
  };

  public initIndex(name:string) : AlgoliaIndex {
    return new AlgoliaIndex(this.client, name)
  }
}

