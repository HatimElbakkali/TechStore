import { useState } from "react";

export default function Body({add}) {
  const products = [
    {
      id: 1,
      title: "Laptop",
      description: "Powerful and lightweight",
      price: 1200,
    },
    {
      id: 2,
      title: "Headphones",
      description: "Noise cancelling",
      price: 150,
    },
    {
      id: 3,
      title: "Keyboard",
      description: "Mechanical, RGB",
      price: 80,
    },
    {
      id: 4,
      title: "Mouse",
      description: "Wireless ergonomic",
      price: 45,
    },
    {
      id: 5,
      title: "Monitor",
      description: '27" Full HD',
      price: 300,
    },
    {
      id: 6,
      title: "Smartwatch",
      description: "Tracks fitness & sleep",
      price: 220,
    },
    {
      id: 7,
      title: "Tablet",
      description: "Great for reading and media",
      price: 500,
    },
  ];

  //filterAndSortProducts
  const [search, setSearch] = useState("") // get value inputSearch
  const [sortProducts, setSortProducts] = useState("") // get value select Tri
  let tris = ["All", "AscPrice", "DescPrice", "A-Z", "Z-A"];
  function filterAndSortProducts() {
    return [...products].filter((pro) => pro.title.toLowerCase().includes(search.toLowerCase())).sort((a, b) => {
      if (sortProducts === "AscPrice") return a.price - b.price
      if (sortProducts === "DescPrice") return b.price - a.price
      if (sortProducts === "A-Z") return a.title.localeCompare(b.title)
      if (sortProducts === "Z-A") return b.title.localeCompare(a.title)
    });
  }

  // toggleViewMode
  const [ViewMode, setViewMode] = useState("") // get value select style
  let containerProduct = document.getElementsByClassName("product-list")[0];
  function toggleViewMode() {
    if (ViewMode === "Grid") containerProduct.classList.add("grid")
    if (ViewMode === "List") containerProduct.classList.remove("grid")
  }
  toggleViewMode()

  // -----
  function handleClick() {
    add()
  }

  return (
    <main>
      <div className="toolbar">
        {/* Search */}
        <div className="toolbar-search">
          <label htmlFor="search">Search Product</label>
          <input className="search-input" type="text" id="search" placeholder="Search a product..." onChange={(e) => setSearch(e.target.value)} />
        </div>

        {/* Tri */}
        <select className="toolbar-select" onChange={(e) => setSortProducts(e.target.value)}>
          {tris.map((tri, key) => {
            return <option value={tri} key={key}>{tri}</option>
          })}
        </select>

        {/* toggleViewMode */}
        <select className="toolbar-select" onChange={(e) => setViewMode(e.target.value)}>
          <option value="Simple">ViewMode</option>
          <option value="Grid">Grid</option>
          <option value="List">List</option>
        </select>
      </div>

      <h2 id="products">Products</h2>
      <ul className="product-list">
        {filterAndSortProducts().map((products) => (
          <li className="product-item" key={products.id}>
            <div className="product-content">
              <div>
                <h3>{products.title}</h3>
                <p className="description">{products.description}</p>
              </div>
              <span className="price">{products.price}$</span>
              <button type="button" onClick={handleClick}>Add</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}