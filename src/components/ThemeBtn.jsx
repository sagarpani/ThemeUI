import useTheme from "../context/theme";

function ThemeBtn() {

    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) darkTheme();
        else lightTheme();
    }

    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    onChange={onChangeBtn}
                    checked={themeMode === "dark"}
                />

                <div className="w-10 h-6 bg-gray-300 dark:bg-gray-700 rounded-full 
      peer-checked:bg-gray-900 dark:peer-checked:bg-white 
      transition-colors duration-300"></div>

                <div className="absolute top-1 left-1 w-4 h-4 bg-white dark:bg-black 
      rounded-full shadow-sm transform transition-transform duration-300
      peer-checked:translate-x-4"></div>
            </div>
        </label>
    );
}

export default ThemeBtn;