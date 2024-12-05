const Search: React.FC<{
  theme: boolean;
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  handleUserInput: React.ChangeEventHandler<HTMLInputElement>;
  githubData: Promise<any>;
}> = ({ theme, user, setUser, handleUserInput, githubData }) => {
  return (
    <div
      className={`${
        theme ? "bg-[#fefefe]" : "bg-[#1e2a47]"
      } flex items-center mt-[36px] rounded-[15px]  shadow-custom pt-[6.5px] pr-[7px] pb-[7.5px] pl-[16px] w-[327.2px] max-w-[327.2px] tablet:py-[9.5px] tablet:pr-[10px] tablet:pl-[32px] tablet:w-[573px] tablet:max-w-[573px] desktop:w-[730px] desktop:max-w-[730px] `}
    >
      <img
        src="/icon-search.svg"
        alt="Search"
        className="w-[20px] h-[20px] tablet:w-[24px] tablet:h-[24px]"
      />
      <input
        onChange={handleUserInput}
        type="text"
        placeholder="Search GitHub username…"
        name="user"
        className={`${
          theme ? "bg-[#fefefe] text-[#4b6a9b]" : "bg-[#1e2a47] text-[#ffffff]"
        } w-full ml-[9px] text-[13px] font-normal leading-[1.92] tracking-normal text-left tablet:text-[18px] tablet:leading-[1.39] tablet:ml-[24px]`}
      />
      <button
        onClick={() => {
          githubData(user);
        }}
        className="ml-[7px] rounded-[10px] bg-[#0079ff] py-[12.5px] pr-[14px] pl-[18px] text-[14px] font-bold leading-normal text-center text-[#ffffff] tablet:text-[16px] tablet:pt-[12.5px] tablet:pr-[23px] tablet:pb-[13.5PX] tablet:pl-[24px] tablet:ml-[0]"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
