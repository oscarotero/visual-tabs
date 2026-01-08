# Visual Tabs

Create a custom new-tab page extension featuring your own content for Chrome, Firefox, or Brave.

To showcase what’s possible, we’ve created **Sapiare New Tab**, which features evocative visual thinking, a curated selection of paintings, and tweet-style quotes from some of the greatest thinkers and builders in history. 

It’s available in both the Chrome and Firefox extension stores.

Anyone with the extension installed will automatically receive any new content you publish. They would only need to update the extension if you add new functionality or new content templates. 

## Install Sapiare New Tab

- [Chromium based browsers](https://chromewebstore.google.com/detail/sapiare-new-tabs/cbopbiocoldcmakpfnfddhmbgcaalepo).
- [Firefox](https://addons.mozilla.org/es-ES/firefox/addon/sapiare-new-tab/)

## For developers

The content is stored in the `data.json` file, and images are stored in the `img` folder. You can edit the file to add more content or run `deno task dev` to open a CMS
([Deno](https://deno.com/) is required). 


To submit your extension to the browser stores, simply upload the extension folder.
When creating a ZIP file, ensure that `manifest.json` is at the root by selecting all files and folders inside the extension directory, not the directory itself, and then zipping them.


## For non-developers 
To add and edit content, we installed [Lume](https://lume.land/) , a static site generator for Deno, on a personal domain. This allows anyone, even without technical skills, to manage content easily. A developer can set it up in just a few minutes.


## Screenshots

![cover-promo-16-9](https://github.com/user-attachments/assets/de353b6c-7de4-4dcf-af77-e996b5397ac8)

![entry-visual](https://github.com/user-attachments/assets/60654030-1b5b-44af-8dd3-7181813cb037)

![entry-tweet](https://github.com/user-attachments/assets/2af15c39-a78c-45da-be86-85f76f7eee37)

![entry-art](https://github.com/user-attachments/assets/7d12f20b-0957-40a3-9667-2c00f3159576)


## Credits

Just two people having fun building something simple and beautiful. I handled the code, and [José Luis Antúnez](https://jlantunez.com/) handled the design and content. 
