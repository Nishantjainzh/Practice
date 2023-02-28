const fs = require('fs');

// Make the folder
// fs.mkdirSync('test');
// fs.mkdir('Async', (err)=>{
//     console.log('folder created');
// })
// Create the file
// fs.writeFileSync('Test.txt', 'This is testing file');
// fs.writeFile('./Async/test.txt','Asynchronous testing', (err)=>{
//     console.log('File created here');
// })

// Add the data in existing file
//  fs.appendFileSync('test.txt', ' Here i appended')
    // fs.appendFile('./Async/test.txt', ' practice for async', (err)=>{
    //     if(err) console.log('error somewhere');
    //     else console.log('Appended successfully');
    // })

// Read the data in buffer format then in string
// const data = fs.readFileSync('test.txt')
// console.log(data.toString());
    // fs.readFile('./Async/test.txt', (err, data)=>{
    //     if(err) console.log(err);
    //     else console.log(data.toString());
    // })

// read data thru utf
// const result = fs.readFileSync('test.txt', 'utf-8');
// console.log(result);

// Rename the file and folder name
//  fs.renameSync('view', 'views');
// fs.rename('read.txt', 'newRead.txt', (err)=>{
//     console.log('rename done');
// })

// delete the file
// fs.unlinkSync('newTest.txt');
// fs.rmdirSync('newTest.txt');

// fs.unlink('newRead.txt', (err)=>{
//     console.log('deleted file here');
// })

// const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: 'AKIASIMWP6I3SMKVJGPZ',
    secretAccessKey: '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'
});

const fileName = 'test.txt';
const uploadFile = ()=>{
    fs.readFile(fileName, (err, data)=>{
        if(err) console.log(err);
        const params = {
            Key: 'file.txt',
            Bucket: 'test-s3-nish',
            Body: toString(data)
        };
        s3.upload(params, (s3err, data)=>{
            if(s3err) throw s3err;
            console.log(`File uploaded ${data.Location}`);
        })
    });
}
uploadFile();




