// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import React from 'react';
import { Link } from 'react-router-dom';
// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';
import { Content, Text, Wrapper } from './HeroImage.styles';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

type carouselState = {
  id: number;
  image: string;
  title: string;
  text: string;
}[];

type HeroImageProps = {
  carouselState: carouselState;
  loading: boolean;
};

const HeroImage: React.FC<HeroImageProps> = ({ carouselState, loading }) => {
  console.log({ carouselState });
  return (
    <Wrapper>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper">
        {!loading &&
          carouselState.map(
            (carousel) =>
              carousel.image &&
              carousel.title &&
              carousel.text && (
                <SwiperSlide key={carousel.title}>
                  <img
                    src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${carousel.image}`}
                    alt="nature"
                  />
                  <Content>
                    <Link to={`/${carousel.id}`}>
                      <Text>
                        <h1>{carousel.title}</h1>
                        <p>{carousel.text}</p>
                      </Text>
                    </Link>
                  </Content>
                </SwiperSlide>
              ),
          )}
      </Swiper>
    </Wrapper>
  );
};

export default HeroImage;
