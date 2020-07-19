let names = ["Mark", "James", "Billy", "Joseph", "Chose", "Amanda", "Zuzka", "Jane", "Klara", "Lubomir"];

names.forEach(element => {
	if (element === "Lubomir") {
		element = '<strong>'+ element + '</strong>';
	}

	$('ul').append('<li>'+ element +'</li>\n');
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$('body').append(
	'<div>\n'
		+'\t<h2>'+ additionalBlock.title +'</h2>\n'
		+'\t<p>'+ additionalBlock.text +'</p>\n'
	+'</div>\n'
);