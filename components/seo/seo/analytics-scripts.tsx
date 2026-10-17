export function AnalyticsScripts() {
  return (
    <>
      {/* Google Analytics 4 */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              'anonymize_ip': true,
              'cookie_flags': 'SameSite=None;Secure',
              'send_page_view': false,
              'page_location': window.location.href,
              'page_title': document.title,
              'custom_map': {
                'dimension1': 'user_type',
                'dimension2': 'location',
                'dimension3': 'device_type',
                'metric1': 'recycling_actions',
                'metric2': 'eco_impact_score',
              }
            });
            
            gtag('event', 'page_view', {
              'page_title': document.title,
              'page_location': window.location.href,
              'send_to': 'G-XXXXXXXXXX'
            });
          `,
        }}
      />
      
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXX');
          `,
        }}
      />
      
      {/* Google Search Console Verification */}
      <meta
        name="google-site-verification"
        content="your-verification-code"
      />
    </>
  )
}
