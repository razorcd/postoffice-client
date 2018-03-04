// import {IncomingRequest} from "../../app/models/incomingRequest";
// import {Cookie} from "../../app/models/cookie";
//
// const headers:Map<string, string> = new Map(Object.entries({
//   "accept-language": "en-US,en;q=0.9,ro;q=0.8,de;q=0.7",
//   "host": "localhost:8080",
//   "upgrade-insecure-requests": "1",
//   "connection": "keep-alive",
//   "accept-encoding": "gzip, deflate, br",
//   "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36",
//   "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
// }));
//
// const cookie:Cookie = {
//   "name": "KEY_1",
//   "value": null,
//   "version": 0,
//   "domain": null,
//   "maxAge": -1,
//   "path": null,
//   "httpOnly": false,
//   "secure": false,
//   "comment": null
// } as Cookie;
//
// const params:Map<string,string[]> = new Map(Object.entries({
//   "param1": ["val1"],
//   "param2": ["val2"],
//   "param3": ["val3"]
// }));
//
// const incomingRequestFixture:IncomingRequest = {
//   "id": "5a8f2932f50dd07ef4f19c52",
//   "url": "http://localhost:8080/incoming/fgdfgf",
//   "method": "GET",
//   "params": params,
//   "headers": headers,
//   "cookies": [cookie],
//   "body": "some content for the request body",
//   "timestamp": 1519331634564
// };
//
//
// export function getIncomingRequestFixture():IncomingRequest {
//   return JSON.parse(JSON.stringify(incomingRequestFixture));
// };
