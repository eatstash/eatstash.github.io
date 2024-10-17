document.addEventListener('DOMContentLoaded', function () {
    let currentTestimonialIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const totalTestimonials = testimonials.length;
    let autoScrollInterval;
  
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
          testimonial.classList.add('active');
          dots[i].classList.add('active');
        }
      });
    }
  
    function nextTestimonial() {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
      showTestimonial(currentTestimonialIndex);
      resetAutoScroll();
    }
  
    function prevTestimonial() {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + totalTestimonials) % totalTestimonials;
      showTestimonial(currentTestimonialIndex);
      resetAutoScroll();
    }
  
    function resetAutoScroll() {
      clearInterval(autoScrollInterval);
      autoScrollInterval = setInterval(nextTestimonial, 10000);
    }
  
    document.querySelector('.next').addEventListener('click', nextTestimonial);
    document.querySelector('.prev').addEventListener('click', prevTestimonial);
  
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentTestimonialIndex = i;
        showTestimonial(currentTestimonialIndex);
        resetAutoScroll();
      });
    });
  
    // Initial auto-scroll setup
    resetAutoScroll();
  
    // Show the first testimonial initially
    showTestimonial(currentTestimonialIndex);
  });
  
  