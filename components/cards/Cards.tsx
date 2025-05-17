import {
  CardsUI,
  CardUI,
  CartIconUI,
  CatalogIconUI,
  HistoryIconUI,
  SettingsIconUI,
} from "../ui";

const cards = [
  {
    label: "Список продуктов",
    count: 14,
    accent: true,
    path: "/products",
  },
  {
    label: "История",
    count: 7,
    accent: false,
    path: "/history",
  },
  {
    label: "Каталог",
    count: 82,
    accent: false,
    path: "/catalog",
  },
  {
    label: "Настройки",
    count: 0,
    accent: false,
    path: "/settings",
  },
];

const Cards = () => {
  const size = 48;
  const strokeWidth = "0.8";

  const setIcon = (path: string) => {
    switch (path) {
      case "/products":
        return (
          <CartIconUI width={size} height={size} strokeWidth={strokeWidth} />
        );
      case "/history":
        return (
          <HistoryIconUI width={size} height={size} strokeWidth={strokeWidth} />
        );
      case "/catalog":
        return (
          <CatalogIconUI width={size} height={size} strokeWidth={strokeWidth} />
        );
      case "/settings":
        return (
          <SettingsIconUI
            width={size}
            height={size}
            strokeWidth={strokeWidth}
          />
        );
    }
  };

  return (
    <CardsUI>
      {cards.map((card, index) => (
        <CardUI
          key={index}
          label={card.label}
          icon={setIcon(card.path)}
          count={card.count}
          accent={card.accent}
          path={card.path}
        />
      ))}
    </CardsUI>
  );
};

export default Cards;
