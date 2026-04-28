/* SERVICE DATA */
const SVC = {
brand:{
    tag:'Strategy', title:'Brand Positioning',
    img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    desc:'Brand positioning is the art and science of owning a distinct, powerful place in your customers\' minds. We analyze your market, audience, competitors, and culture to craft a positioning that is not just unique — but undeniable. Every touchpoint, message, and visual becomes a weapon for dominance.',
    benefits:[
    'Crystal-clear brand identity that differentiates you instantly in any room',
    'Higher perceived value — customers pay more for confidently positioned brands',
    'Consistent messaging across every channel, team member, and campaign',
    'Faster sales cycles because buyers already trust you before they meet you',
    'Long-term brand equity that compounds over time like a high-return asset'
    ],
    steps:[
    {t:'Discovery Sprint', d:'We deep-dive into your business, audience, competitors, and ambitions through strategic workshops and market research.'},
    {t:'Positioning Audit', d:'We map where you currently sit in the market and identify the white space you can own — exclusively.'},
    {t:'Identity Architecture', d:'We build your brand pillars, voice, tone, messaging hierarchy, and visual direction into a single coherent system.'},
    {t:'Rollout Playbook', d:'You receive a complete brand guide and implementation roadmap your entire team can execute from day one.'}
    ]
},
bizdev:{
    tag:'Growth', title:'Business Development',
    img:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
    desc:'Business development at Vyro means building the systems, relationships, and frameworks that create sustainable revenue growth. We go beyond short-term tactics — we architect long-term pipelines, strategic alliances, and market expansion plays that compound value over time.',
    benefits:[
    'New revenue streams you hadn\'t considered or couldn\'t access alone',
    'Qualified partnerships with companies that directly accelerate your growth',
    'Structured BD frameworks your team can scale independently after us',
    'Reduced dependency on a single market, product, or client segment',
    'Access to our regional network across Egypt, Gulf, Europe, and beyond'
    ],
    steps:[
    {t:'Opportunity Mapping', d:'We identify the highest-leverage growth opportunities specific to your sector, stage, and market position.'},
    {t:'Outreach & Relationship Building', d:'We approach and warm up strategic partners, clients, or investors on your behalf with credibility.'},
    {t:'Deal Structuring', d:'We help design partnership agreements, revenue sharing models, and co-venture frameworks that protect you.'},
    {t:'Pipeline Handover', d:'We deliver a qualified, active pipeline with the systems and playbooks to keep it growing after us.'}
    ]
},
campaigns:{
    tag:'Marketing', title:'Campaigns',
    img:'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80',
    desc:'Vyro campaigns are built at the intersection of data precision and cultural storytelling. We don\'t run generic ads — we engineer moments. Each campaign is designed with a clear objective, a compelling narrative, and measurable KPIs that tie directly to business outcomes, not vanity metrics.',
    benefits:[
    'Measurable ROI with clear attribution from every campaign dollar spent',
    'Audience growth across social, digital, influencer, and traditional channels',
    'Brand awareness that translates into actual leads and real revenue',
    'Creative assets that outlive the campaign and build long-term brand equity',
    'Real-time optimization so your budget always performs at its absolute peak'
    ],
    steps:[
    {t:'Objective Setting', d:'We align on the exact business outcome — not just vanity metrics — and build the entire campaign around it.'},
    {t:'Creative Development', d:'Our team develops the campaign concept, visual assets, copy, and full content calendar.'},
    {t:'Multi-Channel Launch', d:'We execute across the right channels: social, digital, influencer, PR, and live events.'},
    {t:'Reporting & Optimization', d:'Weekly performance dashboards and live optimization ensure maximum impact throughout the full campaign.'}
    ]
},
events:{
    tag:'Experience', title:'Events',
    img:'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&q=80',
    desc:'Events are the most powerful brand touchpoint in existence — when done right. Vyro designs and produces experiences that don\'t just fill a room; they create memories, spark relationships, and position your brand as a category leader. From intimate boardroom dinners to large-scale city activations.',
    benefits:[
    'Direct access to high-value clients, partners, and media all in one room',
    'Brand positioning as a market leader and trusted thought-authority',
    'Content and PR generated from a single event that resonates for months',
    'Deeper client loyalty through shared, genuinely memorable experiences',
    'Networking outcomes that turn into real business deals and partnerships'
    ],
    steps:[
    {t:'Concept & Strategy', d:'We design the event concept, objectives, target audience, format, and success metrics before anything is booked.'},
    {t:'Production Planning', d:'Venue, vendors, logistics, speakers, and all moving parts are managed end-to-end by our production team.'},
    {t:'On-Ground Execution', d:'Our team is present from setup through breakdown — ensuring every detail delivers a flawless experience.'},
    {t:'Post-Event Amplification', d:'We produce recap content, follow-up outreach, and targeted PR to extend the event\'s impact for months.'}
    ]
}
};

/* MODAL */
function openModal(key) {
const s = SVC[key]; if(!s) return;
document.getElementById('mImg').src = s.img;
document.getElementById('mTag').textContent = s.tag;
document.getElementById('mTitle').textContent = s.title;
document.getElementById('mDesc').textContent = s.desc;
const bl = document.getElementById('mBenefits');
bl.innerHTML = '';
s.benefits.forEach(b => { const li = document.createElement('li'); li.textContent = b; bl.appendChild(li); });
const pr = document.getElementById('mProcess');
pr.innerHTML = '';
s.steps.forEach((st,i) => {
    pr.innerHTML += `<div class="m-step"><div class="step-n">${String(i+1).padStart(2,'0')}</div><div class="step-t"><strong>${st.t}</strong><span>${st.d}</span></div></div>`;
});
const mb = document.getElementById('modalBox');
mb.scrollTop = 0;
document.getElementById('svcModal').classList.add('open');
document.body.style.overflow = 'hidden';
gsap.fromTo(mb, {scale:.84,y:36,opacity:0}, {scale:1,y:0,opacity:1,duration:.45,ease:'back.out(1.6)'});
}
function closeModal() {
const modal = document.getElementById('svcModal');
const mb = document.getElementById('modalBox');
gsap.to(mb, {scale:.88,y:28,opacity:0,duration:.22,ease:'power2.in', onComplete:()=>{
    modal.classList.remove('open');
    document.body.style.overflow = '';
}});
}
function handleModalBg(e) { if(e.target===document.getElementById('svcModal')) closeModal(); }

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
