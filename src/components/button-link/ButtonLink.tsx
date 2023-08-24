import React from "react";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ButtonLink = (props: ButtonLinkProps) => {
  return (
    <a
      className="font-bold underline underline-offset-[12px] decoration-primary"
      {...props}
    >
      {props.children}
    </a>
  );
};
