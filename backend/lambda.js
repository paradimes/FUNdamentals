const k = {
  version: "2.0",
  routeKey: "$default",
  rawPath: "/hello",
  rawQueryString: "",
  headers: {
    "sec-fetch-mode": "navigate",
    "x-amzn-tls-version": "TLSv1.2",
    "sec-fetch-site": "none",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "x-forwarded-proto": "https",
    "x-forwarded-port": "443",
    "x-forwarded-for": "70.53.47.148",
    "sec-fetch-user": "?1",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "x-amzn-tls-cipher-suite": "ECDHE-RSA-AES128-GCM-SHA256",
    "sec-ch-ua":
      '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "x-amzn-trace-id": "Root=1-6530ad2f-1f00284c2ca3da3549fc4293",
    "sec-ch-ua-platform": '"macOS"',
    host: "yxprtkj6lbnlce75ahu7ip2ub40gjtbs.lambda-url.ca-central-1.on.aws",
    "upgrade-insecure-requests": "1",
    "accept-encoding": "gzip, deflate, br",
    "sec-fetch-dest": "document",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
  },
  requestContext: {
    accountId: "anonymous",
    apiId: "yxprtkj6lbnlce75ahu7ip2ub40gjtbs",
    domainName:
      "yxprtkj6lbnlce75ahu7ip2ub40gjtbs.lambda-url.ca-central-1.on.aws",
    domainPrefix: "yxprtkj6lbnlce75ahu7ip2ub40gjtbs",
    http: {
      method: "GET",
      path: "/hello",
      protocol: "HTTP/1.1",
      sourceIp: "70.53.47.148",
      userAgent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
    },
    requestId: "f0698703-bfec-4f46-a3d8-332f076a7ae1",
    routeKey: "$default",
    stage: "$default",
    time: "19/Oct/2023:04:14:39 +0000",
    timeEpoch: 1697688879436,
  },
  isBase64Encoded: false,
};

("use strict");
const awsServerlessExpress = require("aws-serverless-express");
const app = require("./api/server");
const binaryMimeTypes = [
  "application/octet-stream",
  "font/eot",
  "font/opentype",
  "font/otf",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
];
// const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);

const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => {
  console.log("event", event);
  console.log("context", context);
  return awsServerlessExpress.proxy(server, event, context);
};

// this.handler(k, {
//   succeed: () => {
//     console.log("success");
//   },
// });
