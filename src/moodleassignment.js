//TODO: Only tested with old moodle versions
const elements = document.getElementsByClassName('fileuploadsubmission');

for (let i = 0; i < elements.length; i++) {
  const a = elements[i].children[1];
  if (!a.href) continue;
  const link = a.href;
  a.removeAttribute('href');
  a.setAttribute('style', 'cursor:pointer');
  a.setAttribute('onclick', `
    fetch('${link}').then((res) => {
      return res.blob();
    }).then((blob) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url);
      window.URL.revokeObjectURL(url);
    });
  `)
}
