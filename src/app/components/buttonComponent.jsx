export default function Button({text}) {
    return(
        <div className="bg-[#303134] rounded-sm">
            <button className="py-2 px-3 text-[8px] sm:text-[12px] rounded-sm font-medium text-white hover:border hover:border-[#605f5f]">{text}</button>
        </div>
    )
}