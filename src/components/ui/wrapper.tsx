export function MainContainer({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <div className='flex flex-col gap-14 w-full max-w-xl mx-auto pt-16'>
      {children}
    </div>
  );
}

export function ContentWrapper({ title, children }: { title: string, children: React.ReactNode }): React.JSX.Element {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl">{title}</h1>
      {children}
    </div>
  );
}
