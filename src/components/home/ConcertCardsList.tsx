import { NavLink, useNavigate } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import ConcertCard from "./ConcertCard";
import "swiper/css";

interface SetDetails {
    albums: number;
    tracks: number;
}

interface Concert {
    artistName: string;
    title: string;
    cover: string;
    location: string;
    date: string;
    set: SetDetails;
}

const concerts: Concert[] = [
    {
        artistName: "The Weeknd",
        title: "After Hours Tour",
        cover: "https://images.bubbleup.com/vipnation/1-default/2-vipnationcom/theweeknd_national_vip_1280x1280_1612339224.jpg",
        location: "Madison Square Garden, New York",
        date: "2024-09-15",
        set: {
            albums: 4,
            tracks: 20,
        },
    },
    {
        artistName: "Billie Eilish",
        title: "Happier Than Ever World Tour",
        cover: "https://th.bing.com/th/id/OIP.OIS2kdSjrM8iuJfzbJHDtQHaHa?rs=1&pid=ImgDetMain",
        location: "O2 Arena, London",
        date: "2024-10-22",
        set: {
            albums: 2,
            tracks: 18,
        },
    },
    {
        artistName: "Drake",
        title: "Certified Lover Boy Tour",
        cover: "https://th.bing.com/th/id/OIP.TcPmscMUncxlOB0B37GYsQHaHa?rs=1&pid=ImgDetMain",
        location: "Scotiabank Arena, Toronto",
        date: "2024-11-05",
        set: {
            albums: 6,
            tracks: 25,
        },
    },
    {
        artistName: "Taylor Swift",
        title: "The Eras Tour",
        cover: "https://th.bing.com/th/id/OIP.qi4hZsvUhVpMjxlj-iL1xwAAAA?rs=1&pid=ImgDetMain",
        location: "SoFi Stadium, Los Angeles",
        date: "2024-12-01",
        set: {
            albums: 9,
            tracks: 28,
        },
    },
    {
        artistName: "BTS",
        title: "Map of the Soul Tour",
        cover: "https://i0.wp.com/kstationtv.com/wp-content/uploads/2020/10/Affiche-concert-Map-Of-The-Soul-ONE-BTS.jpeg?resize=1087%2C1536&ssl=1",
        location: "Olympic Stadium, Seoul",
        date: "2024-08-30",
        set: {
            albums: 7,
            tracks: 23,
        },
    },
    {
        artistName: "Adele",
        title: "30 Tour",
        cover: "https://th.bing.com/th/id/OIP.1FlctZbiT10TmMpBJ8efLQHaHa?rs=1&pid=ImgDetMain",
        location: "Royal Albert Hall, London",
        date: "2024-11-25",
        set: {
            albums: 4,
            tracks: 15,
        },
    },
];

const styles = {
    activeLink:
        "relative before:absolute before:bottom-[-35%] before:z-50 before:w-[40%] before:left-[50%] before:translate-x-[-50%] before:h-[4px] before:bg-primary before:rounded-b-xl",
    navLink:
        "relative font-semibold text-lg hover:text-primary transition-colors",
};
const ConcertCardsList = () => {
    const navigate = useNavigate();
    const weee = (concert: Concert) => {
        navigate(`/${concert.title}`);
    };

    return (
        <div className="pl-3 py-5">
            <Swiper
                className="mySwiper pb-2"
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                    290: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    400: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    500: {
                        slidesPerView: 5,
                        spaceBetween: 3,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                    850: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 15,
                    },
                }}
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
                className="mySwiper mt-10"
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
                {concerts.map((concert) => {
                    return (
                        <SwiperSlide
                            key={concert.artistName}
                            onClick={() => weee(concert)}
                        >
                            <ConcertCard
                                artist={concert.artistName}
                                concertTitle={concert.title}
                                concertCover={concert.cover}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default ConcertCardsList;
