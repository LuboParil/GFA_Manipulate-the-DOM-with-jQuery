let names = ["Mark", "James", "Billy", "Joseph", "Chose", "Amanda", "Zuzka", "Jane", "Klara", "Lubomir"];

names.forEach(element => {
	if (element === "Lubomir") {
		element = '<strong>'+ element + '</strong>';
	}
	$('ul').append('<li>'+ element +'</li>\n');
});