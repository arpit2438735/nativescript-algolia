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
let _handler_;

export class Algolia {

  constructor(appID: string, apiKey: string) {
      client = new com.algolia.search.saas.Client(appID, apiKey);
  };

  public initIndex(name:string) : AlgoliaIndex {
      return new AlgoliaIndex(client, name);
  }

  public search(queries: Array<queryObject>, handler: Function): void {
      let indexQueries = new java.util.ArrayList();
      _handler_ = handler;

      let completionHandler = new CompletionHandler();

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

/** FixME Need to remove the duplication code defined in algolia-index as well **/
var CompletionHandler = com.algolia.search.saas.CompletionHandler.extend({

    requestCompleted(content:JSON, error:Error):void {
        if(error) {
            return _handler_(null, error);
        }

        return _handler_(JSON.parse(content.toString()));
    }

});

exports.CompletionHandler = CompletionHandler;
