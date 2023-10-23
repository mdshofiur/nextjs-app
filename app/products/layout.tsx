import React, { Fragment, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function Layout({ children, modal }: LayoutProps) {
  return (
    <Fragment>
      {children}
      {modal}
    </Fragment>
  );
}
