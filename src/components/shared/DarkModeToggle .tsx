import useDarkMode from "../../hooks/useDarkMode";

const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div
      className={`p-4 ${
        isDarkMode ? "bg-primary-dark" : "bg-primary-light"
      } text-white`}
    >
      <h1 className="text-2xl">Dark Mode is {isDarkMode ? "On" : "Off"}</h1>
      <button
        onClick={toggleDarkMode}
        className="mt-4 p-2 bg-gray-800 text-white rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;
