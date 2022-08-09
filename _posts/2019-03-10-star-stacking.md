---
layout: post
title: Star stacking with a single command
---
If you're only here for the technical TL;DR:

    convert *.jpg -evaluate-sequence Max result.jpg

***

A while ago I tried to create star trail photographs for the first time. Although the pictures didn't turn out great, I thought I would share the technique I used for stacking them, because it's surprisingly easy.

Initially I looked for dedicated star stacking software, but everything I found was either not available for Linux, massively outdated, or not free.

It turns out you can use the swiss army knife of cross-platform image manipulation, [ImageMagick](https://www.imagemagick.org/) to achieve great results.

If your pictures are aligned pixel-perfectly, the only thing you need to do is to get the maximum value for each pixel across all the pictures. This will preserve all the small fragments of trails from each picture for the product image.

Here are my examples:

The first picture has an exposure time of 256 seconds (f3.5, ISO 200):

![The first picture](/images/star-stacking/pic1.jpg)

The second one is exactly 600 seconds long (f3.5, ISO 200):

![The second picture](/images/star-stacking/pic2.jpg)

And the result, the above two pictures stacked using the command `convert *.jpg -evaluate-sequence Max result.jpg`:

![The stacked photo](/images/star-stacking/result.jpg)

Even though the result is not very impressive, and the two partial images are not even perfectly aligned (which they need to be for this simple technique to work), I think it still looks pretty cool.

Hopefully I'll get another clear sky in the near future, and I'll be able to apply what I've learned with this initial experience and create a better sequence of photographs.
