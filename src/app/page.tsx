import Image from "next/image";
import HeaderComponent from "./components/headerComponent"
import ImageComponents from "./components/imageComponents"
import Input from "./components/inputComponent"
import Button from "./components/buttonComponent"
import Footer from "./components/footerComponent"

export default function Home() {
  return (
<div className="flex flex-col min-h-screen p-4 gap-8 sm:p-2">
  {/* Main Content */}
  <div className="flex-grow p-8 gap-16 sm:p-5 font-[family-name:var(--font-geist-sans)]">
    <HeaderComponent />
    <ImageComponents />
    <Input />
    <div className="flex justify-center gap-4 pt-7">
      <Button text="Google Search" />
      <Button text="I'm feeling Lucky" />
    </div>
    <div className="flex justify-center pt-4">
      <div>
        Google offered In:{" "}
        <span>
          <span className="pl-2 text-xs text-[#93BBF4]">Hausa</span>
          <span className="pl-2 text-xs text-[#93BBF4]">Igbo</span>
          <span className="pl-2 text-xs text-[#93BBF4]">Ede Yoruba</span>
          <span className="pl-2 text-xs text-[#93BBF4]">Nigeria Pidgin</span>
        </span>
      </div>
    </div>
  </div>

  {/* Sticky Footer */}
  <Footer />
</div>
  );
}
