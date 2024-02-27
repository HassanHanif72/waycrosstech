// portfolio slider

$('.portfolio-slider').slick({
    centerMode: true,
    dots: false,
    centerPadding: '0px',
    infinite: true,
    autoplay: true,
    arrows:true,
      speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='assets/images/left-arrow.webp'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='assets/images/right-arrow.webp'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      }
  
    ]
  });
  // end

// preloader
// window.addEventListener('load', function() {
//   document.getElementById('preloader').style.display = 'none';
//   document.body.style.overflow = 'auto';
// },500);
// end

// steps section
$('.step-number').on('click', function() {
  let targetId = $(this).data('target');
  $('html, body').animate({
      scrollTop: $(targetId).offset().top
  }, 800);
});

$(document).scroll(function() {
  let scrollPosition = $(document).scrollTop();
  $('.steps-sec').each(function() {
      let target = $(this).attr('id');
      let stepNumber = $(`.step-number[data-target="#${target}"]`);
      if ($(this).offset().top <= scrollPosition + 100) {
          $('.step-number').removeClass('active');
          stepNumber.addClass('active');
      }
  });
});

// site image scrool
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".scrolling-sec");
  const images = document.querySelectorAll(".scroll-image");

  function highlightSection() {
      sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const isIntersecting =
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2;
          if (isIntersecting) {
              section.classList.add("active");
              images[index].classList.add("active");
          } else {
              section.classList.remove("active");
              images[index].classList.remove("active");
          }
      });
  }

  document.addEventListener("scroll", highlightSection);

  var scrollToSection1Image =
      document.querySelector('[href="#section1"]');
  var scrollToSection2Image =
      document.querySelector('[href="#section2"]');
  var scrollToSection3Image =
      document.querySelector('[href="#section3"]');
  var scrollToSection4Image =
      document.querySelector('[href="#section4"]');

  scrollToSection1Image.addEventListener("click", function(event) {
      event.preventDefault();
      scrollToSection("section1");
  });

  scrollToSection2Image.addEventListener("click", function(event) {
      event.preventDefault();
      scrollToSection("section2");
  });

  scrollToSection3Image.addEventListener("click", function(event) {
      event.preventDefault();
      scrollToSection("section3");
  });

  scrollToSection4Image.addEventListener("click", function(event) {
      event.preventDefault();
      scrollToSection("section4");
  });

  function scrollToSection(sectionId) {
      var sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
          sectionElement.scrollIntoView({
              behavior: "smooth",
          });
      }
  }
});