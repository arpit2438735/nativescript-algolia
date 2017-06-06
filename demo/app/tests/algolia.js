"use strict";
/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_algolia_1 = require("nativescript-algolia");
describe('Agolia Nativescript', function () {
    var client;
    beforeEach(function () {
        client = new nativescript_algolia_1.Algolia('appId', 'appKey');
    });
    it('should return initIndex as function', function () {
        expect(client.initIndex).toBeDefined();
    });
    it('should return search as function', function () {
        expect(client.search).toBeDefined();
    });
});
