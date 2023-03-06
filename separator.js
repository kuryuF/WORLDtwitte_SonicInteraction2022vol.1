var inlets = 1;
var outlets = 1;

function array(str)
{
	var arraySplit = str.split("");
	var septxt = "";
	
	for(var i = 0; i < str.length; i++)
	{
		septxt = septxt + arraySplit[i] + ":";
	}
	outlet(0, septxt);
}