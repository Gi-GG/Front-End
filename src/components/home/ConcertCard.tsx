import React from "react";
import { abyo, playIcon } from "../../assets";

interface ConcertCardProp {
    concertTitle: string;
    artist?: string;
    concertCover?: string;
}

const ConcertCard: React.FC<ConcertCardProp> = ({
    concertTitle,
    artist,
    concertCover,
}) => {
    return (
        <>
            <div className="w-fit cursor-pointer">
                <div className="flex justify-center max-w-[180px] h-[12rem] items-center relative">
                    <div className="rounded-3xl || w-full h-full || overflow-hidden ">
                        <img
                            className="max-w-[100%] min-h-[100%] object-cover"
                            src={concertCover || abyo}
                            alt="me"
                        />
                        <div className="absolute translate-x-[-1rem] -bottom-2 -right-2 w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer bg-highlight">
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
