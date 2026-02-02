function Layout({ children }) {
  return <div style={layoutStyle}>{children}</div>;
}

const layoutStyle = {
  margin: "0 auto",
  maxWidth: "1200px",
  padding: "20px",
};

export default Layout;
