
const AWS = require("aws-sdk");
const { v5: uuidv5 } = require("uuid");

const { logger } = require("../../config/logger");





/**
 *
 *
 * @param {ArrayBuffer} file
 * @param {*} [config={
 *   region: process.env.AWS_BUCKET_REGION,
 *   accessKeyId: process.env.AWS_ACCESS_KEY,
 *   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
 *   Bucket: process.env.S3_BUCKET_NAME,
 * }]
 * @returns
 */
async function uploadToS3(
  file,
  ext,
  config = {
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    Bucket: process.env.S3_BUCKET_NAME,
    logger: console,
    httpOptions: {
      connectTimeout: 2 * 5000, // time succeed in starting the call
      timeout: 2 * 5000, // time to wait for a response
    },
  }
) {
  const hashedFileName = uuidv5(`${file}${Date.now()}`, uuidv5.URL);
  const s3 = new AWS.S3(config.region ? config : null);

  const params = {
    Bucket: config.Bucket,
    Body: file,
    ACL: "public-read",
    Key: `${hashedFileName}.${ext}`,
  };

  try {
    const { Location } = await s3.upload(params).promise();
    return Location;
  } catch (error) {
    logger.error(error);
    return {
      message: "Unable to upload image",
    };
  }
}

/**
 *
 *
 * @param {string} fileLocation the full URL of the file
 * @returns {string} file key
 */
function getFileKeyFromS3Location(fileLocation) {
  return fileLocation.split("amazonaws.com/")[1];
}

/**
 *
 * @param {string} imageName
 * @param {*} [config={
 *   region: process.env.AS_REGION,
 *   accessKeyId: process.env.AS_ACCESS_KEY,
 *   secretAccessKey: process.env.AS_SECRET_ACCESS_KEY,
 *   Bucket: process.env.S3_BUCKET_NAME,
 * }]
 * @returns
 */
async function deleteFromS3(
  imageName,
  config = {
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    Bucket: process.env.S3_BUCKET_NAME,
    logger: console,
    httpOptions: {
      connectTimeout: 2 * 1000, // time succeed in starting the call
      timeout: 2 * 1000, // time to wait for a response
    },
  }
) {
  const s3 = new AWS.S3(config.region ? config : null);
  const params = {
    Bucket: config.Bucket,
    Key: imageName,
  };

  try {
    const { $response } = await s3.deleteObject(params).promise();
    return $response;
  } catch (error) {
    logger.error(error);
    return new Error(error.message);
  }
}

module.exports = {
  
  uploadToS3,
  getFileKeyFromS3Location,
  deleteFromS3,
  
};
