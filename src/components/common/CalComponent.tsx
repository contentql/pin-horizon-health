'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'

export default function CalComponent({ url }: { url: string }) {
  useLayoutEffect(() => {
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
            })(window, "https://cal.contentql.io/embed/embed.js", "init");

            Cal("init", "30min", { origin: "https://cal.contentql.io" });
              
            Cal.ns["30min"]("inline", {
              elementOrSelector: "#my-cal-inline",
              calLink: "${url}",
              layout: "month_view"
            });

            Cal.ns["30min"]("ui", {"theme":"light","styles":{"branding":{"brandColor":"#69cbe5"}},"hideEventTypeDetails":false,"layout":"month_view"});
        `
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // useEffect(() => {
  //   const mainElement = document.querySelector('.max-w-3xl')
  //   const main = mainElement?.querySelector('body')
  //   const ele = main?.querySelector('main')

  //   console.log('main ele', { mainElement, main, ele })
  //   if (ele) {
  //     ele.classList.remove('max-w-3xl')
  //     ele.classList.add('max-w-7xl')
  //   }
  // }, [])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const elements = container.querySelectorAll('main')
      // elements.forEach(element => {
      //   element.style.maxWidth = '80rem' // Adjust the width as needed
      // })

      console.log(elements)
    }
  }, [])

  return (
    <div
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      id='my-cal-inline'></div>
  )
}