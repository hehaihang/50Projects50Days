const btns = document.querySelectorAll('.faq-toggle');
const faqs = document.querySelectorAll('.faq');

btns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        faqs[idx].classList.toggle('active');
    })
})