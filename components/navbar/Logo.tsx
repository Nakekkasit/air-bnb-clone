import Link from "next/link";
import { LuTent } from "react-icons/lu";
import { SiAirbnb } from "react-icons/si";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Logo() {
  return (
    <Button size="icon" className="p-[5px]" asChild>
      <Link href="/">
        <SiAirbnb
          className="w-8 h-8"
          style={{ backgroundColor: "transparent" }}
        />
      </Link>
    </Button>
  );
}
