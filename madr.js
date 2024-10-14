async function openAsBlob(response) {
	const blob = await response.blob();
	const url = window.URL.createObjectURL(blob);
	window.open(url);
	window.URL.revokeObjectURL(url);
}

function load(a, link) {
	document.body.style.cursor = 'wait';
	a.style.cursor = 'wait';
	fetch(link).then(openAsBlob).then(() => {
		document.body.style.cursor = 'default'
		a.style.cursor = 'pointer';
	});
	return false;
}

function loadAnnotator(a, link) {
	document.body.style.cursor = 'wait';
	a.style.cursor = 'wait';
	fetch(link)
		.then((res) => { return res.text(); })
		.then((resText) => {
			const dom = Document.parseHTMLUnsafe(resText);
			const link = dom.getElementById("myprinturl").innerHTML;

			return fetch(link);
		}).then(openAsBlob).then(() => {
			document.body.style.cursor = 'default'
			a.style.cursor = 'pointer';
		});
	return false;
}

const script = document.createElement("script");

// Inject functions into page DOM
script.innerHTML = `
	${openAsBlob.toString()}
	${load.toString()}
	${loadAnnotator.toString()}
`;
document.head.appendChild(script);


const match = /(?:\/pluginfile.php\/[0-9]+\/mod_(?:folder\/content)|(?:assign\/introattachment)|(?:forum\/attachment)|(?:assignsubmission_file\/submission_files))|(?:\/mod\/resource\/view.php)/;

const annotatorMatch = /(?:\/mod\/pdfannotator\/view.php)/;

const main = document.querySelectorAll('[role="main"]')[0];
const anchors = main?.getElementsByTagName('a') ?? [];

for (const elem of anchors) {
	const link = elem.href;

	if (match.test(link)) {
		elem.setAttribute('onclick', `return load(this, '${link}');`);
		continue;
	};

	if (annotatorMatch.test(link)) {
		elem.setAttribute('onclick', `return loadAnnotator(this, '${link}');`)
	}
};
