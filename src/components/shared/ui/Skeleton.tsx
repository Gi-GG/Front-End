const Skeleton = ({ className = "w-10 h-10" }) => {
  return <div className={`bg-highlight animate-pulse ${className}`}></div>;
};

export default Skeleton;
