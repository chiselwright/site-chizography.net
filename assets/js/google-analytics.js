---
layout:    null
---
{%- if site.google_analytics -%}
if(!(window.doNotTrack === "1" || navigator.doNotTrack === "1" || navigator.doNotTrack === "yes" || navigator.msDoNotTrack === "1")) {
    // from https://developers.google.com/analytics/devguides/collection/analyticsjs
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', '{{ site.google_analytics }}', 'auto');
    ga('send', 'pageview');


    <!-- Global site tag (gtag.js) - Google Analytics -->
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.googletagmanager.com/gtag/js?id=G-EGPH7W5GVE','gtag');

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-EGPH7W5GVE');
}
{%- endif -%}