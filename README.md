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

![2 - Cover Promo Chrome 16-9](https://github.com/user-attachments/assets/d4954734-53ba-4366-9625-1e343e1c8b67)

![visual-entry](https://github.com/user-attachments/assets/f35da7dc-a2f2-4ccb-a29f-8b9b3e978189)

![2 - tweet-entry](https://github.com/user-attachments/assets/f649f0e3-a27d-4dbf-bdde-141a41404573)

![3 - art-entry](https://github.com/user-attachments/assets/60a8eeb2-bc14-4bdb-b006-48af378e6e37)


## Credits

Just two people having fun building something simple and beautiful. I handled the code, and [José Luis Antúnez](https://jlantunez.com/) handled the design and content. 
