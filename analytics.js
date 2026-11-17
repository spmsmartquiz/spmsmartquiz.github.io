/* SPM Smart Quiz — statistik lawatan tanpa menghantar nama/sekolah.
   Untuk aktifkan: gantikan G-XXXXXXXXXX dengan Measurement ID GA4 sebenar.
   Selagi belum diganti, tiada statistik dihantar. */
(function(){
  const MEASUREMENT_ID = 'G-XXXXXXXXXX';
  if (!/^G-[A-Z0-9]{6,}$/.test(MEASUREMENT_ID) || MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){dataLayer.push(arguments);};
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, {send_page_view:true});
  const script=document.createElement('script');
  script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(script);
  window.rekodModul=function(modul){gtag('event','pilih_modul',{modul:modul});};
  window.rekodLatihan=function(latihan){gtag('event','mula_latihan',{latihan:latihan});};
})();
