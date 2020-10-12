const Aws= require('./index')
const fs = require('fs')



function base64Encode(file) {
  var body = fs.readFileSync(file, { encoding: null });
  // console.log({ body })
  return body.toString('base64');
}

const test = async () => {
try{
  // const contents = await fs.readFile('images/1.jpg', {encoding: 'base64'});

  const contents = base64Encode('images/1.jpg')
  // console.log(contents)
  const data = await Aws.rekognition.indexFaces({
    CollectionId: 'test1', /* required */
    Image: { /* required */
      Bytes: Buffer.from(contents, 'base64')
      // Bytes: fs.readFileSync('images/1.jpg')
    },
    ExternalImageId: 'something',
    DetectionAttributes: ['DEFAULT'],
    MaxFaces: 1,
    QualityFilter: 'AUTO'
  }).promise()

  console.log(data)
  console.log(data.FaceRecords[0])
}catch(e){
  console.log(e)
}
  }
  
  
  test().then((data) => {
    // console.log(err)
    // console.log(data)
  })
