import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { PageContainer } from "../components";
import BackButton from "../components/shared/BackButton";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useGetCurrentUser } from "../hooks/auth/useGetCurrentUser";
import { date, locationIcon, tickets } from "../assets";
import { SwiperSlide, Swiper } from "swiper/react";
import ConcertCard from "../components/home/ConcertCard";
import "swiper/css";

interface SetDetails {
    albums: number;
    tracks: number;
}

interface Album {
    title: string;
    cover: string;
}

interface Concert {
    artistName: string;
    title: string;
    cover: string;
    location: string;
    date: string;
    set: SetDetails;
    albums: Album[];
}

const ConcertPage = () => {
    const { data: user } = useGetCurrentUser();

    const [concert, setConcert] = useState<Concert>();
    const { id } = useParams();

    const location = useLocation();
    useEffect(() => {
        setConcert(location.state);
    }, [id]);

    return (
        <>
            <PageContainer>
                <div
                    style={{ backgroundImage: `url(${concert?.cover})` }}
                    className="concert-cover rounded-b-[6rem] p-5 h-[30vh] lg:h-[50vh] relative overflow-hidden"
                >
                    <div className="py-3 flex justify-between items-center">
                        <BackButton />
                        <BsThreeDotsVertical size={25} />
                    </div>
                </div>
                <div className="p-3 lg:w-[80%] mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl">{concert?.artistName}</h1>
                        <p className="text-lg">upComing Concert</p>

                        <h1 className="text-xl text-slate-500 my-3 text-center">
                            {concert?.set.albums} Album, {concert?.set.albums}{" "}
                            Track
                        </h1>

                        <div className="flex flex-col items-center justify-start gap-3">
                            <div className="flex items-center gap-2">
                                <img
                                    className="w-[20px]"
                                    src={locationIcon}
                                    alt="location-icon"
                                />
                                <p>Location : {concert?.location}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img className="w-[20px]" src={date} alt="date-icon" />
                                <p>Date : {concert?.date}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img
                                    className="w-[20px]"
                                    src={tickets}
                                    alt="ticket-icon"
                                />
                                <p>
                                    Book A Ticket : Lorem ipsum dolor Lorem
                                    ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-5">
                    <h1 className="text-2xl font-semibold mb-5">Albums</h1>
                    <Swiper
                        className="mySwiper"
                        spaceBetween={10}
                        slidesPerView={2}
                        breakpoints={{
                            290: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            400: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            500: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            600: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 8,
                            },
                            850: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 15,
                            },
                        }}
                    >
                        {concert?.albums.map((album) => {
                            return (
                                <SwiperSlide key={album.title}>
                                    <ConcertCard
                                        concertTitle={album.title}
                                        concertCover={album.cover}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </PageContainer>
        </>
    );
};

export default ConcertPage;
