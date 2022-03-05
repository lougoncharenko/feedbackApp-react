
function Header({ text }) {
    const headerStyles = {
        backgroundColor: 'blue', color: 'red'
    }
  return (
    <header style = {headerStyles}>
      <div className="container"></div>
      <h2>{text}</h2>
    </header>
  )
}

Header.defaultProps= {
    text: 'Feeback UI',
}

export default Header;

