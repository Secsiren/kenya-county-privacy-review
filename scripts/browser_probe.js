// Browser probe used for the Kenya County Privacy Review (2 Nov 2026).
// Run in the browser console on a county homepage. Returns JSON with the final URL,
// HTTPS, privacy/cookie links found, cookie banner, and for the first same-site
// privacy page, which Data Protection Act items its text mentions.
// Keyword matches were always confirmed by reading the page manually.
await (async()=>{
  const o={u:location.href,s:location.protocol=='https:'};
  const A=[...document.querySelectorAll('a')].map(a=>[(a.innerText||'').trim().slice(0,40),a.href.split('#')[0]]);
  o.n=A.length;
  o.l=[...new Set(A.filter(a=>/privacy|data.protection|cookie.polic/i.test(a[0]+' '+a[1])).map(a=>a[1]))].slice(0,5);
  o.b=!![...document.querySelectorAll('[id*=cookie i],[class*=cookie i],[class*=cmplz i],[id*=consent i]')].find(e=>e.offsetParent);
  const B=document.body?document.body.innerText:'';
  o.hDPA=/data protection/i.test(B); o.hDPO=/data protection officer/i.test(B);
  let ps=A.filter(a=>/privacy|data.protection/i.test(a[0]+' '+a[1])&&!/terms|cookie/i.test(a[1])&&a[1].startsWith(location.origin)&&!/\.pdf$/i.test(a[1])).map(a=>a[1]);
  o.f=ps.length?'link':'none';
  if(!ps.length) for(const c of ['/privacy-policy/','/privacy-policy','/privacy','/data-protection-policy/']){
    try{const r=await fetch(location.origin+c);
      if(r.ok&&new URL(r.url).pathname!='/'){const t=await r.text();
        if(/<title>[^<]*(privacy|data protection)/i.test(t)){ps=[r.url];o.f='guess';break}}}catch(e){}
  }
  const C={dpa:/data protection act/i,dpo:/data protection officer/i,
    rights:/rights of (the )?data subject|your rights|right (to|of) (access|erasure|rectif|object|correct|delet)/i,
    retain:/retain|retention/i,purpose:/purpose/i,consent:/consent/i,
    odpc:/data protection commissioner|\bODPC\b/i,third:/third.part/i,
    transfer:/outside (of )?kenya|cross.border|other countries/i,secure:/secur|safeguard/i,
    breach:/breach/i,tpl:/suggested text|our website address is/i};
  o.p=[];
  for(const h of ps.slice(0,1)){
    try{const r=await fetch(h),d=new DOMParser().parseFromString(await r.text(),'text/html');
      d.querySelectorAll('script,style,nav,header,footer,aside').forEach(e=>e.remove());
      const x=((d.querySelector('main,article,.entry-content,#content,.content')||d.body).textContent||'').replace(/\s+/g,' ');
      o.p.push({h,st:r.status,len:x.length,pc:Object.keys(C).filter(k=>C[k].test(x)).join(','),
        em:[...new Set(x.match(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g)||[])].slice(0,2).join(';')});
    }catch(e){o.p.push({h,err:String(e).slice(0,50)})}
  }
  return JSON.stringify(o);
})()
