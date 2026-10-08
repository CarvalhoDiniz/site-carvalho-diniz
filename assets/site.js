
window.dataLayer = window.dataLayer || [];
const pushEvent=(name,params={})=>window.dataLayer.push({event:name,...params});
document.querySelectorAll('[data-track="whatsapp"]').forEach(el=>el.addEventListener('click',()=>pushEvent('click_whatsapp',{page:location.pathname})));
document.querySelectorAll('[data-track="phone"]').forEach(el=>el.addEventListener('click',()=>pushEvent('click_phone',{page:location.pathname})));
const menu=document.querySelector('.menu-btn');const nav=document.querySelector('.nav');if(menu)menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('[data-whatsapp-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    pushEvent('lead_form_submit',{page:location.pathname,service:data.servico||''});
    const lines=['Olá, gostaria de uma avaliação da Carvalho Diniz Engenharia.'];
    if(data.nome)lines.push('Nome: '+data.nome);
    if(data.cidade)lines.push('Cidade: '+data.cidade);
    if(data.servico)lines.push('Serviço: '+data.servico);
    if(data.prazo)lines.push('Previsão de início: '+data.prazo);
    if(data.investimento)lines.push('Faixa de investimento: '+data.investimento);
    if(data.mensagem)lines.push('Detalhes: '+data.mensagem);
    location.href='https://wa.me/5512987006628?text='+encodeURIComponent(lines.join('\n'));
  });
});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
