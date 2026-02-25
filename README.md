# 📚 Bookstore – React Router v7 Product Catalog

A multi-page Bookstore web application built with React and React Router v7.  
This project demonstrates nested routes, dynamic routing, filtering, sorting, and programmatic navigation.

---

## 🚀 Features

- Multi-page routing with React Router v7
- Nested routes using `<Outlet />`
- Dynamic product details pages (`/products/:id`)
- Search functionality (by title or author)
- Genre filtering (multi-select)
- Sorting (price low-high, high-low, alphabetical)
- Similar books suggestion section
- 404 Not Found page
- Responsive clean UI design

---

## 🛣️ Routes

| Route | Description |
|-------|------------|
| `/` | Home page |
| `/products` | Products layout + product list |
| `/products/:id` | Dynamic product details page |
| `*` | 404 Not Found page |

---

## 🧠 Concepts Used

- React Router v7
- Nested Routes
- `useParams()`
- `useNavigate()`
- `NavLink` with active styling
- `Outlet` context sharing
- Component-based architecture
- State management with `useState`

---

## 📂 Project Structure
src/
│
├── components/
│ └── Navbar.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── ProductsLayout.jsx
│ ├── ProductList.jsx
│ ├── ProductDetails.jsx
│ └── NotFound.jsx
│
├── data/
│ └── products.js
│
├── App.jsx
└── main.jsx


---

## 📦 Products Data

- Local data array (no API)
- Each product includes:
  - id
  - name
  - author
  - price
  - genre
  - description
  - image
- 11 total books

---

## 🛠️ Installation & Running the Project

Clone the repository:

```bash
git clone <your-repo-link>
```
Navigate into the project folder:
```
cd bookstore
```
Install dependencies:
```
npm install
```
Run the development server:
```
npm run dev
```
