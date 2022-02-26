
function Header({ text }) {
  return (
    <header>
      <div className="container"></div>
      <h2>{text}</h2>
    </header>
  )
}

Header.defaultProps= {
    text: 'Feeback UI',
}

Header.propTypes= {
    text: PropTypes.string
}
export default Header;

