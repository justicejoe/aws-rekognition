const Aws= require('./index')

const test = async () => {

  return await Aws.rekognition.listCollections().promise()
  }
  
  
  test().then(data => {
    console.log(data)
  })