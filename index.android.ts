/**********************************************************************************
* (c) 2017, Arpit Srivastava.
* Licensed under the MIT license.
*
* Version 1.0.0                                              arpit2438735@gmail.com
**********************************************************************************/
'use strict';
/// <reference path="Algolia.android.d.ts" />

import {AlgoliaIndex, CompletionHandler} from './algolia-index';

let client;

export class Algolia {

  constructor(appID: string, apiKey: string) {
      client = new com.algolia.search.saas.Client(appID, apiKey);
  };

  public initIndex(name:string) : AlgoliaIndex {
      return new AlgoliaIndex(client, name);
  }

  public search(queries: Array<queryObject>, handler: Function): void {
      let indexQueries = new java.util.ArrayList();

      let completionHandler = new CompletionHandler();
      completionHandler.handler = handler;

      queries.forEach((query)=> {
          let _query = new com.algolia.search.saas.Query(query.query);

          if (query.params) {

              Object.keys(query.params).forEach((key)=> {
                  query[key] = query.params[key];
              });
          }
          indexQueries.add(new com.algolia.search.saas.IndexQuery(query.indexName, _query));
      });

      client.multipleQueriesAsync(indexQueries, null, completionHandler);
  }
}
