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
     * 8. Use the default user interface font in all browsers (opinionated).
     */

    html {
      cursor: default; /* 1 */
      color: #222;
      font-family:
        system-ui,
        /* macOS 10.11-10.12 */ -apple-system,
        /* Windows 6+ */ "Segoe UI",
        /* Android 4+ */ "Roboto",
        /* Ubuntu 10.10+ */ "Ubuntu",
        /* Gnome 3+ */ "Cantarell",
        /* KDE Plasma 5+ */ "Noto Sans",
        /* fallback */ sans-serif,
        /* macOS emoji */ "Apple Color Emoji",
        /* Windows emoji */ "Segoe UI Emoji",
        /* Windows emoji */ "Segoe UI Symbol",
        /* Linux emoji */ "Noto Color Emoji"; /* 8 */
      font-size: 1em;
      line-height: 1.5; /* 2 */
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
      margin-top: 1.5em;
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
      font-size: 1.953em;
    }


    h2 {
      font-size: 1.563em;
    }


    h3 {
      font-size: 1.25em;
    }


    h4 {
      font-size: 1em;
    }


    h5 {
      font-size: 0.8em;
    }


    h6 {
      font-size: 0.64em;
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
      content: "\200B";
    }


    /**
     * 1. Use the default monospace user interface font in all browsers (opinionated).
     * 2. Correct the odd `em` font sizing in all browsers.
     * 3. Prevent overflow of the container in all browsers (opinionated).
     * 4. Turn off kerning and ligatures.
     *    Turn on lining, tabular numerals, slashed zero.
     */

    pre {
      font-family:
        /* macOS 10.10+ */ "Menlo",
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
        /* Linux emoji */ "Noto Color Emoji"; /* 1 */
      font-size: 1em; /* 2 */
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
     * 3. Turn off kerning and ligatures.
     *    Turn on lining, tabular numerals, slashed zero.
     */

    code,

    kbd,

    samp {
      font-family:
        /* macOS 10.10+ */ "Menlo",
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
        /* Linux emoji */ "Noto Color Emoji"; /* 1 */
      font-size: 1em; /* 2 */
      font-feature-settings: "kern" 0, "liga" 0, "calt" 1, "dlig" 0, "pnum" 0, "tnum" 1, "onum" 0, "lnum" 1, "zero" 1; /* 3 */
    }


    /**
     * Add the correct font size in all browsers.
     */

    small {
      font-size: 0.8em;
    }


    /**
     * Turn on proper subscript numerals.
     */

    sub {
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0, "subs" 1;
    }


    /**
     * Turn on proper supercript numerals.
     */

    sup {
      font-feature-settings: "kern" 1, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 1, "lnum" 0, "dlig" 0, "sups" 1;
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
     * ========================================================================== */

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
     * Turn on tabular, lining numerals and slashed zero.
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
     * Correct the inability to style buttons in iOS and Safari.
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
     * Turn on lining, proportional numerals without clarified zeroes.
     */

    [type="color"],

    [type="date"],

    [type="datetime"],

    [type="datetime-local"],

    [type="number"],

    [type="range"],

    [type="tel"],

    [type="week"] {
      font-feature-settings: "kern" 0, "liga" 1, "calt" 1, "pnum" 1, "tnum" 0, "onum" 0, "lnum" 1, "zero" 0;
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
     * Correct the inconsistent appearance in IE (opinionated).
     */

    :-ms-input-placeholder {
      color: rgba(0, 0, 0, 0.54);
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
     * 1. Correct the inability to style upload buttons in iOS and Safari.
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
     * ========================================================================== */

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


    /* User interaction
     * ========================================================================== */

    [hidden] + * {
      margin-top: 0;
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
     */

    [aria-hidden="false"][hidden] {
      display: initial;
    }


    [aria-hidden="false"][hidden]:not(:focus) {
      clip: rect(0, 0, 0, 0);
      position: absolute;
    }
js:
  lang: javascript
---
* https://github.com/necolas/normalize.css
* https://github.com/csstools/sanitize.css
* https://github.com/kennethormandy/normalize-opentype.css
* https://github.com/h5bp/html5-boilerplate
* https://github.com/benfrain/app-reset/blob/master/app-reset.css
* https://css-tricks.com/the-focus-visible-trick/
* https://yeun.github.io/open-color
* https://alistapart.com/article/axiomatic-css-and-lobotomized-owls
* http://nocode.in/aligning-text-smartly-in-css
* https://css-tricks.com/time-element
* https://github.com/mrmrs/fluidity
* http://www.smashingmagazine.com/2014/11/28/complete-polyfill-html5-details-element
* https://css-tricks.com/html5-meter-element
* https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
* http://juicystudio.com/article/screen-readers-display-none.php
* http://snook.ca/archives/html_and_css/hiding-content-for-accessibility
