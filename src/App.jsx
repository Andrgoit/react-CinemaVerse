import "./index.css";
import github from "@/assets/github.svg";

function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1CB5E0] to-[#000851]">
      <h1
        className="text-4xl font-bold text-white"
        style={{ textShadow: "2px 2px 4px black" }}
      >
        Vite + React + Tailwind
      </h1>
      <a href="https://github.com/Andrgoit/react-template" target="_blank">
        <img src={github} alt="github icon" />
      </a>
    </div>
  );
}

export default App;
