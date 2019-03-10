---
layout: post
title: Star stacking with a single command
---
If you're only here for the technical TL;DR:

    convert *.jpg -evaluate-sequence Max result.jpg

***

A few days ago I decided to go out and take advantage of one of the rare clean nights here in Belgium. For the first time, I tried taking long exposure photographs of stars. Before, I only took photos with exposure times of 30 seconds or less. But for once, I wanted to take some of those cool star trail photographs you can see on the internet. The first picture has an exposure time of 256 seconds (f3.5, ISO 200):

![The first picture](/images/star-stacking/pic1.jpg)

The second one is exactly 600 seconds long (f3.5, ISO 200):

![The second picture](/images/star-stacking/pic2.jpg)

Even with such long (at least for me) exposure times, these pictures do not look very impressive. So I thought maybe I can improve them by stacking the star trails using some kind of image manipulation software. I looked around and found some dedicated star stacking software, but they were either very outdated (releases for Ubuntu 13.10...) or looked way too complicated. So I turned to the swiss army knife of image manipulation, ImageMagick. It turns out one simple command does the trick. By taking the maximum of the pixels from each image, you will end up with all the star trails visible in the composite image. Obviously you need to be careful, since this will also apply to the foreground of the pictures, so you need to make sure those are nearly perfectly identical (in my case you can see a bit of ghosting on the clocktower, the camera must have moved by a tiny amount between the two exposures).

![The stacked photo](/images/star-stacking/result.jpg)

Hopefully I'll get another clear sky in the near future, and I'll be able to apply what I've learned with this initial experience and create a better sequence of photographs.
