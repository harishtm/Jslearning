var fs =  require('fs');

/* Reading the file contents */


fs.readFile('data.txt', {'encoding': 'utf-8'}, function(err, fileContents){
    if(err){
        console.log('Something went wrong!!!', err);
        return;
    }
    console.log(fileContents)
})

/* Error handling when file does not exist */

fs.readFile('./data2.txt', {'encoding' : 'utf-8'}, function(err, fileContents){
    if(err){
        console.log('Something went wrong!!!', err);
        // console.log('Something went wrong!!!', err.code);
        return;
    }
    console.log(fileContents);
    console.log('Completed reding file contents')
})