# webextension-referrer

Feature:

+ Toggle on or off sending `Referer:` header

It's safe. You can view the source which is concise. You can build it yourself by following the development and build instructions. It's also good if you just want a base to build your own extension on.

Note: "Referer:" header is a mispelling in the HTTP specification. We call this webextension-referrer with two "r" characters.

## Table of Contents

+ [Development](#development)
+ [Build](#build)
+ [Todo](#todo)
+ [Copying, license, and contributing](#copying-license-and-contributing)

## Development

```sh
npm run dev
```

## Build

```sh
npm run prd
```

## Todo

Load `./dist` into your browser.

For the future

+ [Pack extension for Chrome](https://www.adambarth.com/experimental/crx/docs/packaging.html). Zip and sign the extension for distribution.

## Copying, license, and contributing

Copyright (C) Tony Crowe 2020 <https://tcrowe.github.io/contact/>

Thank you for using and contributing to make webextension-referrer better.

⚠️ Please run `npm run prd` before submitting a patch.

⚖️ webextension-referrer is Free Software protected by the GPL 3.0 license. See [./COPYING](./COPYING) for more information. (free as in freedom)
