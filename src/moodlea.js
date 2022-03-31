const elems = document.getElementsByClassName('fileuploadsubmission');

for (i = 0; i < elems.length; i++) {
  elems[i].children[1].href = elems[i].children[1].href.replace('?forcedownload=1', '');
}
