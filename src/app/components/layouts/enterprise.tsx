
const EnterPriseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div>
        <header>EnterPriseLayout Header</header>
        <main>{children}</main>
        <footer>EnterPriseLayout Footer</footer>
      </div>
    );
  };
  
  export default EnterPriseLayout;