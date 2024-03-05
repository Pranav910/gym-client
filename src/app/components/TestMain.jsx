'use client'

import TestCard from '@/app/components/TestCard'
import styles from '@/styles/Sliding.module.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TestMain = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className={styles.slider}><TestCard /></SwiperSlide>
                <SwiperSlide className={styles.slider}><TestCard /></SwiperSlide>
                <SwiperSlide className={styles.slider}><TestCard /></SwiperSlide>
            </Swiper>
        </>
    )
}

export default TestMain