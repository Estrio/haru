
import type { MenuItem } from "../data/menu";

type MenuCardProps = {
  item: MenuItem;
};

const pesoFormatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  minimumFractionDigits: 2,
});

function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="menu-card">
      <img
        className="menu-image"
        src={item.image}
        alt={item.name}
      />

      <p className="menu-category">{item.category}</p>
      <h3>{item.name}</h3>
      <p className="menu-description">{item.description}</p>
      <p className="menu-price">
        {pesoFormatter.format(item.price)}
      </p>
    </article>
  );
}

export default MenuCard;
