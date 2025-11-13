import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import Image from "next/image"
import { SignedIn, SignedOut } from "@clerk/nextjs"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
    { href: "/pricing", label: "Pricing" },
    { href: "/dashboard", label: "Your Summeries" },
]

export default function Navbar() {
    return (
        <header className="border-b px-4 md:px-6">
            <div className="container mx-auto px-5 flex h-16 items-center justify-between gap-4">
                {/* Left side */}
                <div className="flex items-center gap-2">
                    {/* Mobile menu trigger */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className="group size-8 md:hidden"
                                variant="ghost"
                                size="icon"
                            >
                                <svg
                                    className="pointer-events-none"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 12L20 12"
                                        className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                                    />
                                    <path
                                        d="M4 12H20"
                                        className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                                    />
                                    <path
                                        d="M4 12H20"
                                        className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                                    />
                                </svg>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-64 p-1 md:hidden">
                            <NavigationMenu className="max-w-none *:w-full">
                                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                                    {navigationLinks.map((link, index) => (
                                        <NavigationMenuItem key={index} className="w-full">
                                            <NavigationMenuLink href={link.href} className="py-1.5">
                                                {link.label}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </PopoverContent>
                    </Popover>
                    {/* logo */}
                    <div className="flex items-center gap-6">
                        <Link href={'/'}>
                            <div className="flex items-center gap-2">
                                <Image src={'/images/logo/logo.png'} width={50} height={50} alt="Give my pdf logo" />
                                <div>
                                    <h3 className="text-xl font-bold">Give My</h3>
                                    <p className="font-bold flex items-center gap-1">
                                        <span>PDF</span>
                                        <span>
                                            <Image src={'/images/logo/ai.png'} width={20} height={20} alt="Give my pdf logo" />
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* main nav  */}

                {/* Navigation menu */}
                <NavigationMenu viewport={false} className="max-md:hidden">
                    <NavigationMenuList className="gap-2">
                        {navigationLinks.map((link, index) => (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuLink
                                    href={link.href}
                                    className="py-1.5 font-medium text-muted-foreground hover:text-primary"
                                >
                                    {link.label}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Right side */}
                <div className="flex items-center gap-2">
                    {/* sign out button  */}
                    <SignedOut>
                        <Button variant="outline" size="sm" className="text-sm cursor-pointer">
                            Sign In
                        </Button>
                    </SignedOut>

                    {/* sign in button  */}
                    <SignedIn>
                        <Button variant="outline" size="sm" className="text-sm hover:scale-[1.1] transition-all duration-150 cursor-pointer">
                            Logout
                        </Button>
                    </SignedIn>

                    <Button size="sm" className="text-sm bg-linear-to-r from-[#ED0100] to-black hover:scale-[1.1] transition-all duration-150 cursor-pointer">
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    )
}
