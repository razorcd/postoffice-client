import {IncomingRequest} from "../../models/incomingRequest";

const incomingRequestFixture:IncomingRequest = {
  "id":"5a8f2932f50dd07ef4f19c52",
  "url":"http://localhost:8080/incoming/fgdfgf",
  "method":"GET",
  "params":{

  },
  "headers":{
    "accept-language":"en-US,en;q=0.9,ro;q=0.8,de;q=0.7",
    "cookie":"_WebPortal_session=MG1uSXlFRnF5SVhicmlJN2pmalAxZHArQzczWVlrVXp1OEY4OVJhaW9yOXN6MEZiN2ttYklmS2dkNzhrSnpiK1Nna0EvZ0ZXem5MbzRKQUdPUCt4WmpWUWFoTTV4ckFEOWNKenp4WGt4UnVYSU9BQUNhemp6WGRJY05SZTJKbnJZajROSFY4bHpwVjJtU1Roc1p1QkFPekIxMno1WjUyTnEwazYvekZvK3lYemJUTnAvN1dJSit0dm5QMWFKSC9qLS16UjNkZkZVTlAwa1BkS2s3RXlVUmZ3PT0%3D--025a0dcbe216378ed76f9278b872f283a661d886; JSESSIONID=A63DAAFC9D8F7BEEFE3883D268E1A548; _ga=GA1.1.2137557461.1518812134; PHPSESSID=4c2jq6a1s3c2p050o8tjb5ug36; _AIMBackend_session=Q1ZNa3gwYllMZlRlK0RQY0RTNC9vZ0gweHB0S0dtQVhyQnc1TjhwcHB2a2VGT0EzTzlMNDdkU0hXb0V5RjhlZno1ekJYM1d4LzR3UTZtcFNqWkJHY2RHSWlNVFhjMDNKbHFKZVorTk5vc3pXWURSa0JUVHJkbVdVNmRqbkFHRytYSjhQdlJoVm1nbEpZY21naElFWEt5NGhLZFplM0cyQjFyZFpVYzVqNkVYOFlwa0ZUS1ZzbExmb09WbmlIQTNEV3FQdlRzUDJTUDFiY0RLRTBFbkdHcERWUlNqT28wRUVFT1ZSYnhUNU5FYzFzRkhQV2xVWUlHTklZc0ptUGJaRC0tTzMra2g2U1VaN2l5M0VsZzZpbUQ2Zz09--15f3d784960f849d21d9c552c2a0c781c22a3ab5",
    "host":"localhost:8080",
    "upgrade-insecure-requests":"1",
    "connection":"keep-alive",
    "accept-encoding":"gzip, deflate, br",
    "user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36",
    "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
  },
  "cookies":[
    {
      "name":"MG1uSXlFRnF5SVhicmlJN2pmalAxZHArQzczWVlrVXp1OEY4OVJhaW9yOXN6MEZiN2ttYklmS2dkNzhrSnpiK1Nna0EvZ0ZXem5MbzRKQUdPUCt4WmpWUWFoTTV4ckFEOWNKenp4WGt4UnVYSU9BQUNhemp6WGRJY05SZTJKbnJZajROSFY4bHpwVjJtU1Roc1p1QkFPekIxMno1WjUyTnEwazYvekZvK3lYemJUTnAvN1dJSit0dm5QMWFKSC9qLS16UjNkZkZVTlAwa1BkS2s3RXlVUmZ3PT0%3D--025a0dcbe216378ed76f9278b872f283a661d886",
      "value":null,
      "version":0,
      "domain":null,
      "maxAge":-1,
      "path":null,
      "httpOnly":false,
      "secure":false,
      "comment":null
    },
    {
      "name":"A63DAAFC9D8F7BEEFE3883D268E1A548",
      "value":null,
      "version":0,
      "domain":null,
      "maxAge":-1,
      "path":null,
      "httpOnly":false,
      "secure":false,
      "comment":null
    },
    {
      "name":"GA1.1.2137557461.1518812134",
      "value":null,
      "version":0,
      "domain":null,
      "maxAge":-1,
      "path":null,
      "httpOnly":false,
      "secure":false,
      "comment":null
    },
    {
      "name":"4c2jq6a1s3c2p050o8tjb5ug36",
      "value":null,
      "version":0,
      "domain":null,
      "maxAge":-1,
      "path":null,
      "httpOnly":false,
      "secure":false,
      "comment":null
    },
    {
      "name":"Q1ZNa3gwYllMZlRlK0RQY0RTNC9vZ0gweHB0S0dtQVhyQnc1TjhwcHB2a2VGT0EzTzlMNDdkU0hXb0V5RjhlZno1ekJYM1d4LzR3UTZtcFNqWkJHY2RHSWlNVFhjMDNKbHFKZVorTk5vc3pXWURSa0JUVHJkbVdVNmRqbkFHRytYSjhQdlJoVm1nbEpZY21naElFWEt5NGhLZFplM0cyQjFyZFpVYzVqNkVYOFlwa0ZUS1ZzbExmb09WbmlIQTNEV3FQdlRzUDJTUDFiY0RLRTBFbkdHcERWUlNqT28wRUVFT1ZSYnhUNU5FYzFzRkhQV2xVWUlHTklZc0ptUGJaRC0tTzMra2g2U1VaN2l5M0VsZzZpbUQ2Zz09--15f3d784960f849d21d9c552c2a0c781c22a3ab5",
      "value":null,
      "version":0,
      "domain":null,
      "maxAge":-1,
      "path":null,
      "httpOnly":false,
      "secure":false,
      "comment":null
    }
  ],
  "body":"",
  "timestamp":1519331634564
};

export function getIncomingRequestFixture():IncomingRequest {
  return JSON.parse(JSON.stringify(incomingRequestFixture));
};
