---
title: How to change a website
date: TBC
layout: article
permalink: /texts/change-a-website
image: /assets/images/changeweb.png
---
This trick is simple but will impress your friends to make them think your a hacker or to prank them. And it's quite a cool trick anyway!

#### _Notice_: This is not actually hacking!

Before we begin, make sure your using one of the following browsers _on a desktop computer, you can't do this on a Tablet or Phone_:

- [Google Chrome](https://www.google.com/search?q=Google%20Chrome)
- [The New Microsoft Edge](https://www.google.com/search?q=Microsoft%20Edge)
- [Mozilla Firefox](https://www.google.com/search?q=Mozilla%20Firefox)
- Or any other [Chromium based browser](https://www.google.com/search?q=list%20of%20chromium%20browsers)

Screenshots from this tutorial will be from Google Chrome, since it's the most polular but the browsers listed all have an almost identical interface.

### Step 1: Launching the developer tools

First of all, [Click Here](/assets/other/devtoolsplayground.html){: target="_blank"}. This will contain every element needed for this article aswell as instrucions in the console.

Now right click anywhere on the page and select inspect. What just popped up is the Browser DevTools. We'll be using this alot soon.

#### Note: Some webpages, such as games, don't allow you to right click. If so, use `Ctrl+Shift+I` / `F12` / `fn+F12`

### Step 2: Selecting an element.

- In the DevTools window, look for a little arrow symbol in the top left. It looks like this.  
![Pointer icon](/assets/images/pointer.png)

- Click on it and hover the mouse over the page.
- Hover the mouse over the 'This is some text to edit' text  
![Hover image](/assets/images/highlight.png)
- And click. It should flash in the devtools window.  
![Dev Tools Highlight](/assets/images/devtoolshighlight.png)

### Step 3: Editing Text

- Right click on the highlighted code and select `Edit as HTML`.
- The part which appears white is what we want to change. Change it to anything you want.  
![To edit](/assets/images/textedit.png)
- Click on another element to exit out and you'll see the content has chnaged to what you typed.

### Step 4: Changing links

Changing links involes changing attributes, so I'll show you how to now.

- Repeat step 2 for the link.
- Locate the code where it says `href="right-click/then/edit-attribute"` and right click on it.
- Select `Edit Atrribute`
- Change the part in quotation marks...  
![What to edit in href](/assets/images/linktoedit.png)  
...to `https://www.eelslap.com` or any other website, just make sure it has `https://` on the front.

### Step 5: Changing images

This is similar to the last step but we have to change the `src=""`(source) this time.
![How to get image](/assets/images/getimage.png){: width="400px" style="float: left; margin: 20px;"}
- Repeat step 4 but find the bit the image and the code which says `src="/assets/images/imagetoedit.png"` and change it to an image url.

The best way to do this is to go to google, click on an image to expand it and click `Copy Image Address`. Then paste it by doing `Ctrl`+`V`.

- Exit and the image has now changed!

That's all in this article. If you want to get better at this or even create your own websites then [Learn HTML](https://www.google.com/search?q=Learn%20HTML)

Here are some examples:

## Examples

### Example 1: slither.io score

- Use `Ctrl+Shift+I` / `F12` / `fn+F12` to launch the DevTools after completing a game.
- Use the cursor icon to select the score text.
- Change it something massive!  
![Slither Hack Image](/assets/images/slitherhack.png)

### Example 2: Rickroll!

- Navigate to a youtube search for your friend's favourite youtuber.
- Open the DevTools.
- Use the cursor to select all the video links.
- Change all the `href` values to `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- When they get back, they'll get the biggest rickroll ever!

### Example 3: Wrong Facts.

- Search Google for a fact of key importance.
- Open the DevTools.
- Change the facts.  
![US Fake founding date](/assets/images/usfakeday.png){: width="700px"}

There are endless pranks and jokes you can do with this. Aslong as you don't use it to break the law (if you figure out a way!)




