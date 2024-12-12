export default function Footer({}) {
    return(
        <div className="w-full">
            <div className="bg-[#171717] py-3 border-b border-[#333] px-10">
                <p className="tracking-tight text-[14px] font-semibold">Nigeria</p>
            </div>
            <div className="bg-[#171717] py-4 flex sm:justify-between px-2 sm:px-10 flex-wrap justify-center gap-2 text-xs p-4">
                <div className="flex justify-around gap-5">
                    <p className="tracking-tight text-[14px] font-semibold">About</p>
                    <p className="tracking-tight text-[14px] font-semibold">Advertising</p>
                    <p className="tracking-tight text-[14px] font-semibold">Business</p>
                    <p className="tracking-tight text-[14px] font-semibold">How Search Work</p>
                </div>
                <div>
                    <p className="tracking-tight text-[14px] font-semibold">Our third decade of climate action: join us</p>
                </div>
                <div className="flex justify-around gap-5">
                    <p className="tracking-tight text-[14px] font-semibold">Privacy</p>
                    <p className="tracking-tight text-[14px] font-semibold">Terms</p>
                    <p className="tracking-tight text-[14px] font-semibold">Settings</p>
                </div>
            </div>
        </div>
    )
}