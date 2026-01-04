type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode; 
  modal: React.ReactNode;   
};

export default function NotesFilterLayout({ children, sidebar, modal }: Props) {
  return (
    <>
      {modal}
      <section>
        <aside>{sidebar}</aside>
        <div>{children}</div>
      </section>
    </>
  );
}
