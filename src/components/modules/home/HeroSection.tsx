import { Button } from "@/components/ui/button"
import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="h-[500px] flex flex-col items-center justify-center gap-5">
      <h1 className="text-5xl font-bold text-center">Transform PDF into <br/> concise summeries with AI</h1>
      <p className="font-medium text-lg">Your all in one AI PDF analyser, summeriser and converter.</p>

      <Button size={'lg'} className="bg-linear-to-r from-[#ED0100] to-black hover:scale-[1.1] transition-all duration-150 cursor-pointer">
        <Image src={'/images/logo/ai.png'} width={20} height={20} alt="Give my pdf logo" />
        Try Summarise
      </Button>
    </div>
  )
}

export default HeroSection
