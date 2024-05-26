import React from "react";

const SectionWrapper = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => (
  <section {...props} className={`py-16 ${props.className || ""}`}>
    {children}
  </section>
);

export default SectionWrapper;
