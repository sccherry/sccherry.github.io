---
layout: code.njk
title: Base styles
date: 2019-06-19
tags:
  - code
html:
  lang: html
css:
  lang: css
  code: >-
    /* Variables
      ========================================================================== */

    /**
     * Typography
     */

    :root {
      --font-family: system-ui;
      --font-family-monospace: menlo, consolas, roboto mono, ubuntu monospace, oxygen mono, liberation mono, monospace;
    }


    /**
     * Modular scale
     */

    :root {
      --modular-scale-ratio: 1.618; /* Golden ratio */
      --modular-scale-0: 1rem;
      --modular-scale--1: calc(var(--modular-scale-0) / var(--modular-scale-ratio));
      --modular-scale--2: calc(var(--modular-scale--1) / var(--modular-scale-ratio));
      --modular-scale-1: calc(var(--modular-scale-0) * var(--modular-scale-ratio));
      --modular-scale-2: calc(var(--modular-scale-1) * var(--modular-scale-ratio));
      --modular-scale-3: calc(var(--modular-scale-2) * var(--modular-scale-ratio));
    }


    /**
     * Vertical rhythm
     */

    :root {
      --vertical-rhythm-base: 1.5;
      --vertical-rhythm-1: calc(var(--vertical-rhythm-base) * var(--modular-scale-0));
    }


    /**
     * Colors
     * https://yeun.github.io/open-color
     */

    :root {
      --color-gray-0: hsl(210, 17%, 98%);
      --color-gray-1: hsl(210, 17%, 95%);
      --color-gray-2: hsl(210, 16%, 93%);
      --color-gray-3: hsl(210, 14%, 89%);
      --color-gray-4: hsl(210, 14%, 83%);
      --color-gray-5: hsl(210, 11%, 71%);
      --color-gray-6: hsl(210, 7%, 56%);
      --color-gray-7: hsl(210, 9%, 31%);
      --color-gray-8: hsl(210, 10%, 23%);
      --color-gray-9: hsl(210, 11%, 15%);
      --color-red-0: hsl(0, 100%, 98%);
      --color-red-1: hsl(0, 100%, 95%);
      --color-red-2: hsl(0, 100%, 89%);
      --color-red-3: hsl(0, 100%, 83%);
      --color-red-4: hsl(0, 100%, 76%);
      --color-red-5: hsl(0, 100%, 71%);
      --color-red-6: hsl(0, 94%, 65%);
      --color-red-7: hsl(0, 86%, 59%);
      --color-red-8: hsl(0, 74%, 54%);
      --color-red-9: hsl(0, 65%, 48%);
      --color-pink-0: hsl(336, 100%, 97%);
      --color-pink-1: hsl(336, 100%, 94%);
      --color-pink-2: hsl(338, 91%, 87%);
      --color-pink-3: hsl(339, 90%, 81%);
      --color-pink-4: hsl(339, 88%, 74%);
      --color-pink-5: hsl(339, 82%, 67%);
      --color-pink-6: hsl(339, 76%, 59%);
      --color-pink-7: hsl(339, 67%, 52%);
      --color-pink-8: hsl(339, 68%, 45%);
      --color-pink-9: hsl(339, 69%, 38%);
      --color-grape-0: hsl(280, 67%, 96%);
      --color-grape-1: hsl(287, 77%, 92%);
      --color-grape-2: hsl(288, 86%, 86%);
      --color-grape-3: hsl(289, 85%, 78%);
      --color-grape-4: hsl(288, 83%, 71%);
      --color-grape-5: hsl(288, 75%, 64%);
      --color-grape-6: hsl(288, 67%, 58%);
      --color-grape-7: hsl(288, 56%, 52%);
      --color-grape-8: hsl(288, 54%, 46%);
      --color-grape-9: hsl(288, 54%, 40%);
      --color-violet-0: hsl(252, 100%, 97%);
      --color-violet-1: hsl(257, 100%, 93%);
      --color-violet-2: hsl(256, 100%, 87%);
      --color-violet-3: hsl(255, 94%, 79%);
      --color-violet-4: hsl(255, 93%, 72%);
      --color-violet-5: hsl(255, 91%, 67%);
      --color-violet-6: hsl(255, 86%, 63%);
      --color-violet-7: hsl(255, 78%, 60%);
      --color-violet-8: hsl(255, 67%, 55%);
      --color-violet-9: hsl(255, 53%, 50%);
      --color-indigo-0: hsl(223, 100%, 96%);
      --color-indigo-1: hsl(225, 100%, 93%);
      --color-indigo-2: hsl(228, 100%, 86%);
      --color-indigo-3: hsl(228, 100%, 78%);
      --color-indigo-4: hsl(228, 96%, 72%);
      --color-indigo-5: hsl(228, 94%, 67%);
      --color-indigo-6: hsl(228, 89%, 63%);
      --color-indigo-7: hsl(228, 81%, 59%);
      --color-indigo-8: hsl(228, 69%, 55%);
      --color-indigo-9: hsl(230, 57%, 50%);
      --color-blue-0: hsl(205, 100%, 95%);
      --color-blue-1: hsl(206, 100%, 91%);
      --color-blue-2: hsl(206, 100%, 82%);
      --color-blue-3: hsl(206, 96%, 72%);
      --color-blue-4: hsl(207, 91%, 64%);
      --color-blue-5: hsl(207, 86%, 57%);
      --color-blue-6: hsl(208, 80%, 52%);
      --color-blue-7: hsl(208, 77%, 47%);
      --color-blue-8: hsl(209, 77%, 43%);
      --color-blue-9: hsl(209, 75%, 38%);
      --color-cyan-0: hsl(185, 81%, 94%);
      --color-cyan-1: hsl(185, 84%, 88%);
      --color-cyan-2: hsl(186, 77%, 77%);
      --color-cyan-3: hsl(187, 74%, 65%);
      --color-cyan-4: hsl(187, 69%, 55%);
      --color-cyan-5: hsl(188, 72%, 47%);
      --color-cyan-6: hsl(187, 80%, 42%);
      --color-cyan-7: hsl(188, 83%, 37%);
      --color-cyan-8: hsl(189, 85%, 32%);
      --color-cyan-9: hsl(189, 85%, 28%);
      --color-teal-0: hsl(161, 79%, 95%);
      --color-teal-1: hsl(160, 85%, 87%);
      --color-teal-2: hsl(162, 78%, 77%);
      --color-teal-3: hsl(162, 72%, 65%);
      --color-teal-4: hsl(162, 68%, 54%);
      --color-teal-5: hsl(162, 73%, 46%);
      --color-teal-6: hsl(162, 82%, 40%);
      --color-teal-7: hsl(162, 87%, 35%);
      --color-teal-8: hsl(162, 88%, 30%);
      --color-teal-9: hsl(162, 88%, 26%);
      --color-green-0: hsl(131, 67%, 95%);
      --color-green-1: hsl(128, 76%, 90%);
      --color-green-2: hsl(128, 71%, 82%);
      --color-green-3: hsl(129, 68%, 73%);
      --color-green-4: hsl(130, 61%, 64%);
      --color-green-5: hsl(130, 57%, 56%);
      --color-green-6: hsl(131, 50%, 50%);
      --color-green-7: hsl(131, 53%, 46%);
      --color-green-8: hsl(131, 54%, 40%);
      --color-green-9: hsl(132, 52%, 35%);
      --color-lime-0: hsl(79, 81%, 94%);
      --color-lime-1: hsl(80, 83%, 88%);
      --color-lime-2: hsl(81, 81%, 80%);
      --color-lime-3: hsl(82, 75%, 69%);
      --color-lime-4: hsl(83, 73%, 59%);
      --color-lime-5: hsl(84, 69%, 51%);
      --color-lime-6: hsl(85, 74%, 45%);
      --color-lime-7: hsl(85, 79%, 40%);
      --color-lime-8: hsl(86, 84%, 36%);
      --color-lime-9: hsl(85, 84%, 32%);
      --color-yellow-0: hsl(50, 100%, 93%);
      --color-yellow-1: hsl(49, 100%, 87%);
      --color-yellow-2: hsl(49, 100%, 80%);
      --color-yellow-3: hsl(48, 100%, 70%);
      --color-yellow-4: hsl(47, 100%, 62%);
      --color-yellow-5: hsl(45, 97%, 54%);
      --color-yellow-6: hsl(42, 96%, 50%);
      --color-yellow-7: hsl(39, 100%, 48%);
      --color-yellow-8: hsl(35, 100%, 47%);
      --color-yellow-9: hsl(31, 100%, 45%);
      --color-orange-0: hsl(34, 100%, 95%);
      --color-orange-1: hsl(33, 100%, 90%);
      --color-orange-2: hsl(33, 100%, 83%);
      --color-orange-3: hsl(32, 100%, 74%);
      --color-orange-4: hsl(31, 100%, 65%);
      --color-orange-5: hsl(29, 100%, 58%);
      --color-orange-6: hsl(27, 98%, 54%);
      --color-orange-7: hsl(24, 94%, 50%);
      --color-orange-8: hsl(21, 90%, 48%);
      --color-orange-9: hsl(17, 87%, 45%);
    }


    /* Document
      ========================================================================== */

    *,

    ::before,

    ::after {
      box-sizing: inherit;
      overflow: inherit;
    }


    /**
     * 1. Add text decoration inheritance in all browsers (opinionated).
     * 2. Add vertical alignment inheritance in all browsers (opinionated).
     */

    ::before,

    ::after {
      text-decoration: inherit; /* 1 */
      vertical-align: inherit; /* 2 */
    }


    /**
     * Remove the margin in all browsers (opinionated).
     */

    * {
      margin: 0;
    }


    /**
     * Add default margin to all elements.
     * https://alistapart.com/article/axiomatic-css-and-lobotomized-owls
     */

    * + * {
      margin-block-start: var(--vertical-rhythm-1, 1.5em);
    }


    /**
     * Only display focus style for keyboard interactions.
     */
    :focus:not(:focus-visible) {
      outline: none;
    }


    /**
     * Turn on kerning, standard ligatures, and proportional, oldstyle numerals.
     * Turn off all other ligatures, tabular, lining numerals, and alternates.
     */

    html,

    body {
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0;
    }


    /**
     * 1. Use the default cursor in all browsers (opinionated).
     * 2. Change the line height in all browsers (opinionated).
     * 3. Use a 4-space tab width in all browsers (opinionated).
     * 4. Remove the grey highlight on links in iOS (opinionated).
     * 5. Prevent adjustments of font size after orientation changes in
     *    IE on Windows Phone and in iOS.
     * 6. Breaks words to prevent overflow in all browsers (opinionated).
     * 7. Add border box sizing in all browsers (opinionated).
     * 8. Add auto overflow in all browsers (opinionated).
     *    https://bocoup.com/blog/new-overflow-default
     */

    html {
      box-sizing: border-box; /* 7 */
      overflow: auto; /* 8 */
      cursor: default; /* 1 */
      color: var(--color-gray-9, #222);
      font-family: var(--font-family, sans-serif);
      font-size: var(--modular-scale-0, 1rem);
      line-height: var(--vertical-rhythm-base, 1.5); /* 2 */
      -moz-tab-size: 4; /* 3 */
          tab-size: 4; /* 3 */
      -webkit-tap-highlight-color: transparent /* 4 */;
          -ms-text-size-adjust: 100%; /* 5 */
      -webkit-text-size-adjust: 100%; /* 5 */
      word-break: break-word; /* 6 */
    }


    @media print {
       *,
       *::before,
       *::after {
        background: transparent !important;
        color: #000 !important;

        /* Black prints faster */
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        text-shadow: none !important;
      }
    }


    /* Sections
      ========================================================================== */

    /**
     * Remove the margin in all browsers (opinionated).
     */

    body {
      margin-block-start: 0;
    }


    /**
     * Render the `main` element consistently in IE.
     */

    main {
      display: block;
    }


    /**
     * Turn on discretionary ligatures for larger headings.
     */

    h1,

    h2,

    h3 {
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 1;
    }


    /**
     * Use modular scale for headings sizes.
     */

    h1 {
      font-size: var(--modular-scale-3);
    }


    h2 {
      font-size: var(--modular-scale-2);
    }


    h3 {
      font-size: var(--modular-scale-1);
    }


    h4 {
      font-size: var(--modular-scale-0);
    }


    h5 {
      font-size: var(--modular-scale--1);
    }


    h6 {
      font-size: var(--modular-scale--2);
    }


    @media print {
      h2,
      h3 {
        orphans: 3;
        widows: 3;
      }

      h2,
      h3 {
        page-break-after: avoid;
      }
    }


    /* Grouping content
      ========================================================================== */

    /**
     * Smartly align text.
     * http://nocode.in/aligning-text-smartly-in-css
     */

    figure {
      text-align: center;
    }


    figcaption {
      display: inline-block;
      text-align: start;
    }


    /**
     * 1. Add the correct box sizing in Firefox.
     * 2. Show the overflow in Edge 19- and IE.
     * 3. A better looking default horizontal rule.
     */

    hr {
      height: 0; /* 1 */
      overflow: visible; /* 2 */
      border: 0; /* 3 */
      border-block-start: 1px solid currentColor; /* 3 */
    }


    /**
     * Remove the list style on navigation lists in all browsers (opinionated).
     */

    nav ol,

    nav ul {
      list-style: none;
      padding: 0;
    }


    /**
     * 1. Use the default monospace user interface font
     *    in all browsers (opinionated).
     * 2. Correct the odd `em` font sizing in all browsers.
     * 3. Turn off kerning and ligatures,
     *    turn on lining, tabular numerals, slashed zero.
     */

    pre {
      font-family: var(--font-family-monospace, monospace, monospace); /* 1 */
      font-size: var(--modular-scale-0, 1em); /* 2 */
      font-feature-settings: "kern" 0, "liga" 0, "calt" 1, "dlig" 0, "pnum" 0, "tnum" 1, "onum" 0, "lnum" 1, "zero" 1; /* 3 */
    }


    @media print {
      pre {
        white-space: pre-wrap !important;
        border: 1px solid #999;
        page-break-inside: avoid;
      }
    }


    /* Text-level semantics
      ========================================================================== */

    /**
     * Hang numbers.
     * https://github.com/kennethormandy/dodging-bullets
     */

    ol {
      counter-reset: li;
    }


    ol > li {
      position: relative;
      list-style: none;
    }


    ol > li::before {
      position: absolute;
      padding-inline-end: 0.5em;
      text-align: end;
      transform: translateX(-100%);
      content: counter(li) ".";
      counter-increment: li;
      font-feature-settings: "kern" 0, "tnum" 1, "onum" 1, "liga" 1;
    }


    /**
     * Remove the margin in all browsers (opinionated).
     */

    li,

    dd {
      margin-block-start: 0;
    }


    /**
     * 1. Remove the gray background on active links in IE 10.
     * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
     */

    a {
      color: var(--color-blue-5, #00e);
      background-color: transparent; /* 1 */

      /* transition: color 0.15s; */
      -webkit-text-decoration-skip: objects; /* 2 */
      text-decoration-skip: auto; /* 1 */
    }


    /**
     * 1. Change all letters to uppercase.
     * 2. Turn on small caps for upper and lowercase letters.
     */

    abbr {
      text-transform: uppercase; /* 1 */
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "smcp" 1, "c2sc" 1; /* 2 */
    }


    /**
     * 1. Remove the bottom border in Chrome 57-
     * 2. Add the correct text decoration in Chrome, Edge 19-, IE, Opera, and Safari.
     */

    abbr[title] {
      border-block-end: none; /* 1 */
      text-decoration: underline; /* 2 */
      text-decoration: underline dotted; /* 2 */
    }


    /**
     * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
     */

    b,

    strong {
      font-weight: inherit;
    }


    /**
     * Add the correct font weight in Chrome, Edge, and Safari.
     */

    b,

    strong {
      font-weight: bolder;
    }


    /**
     * 1. Use the default monospace user interface font
     *    in all browsers (opinionated).
     * 2. Correct the odd `em` font sizing in all browsers.
     * 3. Turn off kerning and ligatures,
     *    turn on lining, tabular numerals, slashed zero.
     */

    code,

    kbd,

    samp {
      font-family: var(--font-family-monospace, monospace, monospace); /* 1 */
      font-size: var(--modular-scale-0, 1em); /* 2 */
      font-feature-settings: "kern" 0, "liga" 0, "calt" 1, "dlig" 0, "pnum" 0, "tnum" 1, "onum" 0, "lnum" 1, "zero" 1; /* 3 */
    }


    /**
     * Add the correct font size in all browsers.
     */

    small {
      font-size: var(--modular-scale--1, 80%);
    }


    /**
     * Prevent `sub` and `sup` elements from affecting the line height in
     * all browsers.
     */

    sub,

    sup {
      font-size: 75%;

      /* line-height: 0; */

      /* position: relative; */
      vertical-align: baseline;
    }


    /**
     * 1. Turn on proper subscript numerals.
     */

    sub {
      /* inset-block-end: -0.25em; */
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0, "subs" 1; /* 1 */
    }


    /**
     * 1. Turn on proper supercript numerals.
     */

    sup {
      /* inset-block-start: -0.5em; */
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0, "sups" 1; /* 1 */
    }


    /**
     * https://css-tricks.com/time-element
     */

    time {
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0;
    }


    /**
     * 1. Inherit style issues with custom selections, per robsterlini.co.uk/journal/opentype-and-selection-dont-mix.
     * 2. Remove text-shadow in selection highlight:
     *    https://twitter.com/miketaylr/status/12228805301
     */

    ::selection {
      color: inherit; /* 1 */
      text-shadow: none; /* 2 */
      background-color: #b3d4fc;
    }


    @media print {
      a,
      a:visited {
        text-decoration: underline;
      }

      a[href]::after {
        content: " (" attr(href) ")";
      }

      abbr[title]::after {
        content: " (" attr(title) ")";
      }

      /**
       * Don't show links that are fragment identifiers,
       * or use the `javascript:` pseudo protocol
       */

      a[href^="#"]::after,
      a[href^="javascript:"]::after {
        content: "";
      }

      blockquote {
        border: 1px solid #999;
        page-break-inside: avoid;
      }

      p {
        orphans: 3;
        widows: 3;
      }
    }


    /* Embedded content
      ========================================================================== */

    /**
     * Change the alignment on media elements in all browsers (opinionated).
     */

    audio,

    canvas,

    iframe,

    img,

    svg,

    video {
      vertical-align: middle;
    }


    /**
     * Responsive utilities: https://github.com/mrmrs/fluidity.
     */

    img,

    canvas,

    iframe,

    video,

    svg {
      max-width: 100%;
      height: auto;
    }


    /**
     * Add the correct display in IE 9-.
     */

    audio,

    video {
      display: inline-block;
    }


    /**
     * Add the correct display in iOS 4-7.
     */

    audio:not([controls]) {
      display: none;
      height: 0;
    }


    /**
     * Remove the border on iframes in all browsers (opinionated).
     */

    iframe {
      border-style: none;
    }


    /**
     * Remove the border on images within links in IE 10-.
     */

    img {
      border-style: none;
    }


    /**
     * Change the fill color to match the text color in all browsers (opinionated).
     */

    svg:not([fill]) {
      fill: currentColor;
    }


    /**
     * Hide the overflow in IE.
     */

    svg:not(:root) {
      overflow: hidden;
    }


    @media print {
      img {
        page-break-inside: avoid;
      }
    }


    /* Tabular data
      ========================================================================== */

    /**
     * 1. Collapse border spacing in all browsers (opinionated).
     * 2. Turn on kerning, standard ligatures, and proportional, oldstyle numerals.
     *    Turn off all other ligatures, tabular, lining numerals, and alternates.
     */

    table {
      width: 100%;
      border-collapse: collapse; /* 1 */
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0; /* 2 */
    }


    /**
     * Turns on tabular, lining numerals and slashed zero.
     */

    tbody,

    caption {
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 0, "tnum" 1, "onum" 0, "lnum" 1, "zero" 1;
    }


    th {
      text-align: start;
    }


    @media print {
      /**
       * Printing Tables:
       * https://web.archive.org/web/20180815150934/http://css-discuss.incutio.com/wiki/Printing_Tables
       */

      thead {
        display: table-header-group;
      }

      tr {
        page-break-inside: avoid;
      }
    }


    /* Forms
      ========================================================================== */

    /**
     * Inherit styling in all browsers (opinionated).
     */

    button,

    input,

    optgroup,

    select,

    textarea {
      font-size: inherit;
      font-family: inherit;
      line-height: inherit;
    }


    /**
     * Responsive utilities: https://github.com/mrmrs/fluidity.
     */

    select,

    textarea {
      max-width: 100%;
    }


    /**
     * Show the overflow in IE.
     * 1. Show the overflow in Edge 19-.
     */

    button,

    input { /* 1 */
      overflow: visible;
    }


    /**
     * Remove the inheritance of text transform in Edge 19-, Firefox, and IE.
     * 1. Remove the inheritance of text transform in Firefox.
     */

    button,

    select { /* 1 */
      text-transform: none;
    }


    /**
     * Correct the inability to style clickable types in iOS and Safari.
     */

    button,

    [type="button"],

    [type="reset"],

    [type="submit"] {
      -webkit-appearance: button;
    }


    /**
     * Remove the inner border and padding of focus outlines in Firefox.
     */

    button::-moz-focus-inner,

    [type="button"]::-moz-focus-inner,

    [type="reset"]::-moz-focus-inner,

    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }


    /**
     * Restore the focus outline styles unset by the previous rule in Firefox.
     */

    button:-moz-focusring,

    [type="button"]:-moz-focusring,

    [type="reset"]:-moz-focusring,

    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }


    /**
     * 1. Change the inconsistent appearance in all browsers (opinionated).
     * 2. Correct the padding in Firefox.
     */

    fieldset {
      border: 1px solid currentColor; /* 1 */
      padding: 0.35em 0.75em 0.625em; /* 2 */
    }


    /**
     * 1. Correct the text wrapping in Edge 19- and IE.
     * 2. Correct the color inheritance from `fieldset` elements in IE.
     * 3. Remove the padding so developers are not caught out when they zero out
     *    `fieldset` elements in all browsers.
     */

    legend {
      color: inherit; /* 2 */
      display: table; /* 1 */
      max-width: 100%; /* 1 */
      padding: 0; /* 3 */
      white-space: normal; /* 1 */
    }


    /**
     * Remove the margin in all browsers (opinionated).
     */

    option,

    optgroup {
      margin-block-start: 0;
    }


    /**
     * 1. Add the correct display in Edge 19- and IE.
     * 2. Add the correct vertical alignment in Chrome, Edge, Firefox, and Opera.
     */

    progress {
      display: inline-block; /* 1 */
      vertical-align: baseline; /* 2 */
    }


    /**
     * 1. Remove the default vertical scrollbar in IE 10+.
     * 2. Change the resize direction in all browsers (opinionated).
     */

    textarea {
      width: 100%;
      overflow: auto; /* 1 */
      resize: vertical; /* 2 */
    }


    /**
     * Remove the padding in IE 10-.
     */

    [type="checkbox"],

    [type="radio"] {
      padding: 0;
    }


    /**
     * Correct the cursor style of increment and decrement buttons in Chrome and Safari.
     */

    [type="number"]::-webkit-inner-spin-button,

    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }


    /**
     * 1. Correct the odd appearance in Chrome, Edge, and Safari.
     * 2. Correct the outline style in Safari.
     */

    [type="search"] {
      -webkit-appearance: textfield; /* 1 */
      outline-offset: -2px; /* 2 */
    }


    /**
     * Correct the text style of placeholders in Chrome, Edge, and Safari.
     */

    ::-webkit-input-placeholder {
      color: inherit;
      opacity: 0.54;
    }


    /**
     * Remove the inner padding in Chrome, Edge, and Safari on macOS.
     */

    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }


    /**
     * 1. Correct the inability to style clickable types in iOS and Safari.
     * 2. Change font properties to `inherit` in Safari.
     */

    ::-webkit-file-upload-button {
      -webkit-appearance: button; /* 1 */
      font: inherit; /* 2 */
    }


    /**
     * Turns on lining, proportional numerals without clarified zeroes.
     */

    [type="color"],

    [type="date"],

    [type="datetime"],

    [type="datetime-local"],

    [type="number"],

    [type="range"],

    [type="tel"],

    [type="week"] {
      font-feature-settings: "kern" 0, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 0, "lnum" 1, "zero" 0; /* 1 */
    }


    /**
     * Remove the additional :invalid styles in Firefox.
     */

    :-moz-ui-invalid {
      box-shadow: none;
    }


    @media print {
      form {
        display: none;
      }
    }


    /* Interactive
      ========================================================================== */

    /**
     * Add the correct display in Edge 19-, IE 10+, and Firefox.
     * http://www.smashingmagazine.com/2014/11/28/complete-polyfill-html5-details-element
     */

    details {
      display: block;
    }


    /**
     * Add the correct styles in Edge 19-, IE, and Safari.
     */

    dialog {
      background-color: white;
      border: solid;
      color: black;
      display: block;
      height: -moz-fit-content;
      height: -webkit-fit-content;
      height: fit-content;
      inset-inline-start: 0;
      margin: auto;
      padding: 1em;
      position: absolute;
      inset-inline-end: 0;
      width: -moz-fit-content;
      width: -webkit-fit-content;
      width: fit-content;
    }


    dialog:not([open]) {
      display: none;
    }


    /**
     * Add the correct display in all browsers.
     */

    summary {
      display: list-item;
    }


    /**
     * https://css-tricks.com/html5-meter-element
     */
    meter {

    }


    /* Scripting
      ========================================================================== */

    /**
     * Add the correct display in IE 9-.
     */

    canvas {
      display: inline-block;
    }


    /**
     * Add the correct display in IE 10+.
     */

    template {
      display: none;
    }


    /* User interaction
      ========================================================================== */

    /**
     * 1. Remove the tapping delay in IE 10.
     * 2. Remove the tapping delay on clickable elements
          in all browsers (opinionated).
     */

    a,

    area,

    button,

    input,

    label,

    select,

    summary,

    textarea,

    [tabindex] {
      -ms-touch-action: manipulation; /* 1 */
      touch-action: manipulation; /* 2 */
    }


    /**
     * Add the correct display in IE 10-.
     * https://meowni.ca/hidden.is.a.lie.html
     */

    [hidden] {
      display: none !important;
    }


    /* Accessibility
      ========================================================================== */

    /**
     * Change the cursor on busy elements in all browsers (opinionated).
     */

    [aria-busy="true"] {
      cursor: progress;
    }


    /**
     * Change the cursor on control elements in all browsers (opinionated).
     */

    [aria-controls] {
      cursor: pointer;
    }


    /**
     * Change the cursor on disabled, not-editable, or otherwise
     * inoperable elements in all browsers (opinionated).
     */

    [aria-disabled="true"],

    [disabled] {
      cursor: not-allowed;
    }


    /**
     * Change the display on visually hidden accessible elements
     * in all browsers (opinionated).
     * http://juicystudio.com/article/screen-readers-display-none.php
     * http://snook.ca/archives/html_and_css/hiding-content-for-accessibility
     */

    [aria-hidden="false"][hidden] {
      display: initial;
    }


    [aria-hidden="false"][hidden]:not(:focus) {
      clip: rect(0, 0, 0, 0);
      position: absolute;
    }


    /**
     * Override default margin.
     */

    [hidden][aria-hidden="false"] + * {
      margin-block-start: 0;
    }
js:
  lang: javascript
published: false
---
https://necolas.github.io/normalize.css/8.0.1/normalize.css
https://csstools.github.io/sanitize.css/10.0.0/sanitize.css
https://raw.githubusercontent.com/kennethormandy/normalize-opentype.css/v0.2.4/normalize-opentype.css
https://raw.githubusercontent.com/h5bp/html5-boilerplate/v7.2.0/dist/css/main.css
https://github.com/benfrain/app-reset/blob/master/app-reset.css\
https://css-tricks.com/the-focus-visible-trick/