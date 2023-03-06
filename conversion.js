var inlets = 1;
var outlets = 1;

function con16(str){
	var finalText = "";
	var arraySplit = str.split("");

	var i = 0;
	
	for(var l = 0; l < arraySplit.length; l++)
	{
		if("0" <= arraySplit[i] && arraySplit[i] <= "9")
		{
			finalText = finalText + arraySplit[i] + ":";
			i++;
		}else{
			finalText = finalText + (arraySplit[i].charCodeAt(0) - 87) + ":";
			i++;
		}
	}
	
	outlet(0, finalText);

}