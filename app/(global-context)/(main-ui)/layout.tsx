import Navbar from '@/components/Navbar/Navbar';
import NavbarUltimate from '@/components/NavbarUltimate/NavbarUltimate';
import UserMenuDashsBoard from '@/components/UserMenuDashsBoard/UserMenuDashsBoard';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="w-[240px] h-[100%]">
       {/*  <Navbar/> */}
       <NavbarUltimate/>
      </header>
      <main className="py-[1.2rem] px-[1.5rem] flex gap-[2rem] flex-1">
        {/* <section className='bg-myWhite shadow-md'>
          <UserMenuDashsBoard/>
        </section> */}
        {children}
      </main>
    </>
  );
}
