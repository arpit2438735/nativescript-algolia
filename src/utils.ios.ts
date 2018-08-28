const convertToJSON = (data:NSDictionary<string, any>):JSON => {
    let jsonData = NSJSONSerialization.dataWithJSONObjectOptionsError(data, 0);
    return JSON.parse(NSString.alloc().initWithDataEncoding(jsonData, 4).toString());
};

export default convertToJSON;