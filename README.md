# NativeScript-Algolia

[![Greenkeeper badge](https://badges.greenkeeper.io/arpit2438735/nativescript-algolia.svg)](https://greenkeeper.io/)

[![Build Status][build-status]][build-url]

[build-status]:https://travis-ci.org/arpit2438735/nativescript-algolia.svg?branch=master
[build-url]:https://travis-ci.org/arpit2438735/nativescript-algolia

[NativeScript](http://nativescript.org) plugin for [Algolia](http://algolia.com/ "Algolia") search.

This plugin is designed to mirror, as closely as possible, the structure of [Algolia’s JavaScript](https://github.com/algolia/algoliasearch-client-javascript/) client. You don't have to change or add any extra logic for existing applications, it will work for NativeScript.

## License
This plugin is licensed under the MIT license by Arpit Srivastava

## Installation
To install, type

```
tns plugin add nativescript-algolia
```

## Table of Contents


1. **[Install](#install)**

    * [NativeScript](#nativescript)

1. **[Quick Start](#quick-start)**

    * [Initialize the client](#initialize-the-client)
    * [Push data](#push-data)
    * [Search](#search)
    * [Configure](#configure)
    
# Getting Started



## Install

#### NativeScript

```sh
tns plugin add nativescript-algolia
```

## Quick Start

In 30 seconds, this quick start tutorial will show you how to index and search objects.

### Initialize the client

You first need to initialize the client. For that, you will need your **Application ID** and **API Key**.
You can find both of them on [your Algolia account](https://www.algolia.com/api-keys).

```js
import {Algolia} from "nativescript-algolia";
var client = new Algolia('applicationID', 'apiKey');
var index = client.initIndex('contacts');
```

### Push data

Without any prior configuration, you can start indexing [500 contacts](https://github.com/algolia/algoliasearch-client-csharp/blob/master/contacts.json) in the `contacts` index using the following code:

```js
var index = client.initIndex('contacts');
var contactsJSON = require('./contacts.json');

index.addObjects(contactsJSON, function(err, content) {
  if (err) {
    console.error(err);
  }
});
```

### Search

With these tasks complete, you can now search for contacts by querying fields such as firstname, lastname, company and more. As Algolia is typo tolerant, common misspellings can be handled with ease:

```js
// firstname
index.search('jimmie', function(err, content) {
  console.log(content.hits);
});

// firstname with typo
index.search('jimie', function(err, content) {
  console.log(content.hits);
});

// a company
index.search('california paint', function(err, content) {
  console.log(content.hits);
});

// a firstname & company
index.search('jimmie paint', function(err, content) {
  console.log(content.hits);
});
```
### Configure

Settings can be customized to tune the search behavior. For example, you can add a custom sort by number of followers to the already great built-in relevance:

```js
index.setSettings({
  'customRanking': ['desc(followers)']
}, function(err, content) {
  console.log(content);
});
```

You can also configure the list of attributes you want to index by order of importance (ex: firstname = most important):

**Note:** Since the engine is designed to suggest results as you type, you'll generally search by prefix.
In this case the order of attributes is very important to decide which hit is the best:

```js
index.setSettings({
  'searchableAttributes': [
    'lastname',
    'firstname',
    'company',
    'email',
    'city',
    'address'
  ]
}, function(err, content) {
  console.log(content);
});
```



