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
  const navItemHover = "hover:text-white/90 data-open:text-white/90";

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-black/60 text-white backdrop-blur-xl backdrop-saturate-150"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
          {/* BRAND LOCKUP */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
          >
          
            <Image
              src="/structureindialogoorange.avif"
              alt="Structure India"
              width={200}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          {/* RIGHT SIDE: NAV + CTA */}
          <div className="flex items-center gap-1">
            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`bg-transparent text-sm text-white/70 transition-colors ${navItemHover}`}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`bg-transparent text-sm text-white/70 transition-colors ${navItemHover}`}
                    >
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1 w-[560px] p-6">
                        {categories.map((cat) => {
                          const Icon = cat.icon;
                          return (
                            <Link
                              key={cat.slug}
                              href={`/products/${cat.slug}`}
                              className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-1"
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

                  <NavigationMenuItem>
                    <Link href="/services" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`bg-transparent text-sm text-white/70 transition-colors ${navItemHover}`}
                      >
                        Services
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Separator */}
            <div className="hidden lg:block mx-4 h-5 w-px bg-white/[0.12]" />

            {/* DESKTOP CTA / MOBILE HAMBURGER */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 lg:flex"
              >
                Contact Us
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="rounded-lg p-2 text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 lg:hidden"
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
