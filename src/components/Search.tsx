const Search: React.FC = () => {
    return (
        <div className="flex justify-between items-center mt-[36px] rounded-[15px] bg-[#fefefe] shadow-custom pt-[6.5px] pr-[7px] pb-[7.5px] pl-[16px] w-[327.2px] max-w-[327.2px]">
            <img src="/icon-search.svg" alt="Search" className="w-[14.8px] h-[14.7px]"/>
            <input type="text" placeholder="Search GitHub username…" name="user" className="bg-[#fefefe] text-[13px] font-normal leading-[1.92] tracking-normal text-left text-[#4b6a9b] "/>
            <button className=" rounded-[10px] bg-[#0079ff] py-[12.5px] pr-[14px] pl-[18px]">Search</button>
        </div>
    )
}

export default Search;