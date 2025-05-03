import { TProduct } from "@/types";
import { CatalogUI } from "../ui";

const items: TProduct[] = [
  {
    id: "1",
    label: "Сахар РУССКИЙ кусковой 500г",
    price: 54.99,
    category: "Категория",
    count: 1,
    isFavorite: false,
  },
  {
    id: "2",
    label: "Вино CHATEAU SAINTONGEY крсух 7,5-13,5%",
    price: 799.99,
    category: "Категория",
    count: 1,
    isFavorite: true,
  },
  {
    id: "3",
    label: "Напиток раст PLANTO Карамель 0,7% 1000мл",
    price: 199.99,
    category: "Категория",
    count: 1,
    isFavorite: false,
  },
  {
    id: "4",
    label: "Филе кур ПЕТЕЛИНКА с бедра подл охл вес",
    price: 473.99,
    category: "Категория",
    count: 1,
    isFavorite: false,
  },
  {
    id: "5",
    label: "Фарш МИРАТОРГ Домашний охл. лоток 500г",
    price: 239.99,
    category: "Категория",
    count: 1,
    isFavorite: false,
  },
];

const Catalog = () => {
  return <CatalogUI items={items} />;
};

export default Catalog;
