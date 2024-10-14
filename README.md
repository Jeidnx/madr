# Moodle Auto Download Remover

Opens files in a new tab of the browser instead of downloading them
from moodle.

### Get the extension

If you use Firefox you can install the extension by clicking
[this link](https://spacegli.de/madr/latest.xpi). This will install the latest
available version, signed by Mozilla. Unfortunately they wouldn't accept this
extension into the Firefox extension store because the target audience is too
small.

If you use a Chromium based browser you can clone this repository and import
the manifest manually. I have no intention of packaging or testing this
extension for Chromium.

### Todo:

- Maybe check files for mime types and only create a blob if the
  browser can open it. Right now these files still get downloaded, but
  without a progress bar and the filenames are lost.
- Error handling with fallback to default link handler
