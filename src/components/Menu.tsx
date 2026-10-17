
import { useState } from "react";
import { menuItems } from "../data/menu";
import type { MenuCategory } from "../data/menu";
import CategoryFilter from "./CategoryFilter";
import MenuCard from "./MenuCard";

const categories: ("All" | MenuCategory)[] = [
  "All",
  "Main Dish",
  "Drinks",
];

function Menu() {
  const [selectedCategory, setSelectedCategory] =
    useState<"All" | MenuCategory>("All");

  const filteredItems = menuItems.filter(
    (item) =>
      selectedCategory === "All" ||
      item.category === selectedCategory
  );

  return (
    <section className="menu-section" id="menu">
      <p className="eyebrow">OUR MENU</p>
      <h2 className="menu-title">Made with care.</h2>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

        <div className="menu-grid">
        {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
        ))}
        </div>
    </section>
  );
}

export default Menu;
