const AWS = require('aws-sdk')

AWS.config.update({
  accessKeyId: '',
  secretAccessKey: '',
  region: 'ap-southeast-1'
})
const rekognition = new AWS.Rekognition();



module.exports={
  rekognition
}