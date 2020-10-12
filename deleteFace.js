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

  const contents = base64Encode('images/5.jpg')
  // console.log(contents)
  const data = await Aws.rekognition.deleteFaces({
    CollectionId: 'test1', /* required */
    FaceIds: ['b4bec75f-67b6-4d8e-85aa-4ffcec87e4f9'], 
  }).promise()

  console.log(data)
  // console.log(data.FaceMatches[0])
}catch(e){
  console.log(e)
}
  }
  
  
  test().then((data) => {
    // console.log(err)
    // console.log(data)
  })
