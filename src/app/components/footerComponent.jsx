export default function Footer({}) {
    return(
<div className="w-full">
  {/* Top Section */}
  <div className="bg-[#171717] py-3 border-b border-[#333] px-4 sm:px-10">
    <p className="tracking-tight text-[14px] font-semibold text-white text-center sm:text-left">Nigeria</p>
  </div>

  <div className="bg-[#171717] py-4 flex flex-col sm:flex-row sm:justify-between px-4 sm:px-10 flex-wrap justify-center gap-4 text-xs">
    <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-5 text-center sm:text-left">
      <p className="tracking-tight text-[14px] font-semibold text-white">About</p>
      <p className="tracking-tight text-[14px] font-semibold text-white">Advertising</p>
      <p className="tracking-tight text-[14px] font-semibold text-white">Business</p>
      <p className="tracking-tight text-[14px] font-semibold text-white">How Search Works</p>
    </div>
    <div className="text-center sm:text-left">
      <p className="tracking-tight text-[14px] font-semibold text-white">
        Our third decade of climate action: join us
      </p>
    </div>
    <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-5 text-center sm:text-left">
      <p className="tracking-tight text-[14px] font-semibold text-white">Privacy</p>
      <p className="tracking-tight text-[14px] font-semibold text-white">Terms</p>
      <p className="tracking-tight text-[14px] font-semibold text-white">Settings</p>
    </div>
  </div>
</div>
    )
}