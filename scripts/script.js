/* THEME */
document.getElementById('themeBtn').addEventListener('click', () => {
const html = document.documentElement;
const dark = html.getAttribute('data-theme')==='dark';
html.setAttribute('data-theme', dark ? 'light' : 'dark');
gsap.fromTo('body',{opacity:.75},{opacity:1,duration:.45});
});

/* EMAILJS */
(function(){ emailjs.init("WjsH8c_qGFq5VMI-S"); })();

/* CURSOR */
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
gsap.to(cursor,{left:e.clientX,top:e.clientY,duration:.09,ease:'none'});
});
document.querySelectorAll('a,button,.service-card,.p-card,.w-item,.t-card').forEach(el=>{
el.addEventListener('mouseenter',()=>cursor.classList.add('big'));
el.addEventListener('mouseleave',()=>cursor.classList.remove('big'));
});

/* POPUP */
function openPopup(){ document.getElementById('popup').style.display='flex'; gsap.fromTo('.popup-box',{scale:.8,opacity:0},{scale:1,opacity:1,duration:.38,ease:'back.out(1.5)'}); }
document.getElementById('popup').addEventListener('click',function(e){ if(e.target===this) gsap.to('.popup-box',{scale:.88,opacity:0,duration:.2,onComplete:()=>this.style.display='none'}); });

/* FORMS */
function submitForm(){
let name=document.getElementById('name').value, email=document.getElementById('email').value;
if(!name||!email){alert('Please fill all fields');return;}
emailjs.send('service_9kgrgqf','template_mi1jnsn',{name,email}).then(r=>console.log('OK',r)).catch(e=>console.log('ERR',e));
gsap.to('.popup-box',{scale:.88,opacity:0,duration:.2,onComplete:()=>{ document.getElementById('popup').style.display='none'; }});
showSuccess(name);
}
function sendFooterMail(){
let name=document.getElementById('footer-name').value, email=document.getElementById('footer-email').value;
if(!name||!email){alert('Please fill all fields');return;}
emailjs.send('service_9kgrgqf','template_mi1jnsn',{name,email}).then(r=>console.log('OK',r)).catch(e=>console.log('ERR',e));
showSuccess(name);
}
function showSuccess(name){
document.getElementById('success-text').innerHTML=`We received your request, <b>${name}</b> — we'll be in touch within 24 hours.`;
document.getElementById('sound').play();
let tl=gsap.timeline();
tl.to('#success',{opacity:1,visibility:'visible',duration:.3})
    .to('.success-box',{scale:1,duration:.5})
    .to('.success-box',{scale:.95,duration:.3,delay:2})
    .to('#success',{opacity:0,visibility:'hidden',duration:.3});
}

/* GSAP ANIMATIONS */
gsap.registerPlugin(ScrollTrigger);

// Hero entrance
gsap.timeline()
.fromTo('.hero-eyebrow',{opacity:0,y:20},{opacity:1,y:0,duration:.7,ease:'power3.out'},.4)
.fromTo('.hero-text h1',{opacity:0,y:44},{opacity:1,y:0,duration:.9,ease:'power3.out'},.6)
.fromTo('.hero-sub',{opacity:0,y:28},{opacity:1,y:0,duration:.7,ease:'power3.out'},.85)
.fromTo('.hero .btn',{opacity:0,y:20},{opacity:1,y:0,duration:.6,ease:'power3.out'},1.05)
.fromTo('.hero-badge-img',{opacity:0,x:55,scale:.9},{opacity:1,x:0,scale:1,duration:.9,ease:'back.out(1.3)'},.75);

// Parallax hero
gsap.to('.hero video',{yPercent:22,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});

// Scroll reveals
document.querySelectorAll('.reveal').forEach((el,i)=>{
gsap.fromTo(el,{opacity:0,y:50},{opacity:1,y:0,duration:.72,ease:'power3.out',delay:(i%4)*.055,
    scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none none'}});
});
document.querySelectorAll('.rev-left').forEach(el=>{
gsap.fromTo(el,{opacity:0,x:-55},{opacity:1,x:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%'}});
});

// Grid staggers
gsap.fromTo('.service-card',{opacity:0,y:55,scale:.95},{opacity:1,y:0,scale:1,duration:.68,ease:'power3.out',stagger:.1,scrollTrigger:{trigger:'.services-grid',start:'top 85%'}});
gsap.fromTo('.p-card',{opacity:0,y:48},{opacity:1,y:0,duration:.65,ease:'power3.out',stagger:.1,scrollTrigger:{trigger:'.p-grid',start:'top 85%'}});
gsap.fromTo('.w-item',{opacity:0,scale:.9},{opacity:1,scale:1,duration:.6,ease:'power3.out',stagger:.09,scrollTrigger:{trigger:'.w-grid',start:'top 85%'}});
gsap.fromTo('.t-card',{opacity:0,y:38},{opacity:1,y:0,duration:.6,ease:'power3.out',stagger:.11,scrollTrigger:{trigger:'.t-grid',start:'top 85%'}});

// CTA
gsap.fromTo('.cta-band h2',{opacity:0,y:38,letterSpacing:'8px'},{opacity:1,y:0,letterSpacing:'0px',duration:.95,ease:'power3.out',scrollTrigger:{trigger:'.cta-band',start:'top 80%'}});

// Collab strip
gsap.fromTo('.collab-strip',{opacity:0,scale:.95},{opacity:1,scale:1,duration:.7,ease:'back.out(1.3)',scrollTrigger:{trigger:'.collab-strip',start:'top 85%'}});

// Team section entrance
gsap.fromTo('.team-hero-wrap',
{opacity:0, scale:.96},
{opacity:1, scale:1, duration:.9, ease:'power3.out',
scrollTrigger:{trigger:'#team', start:'top 85%'}}
);
gsap.fromTo('.preview-avatar',
{opacity:0, y:30, scale:.8},
{opacity:1, y:0, scale:1, duration:.5, ease:'back.out(1.8)', stagger:.1,
scrollTrigger:{trigger:'#team', start:'top 75%'}, delay:.3}
);

// Nav
gsap.fromTo('nav a',{opacity:0,y:-10},{opacity:1,y:0,stagger:.06,duration:.45,delay:.3});

/* ===== TEAM MODAL ===== */
function openTeamModal(){
const modal = document.getElementById('teamModal');
const box   = document.getElementById('teamModalBox');
box.scrollTop = 0;
modal.classList.add('open');
document.body.style.overflow = 'hidden';

// stagger each member card in
gsap.fromTo(box,
    {scale:.88, y:36, opacity:0},
    {scale:1, y:0, opacity:1, duration:.45, ease:'back.out(1.6)'}
);
gsap.fromTo('.team-member',
    {opacity:0, y:60, scale:.92},
    {opacity:1, y:0, scale:1, duration:.65, ease:'back.out(1.4)', stagger:.12, delay:.2}
);
// subtle gold glow pulse on each badge
gsap.fromTo('.tm-badge',
    {scale:.7, opacity:0},
    {scale:1, opacity:1, duration:.4, ease:'back.out(2)', stagger:.12, delay:.35}
);
}

function closeTeamModal(){
const modal = document.getElementById('teamModal');
const box   = document.getElementById('teamModalBox');
gsap.to(box, {scale:.9, y:28, opacity:0, duration:.25, ease:'power2.in', onComplete:()=>{
    modal.classList.remove('open');
    document.body.style.overflow = '';
}});
}

function handleTeamBg(e){
if(e.target === document.getElementById('teamModal')) closeTeamModal();
}

// cursor hover on team members
document.querySelectorAll('.team-member').forEach(el=>{
el.addEventListener('mouseenter',()=>cursor.classList.add('big'));
el.addEventListener('mouseleave',()=>cursor.classList.remove('big'));
});
document.querySelector('.hero-badge-img')?.addEventListener('mouseenter',()=>cursor.classList.add('big'));
document.querySelector('.hero-badge-img')?.addEventListener('mouseleave',()=>cursor.classList.remove('big'));
