var GROUPMAX = 15;
var userId = '7081785';
//Here Are the Images to set Source to: //7081785
var Pictures;
var BackPictures;

//Fetch Hardcoded Bluesquad
var BlueSquad = new Array(5);
for(i = 0; i < 5; i++)
{
	BlueSquad[i] = "Bluesquad/Img" + (i+1) + ".jpg";
}

var Top10Pics = new Array(10);
for(i = 1; i < 11;i++)
{
	Top10Pics[i-1] = "Top10/Img" + (i) + ".jpg"
}

//Fetch Hardcoded FancyPics
var FancyPics = new Array(10);
for(i = 1; i < 5;i++)
{
	FancyPics[i-1] = "Top10/FancyPics" + (i-1) + ".jpg"
}

//Fetch these From Stream
var FanPics;

function Sleep(milliseconds) {
   return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function GeneratePictures(Piclength)
{
	Pictures = new Array(Piclength);
	BackPictures = new Array(Piclength);
	var parentdiv = new Array(Piclength);

	for(i = 0;i < Piclength;i++)
		{
			parentdiv[i] = document.createElement("div");
			parentdiv[i].id = "Parent";
			parentdiv[i].style.position = "absolute";
			parentdiv[i].style.height = "100px";
			parentdiv[i].style.width = "100px";

			Pictures[i] = document.createElement("div");
			BackPictures[i] = document.createElement("div");

			Pictures[i].style.className = "Image"
			Pictures[i].id = "Img" + (i+1);
			Pictures[i].style.position = "relative";
			Pictures[i].style.marginTop = "0";
			Pictures[i].style.marginLeft = "0";
			Pictures[i].style.height = "100px";
			Pictures[i].style.width = "100px";
			Pictures[i].style.backgroundImage = "url(https://via.placeholder.com/150)";

			
			BackPictures[i].style.className ="Image"
			BackPictures[i].id = "BackImg" + (i+1);
			BackPictures[i].style.position = "absolute";
			BackPictures[i].style.marginTop = "0px";
			BackPictures[i].style.marginLeft = "0px";
			BackPictures[i].style.height = "100px";
			BackPictures[i].style.width = "100px";
			BackPictures[i].style.backgroundImage = "url(https://via.placeholder.com/150)";

			switch(i)
			{
  				case 0:
  			parentdiv[i].style.marginTop = "93";
			parentdiv[i].style.marginLeft = "716";
  				  break;
  				case 1:
  			parentdiv[i].style.marginTop = "227";
			parentdiv[i].style.marginLeft = "612";
  				  break;
  				case 2:
  			parentdiv[i].style.marginTop = "215";
			parentdiv[i].style.marginLeft = "847";
  				  break;
  				case 3:
  			parentdiv[i].style.marginTop = "170";
			parentdiv[i].style.marginLeft = "65";
  				  break;
  				case 4:
  			parentdiv[i].style.marginTop = "86";
			parentdiv[i].style.marginLeft = "308";
  				  break;
  				case 5:
  			parentdiv[i].style.marginTop = "10";
			parentdiv[i].style.marginLeft = "180";	
  				case 6:
  			parentdiv[i].style.marginTop = "410";
			parentdiv[i].style.marginLeft = "25";
  				  break;
  				case 7:
  			parentdiv[i].style.marginTop = "340";
			parentdiv[i].style.marginLeft = "210";
  				  break;
  				case 8:
  			parentdiv[i].style.marginTop = "280";
			parentdiv[i].style.marginLeft = "415";
  				  break;
  				case 9:
  			parentdiv[i].style.marginTop = "40";
			parentdiv[i].style.marginLeft = "504";
  				  break;
  				case 10:
  			parentdiv[i].style.marginTop = "424";
			parentdiv[i].style.marginLeft = "444";
				break;
				case 11:
  			parentdiv[i].style.marginTop = "350";
			parentdiv[i].style.marginLeft = "660";
				break;
  				case 12:
  			parentdiv[i].style.marginTop = "65";
			parentdiv[i].style.marginLeft = "980";
  				  break;
  				case 13:
  			parentdiv[i].style.marginTop = "279";
			parentdiv[i].style.marginLeft = "1024";
  				  break;
  				case 14:
  			parentdiv[i].style.marginTop = "408";
			parentdiv[i].style.marginLeft = "860";
  				  break;
  				case 15:
  			parentdiv[i].style.marginTop = "300";
			parentdiv[i].style.marginLeft = "800";
  				  break;
  				default:
  				console.log("Num not found Error");
  				break;
			}
			parentdiv[i].appendChild(BackPictures[i]);
			parentdiv[i].appendChild(Pictures[i]);
			document.getElementById("Container").appendChild(parentdiv[i]);
		}

	var x = document.createElement("div");
	var y= 	document.createElement("div");	
	x.id = "x";
	y.id = "y";	
	document.getElementById("Container").appendChild(x);
	document.getElementById("Container").appendChild(y);

}

function shuffleBluePicFrames(a,b) 
{
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) 
    {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        b[i] = a[j];
        a[j] = x;
    }
    return [a,b];

}


function shuffleBlue(a) 
{
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) 
    {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;

}

function shuffleTop3(a) 
{
    var j, x, i;

	var firstElement = a.shift();
	var secondElement = a.shift();
	var thirdElement = a.shift();

    for (i = a.length - 1; i > 0; i--) 
    {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }


    a.unshift(thirdElement);
    a.unshift(secondElement);
    a.unshift(firstElement);

    return a;
}

//Big MainFunctions---------------------------------------------
var opacity = 96; // Avoid starting at 100% due to Mozilla bug
var slowly = {
  fade : function (id) {
    this.fadeLoop(id, opacity);
  },
  fadeLoop : function (i, opacity) {
    
    if (opacity >= 5) {
      slowly.setOpacity(i, opacity);
      opacity -= 4;
      window.setTimeout("slowly.fadeLoop('"+i+"', "+opacity+")", 50);
    } else {
    	opacity = 96;
    }
  },
  setOpacity : function (i, opacity) {
    Pictures[i].style.filter = "alpha(style=0,opacity:" + opacity + ")";  // IE
    Pictures[i].style.KHTMLOpacity = opacity / 100;           // Konqueror
    Pictures[i].style.MozOpacity = opacity / 100;             // Mozilla (old)
    Pictures[i].style.opacity = opacity / 100;                // Mozilla (new)
  }
}



//set string, put it in array, mix array and lets go!
var Anim = async function(PictureList)
{
	var pIndex = 0;	
	
	//Fill Bundle of pics used to fill groups
	//Instantiate new Bundleof Pics and pick them
	for(i = 0; i < GROUPMAX; i++)
	{
		
			if(PictureList[pIndex] == null)
			{
				//Reset index
				pIndex = 1;
				console.log("Resets Pictures because at end");
			}
			
				await Sleep(1000); 
				BackPictures[i].style.backgroundImage = "url('" + PictureList[pIndex]+ "')";
				slowly.fade(i);
				await Sleep(1400);
				Pictures[i].style.backgroundImage = "url('" + PictureList[pIndex]+ "')";
				Pictures[i].style.opacity = 96;
				await pIndex++;
				
	}
};


async function CastBlueSquad(times)
{
	await ResetPics();
	var x = 0;
	while(x != times)
	{
		console.log("CastBlueSquad: " + x);
		BlueSquad =	await shuffleBlue(BlueSquad);
		await Anim(BlueSquad);
		x++;
	}
		
	
}

async function CastMyTop10(times)
{
	await ResetPics();
	var x =  0;
	while(x != times)
	{
		console.log("CastMyTop10: " + x);
		Top10Pics = await shuffleTop3(Top10Pics);
		await Anim(Top10Pics);
		x++;
	}
}

async function CastFanPics(times)
{
	
	var x = 0;
	await ResetPics();

	while(x != times)
	{
		console.log("CastFanPics: " + x);
		FanPics = await shuffleTop3(FanPics);
		await Anim(FanPics);
		x++;
	}
		
	
}

async function Retry()
{
	await Sleep(3000);
    FetchData();
}



function FetchData()
{
	var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://cdn.younow.com/php/api/broadcast/audience/broadcaster=0/channelId=' + userId;
	var json = fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    json = JSON.stringify(data, null, 2);
    var done = JSON.parse(json);
		if(json.length < 1)
      	{
      		console.log("No Fans Found Error, Retrying...");
      		Retry();
      		return;
      	}
      	else
      	{
          if(done.audience.length == 0)
          {
            console.log("No audience found, retry");
            Retry();
            return;
          }
      		console.log("Success")
          console.log(done.audience.length);

      		FanPics = new Array(done.audience.length);
      		var length = FanPics.length -1;
      		for(i = length; i > -1; i--)
      		{
      		FanPics[i] = ("https://ynassets.younow.com/user/live/" +done.audience[i].userId + "/" + done.audience[i].userId + ".jpg");
      		}
      	}
  })
  .catch(e => {
    console.log("Error with download, Retrying");
    Retry();
    return;
  });
}



async function ResetPics()
{
	for(c = 0; c < GROUPMAX; c++)
	{
	//	BackPictures[c].style.background ="grey";
		slowly.fade(c);
		await Sleep(400);
	//	Pictures[c].style.background ="grey";
	}			
}
async function RunCode()
{
	await GeneratePictures(GROUPMAX);

	var example = document.getElementById('Container'); 
		example.onmousemove = function(e) { 
    	var x = e.pageX - this.offsetLeft; 
    	var y = e.pageY - this.offsetTop; 
    	document.getElementById("x").innerHTML = x;
    	document.getElementById("y").innerHTML = y;
    }
    	await ResetPics();
    	RunCode2();
}



async function RunCode2()
{
	while(true)
    {
    	await FetchData();
    	if(FanPics == null || FanPics == "undefined")
    	{
    		console.log("No pictures found, retrying");
    		await Sleep(3000);
    		RunCode2();
    		return;
    	}

    	console.log("Pictures Found starting cast");
    	await CastFanPics(1);
    }
}