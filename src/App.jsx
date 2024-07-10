import { useState } from "react";
import Buttons from "./CommonComponents/Button";
import SecondScreen from "./ScreenTwo/SecondScreen";
import ThirdScreen from "./ScreenThree/ThirdScreen";
import FirstScreen from "./ScreenOne/FirstScreen";
import Switch from "./CommonComponents/Switch";
import useDarkMode from "./CustomHook/useDarkMode";

const App = () => {
  const [screen, setScreen] = useState("first");
  const [darkMode, setDarkMode] = useDarkMode();
  const [isSwitchActive, setIsSwitchActive] = useState(darkMode);

  const handleSwitchActive = () => {
    setIsSwitchActive(!isSwitchActive);
    setDarkMode();
  };

  const ShowScreen = () => {
    switch (screen) {
      case "first":
        return <FirstScreen />;
      case "second":
        return <SecondScreen />;
      case "third":
        return <ThirdScreen />;
      default:
        return <FirstScreen />;
    }
  };

  return (
    <div>
      <div className="bg-[#EEF5FF] dark:bg-dark flex-col py-12 flex items-center justify-center">
        <div>
          <div className="flex  gap-3 px-5">
            <h1>
              <i className="fa-regular fa-sun dark:text-primary"></i>
            </h1>
            <Switch isActive={isSwitchActive} onToggle={handleSwitchActive} />
            <h2>
              <i className="fa-solid fa-moon dark:text-primary"></i>
            </h2>
          </div>
          <div className="bg-white dark:bg-dark_card h-[100%] w-[60vw] rounded-[50px] shadow-xl ">
            <div></div>
            <div className="grid grid-cols-3 dark:border-gray-400 border-b-2 border-primary">
              <div
                onClick={() => setScreen("first")}
                className={`border-r-2 dark:border-gray-400 border-primary rounded-tl-[50px] py-4 flex justify-center ${
                  screen === "first"
                    ? "bg-dark_header dark:bg-blue-500"
                    : "text-primary"
                }`}
              >
                <Buttons className={"bg-transparent border-none"}>
                  First Screen
                </Buttons>
              </div>
              <div
                onClick={() => setScreen("second")}
                className={`border-r-2 py-4 dark:border-gray-400 border-primary flex justify-center ${
                  screen === "second"
                    ? "bg-dark_header dark:bg-blue-500"
                    : "text-primary"
                }`}
              >
                <Buttons className={"bg-transparent border-none"}>
                  Second Screen
                </Buttons>
              </div>
              <div
                onClick={() => setScreen("third")}
                className={`py-4 rounded-tr-[50px] flex justify-center ${
                  screen === "third"
                    ? "bg-dark_header dark:bg-blue-500"
                    : "text-primary"
                }`}
              >
                <Buttons className={"bg-transparent border-none"}>
                  Third Screen
                </Buttons>
              </div>
            </div>
            <div className="p-4">{ShowScreen()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
