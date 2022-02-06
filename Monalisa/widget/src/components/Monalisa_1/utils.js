import port from "./port";

// export const sleep = (t: number = 300) => new Promise(resolve => setTimeout(resolve, t));
export const sleep = (t = 300) => new Promise(resolve => setTimeout(resolve, t));


/**
 * Get nfts total attention and reward
 * @param {Array} nfts nfts array
 * @returns {Array} [totalAttention, totalReward]
 */
export const getNftsStats = (nfts) =>
  nfts.reduce(
    // (acc: any, current: any) => {
    (acc, current) => {
    
      acc[0] += current.attention;
      
      acc[1] += current.reward;

      return acc;
    },
    [0, 0]
  );

export const formatDigitNumber = (val) => {
  if (typeof val !== "number") return 0;
  if (val) return val.toLocaleString("en-US", { maximumFractionDigits: 2 });
  else return 0;
};

/**
 * Get file's media type
 * @param {string} contentType html5 content type
 * @returns {string} file type
 */
export const getMediaType = (contentType) => {
  let mediaType = contentType;
  if (contentType) {
    if (contentType.includes("image/")) {
      mediaType = "image";
    } else if (contentType.includes("video/")) {
      mediaType = "video";
    } else if (contentType.includes("text/html")) {
      mediaType = "iframe";
    }
  }
  return mediaType;
};

/**
 * Get file blob and data buffer
 * @param {string} url File url
 * @returns {Array} [dataBuffer, blob]
 */
export const getFileData = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const dataBuffer = await blob.arrayBuffer();

  return [dataBuffer, blob];
};

/**
 *
 * @param {Function} fn Function to poll for result
 * @param {Number} timeout How long to poll for
 * @param {Number} interval Polling interval
 * @returns {Promise}
 */
export const poll = (fn, timeout, interval) => {
  var endTime = Number(new Date()) + (timeout || 2000);
  interval = interval || 100;

  var checkCondition = function (resolve, reject) {
    // If the condition is met, we're done!
    var result = fn();
    if (result) {
      resolve(result);
    }
    // If the condition isn't met but the timeout hasn't elapsed, go again
    else if (Number(new Date()) < endTime) {
      setTimeout(checkCondition, interval, resolve, reject);
    }
    // Didn't match and too much time, reject!
    else {
      reject(new Error("timed out for " + fn + ": " + arguments));
    }
  };

  return new Promise(checkCondition);
};


export const convertToAr = (balance) => {
  if (!balance) return "...";
  let value = Number(balance);
  return (value / 1000000000000)?.toFixed?.(8);
};

export const triggerPort = (nftId) => {
  port.propagatePoRT(nftId);
};

/**
 * Format a timestamp to a local date
 * @param {string} timestamp unix timestamp
 * @param {object} options .toLocaleString() options
 * @returns formatted local date
 */
export const formatUnixTimestamp = (
  timestamp,
  options = {
    day: "numeric",
    month: "short",
    year: "numeric"
  }
) => {
  if (!timestamp) return null;
  return new Date(parseInt(timestamp) * 1000).toLocaleString(undefined, options);
};

export const refreshPage = () => {
  window?.location.reload();
};
