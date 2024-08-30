import { FC, useEffect, useRef, useState } from "react";
import { PageContainer } from "../components";
import { abyo, reel, reel2, reel3, reel4 } from "../assets";
import { CiHeart, CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import BackButton from "../components/shared/BackButton";
import { FaRegComment } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";

interface VideoCardProps {
    src: string;
    isActive: boolean;
}

const VideoCard: FC<VideoCardProps> = ({ src, isActive }) => {
    const [showMute, setShowMute] = useState<boolean>(false);
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const vidRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (vidRef.current) {
            vidRef.current.muted = !isActive;
            setIsMuted(!isActive);
        }
    }, [isActive]);

    const handleMuteToggle = () => {
        if (vidRef.current) {
            vidRef.current.muted = !vidRef.current.muted;
            setIsMuted(vidRef.current.muted);
        }
    };

    useEffect(() => {
        setShowMute(true);
        const timer = setTimeout(() => setShowMute(false), 1000);
        return () => clearTimeout(timer);
    }, [isMuted]);

    return (
        <div className="flex justify-center relative w-full h-screen">
            <AnimatePresence>
                {showMute && (
                    <motion.div
                        transition={{ duration: 0.7 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70px] h-[70px] rounded-full bg-base flex justify-center items-center z-40 cursor-pointer"
                    >
                        {isMuted ? (
                            <CiVolumeMute size={30} color="white" />
                        ) : (
                            <CiVolumeHigh size={30} color="white" />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            <div
                onClick={handleMuteToggle}
                className="w-[100%] h-[100%] rounded-lg relative"
            >
                <video
                    ref={vidRef}
                    className="h-full w-full"
                    muted
                    autoPlay
                    playsInline
                    loop={true}
                >
                    <source src={src} />
                </video>
                <VideoDetails />
            </div>
            <VideoActions />
        </div>
    );
};

const useIntersectionObserver = (
    refs: any[],
    setActiveIndex: (index: number) => void
) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = refs.findIndex(
                            (ref) => ref.current === entry.target
                        );
                        if (index !== -1) setActiveIndex(index);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        refs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            observer.disconnect();
        };
    }, [refs, setActiveIndex]);
};

const VideoDetails: FC = () => (
    <div className="absolute w-[90%] bottom-20 lg:bottom-5 left-0 pl-2">
        <div className="flex items-center gap-5">
            <div className="user flex items-center gap-2">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                        className="max-w-full object-cover"
                        src={abyo}
                        alt="abyo"
                    />
                </div>
                <h1 className="text-2xl">Abyusif</h1>
            </div>
            <button className="bg-transparent border border-white rounded-md px-7 py-1 font-semibold text-base text-white">
                Follow
            </button>
        </div>
        <p className="caption text-lg mt-5 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            repellat.
        </p>
    </div>
);

const VideoActions: FC = () => (
    <div className="flex absolute right-0 bottom-20 lg:bottom-5 pr-5 h-[100%] w-[10%] flex-col justify-end items-center gap-10 text-black">
        <span>
            <CiHeart color="white" size={30} />
        </span>
        <span>
            <FaRegComment color="white" size={30} />
        </span>
        <span>
            <BsSend color="white" size={30} />
        </span>
        <span>
            <BiDotsVerticalRounded color="white" size={30} />
        </span>
    </div>
);

const Videos: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const videoRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];

    useIntersectionObserver(videoRefs, setActiveIndex);

    return (
        <PageContainer>
            {/* <div className="py-4 px-5 flex justify-between items-center absolute top-0 left-0 w-full bg-transparent z-50">
                <BackButton />
            </div> */}
            <div className="scroll-container">
                {videoRefs.map((ref, index) => (
                    <div
                        key={index}
                        className="video-card flex justify-start items-start"
                        ref={ref}
                    >
                        <VideoCard
                            src={[reel, reel2, reel3, reel4][index]}
                            isActive={activeIndex === index}
                        />
                    </div>
                ))}
            </div>
        </PageContainer>
    );
};

export default Videos;
