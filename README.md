# NativeScript-Algolia
Nativescript plugin for Algolia(https://www.algolia.com/) search

Fill in a little about your plugin!

## License
This plugin is licensed under the MITlicense by Arpit Srivastava

## Installation
To install type

```
tns plugin add nativescript-algolia
```

## Table of Contents


1. **[Install](#install)**

    * [Nativescript](#nativescript)

1. **[Quick Start](#quick-start)**

    * [Initialize the client](#initialize-the-client)
    * [Search](#search)
    
# Getting Started



## Install

#### Nativescript

```sh
tns plugin add nativescript-algolia
```

## Quick Start

In 30 seconds, this quick start tutorial will show you how to index and search objects.

### Initialize the client

You first need to initialize the client. For that you need your **Application ID** and **API Key**.
You can find both of them on [your Algolia account](https://www.algolia.com/api-keys).

```js
import {Algolia} from "nativescript-algolia";
var client = new Algolia('applicationID', 'apiKey');
var index = client.initIndex('contacts');
```

### Search

You can now search for contacts using firstname, lastname, company, etc. (even with typos):

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




