import { NavLink, useNavigate } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import ConcertCard from "./ConcertCard";
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
const albumCover =
    "https://scene360.com/wp-content/uploads/2014/11/computergraphics-album-covers-2014-18.jpg";

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
        albums: [
            { title: "After Hours", cover: albumCover },
            { title: "Starboy", cover: albumCover },
            { title: "Beauty Behind the Madness", cover: albumCover },
            { title: "Kiss Land", cover: albumCover },
        ],
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
        albums: [
            { title: "Happier Than Ever", cover: albumCover },
            {
                title: "When We All Fall Asleep, Where Do We Go?",
                cover: albumCover,
            },
        ],
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
        albums: [
            { title: "Certified Lover Boy", cover: albumCover },
            { title: "Scorpion", cover: albumCover },
            { title: "Views", cover: albumCover },
            { title: "Take Care", cover: albumCover },
            { title: "Nothing Was the Same", cover: albumCover },
            {
                title: "If You're Reading This It's Too Late",
                cover: albumCover,
            },
        ],
    },
    {
        artistName: "Taylor Swift",
        title: "Eras Tour",
        cover: "https://th.bing.com/th/id/OIP.qi4hZsvUhVpMjxlj-iL1xwAAAA?rs=1&pid=ImgDetMain",
        location: "AT&T Stadium, Arlington",
        date: "2024-11-10",
        set: {
            albums: 10,
            tracks: 40,
        },
        albums: [
            { title: "Lover", cover: albumCover },
            { title: "Folklore", cover: albumCover },
            { title: "Evermore", cover: albumCover },
            { title: "Red (Taylor's Version)", cover: albumCover },
            { title: "Speak Now (Taylor's Version)", cover: albumCover },
            { title: "Reputation", cover: albumCover },
            { title: "1989", cover: albumCover },
            { title: "Fearless (Taylor's Version)", cover: albumCover },
            { title: "Speak Now", cover: albumCover },
            { title: "Red", cover: albumCover },
        ],
    },
    {
        artistName: "Adele",
        title: "30 World Tour",
        cover: "https://th.bing.com/th/id/OIP.lEtfPbIvS5gR53DuzPAklQAAAA?rs=1&pid=ImgDetMain",
        location: "O2 Arena, London",
        date: "2024-12-10",
        set: {
            albums: 4,
            tracks: 21,
        },
        albums: [
            { title: "30", cover: albumCover },
            { title: "25", cover: albumCover },
            { title: "21", cover: albumCover },
            { title: "19", cover: albumCover },
        ],
    },
    {
        artistName: "Travis Scott",
        title: "Astroworld Tour",
        cover: "https://th.bing.com/th/id/OIP.j6x5GiTN_mXz6SBJC4cj8gHaHa?rs=1&pid=ImgDetMain",
        location: "United Center, Chicago",
        date: "2024-11-05",
        set: {
            albums: 6,
            tracks: 25,
        },
        albums: [
            { title: "Astroworld", cover: albumCover },
            { title: "Rodeo", cover: albumCover },
            { title: "Birds in the Trap Sing McKnight", cover: albumCover },
            { title: "Utopia", cover: albumCover },
            { title: "Huncho Jack, Jack Huncho", cover: albumCover },
            { title: "Days Before Rodeo", cover: albumCover },
        ],
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
        navigate(`/${concert.title}`, {
            state: concert,
        });
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
                        to={"/videos"}
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
