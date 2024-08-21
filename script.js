document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("mc-embedded-subscribe-form");

    function submitCallback(e) {
        gtag_report_conversion('https://eatstash.us8.list-manage.com/subscribe/post?u=c8b36e9a5f797871be92d043d&id=5afb79ace6&f_id=00cb76e0f0')
    }

    function gtag_report_conversion(url) {
        var callback = function () {
            // if (typeof(url) != 'undefined') {
            // window.location = url;
            // }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11458489302/4NfZCNWGiIMZENbX6tcq',
            'event_callback': callback
        });
        return false;
    }

    form.addEventListener("submit", submitCallback);
});


document.addEventListener('DOMContentLoaded', function () {
    let currentTestimonialIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const totalTestimonials = testimonials.length;
  
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
    }
  
    function prevTestimonial() {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + totalTestimonials) % totalTestimonials;
      showTestimonial(currentTestimonialIndex);
    }
  
    document.querySelector('.next').addEventListener('click', nextTestimonial);
    document.querySelector('.prev').addEventListener('click', prevTestimonial);
  
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentTestimonialIndex = i;
        showTestimonial(currentTestimonialIndex);
      });
    });
  
    // Auto-scroll functionality
    setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
  
    // Show the first testimonial initially
    showTestimonial(currentTestimonialIndex);
  });
  