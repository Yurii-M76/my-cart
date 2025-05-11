import classes from "./product-count.module.css";

const ProductCountUI = ({
  count,
  setCount,
}: {
  count: number;
  setCount: (v: number) => void;
}) => {
  const classNamesDownBtn = [classes.button, classes.down]
    .filter(Boolean)
    .join(" ");
  const classNamesUpBtn = [classes.button, classes.up]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes.productCount}>
      <button
        type="submit"
        className={classNamesDownBtn}
        onClick={() => setCount(count - 1)}
        disabled={count === 1}
      />
      <div className={classes.count}>{count || 1}</div>
      <button
        type="submit"
        className={classNamesUpBtn}
        onClick={() => setCount(count + 1)}
        disabled={count === 99}
      />
    </div>
  );
};

export default ProductCountUI;
