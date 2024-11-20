
const EmptyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div>       
        <main>{children}</main>
      </div>
    );
  };
  
  export default EmptyLayout;