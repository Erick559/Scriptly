import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { SocialIcon } from 'react-social-icons'

const manrope = Manrope({weight:['300','400','700'],subsets:['latin']});

export default function Home() {
  return (
    <div className="mt-[100px]">
      <div className="h-screen">
          Hero
      </div>
    </div>
  );
}
