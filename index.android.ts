/**********************************************************************************
* (c) 2017, Arpit Srivastava.
* Licensed under the MIT license.
*
* Version 1.0.0                                              arpit2438735@gmail.com
**********************************************************************************/
'use strict';
/// <reference path="Algolia.android.d.ts" />

import {AlgoliaIndex} from './algolia-index';

let client;

export class Algolia {

  constructor(appID: string, apiKey: string) {
    client = new com.algolia.search.saas.Client(appID, apiKey);
  };

  public initIndex(name:string) : AlgoliaIndex {
    return new AlgoliaIndex(client, name);
  }
}
