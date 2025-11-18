// scripts.js - simple nav toggle and active link highlight
document.addEventListener('DOMContentLoaded', ()=>{
  // mobile nav toggle
  const burger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if(burger){
    burger.addEventListener('click', ()=>{
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // highlight active link based on data-page attribute of body
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.includes(page)){
      a.classList.add('active');
    }
  });

  // simple fade-in stagger for cards
  document.querySelectorAll('.card, .admin-card, .big-card').forEach((el,i)=>{
    el.style.animationDelay = (i*80) + 'ms';
  });

  // contact form: build obfuscated mailto and open
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value || '';
      const email = document.getElementById('email').value || '';
      const subject = document.getElementById('subject').value || '';
      const message = document.getElementById('message').value || '';
      // obfuscated recipient pieces
      const part1 = 'kontakt';
      const part2 = 'helioncraft';
      const part3 = 'pl';
      const recipient = part1 + '@' + part2 + '.' + part3;
      const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Imię: '+name+'\\nEmail: '+email+'\\n\\n'+message)}`;
      window.location.href = mailto;
    });
  }
});
