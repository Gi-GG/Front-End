import React, { createContext, useState, useContext } from "react";
import { Song } from "../../types/song";

interface ModalContextType {
  isModalVisible: boolean;
  setIsModalVisible: (visible: boolean) => void;
  selectedSong: Song | undefined;
  setSelectedSong: React.Dispatch<React.SetStateAction<Song | undefined>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedSong, setSelectedSong] = useState<Song | undefined>();

  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
        selectedSong,
        setSelectedSong,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
