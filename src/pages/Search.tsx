import React, { useEffect, useState } from "react";
import { Navigator, PageContainer, TypoLogo } from "../components";
import { FaAngleRight } from "react-icons/fa";
import { useSearchSongs } from "../hooks/songs/useSearchSongs";
import { TailSpin } from "react-loader-spinner";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [debouncedTerm, setDebouncedTerm] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(search);
    }, 500); // 500ms debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [search]);
  const { data, isLoading } = useSearchSongs(debouncedTerm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <PageContainer>
      <Navigator>
        <TypoLogo />
      </Navigator>

      <main className="px-2 pt-3">
        <div className="bg-highlight rounded-3xl pb-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="search-input || px-3 py-2 || flex items-center || bg-white || rounded-3xl || shadow-xl shadow-primary"
          >
            <input
              className="bg-transparent grow outline-none text-black text-lg font-semibold"
              placeholder="Search Artists..."
              type="text"
              value={search}
              onChange={handleChange}
            />
            <button className="text-white || bg-primary || font-semibold || shadow-primary shadow-lg || text-lg px-8 py-2 || rounded-3xl">
              Search
            </button>
          </form>
          <div className="w-[90%] mx-auto mt-10">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <TailSpin
                  visible={true}
                  height="30"
                  width="30"
                  color="#D6D6D6"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                />
              </div>
            ) : (
              data?.map((song) => (
                <div
                  className="flex items-center gap-4 mb-3"
                  key={song.album_image}
                >
                  <div className="w-[15%] h-full">
                    <img
                      className="max-w-[100%] h-auto object-cover"
                      src={song.album_image}
                      alt="song Img"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-semibold">{song.song}</h1>
                    <p className="text-base font-thin">{song.album}</p>
                  </div>
                </div>
              ))
            )}
            {!search && (
              <div>
                <h1 className="text-xl font-bold my-3">Trending search</h1>
                <div className="flex flex-col gap-3">
                  <div className="bg-white rounded-lg flex items-center p-3">
                    <div className="grow flex items-center gap-5">
                      <h1 className="text-black text-lg font-bold">
                        Travis Scott
                      </h1>
                      <p className="text-highlight font-thin">7.8k Searches</p>
                    </div>
                    <FaAngleRight color="black" />
                  </div>
                  <div className="bg-white rounded-lg flex items-center p-3">
                    <div className="grow flex items-center gap-5">
                      <h1 className="text-black text-lg font-bold">
                        Travis Scott
                      </h1>
                      <p className="text-highlight font-thin">7.8k Searches</p>
                    </div>
                    <FaAngleRight color="black" />
                  </div>
                  <div className="bg-white rounded-lg flex items-center p-3">
                    <div className="grow flex items-center gap-5">
                      <h1 className="text-black text-lg font-bold">
                        Travis Scott
                      </h1>
                      <p className="text-highlight font-thin">7.8k Searches</p>
                    </div>
                    <FaAngleRight color="black" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </PageContainer>
  );
};

export default Search;
