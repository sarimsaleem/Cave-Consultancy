import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import "./testimonials.css"
const TestimonialCarousel = () => {
  const testimonialData = [
    {
      avatar: "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
      name: "Simonette Lindermann",
      review: "Mind-blowing discovery! Changed my routine. Essential for everyone. A vice advice to all interested. Can't imagine without it!",
    },
    {
      avatar: "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
      name: "Merilee Beal",
      review: "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer.",
    },
    {
      avatar: "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
      name: "Suzi Lankester",
      review: "Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure!",
    },
    {
      avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
      name: "Gaston Cunnow",
      review: "Amazing product! It changed my life. Can't live without it now. Highly recommended to everyone!",
    },
    {
      avatar: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      name: "Marys Lobb",
      review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!",
    },
  ];

  useEffect(() => {
    Swiper.use([Pagination, Autoplay, EffectCoverflow]);

    const swiper = new Swiper('#carouselContainer', {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2.3,
      loop: true,
      spaceBetween: 30,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        depth: 200,
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    const handleResize = () => {
      const width = window.innerWidth;
      swiper.params.slidesPerView =
        width <= 500 ? 1 : width <= 768 ? 1.5 : 2.3;
      swiper.update();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      swiper.destroy();
    };
  }, []);

  return (
    <div id="carouselContainer" className="swiper-container">
        <h1 className='component-heading'>Testimonials</h1>
      <div className="swiper-wrapper">
        {testimonialData.map((item, index) => (
          <div className="swiper-slide" key={index}>
            <div className="img-holder">
              <img src={item.avatar} alt={item.name} />
            </div>
            <div className="content-holder">
              <h3>{item.name}</h3>
              <p>{item.review}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default TestimonialCarousel;
