// prossible.app 방문 기록 — 쿠키·개인정보 없음. 경로·유입원·UTM·시각만 Firestore(appshin-jarvis/site_hits)에 저장.
(function(){try{
  if(navigator.doNotTrack==='1')return;
  var u=new URL(location.href),q=u.searchParams;
  var doc={fields:{
    site:{stringValue:'prossible.app'},path:{stringValue:u.pathname},
    ref:{stringValue:(document.referrer||'').slice(0,200)},
    utm_source:{stringValue:q.get('utm_source')||''},utm_medium:{stringValue:q.get('utm_medium')||''},utm_campaign:{stringValue:q.get('utm_campaign')||''},
    lang:{stringValue:navigator.language||''},mobile:{booleanValue:/Mobi|Android/i.test(navigator.userAgent)},
    ts:{timestampValue:new Date().toISOString()}}};
  var body=JSON.stringify(doc);
  var url='https://firestore.googleapis.com/v1/projects/appshin-jarvis/databases/(default)/documents/site_hits';
  if(navigator.sendBeacon){navigator.sendBeacon(url,new Blob([body],{type:'application/json'}));}
  else{fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:body,keepalive:true});}
}catch(e){}})();
