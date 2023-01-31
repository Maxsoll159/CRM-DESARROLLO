import Navbar from '@/components/Navbar/Navbar';
import UserMenuDashsBoard from '@/components/UserMenuDashsBoard/UserMenuDashsBoard';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="bg-bg1">
        <Navbar/>
      </header>
      <main className="my-container py-[1.2rem] px-[1.5rem] flex gap-[2rem]">
        <section className='bg-myWhite shadow-md'>
          <UserMenuDashsBoard/>
        </section>
        {children}
      </main>
    </>
  );
}
