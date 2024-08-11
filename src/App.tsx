import "./App.css";
import DarkModeToggle from "./components/shared/DarkModeToggle ";

function App() {
  return (
    <>
      <DarkModeToggle />

      <div className="bg-base-light dark:bg-base-dark text-highlight-light dark:text-highlight-dark h-screen">
        This background color will change based on the theme.
      </div>
    </>
  );
}

export default App;
