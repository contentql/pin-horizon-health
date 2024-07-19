'use client'

import { useEffect } from 'react'

const CalComponent = ({ url }: { url: string }) => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "30min", { origin: "https://cal.contentql.io" });
      Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline",
        calLink: "${url}",
        layout: "month_view"
      });
      Cal.ns["30min"]("ui", {
        "styles": { "branding": { "brandColor": "blue" } },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    `
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      id='my-cal-inline'
      className=' flex items-center justify-center overflow-hidden'
    />
  )
}

export default CalComponent
