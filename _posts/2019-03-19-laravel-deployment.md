---
layout: post
title: Laravel deployment over FTP (with config cache and migrations)
comments: true
---
Laravel offers a nice development environment with the Homestead virtual machine, but the deployment is a different story. You might want to publish your site on a shared hosting service which only offers FTP access to your server. This is the situation I faced, and I couldn't find a complete tutorial (everyone seems to assume SSH access), so I decided to share my workflow.

## 1. Setting up the database

If you have FTP access, you can upload phpmyadmin on your host to make database manipulation easier, but if you're only planning to use it once, you can do it with a single PHP file that executes your database setup script when called.

You can get the SQL code from your development environment using the `--pretend` switch on the migrate command. Make sure to reset all of your migrations before executing this so that you get the full SQL code.

```
php artisan migrate:reset
php artisan migrate --pretend > database_up.sql
```

You might have to make some modifications by hand on this file, like removing the migration labels, adding semicolons and [changing key sizes](https://stackoverflow.com/q/1814532/3680834) (depending on your MySQL version).

## 2. Caching settings

If you want to take advantage of config caching, you will have to create a `.env` file that contains your production details. After this is done, you can run the `php artisan config:cache` command, you will only face one problem.

You need to change the absolute paths in `bootstrap/cache/config.php` to ones that will match the absolute path on the shared server. You can try to get this absolute path from your error logs, or again by uploading a specially created PHP file that echoes its location when executed.

## 3. Installing dependencies

This step is quite straightforward, you can just run `npm run prod` and `composer install --optimize-autoloader --no-dev`, no need to modify anything afterwards.

## 4. Uploading files

Your shared host probably has a `www` or `public_html` folder it expects you to upload your files in. You don't actually upload your Laravel app inside this folder, because that opens the possibility of attackers opening and extracting information from your files.

The way to go is to create a new folder (e.g. `my_application`) next to this one on the server, and upload all your files into that (you don't need to upload `node_modules`). The only exception is your app's `public` folder, this one needs to go in the designated directory (`public_html` in my case).

This means that you need to make one final modification, edit the paths in `public/index.php` to reflect the new directory structure (essentially add a `../` at the start of the paths).

And this should be it! Let me know how it went, or what you needed to do differently!
