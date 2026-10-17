export type MenuCategory = "Main Dish" | "Drinks";

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
};

export const menuItems: MenuItem[] = [
    {
    id: 1,
    name: "Salmon Rice Bowl",
    description: "Grilled salmon served with rice and fresh vegetables.",
    price: 320,
    category: "Main Dish",
    image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
    },
  {
    id: 2,
    name: "Chicken Teriyaki",
    description: "Tender chicken glazed with a savory teriyaki sauce.",
    price: 280,
    category: "Main Dish",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Matcha Latte",
    description: "Smooth Japanese green tea blended with milk.",
    price: 150,
    category: "Drinks",
    image:
        "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80",
  },
];
