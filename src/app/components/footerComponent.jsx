export default function Footer({}) {
    return(
<div className="w-full">
  {/* Top Section */}
  <div className="bg-[#171717] py-3 border-b border-[#333] px-4 sm:px-10">
    <p className="tracking-tight text-[8px] sm:text-[14px] font-semibold text-white text-center sm:text-left leading-[0.2rem] sm:leading-normal">Nigeria</p>
  </div>

  <div className="bg-[#171717] py-4 flex flex-col sm:flex-row sm:justify-between px-4 sm:px-10 flex-wrap justify-center gap-4 text-xs">
    <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-5 text-center sm:text-left">
      <p className="tracking-tight text-[8px] sm:text-[14px] font-semibold text-white line leading-[0.2rem] sm:leading-normal">About</p>
      <p className="tracking-tight text-[8px] sm:text-[14px] font-semibold text-white line leading-[0.2rem] sm:leading-normal">Advertising</p>
      <p className="tracking-tight text-[8px] sm:text-[14px] font-semibold text-white line leading-[0.2rem] sm:leading-normal">Business</p>
      <p className="tracking-tight text-[8px] sm:text-[14px] font-semibold text-white line leading-[0.2rem] sm:leading-normal">How Search Works</p>
    </div>
    <div className="text-center sm:text-left">
      <p className="tracking-tight text-[8px] sm:text-[14px] font-semibold text-white line leading-[0.2rem] sm:leading-normal">
        Our third decade of climate action: join us
      </p>
    </div>
    <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-5 text-center sm:text-left">
      <p className="tracking-tight text-[8px] sm:text-[14px] font-semibold text-white line leading-[0.2rem] sm:leading-normal">Privacy</p>
      <p className="tracking-tight text-[8px] sm:text-[14px] font-semibold text-white line leading-[0.2rem] sm:leading-normal">Terms</p>
      <p className="tracking-tight text-[8px] sm:text-[14px] font-semibold text-white line leading-[0.2rem] sm:leading-normal">Settings</p>
    </div>
  </div>
</div>
    )
}