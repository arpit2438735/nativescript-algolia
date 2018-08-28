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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxnb2xpYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFsZ29saWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFFQUFxRTs7QUFFckUsNkRBQTZDO0FBRzdDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUU1QixJQUFJLE1BQU0sQ0FBQztJQUVYLFVBQVUsQ0FBQztRQUNSLE1BQU0sR0FBRyxJQUFJLDhCQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFDQUFxQyxFQUFFO1FBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0NBQWtDLEVBQUU7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvamFzbWluZS9pbmRleC5kLnRzXCIgLz5cblxuaW1wb3J0IHtBbGdvbGlhfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFsZ29saWFcIjtcblxuXG5kZXNjcmliZSgnQWdvbGlhIE5hdGl2ZXNjcmlwdCcsICgpID0+IHtcblxuICAgIGxldCBjbGllbnQ7XG5cbiAgICBiZWZvcmVFYWNoKCgpPT4ge1xuICAgICAgIGNsaWVudCA9IG5ldyBBbGdvbGlhKCdhcHBJZCcsICdhcHBLZXknKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIGluaXRJbmRleCBhcyBmdW5jdGlvbicsICgpID0+IHtcbiAgICAgICBleHBlY3QoY2xpZW50LmluaXRJbmRleCkudG9CZURlZmluZWQoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgcmV0dXJuIHNlYXJjaCBhcyBmdW5jdGlvbicsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KGNsaWVudC5zZWFyY2gpLnRvQmVEZWZpbmVkKCk7XG4gICAgfSk7XG59KTsiXX0=