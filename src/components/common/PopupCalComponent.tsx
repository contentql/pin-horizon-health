'use client'

import React, { useEffect } from 'react'

declare global {
  interface Window {
    Cal: any
  }
}

const PopupCalComponent: React.FC = () => {
  useEffect(() => {
    ;(function (C, A, L) {
      let p = function (a: any, ar: any) {
        a.q.push(ar)
      }
      let d = C.document
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal
          let ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            let script = d.createElement('script')
            script.src = A
            script.async = true
            d.head.appendChild(script)
            cal.loaded = true
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments)
            }
            const namespace = ar[1]
            //@ts-ignore
            api.q = api.q || []
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api
              p(cal.ns[namespace], ar)
              p(cal, ['initNamespace', namespace])
            } else p(cal, ar)
            return
          }
          p(cal, ar)
        }
    })(window, 'https://cal.contentql.io/embed/embed.js', 'init')

    window.Cal('init', 'testing', { origin: 'https://cal.contentql.io' })

    window.Cal.ns.testing('floatingButton', {
      calLink: 'team/medical-horizon',
      buttonText: 'Book Appointment',
      buttonColor: '#307ac0',
    })

    window.Cal.ns.testing('ui', {
      theme: 'light',
      styles: {
        branding: {
          brandColor: '#69cbe5',
        },
      },
      hideEventTypeDetails: false,
      layout: 'month_view',
    })
  }, [])

  return <></>
}

export default PopupCalComponent
