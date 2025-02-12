import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  logo?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    subItems?: Array<{
      title: string;
      href: string;
      description?: string;
    }>;
  }>;
  onSignUp?: () => void;
  onLogin?: () => void;
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

const Navbar = ({
  logo = "AIP",
  menuItems = [
    {
      label: "Services",
      href: "#services",
      subItems: [
        {
          title: "AI Strategy",
          href: "#ai-strategy",
          description: "Develop your organization's AI roadmap",
        },
        {
          title: "Implementation",
          href: "#implementation",
          description: "End-to-end AI solution deployment",
        },
        {
          title: "Training",
          href: "#training",
          description: "Upskill your team in AI technologies",
        },
      ],
    },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  onSignUp = () => console.log("Sign up clicked"),
  onLogin = () => console.log("Login clicked"),
}: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="text-[#FF0066] text-3xl font-bold">{logo}</div>
              <div className="text-white text-lg">ai prime consulting</div>
            </div>
          </a>

          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.subItems.map((subItem) => (
                            <ListItem
                              key={subItem.title}
                              title={subItem.title}
                              href={subItem.href}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                      )}
                      href={item.href}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={onLogin}
            className="text-white hover:text-white hover:bg-white/10 rounded-full"
          >
            Log In
          </Button>
          <Button
            variant="default"
            onClick={onSignUp}
            className="bg-[#FF0066] hover:bg-[#FF0066]/90 rounded-full"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
