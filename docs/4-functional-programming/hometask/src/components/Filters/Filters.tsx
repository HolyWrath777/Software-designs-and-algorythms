import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import styles from "./Filters.module.scss";
import { Row } from "../../../types";
import { filterData, OPTIONS, updateFilters } from ".";

interface FiltersProps {
  data: Row[];
  updateStore?: (val) => void;
}

export function Filters({ data, updateStore }: FiltersProps) {
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

  const onChange = ({ title }) => {
    setSelectedFilter(updateFilters(selectedFilter, title));
  };

  useEffect(() => {
    selectedFilter.length
      ? updateStore(filterData(selectedFilter, data))
      : updateStore(data);
  }, [data, selectedFilter, updateStore]);

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={
                !!selectedFilter.find((filter) => filter === option.title)
              }
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{" "}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
