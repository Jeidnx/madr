const elems = document.getElementsByClassName('fp-filename-icon');
const fileEnds = ['docx', 'zip'];

for (i = 1; i < elems.length; i++) {
  a = elems[i].children[0];
  link = a.href.replace('?forcedownload=1', '');
  type = link.split('.');
  type = type[type.length - 1];
  if (!fileEnds.some((e) => type === e)) {
    a.removeAttribute('href');
    a.setAttribute('style', 'cursor:pointer;');
    a.setAttribute(
      'onclick',
      `
    var url = window.url || window.webkitURL;
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', '${link}', true);
    xhr.responseType = 'blob';
    xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
        blobURL = url.createObjectURL(xhr.response);
        window.open(blobURL);
        url.revokeObjectURL(blobURL);
      }
    };
    xhr.send();`,
    );
  }
}
