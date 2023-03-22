import HeaderNav from '@/components/HeaderNav/HeaderNav';
import NavbarUltimate from '@/components/NavbarUltimate/NavbarUltimate';
import Popup from '@/components/Popup/Popup';
import MyPopUp from './components/MyPopUp';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MyPopUp/>
      <header className="w-[240px] h-[100%] relative z-[999]">
        <NavbarUltimate />
      </header>
      <main className="flex-1 overflow-hidden relative z-[999]">
        <HeaderNav />
        <div className="py-[1.2rem] px-[2.5rem] pt-[2rem]">{children}</div>
      </main>
    </>
  );
}
