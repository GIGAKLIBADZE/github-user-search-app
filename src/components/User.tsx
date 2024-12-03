const User: React.FC = () => {
    return (
        <div className="mt-[16px] pt-[31px] px-[24px] pb-[79px] rounded-[15px] bg-[#fefefe] shadow-custom max-w-[327.2px]">
            <div className="flex gap-[19px]">
                <img src="/user.png" alt="User-avatar" className="w-[70px] h-[70px] rounded-[50%]"/>
                <div>
                    <h4 className="text-[16px] font-bold leading-normal text-left text-[#2b3442]">The Octocat</h4>
                    <p className="text-[13px] font-normal leading-normal text-left text-[#0079ff]">@octocat</p>
                    <p className="text-[13px] font-normal leading-normal text-left text-[#697c9a]">Joined 25 Jan 2011</p>
                </div>
            </div>
            <p className="mt-[34px] text-[13px] font-normal leading-[1.92] text-left text-[#4b6a9b]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
            <div className="flex justify-around pt-[18px] pr-[14px] pb-[19px] pl-[15px] rounded-[10px] bg-[#f6f8ff] mt-[23px]">
                <div>
                    <p className="text-[11px] font-normal leading-normal text-center text-[#4b6a9b]">Repos</p>
                    <p className="text-[16px] font-bold leading-normal text-center text-[#2b3442] mt-[8px]">8</p>
                </div>
                <div>
                    <p className="text-[11px] font-normal leading-normal text-center text-[#4b6a9b]">Followers</p>
                    <p className="text-[16px] font-bold leading-normal text-center text-[#2b3442] mt-[8px]">3938</p>
                </div>
                <div>
                    <p className="text-[11px] font-normal leading-normal text-center text-[#4b6a9b]">Following</p>
                    <p className="text-[16px] font-bold leading-normal text-center text-[#2b3442] mt-[8px]">9</p>
                </div>
            </div>
            <div className="mt-[24px]">
                <div className="flex">
                    <img src="/icon-location.svg" alt="Location Icon"/>
                    <p className="text-[13px] font-normal leading-normal text-left text-[#4b6a9b] ml-[19.2px]">San Francisko</p>
                </div>
                <div className="flex mt-[17px]">
                    <img src="/icon-website.svg" alt="Location Icon"/>
                    <p className="text-[13px] font-normal leading-normal text-left text-[#4b6a9b] ml-[13px]">https://github.blog</p>
                </div>
                <div className="flex mt-[17px]">
                    <img src="/icon-twitter.svg" alt="Location Icon"/>
                    <p className="text-[13px] font-normal leading-normal text-left text-[#4b6a9b] ml-[13px]">Not Available</p>
                </div>
                <div className="flex mt-[16px]">
                    <img src="/icon-company.svg" alt="Location Icon"/>
                    <p className="text-[13px] font-normal leading-normal text-left text-[#4b6a9b] ml-[13px]">@github</p>
                </div>
            </div>
        </div>
    )
}

export default User;