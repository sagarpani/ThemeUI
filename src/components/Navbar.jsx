import ThemeBtn from "./ThemeBtn";

function Navbar(){
    return(
        <div className="sticky top-0 z-50 shadow-md w-full flex justify-between items-center md:px-10 px-6 py-4">
          <h1 className="md:text-2xl text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            ThemeUI
          </h1>
          <ThemeBtn />
        </div>
    );
}

export default Navbar;