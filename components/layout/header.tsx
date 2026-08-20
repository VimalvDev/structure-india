"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
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
  const { scrollDirection, scrollY } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Determine visibility
  const isHidden =
    scrollDirection === "down" && scrollY > 80 && !isMobileMenuOpen;

  // Dynamic hover background for nav items
  const navItemHover = "hover:bg-white/10 data-open:bg-white/10";

  const headerClasses = `
    fixed inset-x-4 top-4 z-50 sm:inset-x-6 sm:top-6 lg:inset-x-8
    rounded-xl transition-all duration-300
    ${isHidden ? "-translate-y-[calc(100%+2rem)]" : "translate-y-0"}
    bg-nav-bg text-white shadow-lg backdrop-blur-md border border-white/10
  `;

  return (
    <>
      <header
        className={headerClasses}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* BRAND LOCKUP */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50"
          >
            <Image
              src="/si-logo.avif"
              alt="SI Logo"
              width={48}
              height={48}
              className="h-7 mb-1 w-auto object-contain"
              priority
            />
            <Image
              src="/structureindia-fulllogo.avif"
              alt="Structure India"
              width={200}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>
          <div className="wrapper flex items-center gap-10">
            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={`bg-transparent text-inherit hover:text-inherit transition-colors ${navItemHover}`}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`bg-transparent text-inherit hover:text-inherit transition-colors ${navItemHover}`}
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
                              className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-1"
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
                        className={`bg-transparent text-inherit hover:text-inherit transition-colors ${navItemHover}`}
                      >
                        Services
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* DESKTOP CTA / MOBILE HAMBURGER */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className="hidden items-center justify-center rounded-xl bg-ash-orange px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-ash-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2 lg:flex"
              >
                Contact Us
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="ml-4 rounded-xl p-2 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 lg:hidden"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
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
