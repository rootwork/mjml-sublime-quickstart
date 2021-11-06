<h1 align="center">
  <a href="https://github.com/premail/premail">
    <img src="docs/images/logo.svg" alt="Premail" width="500" height="250">
  </a>
</h1>

<div align="center">
  <strong>Premail is an easy-to-use build system for MJML, the email templating
  language, based on Gulp and Handlebars.</strong><br />
  <!-- <a href="#about"><strong>Explore the screenshots »</strong></a>
  <br /> -->
  <br />
  <a href="https://github.com/premail/premail/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  &bullet;
  <a href="https://github.com/premail/premail/issues/new?assignees=&labels=new-feature&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  &bullet;
  <a href="https://github.com/premail/premail/issues/new?assignees=&labels=support-question&template=04_SUPPORT_QUESTION.md&title=support%3A+">Ask a Question</a>
</div>

<div align="center">
<br />

[![License: AGPL-3.0+](https://img.shields.io/github/license/premail/premail?style=flat-square&color=blue)](LICENSE)
[![Pull Requests welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/premail/premail/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)

![Checks](https://img.shields.io/github/checks-status/premail/premail/main.svg?style=flat-square)
[![Node ^12.22.1](https://img.shields.io/badge/node-%5E12.22.1-brightgreen.svg?style=flat-square)](https://nodejs.org/en/download/)
[![MJML 4.0+ valid](https://img.shields.io/badge/mjml-4%2B-brightgreen.svg?style=flat-square)](https://github.com/mjmlio/mjml/releases)
[![Code style: JS Standard](https://img.shields.io/badge/code_style-standard-blue.svg?style=flat-square)](https://standardjs.com)
[![Code format: Prettier](https://img.shields.io/badge/code_format-prettier-blue.svg?style=flat-square)](https://github.com/prettier/prettier)

[![Twitter: @premaildev](https://img.shields.io/badge/Twitter-%40premaildev-%231da1f2?style=flat-square)](https://twitter.com/premaildev)
[![Coded with love by premail](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-premail-ff1414.svg?style=flat-square)](https://github.com/premail)

</div>

---

[MJML](https://mjml.io/) is a markup language for writing bulletproof HTML
emails. It consciously does not incorporate a build process. This is one such
build process.

Premail is component-based, and uses Handlebars for templating. Settings are
defined in YAML configuration files, and theming happens in a theme
configuration file as well as (optionally) Sass files.

Email templates are all [valid](https://mjml.io/documentation/#validating-mjml)
under [MJML version 4](https://github.com/mjmlio/mjml/releases).

One `index.html` file will be rendered, as well as (optionally) a plain-text
version, ready to import into your emailer of choice.

---

<!-- The following section, from "ts" to "te", is an automatically-generated
  table of contents, updated whenever this file changes. Do not edit within
  this section. -->
<!-- prettier-ignore-start -->

<!--ts-->
* [Overview](#overview)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Custom MJML components](#custom-mjml-components)
* [Roadmap](#roadmap)
* [Support](#support)
* [Project assistance](#project-assistance)
   * [Contributing](#contributing)
   * [Security](#security)
* [Thanks and Sponsorships](#thanks-and-sponsorships)
* [License](#license)

<!-- Added by: runner, at: Sat Nov  6 02:53:43 UTC 2021 -->

<!--te-->
<!-- prettier-ignore-end -->

---

# Overview

**[A quick introduction to Premail](https://premail.dev/docs/introduction-to-premail/)**

# Features

- MJMLv4-standard bulletproof code that will look its best across all email
  clients, reduced to the smallest possible size. CSS is inlined and HTML is
  minified as with all MJML, but we also add some extra checks, for instance, to
  make sure emojis are properly escaped and the file size doesn't hit Gmail's
  clipping limit.

- Component-based templates that allow you to separate out things that don't
  often change (navigation menus, social media links, unsubscribe text) and
  things that will usually change (a header or banner, preheader text, and the
  main body of the email).

- You can create multiple designs, and each time you create a new email you can
  choose from among your existing designs. This allows you to keep the structure
  of the design and the content of the email separate, and reduces errors.

- As you're creating a design or crafting a new email, you can use a `watch`
  task to automatically recompile the result.

- Within each design, the CSS (created in [Sass files](https://sass-lang.com/))
  is automatically inlined in the HTML, thanks to MJML. Additionally, stub files
  exist for including pseudo-CSS styles (such as hover states) for email clients
  that support them, as well as styles specifically targeting Gmail.

- A plain-text version of your email is optionally created, and Premail does a
  much better job than most email services at rendering it. While only a small
  number of your recipients will see the plain-text version,
  [they are important for email deliverability](https://www.litmus.com/blog/best-practices-for-plain-text-emails-a-look-at-why-theyre-important/).
  Within the plain-text version options, you can easily control whether certain
  elements like navigation or header/banner areas are included.

- Configuration files are written in [YAML](https://blog.stackpath.com/yaml/),
  making them easy to read, and comments -- with links to relevant resources --
  are included throughout.

- Perfectly structured for including in a git repo -- don't rely on your email
  service provider to keep an archive of your past emails! And
  [Prettier](https://prettier.io/) is included to automatically clean up
  template formatting for easier file-diffing.

When it comes to the content of your emails, optional enhancements can be
controlled per-email:

- Transforming quotes, apostrophes, and dashes to their correct typographical
  versions; optical character alignment; and true small-caps formatting with
  [Detergent](https://codsen.com/os/detergent) and
  [Typeset](https://github.com/davidmerfield/typeset#readme).
- Enforcing
  [proper image `alt` tags](https://support.siteimprove.com/hc/en-gb/articles/115000013031-Accessibility-Image-Alt-text-best-practices)
  and making sure the supplied text doesn't break email code parsers.
- [Padding preview/preheader text](https://www.goodemailcode.com/email-code/preheader)
  to prevent things like navigation menu items from being visible in a
  recipient's inbox.

Feel free to
[make suggestions for more enhancements!](https://github.com/premail/premail/issues/new?assignees=&labels=new-feature&template=02_FEATURE_REQUEST.md&title=feat%3A+)

# Setup

`npm install -g premail`

That's it!

See [setting up Premail](https://premail.dev/docs/overview/setting-up-premail/)
for the details.

# Usage

Run `premail -h` to see all of the available options, then head over to the
[Premail Usage Guide](https://premail.dev/docs/overview/usage/create-new-premail-project/)
for a step-by-step walkthrough.

# Custom MJML components

Premail includes some
[MJML custom components](https://documentation.mjml.io/#creating-a-component)
for common use cases:

- **[MJML Bullet List](https://premail.dev/docs/components/mjml-bullet-list/)**
- **[MJML Signoff](https://premail.dev/docs/components/mjml-signoff/)**

# Roadmap

See the [open issues](https://github.com/premail/premail/issues) for a list of
proposed features and known issues, and
[projects](https://github.com/premail/premail/projects?query=is%3Aopen+sort%3Aupdated-desc)
to see them grouped by major release.

- [Top feature requests](https://github.com/premail/premail/issues?q=label%3Anew-feature+is%3Aopen+sort%3Areactions-%2B1-desc)
  (Add your votes using the 👍 reaction)
- [Top bugs](https://github.com/premail/premail/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Areactions-%2B1-desc)
  (Add your votes using the 👍 reaction)
- [Newest bugs](https://github.com/premail/premail/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

# Support

**[Ask a support question](https://github.com/premail/premail/issues/new?assignees=&labels=support-question&template=04_SUPPORT_QUESTION.md&title=support%3A+)** on GitHub if you're stuck.

# Project assistance

If you want to say **thank you** and/or support active development of Premail:

- 🌟 Add a [GitHub Star](https://github.com/premail/premail) to the project.
- Tweet about Premail ([@premaildev](https://twitter.com/premaildev) on
  Twitter).
- Consider [sponsoring rootwork](https://github.com/sponsors/rootwork),
  Premail's developer, and have
  [your name or logo included here](/sponsors/)!
- Blog about the project. We love reviews, and are eager to hear ways we could
  make things even better.

## Contributing

First off, thanks for taking the time to contribute! Contributions are what make
the open-source community such an amazing place to learn, inspire, and create.
Any contributions you make will benefit everybody else and are **greatly
appreciated**.

Please read [our contribution guidelines](https://premail.dev/contributing/), and thank you
for being involved!

## Security

Legalese: Premail is provided **"as is"** without any warranty. Use at your own
risk.

_For more information and to report security issues, please refer to our
[security documentation](https://premail.dev/security/)._

# Thanks and Sponsorships

<a href="https://www.multietch.com/"><img src="docs/images/sponsors/multietch.jpg" alt="Multi-Etch" width="75" height="75" align="left"></a>Work
funded in part by <a href="https://www.multietch.com/">Multi-Etch,
LLC</a>.<br />

**Consider [sponsoring rootwork](https://github.com/sponsors/rootwork),
Premail's developer, and have your name or logo included here!**

<!-- The following section is automatically-generated. Do not edit. -->
<!-- prettier-ignore-start -->
<!-- sponsors --><!-- sponsors -->
<!-- prettier-ignore-end -->

# License

This project is licensed under the **GNU Affero General Public License v3.0**.

See [LICENSE](LICENSE) for more information.
