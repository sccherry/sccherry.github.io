(function() {
  "use strict";

  /**
   * XMLHttpRequest utility function
   */

  function get(href, onSuccess) {
    var request = new XMLHttpRequest();

    request.open("GET", href);

    request.responseType = "document";

    request.onreadystatechange = function() {
      if (
        request.readyState === XMLHttpRequest.DONE &&
        request.status === 200
      ) {
        onSuccess(request.response);
      }
    };

    request.send();
  }

  /**
   * Router
   */

  function render(pathname) {
    var router = document.querySelector("body"),
      title = document.querySelector("title"),
      description = document.querySelector("meta[name=description]"),
      canonical = document.querySelector("link[rel=canonical]"),
      view = document.querySelector("main");

    router.classList.add("is-loading");

    get(pathname, function(response) {
      title.textContent = response.querySelector("title").textContent;
      description.textContent = response.querySelector(
        "meta[name=description]"
      ).textContent;
      canonical.setAttribute('href', response.querySelector("link[rel=canonical]").getAttribute('href'));
      view.innerHTML = response.querySelector("main").innerHTML;
      router.classList.remove("is-loading");
    });
  }

  function shouldRouteChange(pathname, origin) {
    return [
      // Push state
      window.history.pushState,
      // Different paths
      pathname !== window.location.pathname,
      // Same origin
      origin === window.location.origin,
      // Not assets
      pathname.search(/\.(xml|css|js|png|jpg|svg)/) === -1
    ].reduce(function(prev, curr) {
      return prev && curr;
    });
  }

  /**
   * Events
   */

  function onClick(e) {
    var target = e.target;

    while (target && target.tagName && target.tagName !== 'A') {
      target = target.parentNode;
    }

    if (target && target !== document) {
      if (shouldRouteChange(target.pathname, target.origin)) {
        window.history.pushState(null, null, target.pathname);
        render(target.pathname);
        e.preventDefault();
      }
    }
  }

  function onPopstate(e) {
    render(e.target.location);
  }

  document.addEventListener("click", onClick);
  window.addEventListener("popstate", onPopstate);
})();
