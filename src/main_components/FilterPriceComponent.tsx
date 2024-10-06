import React, { useState } from "react";
import styles from "./FilterPriceComponent.module.css";

interface FilterPriceProps {
    onApplyFilter: (minPrice: number, maxPrice: number) => void;
}

const FilterPriceComponent: React.FC<FilterPriceProps> = ({ onApplyFilter }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [minPrice, setMinPrice] = useState<number | "">("");
    const [maxPrice, setMaxPrice] = useState<number | "">("");

    const handleApplyFilter = () => {
        onApplyFilter(Number(minPrice), Number(maxPrice));
        setIsExpanded(false);
    };

    return (
        <div className={styles.fpc}>
            <button onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Сховати фільтр" : "Ціна"}
            </button>

            {isExpanded && (
                <div className={styles.filterForm}>
                    <input
                        type="number"
                        placeholder="От"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value === "" ? "" : Number(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="До"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
                    />
                    <button onClick={handleApplyFilter}>Застосувати</button>
                </div>
            )}
        </div>
    );
};

export default FilterPriceComponent;
