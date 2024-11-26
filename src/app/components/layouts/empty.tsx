
const EmptyLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (           
        <main className="layout-empty">{children}</main>
    );
  };
  
  export default EmptyLayout;