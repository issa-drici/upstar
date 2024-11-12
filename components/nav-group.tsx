import { ReactNode } from "react";

type NavGroupProps = {
  title?: string;
  items: ReactNode;
};

export default function NavGroup({ title, items }: NavGroupProps) {
    return (
        <div className="hidden md:block">
            {title ? (<p className="text-[#969498] mb-2">{title}</p>) : null}
            {items}
        </div>
    );
}
