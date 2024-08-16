import React from "react";
import { abyo, playIcon } from "../assets";

interface ConcertCardProp {
    concertTitle: string;
    artist: string;
    concertCover?: string;
}

const ConcertCard: React.FC<ConcertCardProp> = ({
    concertTitle,
    artist,
    concertCover,
}) => {
    return (
        <>
            <div>
                <div className="relative">
                    <div className=" || rounded-3xl || w-[120px] || overflow-hidden">
                        <img
                            className="max-w-[100%] h-auto object-cover"
                            src={concertCover || abyo}
                            alt="me"
                        />
                        <div className="absolute -bottom-2 -right-2 w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer bg-highlight">
                            <img src={playIcon} alt="play" />
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <h1 className="text-lg font-semibold">{concertTitle}</h1>
                    <p className="font-thin">{artist}</p>
                </div>
            </div>
        </>
    );
};

export default ConcertCard;
