
const DenseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div>
        <header>Dense Header</header>
        <main>{children}</main>
        <footer>Dense Footer</footer>
      </div>
    );
  };
  
  export default DenseLayout;