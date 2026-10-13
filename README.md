# 🛒 TechStore

A simple product listing page built with **React** and **Vite**.
Browse tech products, search them, sort them, switch between grid/list views, and add items to a cart counter.

## ✨ Features

- Page layout with **Header**, **Navbar**, **Body** and **Footer** components
- Product cards (title, description, price)
- 🔍 **Search** products by name (case-insensitive)
- ↕️ **Sort** products:
  - All (default order)
  - Price: ascending / descending
  - Name: A → Z / Z → A
- 🔲 **View mode** selector: Grid / List
- ➕ **Add to cart** button on each product with a live counter in the Navbar

## 🛠️ Built With

<p>
  <img src="https://skillicons.dev/icons?i=react,vite,html,css,git,github" alt="Tech stack" />
</p>

---

## 📁 Project Structure

```
TechStore/
├── public/
├── src/
│   ├── components/
│   │   ├── Body.jsx      # Search, sort, view mode, product list
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Navbar.jsx    # Navigation + cart counter
│   ├── style/
│   │   └── App.css       # Global styles
│   ├── App.jsx           # Root component (holds cart state)
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/TechStore.git

# Go to the project folder
cd TechStore

# Install dependencies
npm install
```

### Run the development server

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## 🛣️ Roadmap

- [x] Search products
- [x] Sort by price and name
- [x] Grid / List view modes
- [x] Add to cart counter
- [ ] Add more products
- [ ] Category filter
- [ ] Cart page (list items, remove, total price)
- [ ] Replace DOM manipulation in view mode with React state (`className`)

## 📬 Connect

If you want to see more of my work or contact me:
All links on Social media: [https://linktr.ee/HatimElbakkali](https://linktr.ee/HatimElbakkali)

---

Thank you! 😊