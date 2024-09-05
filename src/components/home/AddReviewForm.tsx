import { useState } from "react";
import Button from "../shared/Button";
import toast from "react-hot-toast";
import { Song } from "../../types/song";
import { useModalContext } from "../shared/ModalProvider";

interface Props {
  song: Song | undefined;
}

const AddReviewForm = ({ song }: Props) => {
  const { setIsModalVisible } = useModalContext();

  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // this should be replaced by a hook
  const addReview = async () => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(`Added Review To ${song?.song}`);
        resolve();
      }, 2000);
    });

    setIsModalVisible(false);
    toast.success("مفيش اندبوينت دة منظر بس", {
      style: {
        backgroundColor: "#616161",
        color: "#D6D6D6",
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await addReview();
    setIsLoading(false);
    setReview("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 items-center justify-center"
    >
      <input
        type="text"
        placeholder="Share Your Thoughts"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="className={`w-full || bg-transparent || outline-none || rounded-3xl || px-4 py-6 || border-[0.5px] border-secondary || placeholder:text-highlight || text-white"
      />

      <Button isLoading={isLoading} className="text-sm">
        Send Review
      </Button>
    </form>
  );
};

export default AddReviewForm;
