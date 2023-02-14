const oldElements = document.getElementsByClassName('activityinstance');

const newElements = document.getElementsByClassName('aalink');

function isResource(url){
	if(!url) return false;
	const start = url.lastIndexOf('mod/');
	const end = url.lastIndexOf('/view');
	const type = url.substring(start + 4, end);
	return (type == 'resource');
}

if (newElements.length > 0) {
	newElements.forEach((elem) => {
		if(isResource(elem.href)) {
			elem.target = '_blank';
		}
	})
} else if (oldElements.length > 0) {
	for(let i = 0; i < oldElements.length; i++){
		const elem = oldElements[i].children[0];
		if(isResource(elem.href)) {
			elem.target = '_blank';
		}
		
	}
}