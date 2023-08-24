import React from "react";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ButtonLink = (props: ButtonLinkProps) => {
  return (
    <a href="#" className="font-bold group">
      <span className="pb-2 bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
        {props.children}
      </span>
    </a>
  );
};
