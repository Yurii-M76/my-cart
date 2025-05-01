import { TCard } from "@/types";
import { CardsUI, CardUI } from "../ui";

const cards: TCard[] = [
  {
    label: "Список продуктов",
    icon: "/icons/cart.svg",
    count: 14,
    accent: true,
    path: "/products",
  },
  {
    label: "История",
    icon: "/icons/history.svg",
    count: 7,
    accent: false,
    path: "/history",
  },
  {
    label: "Каталог",
    icon: "/icons/catalog.svg",
    count: 82,
    accent: false,
    path: "/catalog",
  },
  {
    label: "Настройки",
    icon: "/icons/settings.svg",
    count: 0,
    accent: false,
    path: "/settings",
  },
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
          accent={card.accent}
          path={card.path}
        />
      ))}
    </CardsUI>
  );
};

export default Cards;
