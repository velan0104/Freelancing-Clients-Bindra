"use strict";
var worker = new Worker("./worker/runner.js");

function isValidMessage(message) {
  return (
    message &&
    typeof message === "object" &&
    message.dataType === "expectedType"
  );
}

worker.addEventListener("error", function (e) {
  // eslint-disable-next-line no-console -- output
  console.error(e);
});

worker.addEventListener("message", function (message) {
  if (isValidMessage(message.data)) {
    // eslint-disable-next-line no-console -- output
    console.log(message.data);
  } else {
    console.warn("Invalid message received from the worker:", message.data);
  }
});
