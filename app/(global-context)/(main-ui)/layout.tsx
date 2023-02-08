import HeaderNav from '@/components/HeaderNav/HeaderNav';
import NavbarUltimate from '@/components/NavbarUltimate/NavbarUltimate';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="w-[240px] h-[100%]">
        <NavbarUltimate />
      </header>
      <main className="flex-1 overflow-hidden">
        <HeaderNav />
        <div className="py-[1.2rem] px-[1.5rem] pt-[6rem]">{children}</div>
      </main>
    </>
  );
}
