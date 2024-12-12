import Image from "next/image"
export default function ImageComponents({}) {
    return(
<div className="flex flex-row gap-4 h-auto justify-center items-end mb-4">
  <Image
    src="/google2.png"
    priority
    alt="Seasonal Holidays 2024"
    height={400}
    width={500}
    className="w-full max-w-[300px] md:max-w-[500px] h-auto"
  />
  <button className="self-end">
    <svg
      className="bg-[#28292A] rounded-full p-2"
      height="30"
      width="30"
      stroke="white"
      strokeWidth="0.1"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M18 16c-.79 0-1.5.31-2.03.81L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.53.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.48.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.05 4.12c-.05.22-.09.45-.09.69 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3zm0-12c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
    </svg>
  </button>
</div>
    )
}