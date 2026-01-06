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
![cover-sapiare-tab-promo-16-9](https://github.com/user-attachments/assets/a3efe95a-1428-412c-b0da-2e06344d1096)

![1sapiare](https://github.com/user-attachments/assets/4270fafc-bad8-40d6-b731-c112cc30f5a7)

![2sapiare](https://github.com/user-attachments/assets/9a1942f3-8e4f-4901-9eb4-b768639429b6)

![3sapiare](https://github.com/user-attachments/assets/528d2adf-7d87-422e-8a1e-2e04aac24d99)


## Credits

Just two people having fun building something simple and beautiful. I handled the code, and [José Luis Antúnez](https://jlantunez.com/) handled the design and content. 
