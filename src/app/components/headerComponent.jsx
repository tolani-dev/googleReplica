import Image from "next/image"
export default function HeaderComponent({}) {
    return(
        <div className="sticky mb-3">
            <div className="flex gap-4 justify-end items-center">
                <div className="text-[14px] text-white">Gmail</div>
                <div className="text-[14px] text-white">Images</div>
                <div>
                <svg stroke="white" strokeWidth="3" fill="white" height="24px" viewBox="0 -960 960 960" width="24px"> <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"></path> </svg>
                </div>
                <div>
                <Image src="/menu.png" alt="" height="24" width="24"></Image>
                </div>
                <div className="w-9 h-9 text-center flex justify-center items-center bg-[#F4511E] rounded-full">
                    <div className="font-semibold">G</div>
                </div>
            </div>
        </div>
    )
}