/*var fs=require('fs');

var dir='./attributes/';
var data={};
var c=1;
fs.readdir(dir,function(err,files){
    if (err) throw err;
    
    files.forEach(function(file){
        
         
        fs.readFile(dir+file,'utf-8',function(err,jsonData){
            if (err) throw err;
           
                if(JSON.parse(jsonData)){
                console.log(c++ + ". success, name of file --> " +file);
            
                }
           
        });



    });



});
*/




var fs=require('fs');

var dir='./attributes/';
var data={};
var c=1, s=0, f=0;
var files = fs.readdirSync(dir);
    

    files.forEach(function(file){
        
         
        var jsonData = fs.readFileSync(dir+file,'utf-8');
       
            try{
                if(JSON.parse(jsonData)){

                console.log(c++ + ". success, name of file --> " +file);  
                s++;    
                }
            }
            catch(e){
                 console.log("\n---------ERROR FILE NAME --> " +file);
                 console.log("\e"+e);
                 console.log("Line Number --> "+e.stack + "\n\n");
                 f++;  
            }
      
    });
console.log("\nTotal Files --> "+(c-1) + "  success --> "+(s) + "  Fail --> "+f + "\n\n\n");









/*var walk    = require('walk');
var files   = [];
var fs = require('fs');
// Walker options
var walker  = walk.walk('test', { followLinks: false });

walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    files.push(root + '/' + stat.name);

     fs.readFile(root + '/' + stat.name, function (err, data) {
        if (err) throw err;

        data = JSON.parse(data);

       console.log(data.length);



        // fs.writeFile('message.txt', data, function (err) {
        //   if (err) throw err;
        //   console.log('It\'s saved!' + stat.name);
        // });
        
     });


    next();
});

walker.on('end', function() {
    console.log(files);
});
*/


