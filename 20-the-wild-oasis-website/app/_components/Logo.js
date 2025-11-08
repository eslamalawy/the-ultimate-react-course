import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> we must specify the width and height */}
      <Image src={logo} height="60" width="60" alt="The Wild Oasis logo" quality={100}/>
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
