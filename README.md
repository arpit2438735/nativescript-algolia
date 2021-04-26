# NativeScript Algolia

[![npm](https://img.shields.io/npm/v/@nativescript-community/algolia.svg)](https://www.npmjs.com/package/@nativescript-community/algolia)
[![npm downloads](https://img.shields.io/npm/dm/@nativescript-community/algolia.svg)](https://www.npmjs.com/package/@nativescript-community/algolia)
[![npm downloads](https://img.shields.io/npm/dt/@nativescript-community/algolia.svg)](https://www.npmjs.com/package/@nativescript-community/algolia)


This plugin is designed to mirror, as closely as possible, the structure of [Algolia’s JavaScript](https://github.com/algolia/algoliasearch-client-javascript/) client. You don't have to change or add any extra logic for existing applications, it will work for NativeScript.

## Installation
To install, type

```
ns plugin add @nativescript-community/algolia
```

## Table of Contents


1. **[Quick Start](#quick-start)**

    * [Initialize the client](#initialize-the-client)
    * [Push data](#push-data)
    * [Search](#search)
    * [Configure](#configure)
    

## Quick Start

In 30 seconds, this quick start tutorial will show you how to index and search objects.

### Initialize the client

You first need to initialize the client. For that, you will need your **Application ID** and **API Key**.
You can find both of them on [your Algolia account](https://www.algolia.com/api-keys).

```js
import { Algolia } from "@nativescript-community/algolia";
var client = new Algolia('applicationID', 'apiKey');
var index = client.initIndex('contacts');
```

### Push data

Without any prior configuration, you can start indexing [500 contacts](https://github.com/algolia/algoliasearch-client-csharp/blob/master/contacts.json) in the `contacts` index using the following code:

```js
var index = client.initIndex('contacts');
var contactsJSON = require('./contacts.json');

index.addObjects(contactsJSON, function(content, err) {
  if (err) {
    console.error(err);
  }
});
```

### Search

With these tasks complete, you can now search for contacts by querying fields such as firstname, lastname, company and more. As Algolia is typo tolerant, common misspellings can be handled with ease:

```js
// firstname
index.search('jimmie', function(content, err) {
  console.log(content.hits);
});

// firstname with typo
index.search('jimie', function(content, err) {
  console.log(content.hits);
});

// a company
index.search('california paint', function(content, err) {
  console.log(content.hits);
});

// a firstname & company
index.search('jimmie paint', function(content, err) {
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
}, function(content, err) {
  console.log(content);
});
```

## License
This plugin is licensed under the MIT license by Arpit Srivastava