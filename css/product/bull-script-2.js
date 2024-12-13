!(function () {
    function e() {
      function e(t) {
        if (null === t.cssRules)
          return console.warn(
            "Fontsmoothie warning: Browser blocks access to CSS rules in " +
              t.href
          );
        for (
          var n,
            o = t.href || location.href,
            s =
              ((o = new RegExp(
                o
                  .substring(0, o.lastIndexOf("/"))
                  .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"),
                "g"
              )),
              0);
          (n = t.cssRules[s]);
          s++
        ) {
          if (
            n.style &&
            n.style.src &&
            ((n.style.src = n.style.src
              .replace(o, ".")
              .replace(
                /([^;]*?),\s*(url\(\S*? format\(["']?svg["']?\))([\s,]*[^;]+|)/,
                "$2, $1$3"
              )),
            window.opera)
          ) {
            var r = n.cssText;
            t.deleteRule(s), t.insertRule(r, s);
          }
          n.styleSheet && e(n.styleSheet);
        }
      }
      try {
        var t = document.getElementsByTagName("HEAD")[0],
          n = t.appendChild(document.createElement("CANVAS")),
          o = n.getContext("2d");
        (o.textBaseline = "top"), (o.font = "32px Arial"), o.fillText("O", 0, 0);
        for (
          var s, r = 0;
          255 == o.getImageData(5, 8, 1, 1).data[3] &&
          (s = document.styleSheets[r]);
          r++
        )
          s && e(s);
        t.removeChild(n);
      } catch (e) {
        throw e;
      }
    }
    if (-1 < navigator.userAgent.toLowerCase().indexOf("windows nt 5.1"))
      if ("complete" == document.readyState) e();
      else {
        var t = window.onload;
        window.onload = window.onload
          ? function (n) {
              t(n), e();
            }
          : e;
      }
  })();
  