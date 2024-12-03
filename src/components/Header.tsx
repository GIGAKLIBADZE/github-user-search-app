const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-[26px] font-bold leading-normal tracking-normal text-left text-[#222731]">devfinder</h1>
            <div className="flex gap-[16px]">
                <p className="text-[13px] font-bold leading-normal tracking-[2.5px] text-right text-[#4b6a9b]">DARK</p>
                <img src="/icon-moon.svg" alt="Light"/>
            </div>
        </header>
    )
}

export default Header;