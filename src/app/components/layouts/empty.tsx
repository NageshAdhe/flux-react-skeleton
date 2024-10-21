
const EmptyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div>
        <header>empty Header</header>
        <main>{children}</main>
        <footer>empty Footer</footer>
      </div>
    );
  };
  
  export default EmptyLayout;