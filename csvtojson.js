const fs = require('fs');
const path = require('path');
var link = path.join('.','customer-data.csv');
var link1 = path.join('.', 'customer-data.json');
var strArray = [];
var jsonArray = [];

var lineReader = require('readline').createInterface({ //read file line by line 
    input: fs.createReadStream(link)
});
  
lineReader.on('line', function (line) { //push lines from the csv into an array of strings
    strArray.push(line);
});
lineReader.on('close',()=>{     //once all lines read start splitting at the commas for keys and values
    var str = strArray[0];
    var keys = str.split(",");
    for(var i = 1; i < strArray.length; i++){
        let json = {};
        var values = strArray[i].split(",");
        for(var j = 0; j < keys.length; j++){
            json[keys[j]] = values[j];
        }
        jsonArray.push(json);
    }
    var output = JSON.stringify(jsonArray, null, 4); //converting JSON object into readable format for JSON file
    fs.writeFile(link1, output, (error)=>{
        if(error){
            console.error(error);
        }
    });
    console.log("Convertion complete.")
});