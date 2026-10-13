export default function Navbar({res}) {
  function view(){
    return res
  }
  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#products">Products</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <div className="circle">{view()}</div>
    </nav>
  );
}
