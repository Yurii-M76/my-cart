import { TCard } from "@/types";
import { CardsUI, CardUI } from "../ui";

const cards: TCard[] = [
  { label: "Список продуктов", icon: "/icons/cart.svg", count: 14, path: "/products" },
  { label: "История", icon: "/icons/history.svg", count: 7, path: "/history" },
  { label: "Каталог", icon: "/icons/catalog.svg", count: 82, path: "/catalog" },
  { label: "Настройки", icon: "/icons/settings.svg", count: 0, path: "/settings" },
];

const Cards = () => {
  return (
    <CardsUI>
      {cards.map((card, index) => (
        <CardUI
          key={index}
          label={card.label}
          icon={card.icon}
          count={card.count}
          path={card.path}
        />
      ))}
    </CardsUI>
  );
};

export default Cards;
