const elements = document.getElementsByClassName('fp-filename-icon');

if (typeof elements.forEach == 'function') {
  elements.forEach((element) => {
    const a = element.children[0];
    if (!a.href) return;
    a.href = a.href.replace('?forcedownload=1', '');
    a.target = '_blank';
  })
} else {
  for (let i = 0; i < elements.length; i++) {
    const a = elements[i].children[0];
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
}
