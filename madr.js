const main = document.querySelectorAll('[role="main"]');
const links = [];

for (let i = 0; i < main.length; i++) {
	const tags = main[i].getElementsByTagName('a');
	for (let j = 0; j < tags.length; j++) links.push(tags[j]);
}

const match = /(?:\/pluginfile.php\/[0-9]+\/mod_(?:folder\/content)|(?:assign\/introattachment)|(?:forum\/attachment)|(?:assignsubmission_file\/submission_files))|(?:\/mod\/resource\/view.php)/;

for (const elem of links)
	if (match.test(elem.href)) {
		const link = elem.href;
		elem.style.cursor = 'pointer';
		elem.setAttribute('onclick', `
			document.body.style.cursor = 'wait';
			const a = this;
			a.style.cursor = 'wait';
			fetch('${link}').then((res) => {
				return res.blob();
			}).then((blob) => {
				const url = window.URL.createObjectURL(blob);
				document.body.style.cursor = 'default'
				a.style.cursor = 'pointer';
				window.open(url);
				window.URL.revokeObjectURL(url);
			});
			return false;
		`)
	}
