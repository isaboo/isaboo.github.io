---
layout: article
title: How to make a very simple website
permalink: /texts/make-a-very-simple-website
date: Unknown
---
Some things you require:
- **Zero** coding skills
- A computer (Windows or Mac. These instructions are for windows but the process is similar on macOS)

Let's get started.

### Part 1: Create a html file

- Find your desktop screen on your computer. This is where your wallpaper is.
- Right click and select 'New' then 'Folder' and type to give it a name.
- Now double click on the newly created folder.
- Right click and select 'New' then 'Text Document'.
- Name the file 'website _.html_' remember to remove the _.txt_ at the end.
- Now right click on the file and select 'Open with' then 'Notepad'.
- You should see a blank large text box.

### Part 2: Creating a webpage

- Copy the following code into the file.
{% highlight xml linenos%}
<!DOCTYPE html>
<html>
  <head>
    <title>My Website<title>
  </head>
  <body>
    
  </body>
 </html>
{% endhighlight %}
- Save the file by doing Ctrl+S or File > Save
- Find your folder on the desktop, open it and open the _website.html_ in the browser by double clicking on it. You will see a blank screen. That's because we havn't put any content in it.

### Part 3: Adding content

Whatever is inside the `<body` and `</body>` is what appears on the page.

{% highlight xml linenos%}
<body>
  -What appears on the page-
</body>
{% endhighlight %}
    
- Add a heading by adding the following code to the `<body>`
{% highlight xml linenos%}
    <h1>Hello Everyone!</h1>
{% endhighlight %}
- Save and then go to the browser and press the refresh button. You should see something like this.
    
<div style="background-color: white; font-family: serif; padding: 10px;">
  <h1>Hello Everyone!</h1>
</div> 

