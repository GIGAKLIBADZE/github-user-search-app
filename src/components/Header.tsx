const Header: React.FC<{
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ theme, setTheme }) => {
  return (
    <header className="flex justify-between items-center max-w-[327.2px] tablet:max-w-[573px] desktop:max-w-[730px]">
      <h1
        className={`${
          theme ? "text-[#222731]" : "text-[#ffffff]"
        } text-[26px] font-bold leading-normal tracking-normal text-left`}
      >
        devfinder
      </h1>
      <div
        className="flex gap-[16px]"
        onClick={() =>
          setTheme((prevTheme) => {
            document.querySelector("body") &&
              document &&
              (prevTheme
                ? (document.querySelector("body").style.backgroundColor =
                    "#141d2f")
                : (document.querySelector("body").style.backgroundColor =
                    "#ffffff"));
            return !prevTheme;
          })
        }
      >
        <p
          className={`${
            theme
              ? "text-[#4b6a9b] desktop:text-[#697c9a]"
              : "text-[#ffffff] desktop:text-[#ffffff]"
          } text-[13px] font-bold leading-normal tracking-[2.5px] text-right `}
        >
          {theme ? "DARK" : "LIGHT"}
        </p>
        {theme ? (
          <img src="/icon-moon.svg" alt="Light" />
        ) : (
          <img src="/icon-sun.svg" alt="Light" />
        )}
      </div>
    </header>
  );
};

export default Header;
