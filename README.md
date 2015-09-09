# Magebase

> A simple Magento front end project base

Forms the starting point for a child theme of the RWD default theme, and broadly follows [these instructions](http://devdocs.magento.com/guides/m1x/ce19-ee114/RWD_dev-guide.html). The Grunt workflow is based on [Gruntbase](https://github.com/gpmd/gruntbase).

It inherits all the styles and functionality of the Magento RWD theme. Please refer to the Magento developer docs above for more information on how to develop your own child theme of the RWD theme.

## Clone the repo

```
git clone https://github.com/gpmd/magebase.git .
```

Then merge the files/folders into your own Magento project.

**Note:** Magebase assumes the Git root of your project is one level down from your web root (usually `public_html`).

## First time setup

Magebase comes packaged with a couple of scripts that set up some Git hooks and run the front end build process for the first time.

```
chmod +x setup.sh
./setup.sh
```

## Build options

### Build script

Runs NPM, Bower and default (prod) Grunt build.

```
./bin/build.sh
```

### Grunt

**Development mode:**

```
grunt --env=dev
```

**Production mode:**

```
grunt --env=prod
```

**Styles reporting (SCSS lint / CSS stats) mode:**

```
grunt report
```

---

Created by [Matt Bailey](http://mattbailey.io/).
