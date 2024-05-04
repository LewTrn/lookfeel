"use client";

import { FlaskConicalIcon, SparkleIcon, Wand2Icon } from "lucide-react";
import * as React from "react";
import { Button } from "templates/components/ui/button";

import { cn } from "~/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";

export function NavHeader() {
  return (
    <header className="m-4 flex w-full items-center justify-center">
      <div className="flex flex-1 items-center gap-0.5 text-xl font-semibold text-primary">
        <FlaskConicalIcon /> spark labs
      </div>
      <NavigationMenu className="flex-1">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent/50 to-accent p-6 no-underline outline-none focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-semibold">
                        spark labs
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Fun-packed features you&apos;ll find in the AI
                        Playground
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem title="Interactive AI Models">
                  Play around with a variety of AI models, no PhD required.
                </ListItem>
                <ListItem title="Customizable Projects">
                  Got a wild idea? Bring it to life with our flexible platform.
                </ListItem>
                <ListItem title="Educational Resources">
                  Learn, laugh, and level up your skills with our tutorials and
                  guides.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Use cases</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-80 gap-1 p-4">
                <ListItem title="Developers and technologists">
                  Robust tools and APIs necessary for high-level development.
                </ListItem>
                <ListItem title="Creatives and innovators">
                  Tools to start creating novel AI-powered art and designs.
                </ListItem>
                <ListItem title="Educators and students">
                  Rich educational toolkit for learning and teaching AI.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex flex-1 justify-end">
        <Button>Get started</Button>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
