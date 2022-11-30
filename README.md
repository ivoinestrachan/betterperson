# Productivity Extension 
Are you always procrastinating?
Yeah me too, procrastinating often leads to an increase in stress and anxiety, as well as the likelihood of making errors when rushing toward the completion of a project. In worst-case scenarios, putting things off until the last minute can cause you to miss an important deadline.
We do this a lot as programmers so I decided to create something to help us to stop procrastinating and be more productive.



![image](https://user-images.githubusercontent.com/70272280/204818505-8c910b89-a96d-491d-8554-a8a33665e648.png)



## Installation & Setup

### 1. How to Install on Chrome
- Click the **︙** dots on the top right
- Click More Tools
- Click Extensions

![image](https://user-images.githubusercontent.com/70272280/204827416-dec6cb61-833e-49c8-8f53-d978227042a5.png)

- Make sure you have Developer mode turned on
- Next Click Pack Extension 

![image](https://user-images.githubusercontent.com/70272280/204891098-b7c956dc-66e7-4b43-9490-60880ee55584.png)

- Choose the folder where you have the extension
- Then click pack extension

![image](https://user-images.githubusercontent.com/70272280/204891311-1b4e5c34-ca2d-47b9-a178-1e5cdfed1ef4.png)

- After those steps click pack extension you can now click Load unpacked
- Then look for the folder should you chose

![image](https://user-images.githubusercontent.com/70272280/204891953-c0d02d15-7972-4e97-8bd3-01107500e282.png)

After you have done all of these steps you should be able to click the plugin icon to find the extension and the sites you have blocked of you shouldnt be able to go to.

## Editing Files
Adding links to website you would like to block
```js
switch (window.location.hostname) {
  case 'www.youtube.com':
    document.head.innerHTML = generateSTYLING()
    document.body.innerHTML = generateHTML('youtube');
  break;
//Add more links below
```

Giving Permission and Editing Extension Name
```json
{
  "manifest_version": 2,
  "name": "Better Person",
  "version": "1.0",
  "description": "Become a better person",
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["Content.js"]
    }
  ],
  "browser_action": {
    "default_popup": "Popup.html",
    "default_title": "Better Person"
  },
  "permissions": [
    "https://www.youtube.com/*",
  ]
}
```
Customizing your popup 
```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <div class="main">
      <h1>Better Person</h1>
      <hr />
      <span>
        Current Blocked Sites:
        <span style="color: #ff0100;">youtube</span>
      </span>
    </div>
  </body>
</html>
```

