---
layout: code.njk
title: Fullscreen toggle
date: 2018-12-21
published: false
tags:
  - code
html:
  lang: html
  code: |-
    <div data-controller="fullscreen">
      <button data-action="click->fullscreen#toggle">&times;</button>
    </div>`
css:
  lang: css
  code: |-
    @import url("/base-styles/style.css");
js:
  lang: javascript
  code: |-
    import { Application, Controller } from 'https://cdn.skypack.dev/stimulus';

    class FullscreenController extends Controller {
      toggle() {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen(); 
        } else {
          this.element.requestFullscreen();
        }
      }
    }

    const application = Application.start();

    application.register('fullscreen', FullscreenController);
---
