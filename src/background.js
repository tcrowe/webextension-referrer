const { get } = require("./storage");
const filter = { urls: ["<all_urls>"] };

// so on this they tried to obfuscate and make it more difficult to get rid
// of the referrer header
const extraInfo = ["requestHeaders", "extraHeaders"];

// correct but probably unused spelling
const referrer1 = "referrer";

// mispelling in the specification
// https://infogalactic.com/info/HTTP_referer
const referrer2 = "referer";

function filterReferrer({ name }) {
  const lowName = name.toLowerCase();
  if (lowName === referrer1 || lowName === referrer2) {
    return false;
  }
  return true;
}

function before_headers(req) {
  if (get("enabled") === true) {
    // the user is allowing to send it as-is
    return;
  }

  // the user has opted not to send the referrer
  req.requestHeaders = req.requestHeaders.filter(filterReferrer);
  return req;
}

chrome.webRequest.onBeforeSendHeaders.addListener(
  before_headers,
  filter,
  extraInfo
);
