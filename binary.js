var inlets = 1;
var outlets = 1;

function toBinary(str)
{
	var alltext  ="";
    for(var i = 0; i < str.length; i++)
    {
        var ascii_code = str[i].charCodeAt(0);
		base16text = ascii_code.toString(16);
        var alltext = alltext + base16text;
    }
	outlet(0, alltext);
}
