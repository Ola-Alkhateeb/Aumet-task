var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan')
var cheerio = require('cheerio');
var request = require('request');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));


var bigArr=[];
var result= []
var arr=[];
for(var i=0;i<10;i++){
request('http://www.medicaltenders.com/search.php?off='+i+'&inc=y&global=1&region_name[]=EG&notice_type_new[]=1,2,3,7,10,11,16,9,4,8,5&sector=18&deadline=', function(err, response, body) {
	if(err){throw err}
		var $=cheerio.load(body);  
	$('.style5').each(function(i,tag){
		bigArr.push($(tag).text().trim())
  });

    for(var i=0;i<bigArr.length;i++){
    	if(arr.length!==13){
    		arr.push(bigArr[i])
    	}else{
    		result.push({"type":arr[1],
    			"country":arr[3],
    			"category":arr[5],
    			"desc":arr[7],
    			"deadline":arr[9],
    			"Refno":arr[11]})
    		arr=[];
    	}
    }
});
};

app.get('/egypt' , function(req,res) {
	console.log(result.length)
	res.json(result)
});



app.listen(process.env.PORT || 3000);
console.log('Server now listening on port 3000');


