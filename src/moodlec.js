const elems = document.getElementsByClassName('activityinstance');
const elemsName = document.getElementsByClassName('instancename');
const substr = ['Verzeichnis', 'Aufgabe', 'Forum'];

for (i = 0; i < elems.length; i++) {
  a = elems[i].children[0];
  if (elemsName[i].children[0]) {
    type = elemsName[i].children[0].innerHTML.trim();
    if (!substr.some((e) => type === e)) {
      link = a.href;
      a.removeAttribute('href');
      a.setAttribute('style', 'cursor:pointer;');
      a.setAttribute('onclick', `window.open('${link}');`);
    }
  } else {
    console.log('dingens gefunden');
  }
}
