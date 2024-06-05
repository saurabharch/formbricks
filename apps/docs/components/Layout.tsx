"use client";

import { Logo } from "@/components/Logo";
import { Navigation } from "@/components/Navigation";
import SideNavigation from "@/components/SideNavigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { type Section, SectionProvider } from "./SectionProvider";

export const Layout = ({
  children,
  allSections,
}: {
  children: React.ReactNode;
  allSections: Record<string, Array<Section>>;
}) => {
  let pathname = usePathname();

  return (
    <SectionProvider sections={allSections[pathname || ""] ?? []}>
      <div className="h-full lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-slate-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 lg:dark:border-white/10">
            <div className="hidden lg:flex">
              <Link href="/" aria-label="Home">
                <Logo className="h-8" />
              </Link>
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" isMobile={false} />
          </div>
        </motion.header>
        <div className="flex h-screen flex-col">
          <div className="relative flex flex-1 flex-col px-4 pt-14 sm:px-6 lg:px-8">
            <main className="flex-auto overflow-y-auto  lg:w-[calc(100%-20rem)]">{children}</main>
            <Footer />
          </div>
          <SideNavigation pathname={pathname} />
        </div>
      </div>
    </SectionProvider>
  );
};
