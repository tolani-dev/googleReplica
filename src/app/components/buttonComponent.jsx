export default function Button({text}) {
    return(
        <div className="bg-[#303134] rounded-sm">
            <button className="py-2 px-3 text-[8px] sm:text-[12px] font-medium text-white">{text}</button>
        </div>
    )
}