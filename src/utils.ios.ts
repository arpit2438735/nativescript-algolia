export const convertToJSON = (data: NSDictionary<string, any>): JSON => {
    const jsonData = NSJSONSerialization.dataWithJSONObjectOptionsError(data, 0);
    return JSON.parse(NSString.alloc().initWithDataEncoding(jsonData, 4).toString());
};

export const buildQuery = (key: string, value: string): string | boolean | LatLng => {
    if (key === 'aroundLatLng') {
        const latlng = value.replace(/ /g, '').split(',');
        return LatLng.alloc().initWithLatLng(latlng[0], latlng[1]);
    }

    return value;
};
