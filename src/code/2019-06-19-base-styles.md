---
layout: code.njk
title: Base styles
date: 2019-06-19
published: false
tags:
  - code
html:
  lang: html
  code: ""
css:
  lang: css
  code: >-
    /* Variables
     * ========================================================================== *

    /**
     * Typography
     */

    :root {
      --font-family: system-ui,
        /* macOS 10.11-10.12 */ -apple-system,
        /* Windows 6+ */ 'Segoe UI',
        /* Android 4+ */ 'Roboto',
        /* Ubuntu 10.10+ */ 'Ubuntu', 
        /* Gnome 3+ */ 'Cantarell',
        /* KDE Plasma 5+ */ 'Noto Sans',
        /* fallback */ sans-serif,
        /* macOS emoji */ 'Apple Color Emoji',
        /* Windows emoji */ 'Segoe UI Emoji',
        /* Windows emoji */ 'Segoe UI Symbol',
        /* Linux emoji */ 'Noto Color Emoji';
      --font-family-monospace: /* macOS 10.10+ */ "Menlo",
        /* Windows 6+ */ "Consolas",
        /* Android 4+ */ "Roboto Mono",
        /* Ubuntu 10.10+ */ "Ubuntu Monospace",
        /* KDE Plasma 5+ */ "Noto Mono",
        /* KDE Plasma 4+ */ "Oxygen Mono",
        /* Linux/OpenOffice fallback */ "Liberation Mono",
        /* fallback */ monospace,
        /* macOS emoji */ "Apple Color Emoji",
        /* Windows emoji */ "Segoe UI Emoji",
        /* Windows emoji */ "Segoe UI Symbol",
        /* Linux emoji */ "Noto Color Emoji";
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
     * ========================================================================== */

    *,

    ::before,

    ::after {
      box-sizing: inherit;
    }


    /**
     * 1. Remove animations when motion is reduced (opinionated).
     * 2. Remove fixed background attachments when motion is reduced (opinionated).
     * 3. Remove timed scrolling behaviors when motion is reduced (opinionated).
     * 4. Remove transitions when motion is reduced (opinionated).
     */

    @media (prefers-reduced-motion: reduce) {
      *,
      ::before,
      ::after {
        animation-delay: -1ms !important; /* 1 */
        animation-duration: 1ms !important; /* 1 */
        animation-iteration-count: 1 !important; /* 1 */
        background-attachment: initial !important; /* 2 */
        scroll-behavior: auto !important; /* 3 */
        transition-delay: 0s !important; /* 4 */
        transition-duration: 0s !important; /* 4 */
      }
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
     */

    html {
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
      box-sizing: border-box; /* 7 */
    }


    /**
     * Smooth scroll, except for find on page.
     */

    html:focus-within {
      scroll-behavior: smooth;
    }


    /* Sections
     * ========================================================================== */

    /**
     * 1. Remove the margin in all browsers (opinionated).
     * 2. Nicer looking fonts for OS X and iOS.
     */

    body {
      margin: 0; /* 1 */
      -webkit-font-smoothing: antialised: /* 2 */
    }


    /**
     * Add default margin to all elements.
     */

    body * + * {
      margin-top: var(--vertical-rhythm-1, 1.5em);
    }


    h1, h2, h3, h4, h5, h6 {
      margin-bottom: 0;
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


    /* Grouping content
     * ========================================================================== */

    /**
     * Smartly align text.
     */

    figure {
      text-align: center;
    }


    figcaption {
      display: inline-block;
      text-align: start;
    }


    /**
     * Remove the margin on nested lists in Chrome, Edge, IE, and Safari.
     */

    dl dl,

    dl ol,

    dl ul,

    ol dl,

    ul dl {
      margin: 0;
    }


    /**
     * Remove the margin on nested lists in Edge 18- and IE.
     */

    ol ol,

    ol ul,

    ul ol,

    ul ul {
      margin: 0;
    }


    /**
     * Remove the margin in all browsers (opinionated).
     */

    li,

    dd {
      margin-top: 0;
    }


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
      padding-right: 0.5em;
      text-align: end;
      transform: translateX(-100%);
      content: counter(li) ".";
      counter-increment: li;
      font-feature-settings: "kern" 0, "tnum" 1, "onum" 1, "liga" 1;
    }


    /**
     * 1. Correct the inheritance of border color in Firefox.
     * 2. Add the correct box sizing in Firefox.
     * 3. Show the overflow in Edge 18- and IE.
     * 4. A better looking default horizontal rule.
     */

    hr {
      color: inherit; /* 1 */
      height: 0; /* 2 */
      overflow: visible; /* 3 */
      border: 0; /* 4 */
      border-top: 1px solid currentColor; /* 4 */
    }


    /**
     * Add the correct display in IE.
     */

    main {
      display: block;
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
     * Prevent VoiceOver from ignoring list semantics in Safari (opinionated).
     */

    nav li::before {
      content: '\200B';
    }


    p {
      margin-bottom: 0;
    }


    /**
     * 1. Use the default monospace user interface font in all browsers (opinionated).
     * 2. Correct the odd `em` font sizing in all browsers.
     * 3. Prevent overflow of the container in all browsers (opinionated).
     * 4. Turn off kerning and ligatures,
     *    turn on lining, tabular numerals, slashed zero.
     */

    pre {
      font-family: var(--font-family-monospace, monospace); /* 1 */
      font-size: var(--modular-scale-0, 1em); /* 2 */
      overflow: auto; /* 3 */
      -ms-overflow-style: scrollbar; /* 3 */
      font-feature-settings: "kern" 0, "liga" 0, "calt" 1, "dlig" 0, "pnum" 0, "tnum" 1, "onum" 0, "lnum" 1, "zero" 1; /* 4 */
    }


    /* Text-level semantics
     * ========================================================================== */

    a {
      text-decoration-skip-ink: auto;
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
     * Add the correct text decoration in Edge 18-, IE, and Safari.
     */

    abbr[title] {
      text-decoration: underline;
      text-decoration: underline dotted;
    }


    /**
     * Add the correct font weight in Chrome, Edge, and Safari.
     */

    b,

    strong {
      font-weight: bolder;
    }


    /**
     * 1. Use the default monospace user interface font in all browsers (opinionated).
     * 2. Correct the odd `em` font sizing in all browsers.
     * 3. Turn off kerning and ligatures,
     *    turn on lining, tabular numerals, slashed zero.
     */

    code,

    kbd,

    samp {
      font-family: var(--font-family-monospace, monospace); /* 1 */
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
     * Turn on proper subscript numerals.
     */

    sub {
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0, "subs" 1; /* 1 */
    }


    /**
     * Turn on proper supercript numerals.
     */

    sup {
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0, "sups" 1; /* 1 */
    }


    time {
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0;
    }


    /**
     * 1. Inherit style issues with custom selections.
     * 2. Remove text-shadow in selection highlight.
     */

    ::-moz-selection {
      color: inherit; /* 1 */
      text-shadow: inherit; /* 2 */
      background-color: #b3d4fc; /* 1 */
    }


    ::selection {
      color: inherit; /* 1 */
      text-shadow: inherit; /* 2 */
      background-color: #b3d4fc; /* 1 */
    }


    /* Embedded content
     * ========================================================================== */

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
     * Restrict sizing to the page width in all browsers (opinionated).
     */

    canvas,

    iframe,

    img,

    svg,

    video {
      height: auto;
      max-width: 100%;
    }


    /**
     * Remove the border on iframes in all browsers (opinionated).
     */

    iframe {
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


    /* Tabular data
      ========================================================================== */

    /**
     * 1. Collapse border spacing in all browsers (opinionated).
     * 2. Correct table border color inheritance in all Chrome, Edge, and Safari.
     * 3. Remove text indentation from table contents in Chrome, Edge, and Safari.
     * 4. Turn on kerning, standard ligatures, and proportional, oldstyle numerals.
     *    Turn off all other ligatures, tabular, lining numerals, and alternates.
     */

    table {
      width: 100%;
      border-collapse: collapse; /* 1 */
      border-color: inherit; /* 2 */
      text-indent: 0; /* 3 */
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0; /* 4 */
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


    /* Forms
     * ========================================================================== */

    /**
     * 1. Change the inconsistent appearance in all browsers (opinionated).
     * 2. Add typography inheritance in all browsers (opinionated).
     */

    button,

    input,

    select,

    textarea {
      background-color: transparent; /* 1 */
      border: 1px solid WindowFrame; /* 1 */
      color: inherit; /* 1 */
      font: inherit; /* 2 */
      letter-spacing: inherit; /* 2 */
      padding: 0.25em 0.375em; /* 1 */
    }


    /**
     * Restrict sizing to the page width in all browsers (opinionated).
     */

    input,

    select,

    textarea {
      height: auto;
      max-width: 100%;
    }


    /**
     * Remove the margin on controls in Safari.
     */

    button,

    input,

    select {
      margin: 0;
    }


    /**
     * 1. Show the overflow in IE.
     * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.
     */

    button {
      overflow: visible; /* 1 */
      text-transform: none; /* 2 */
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
     * 1. Change the inconsistent appearance in all browsers (opinionated).
     * 2. Correct the padding in Firefox.
     */

    fieldset {
      border: 1px solid currentColor; /* 1 */
      padding: 0.35em 0.75em 0.625em; /* 2 */
    }


    /**
     * Show the overflow in Edge 18- and IE.
     */

    input {
      overflow: visible;
    }


    /**
     * 1. Correct the text wrapping in Edge 18- and IE.
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


    option,

    optgroup {
      margin-top: 0;
    }


    meter {

    }


    /**
     * 1. Add the correct display in Edge 18- and IE.
     * 2. Add the correct vertical alignment in Chrome, Edge, and Firefox.
     */

    progress {
      display: inline-block; /* 1 */
      vertical-align: baseline; /* 2 */
    }


    /**
     * Change the inconsistent appearance in all browsers (opinionated).
     * 1. Remove the inheritance of text transform in Firefox.
     */

    select {
      text-transform: none; /* 1 */
      -moz-appearance: none;
      -webkit-appearance: none;
      background: no-repeat right center / 1em;
      border-radius: 0;
      padding-right: 1em;
    }


    /**
     * Change the inconsistent appearance in all browsers (opinionated).
     */

    select:not([multiple]):not([size]) {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E");
    }


    /**
     * 1. Remove the margin in Firefox and Safari.
     * 2. Remove the default vertical scrollbar in IE.
     * 3. Change the resize direction in all browsers (opinionated).
     */

    textarea {
      width: 100%;
      margin: 0; /* 1 */
      overflow: auto; /* 2 */
      resize: vertical; /* 3 */
      resize: block; /* 3 */
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
     * Remove the border and padding in all browsers (opinionated).
     */

    [type="color"],

    [type="range"] {
      border-width: 0;
      padding: 0;
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
     * Change the inconsistent appearance in IE (opinionated).
     */

    ::-ms-expand {
      display: none;
    }


    /**
     * Correct the cursor style of increment and decrement buttons in Safari.
     */

    ::-webkit-inner-spin-button,

    ::-webkit-outer-spin-button {
      height: auto;
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

    ::-webkit-search-decoration {
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
     * Remove the inner border and padding of focus outlines in Firefox.
     */

    ::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }


    /**
     * Restore the focus outline styles unset by the previous rule in Firefox.
     */

    :-moz-focusring {
      outline: 1px dotted ButtonText;
    }


    /**
     * Remove the additional :invalid styles in Firefox.
     */

    :-moz-ui-invalid {
      box-shadow: none;
    }


    /* Interactive
      ========================================================================== */

    /**
     * Add the correct display in Edge 18- and IE.
     */

    details {
      display: block;
    }


    /**
     * Add the correct styles in Edge 18-, IE, and Safari.
     */

    dialog {
      background-color: white;
      border: solid;
      color: black;
      display: block;
      height: -moz-fit-content;
      height: -webkit-fit-content;
      height: fit-content;
      left: 0;
      margin: auto;
      padding: 1em;
      position: absolute;
      right: 0;
      width: -moz-fit-content;
      width: -webkit-fit-content;
      width: fit-content;
    }


    dialog:not([open]) {
      display: none;
    }


    /**
     * 1. Add the correct display in all browsers.
     * 2. Add the correct cursor.
     */

    summary {
      display: list-item; /* 1 */
      cursor: pointer; /* 2 */
    }


    /**
     * Display nested block elements inline.
     */

    summary > * {
      display: inline;
    }


    /* Scripting
     * ========================================================================== */

    /**
     * Add the correct display in IE.
     */

    template {
      display: none;
    }


    /* Accessibility
     * ========================================================================== */

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
      margin-top: 0;
    }
js:
  lang: javascript
---
* https://necolas.github.io/normalize.css/8.0.1/normalize.css
* https://csstools.github.io/sanitize.css/10.0.0/sanitize.css
* https://raw.githubusercontent.com/kennethormandy/normalize-opentype.css/v0.2.4/normalize-opentype.css
* https://raw.githubusercontent.com/h5bp/html5-boilerplate/v7.2.0/dist/css/main.css
* https://github.com/benfrain/app-reset/blob/master/app-reset.css\
* https://css-tricks.com/the-focus-visible-trick/
* https://yeun.github.io/open-color
* https://alistapart.com/article/axiomatic-css-and-lobotomized-owls
* http://nocode.in/aligning-text-smartly-in-css
* https://css-tricks.com/time-element
* https://github.com/mrmrs/fluidity
* * http://www.smashingmagazine.com/2014/11/28/complete-polyfill-html5-details-element
* https://css-tricks.com/html5-meter-element
