===indexFaces===
FaceRecords[0] -> Face.FaceId 

FaceRecords.length > 1   => show error
FaceRecords.length === 0 => show error
===================================

===searchFacesByImage====

FaceMatches[0].Similarity
FaceMatch[0].Face.FaceId

FaceMatches.length === 0 => unknown
FaceMatches.length === 1 => founded

ในรูปที่ส่งไปไม่มีหน้า => exception
message: 'There are no faces in the image. Should be at least 1.',
  code: 'InvalidParameterException',
  time: 2020-10-09T09:47:52.165Z,
  requestId: '4ee15baa-cc7d-453b-af80-60d8150feb4c',
  statusCode: 400,
  retryable: false,
  retryDelay: 8.012830485709177 }
===================================

===deleteCollection===
Success => StatusCode: 200
Exception => 
message: 'The collection id: test2 does not exist',
  code: 'ResourceNotFoundException',
  time: 2020-10-09T09:28:15.734Z,
  requestId: 'a085e3ac-6c3c-4995-9f05-a456a6ad3db7',
  statusCode: 400,
===================================

===deleteFaces====
Success => { DeletedFaces: [ 'b4bec75f-67b6-4d8e-85aa-4ffcec87e4f9' ] }
noface => { DeletedFaces: [] }
===================================
