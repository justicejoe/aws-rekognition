const Aws= require('./index')
const test = async () => {
try{
  const data = await Aws.rekognition.createCollection({
    CollectionId: 'test3'
  }).promise()

  console.log(data)
  return 1
}catch(e){
  console.log(e.message)
}
  }
  
  
  test().then((data) => {
    console.log(data)
    // console.log(err)
    // console.log(data)
  })