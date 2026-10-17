
import type { MenuCategory } from "../data/menu";

type CategoryFilterProps = {
  categories: ("All" | MenuCategory)[];
  selectedCategory: "All" | MenuCategory;
  onSelectCategory: (category: "All" | MenuCategory) => void;
};

function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="menu-filters">
      {categories.map((category) => (
        <button
          key={category}
          className={`menu-filter ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
