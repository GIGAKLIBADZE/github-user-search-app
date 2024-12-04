const User: React.FC = () => {
    return (
        <div className="mt-[16px] pt-[32px] px-[24px] pb-[48px] rounded-[15px] bg-[#fefefe] shadow-custom max-w-[327.2px] tablet:p-[40px] tablet:mt-[24px] tablet:max-w-[573px] desktop:w-[730px] desktop:max-w-[730px] desktop:pt-[44px] desktop:px-[48px] desktop:pl-[48px] desktop:flex desktop:gap-[37px]">    
            <img src="/user.png" alt="User-avatar" className="hidden w-[70px] h-[70px] rounded-[50%] tablet:w-[117px] tablet:h-[117px] desktop:block"/> 
            <div>
                <div className="flex items-center gap-[19px] tablet:gap-[41px] desktop:gap-[36px]">
                    <img src="/user.png" alt="User-avatar" className="w-[70px] h-[70px] rounded-[50%] tablet:w-[117px] tablet:h-[117px] desktop:hidden"/>
                    <div className="desktop:flex desktop:gap-[138px] inline-block">
                        <div>
                            <h4 className="text-[16px] font-bold leading-normal text-left text-[#2b3442] tablet:text-[26px]">The Octocat</h4>
                            <p className="text-[13px] font-normal leading-normal text-left text-[#0079ff] tablet:text-[16px] tablet:mt-[2px]">@octocat</p>
                        </div>
                        <p className="text-[13px] font-normal leading-normal text-left text-[#697c9a] tablet:tex-[15px] tablet:mt-[4px] desktop:mt-[8px]">Joined 25 Jan 2011</p>
                    </div>
                </div>
                <p className="mt-[34px] text-[13px] font-normal leading-[1.92] text-left text-[#4b6a9b] tablet:mt-[24px] tablet:text-[15px] tablet:leading-[1.67] ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
                <div className="flex justify-around pt-[18px] pr-[14px] pb-[19px] pl-[15px] rounded-[10px] bg-[#f6f8ff] mt-[23px] tablet:pt-[15px] tablet:pr-[96px] tablet:pb-[17px] tablet:pl-[32px] tablet:mt-[32px] desktop:pr-[83px]">
                    <div>
                        <p className="text-[11px] font-normal leading-normal text-center text-[#4b6a9b] tablet:text-[13px] tablet:text-left">Repos</p>
                        <p className="text-[16px] font-bold leading-normal text-center text-[#2b3442] mt-[8px] tablet:text-[22px] tablet:text-left tablet:mt-[1px]">8</p>
                    </div>
                    <div>
                        <p className="text-[11px] font-normal leading-normal text-center text-[#4b6a9b] tablet:text-[13px] tablet:text-left">Followers</p>
                        <p className="text-[16px] font-bold leading-normal text-center text-[#2b3442] mt-[8px] tablet:text-[22px] tablet:text-left tablet:mt-[1px]">3938</p>
                    </div>
                    <div>
                        <p className="text-[11px] font-normal leading-normal text-center text-[#4b6a9b] tablet:text-[13px] tablet:text-left">Following</p>
                        <p className="text-[16px] font-bold leading-normal text-center text-[#2b3442] mt-[8px] tablet:text-[22px] tablet:text-left tablet:mt-[1px]">9</p>
                    </div>
                </div>
                <div className="flex flex-col mt-[24px] tablet:mt-[30px] tablet:flex-row tablet:items-center tablet:gap-[65px] desktop:mt-[37px]">
                    <div>
                        <div className="flex">
                            <img src="/icon-location.svg" alt="Location Icon"/>
                            <p className="text-[13px] font-normal leading-normal text-left text-[#4b6a9b] ml-[19.2px] tablet:text-[15px]">San Francisko</p>
                        </div>
                        <div className="flex mt-[17px]">
                            <img src="/icon-website.svg" alt="Location Icon"/>
                            <p className="text-[13px] font-normal leading-normal text-left text-[#4b6a9b] ml-[13px] tablet:text-[15px]">https://github.blog</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex mt-[17px] tablet:mt-[0px]">
                            <img src="/icon-twitter.svg" alt="Location Icon"/>
                            <p className="text-[13px] font-normal leading-normal text-left text-[#4b6a9b] ml-[13px] tablet:text-[15px] tablet:ml-[16px]">Not Available</p>
                        </div>
                        <div className="flex mt-[16px]">
                            <img src="/icon-company.svg" alt="Location Icon"/>
                            <p className="text-[13px] font-normal leading-normal text-left text-[#4b6a9b] ml-[13px] tablet:text-[15px] tablet:ml-[16px]">@github</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;