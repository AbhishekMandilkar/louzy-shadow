import React from 'react'

function CommonLayout(
    { children }: { children: React.ReactNode }
) {
  return (
    <section className="flex flex-1 gap-4 py-8 md:py-1">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
      </div>
    </section>
  );
}

export default CommonLayout