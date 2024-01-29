
import {motion} from "framer-motion"
const FilterButton = ({ category, onClick }) => {
  return (
    <motion.button
      className="filter-button"
      onClick={() => onClick(category)}
      whileHover={{
        border: "2px solid #e62872",
        borderRadius: "10%",
        padding: "10px 10px",
        textTransform: "uppercase",
      }}
      whileTap={{
        border: "2px solid #f02c0e",
        borderRadius: "10%",
        padding: "10px 10px",
      }}
      tappable
    >
      {category}
    </motion.button>
  );
};
export default FilterButton