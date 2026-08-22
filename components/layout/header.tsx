"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import MobileNavDrawer from "./mobile-nav-drawer";
import { categories } from "@/lib/data/categories";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Hover style for nav links
  const navItemHover = "hover:text-neutral-900 data-[state=open]:text-neutral-900";

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/95 text-neutral-900 backdrop-blur-xl"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
          {/* BRAND LOCKUP */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2"
          >
          
            <Image
              src="/ash-logo.avif"
              alt="Structure India"
              width={180}
              height={30}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* RIGHT SIDE: NAV + CTA */}
          <div className="flex items-center gap-1">
            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">

                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`bg-transparent px-3 py-2 text-sm font-medium text-neutral-600 transition-colors ${navItemHover}`}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`bg-transparent px-3 py-2 text-sm font-medium text-neutral-600 transition-colors ${navItemHover}`}
                      >
                        About Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`bg-transparent px-3 py-2 text-sm font-medium text-neutral-600 transition-colors ${navItemHover}`}
                    >
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1 w-[560px] p-6 bg-white rounded-2xl shadow-lg ring-1 ring-black/5">
                        {categories.map((cat) => {
                          const Icon = cat.icon;
                          return (
                            <Link
                              key={cat.slug}
                              href={`/products/${cat.slug}`}
                              className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-1"
                            >
                              <Icon
                                className="h-4 w-4 shrink-0 text-ash-orange"
                                aria-hidden="true"
                              />
                              <span>{cat.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  

                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* DESKTOP CTA / MOBILE HAMBURGER */}
            <div className="flex items-center gap-3 ml-4">
              <Link
                href="/contact"
                className="hidden items-center justify-center rounded-full border border-si-green bg-transparent px-5 py-2 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2 lg:flex"
              >
                Let's Talk
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="rounded-full p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 lg:hidden"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
