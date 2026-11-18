(function(){
  const root=document.documentElement;
  const btn=document.getElementById('toggle');
  const viewer=document.getElementById('viewer');
  const thumbs=document.querySelectorAll('.thumb');
  // init
  const saved=localStorage.getItem('theme'); if(saved==='dark') root.classList.add('dark');
  btn.addEventListener('click', ()=>{ root.classList.toggle('dark'); localStorage.setItem('theme', root.classList.contains('dark')?'dark':'light'); btn.textContent=root.classList.contains('dark')?'Light':'Dark'; });
  thumbs.forEach(t=>t.addEventListener('click',()=>{ viewer.textContent='Viewing: '+t.dataset.src; }));
})();