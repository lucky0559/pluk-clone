import { CookiesNotice } from "@/components/CookiesNotice";
import { FileProtectOutlined } from "@ant-design/icons";
import Image from "next/image";
import imageBG from "@/images/homeBG.jpg";

export default function Home() {
  return (
    <>
      <div className="bg-secondary flex px-12 py-[14px] py h-[52px] z-10">
        <FileProtectOutlined
          style={{ fontSize: 24 }}
          className="text-mainFont"
        />
        <p className="ml-2">
          Eslup user? Easily sign in with your Eslup account details.
        </p>
      </div>
      <Image src={imageBG} alt="workout" fill className="-z-10" />
      <div className="absolute bottom-0 w-full">
        <CookiesNotice />
      </div>
    </>
  );
}
