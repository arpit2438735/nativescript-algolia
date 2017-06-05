/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import {Algolia} from "nativescript-algolia";


describe('Agolia Nativescript', () => {

    let client;

    beforeEach(()=> {
       client = new Algolia('appId', 'appKey');
    });

    it('should return initIndex as function', () => {
       expect(client.initIndex).toBeDefined();
    });

    it('should return search as function', () => {
        expect(client.search).toBeDefined();
    });
});