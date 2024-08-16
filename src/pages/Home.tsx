import { useGetCurrentUser } from "../hooks/auth/useGetCurrentUser";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NavLink } from "react-router-dom";
import ConcertCard from "../components/ConcertCard";
import { notification } from "../assets";
import { TypoLogo } from "../components";
import { BsThreeDotsVertical } from "react-icons/bs";

const styles = {
    activeLink:
        "relative before:absolute before:bottom-[-35%] before:z-50 before:w-[40%] before:left-[50%] before:translate-x-[-50%] before:h-[4px] before:bg-primary before:rounded-b-xl",
    navLink:
        "relative font-semibold text-lg hover:text-primary transition-colors",
};

const Home = () => {
    // const { data: user } = useGetCurrentUser();

    return (
        <>
            <div className="flex justify-between items-center px-5 py-3">
                <img src={notification} alt="notification" />
                <TypoLogo />
                <BsThreeDotsVertical />
            </div>
            <div className="pl-3 py-5">
                <Swiper
                    className="pb-2"
                    spaceBetween={-40}
                    slidesPerView={3}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                    }}
                    // aria-label="Navigation Tabs"
                >
                    <SwiperSlide>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.activeLink} ${styles.navLink}`
                                    : styles.navLink
                            }
                            to={"/"}
                        >
                            Concerts
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.activeLink} ${styles.navLink}`
                                    : styles.navLink
                            }
                            to={"/"}
                        >
                            Videos
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.activeLink} ${styles.navLink}`
                                    : styles.navLink
                            }
                            to={"/"}
                        >
                            Artists
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.activeLink} ${styles.navLink}`
                                    : styles.navLink
                            }
                            to={"/"}
                        >
                            Photos
                        </NavLink>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.activeLink} ${styles.navLink}`
                                    : styles.navLink
                            }
                            to={"/"}
                        >
                            Shits
                        </NavLink>
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    className="mt-5"
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                    }}
                    // aria-label="Navigation Tabs"
                >
                    <SwiperSlide>
                        <ConcertCard
                            artist={"Abyusif"}
                            concertTitle={"Dubai Tour"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ConcertCard
                            artist={"Abyusif"}
                            concertTitle={"Dubai Tour"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ConcertCard
                            artist={"Abyusif"}
                            concertTitle={"Dubai Tour"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ConcertCard
                            artist={"Abyusif"}
                            concertTitle={"Dubai Tour"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ConcertCard
                            artist={"Abyusif"}
                            concertTitle={"Dubai Tour"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ConcertCard
                            artist={"Abyusif"}
                            concertTitle={"Dubai Tour"}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Home;
