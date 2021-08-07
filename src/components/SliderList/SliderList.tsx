// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Movie } from '../../API';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no-image-movie.jpg';
import Thumb from '../Thumb/Thumb';
import { Content, Header, Wrapper } from './SliderList.styles';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

type SliderListProps = {
  title: string;
  movieList: Movie[];
};

const SliderList = ({ title, movieList }: SliderListProps) => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <h3>{title}</h3>
        </Header>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          slidesPerGroup={10}
          loopFillGroupWithBlank={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              //   width: 640,
              slidesPerView: 5,
              slidesPerGroup: 4,
            },
            // when window width is >= 768px
            768: {
              //   width: 768,
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          className="mySwiper">
          {movieList.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="thumbWrapper">
                <Thumb
                  key={movie.id}
                  clickable
                  image={
                    movie.poster_path
                      ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                      : NoImage
                  }
                  movieId={movie.id}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Content>
    </Wrapper>
  );
};

export default SliderList;
