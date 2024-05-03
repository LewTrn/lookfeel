"use client";

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

const components: { title: string; description: string }[] = [
  {
    title: "Intelligent Automation",
    description:
      "Streamline your workflows with our AI-powered automation tools.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Gain valuable insights and make data-driven decisions with our advanced analytics.",
  },
  {
    title: "Secure AI Solutions",
    description:
      "Protect your data and ensure compliance with our robust security features.",
  },
];

export function NavHeader() {
  return (
    <header className="m-4 flex w-full items-center justify-center">
      <div className="flex-grow text-xl font-semibold">example.ai</div>
      <NavigationMenu className="flex-grow">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-accent/50 to-accent p-6 no-underline outline-none focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium">
                        example.ai
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Advanced features to help your business thrive
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem title="Intelligent Automation">
                  Streamline your workflows with our AI-powered automation
                  tools.
                </ListItem>
                <ListItem title="Predictive Analytics">
                  Gain valuable insights and make data-driven decisions with our
                  advanced analytics.
                </ListItem>
                <ListItem title="Secure AI Solutions">
                  Protect your data and ensure compliance with our robust
                  security features.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Use cases</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-96 gap-1 p-4">
                <ListItem title="Retail Optimization">
                  Optimize inventory, pricing, and customer experiences.
                </ListItem>
                <ListItem title="Healthcare Insights">
                  Improve patient outcomes and operational efficiency with
                  AI-driven analytics.
                </ListItem>
                <ListItem title="Financial Risk Management">
                  Mitigate risk with AI-powered financial solutions.
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
      <div className="flex flex-grow justify-end">
        <Button>Request a demo</Button>
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
