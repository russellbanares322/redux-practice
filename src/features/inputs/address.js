import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddressChange } from "./addressSlice";
import styles from "./styles.module.css";

const Address = () => {
  const addressInput = useSelector((state) => state.address);
  const dispatch = useDispatch();

  const brgyOptions = [
    {
      id: 13,
      name: "Lucena",
    },
    {
      id: 2,
      name: "Taras",
    },
    {
      id: 5,
      name: "Lack",
    },
  ];
  const cityOptions = [
    {
      id: 1,
      name: "Truado",
    },
    {
      id: 5,
      name: "Zambo",
    },
    {
      id: 9,
      name: "Lfg",
    },
  ];

  return (
    <div>
      <div className={styles["progress-bar"]}>
        {[1, 2, 3, 4].map((n) => (
          <div className={styles.step}>
            <div className={styles.bullet}>
              <span>{n}</span>
            </div>
            <p>Tarugo</p>
          </div>
        ))}
      </div>
      {JSON.stringify(addressInput)}
      <select
        onChange={(e) =>
          dispatch(handleAddressChange({ brgyId: e.target.value }))
        }
        name="brgyId"
      >
        {brgyOptions.map((b) => (
          <option value={b.id} key={b.id}>
            {b.name}
          </option>
        ))}
      </select>
      <select
        onChange={(e) =>
          dispatch(handleAddressChange({ cityId: e.target.value }))
        }
        name="cityId"
      >
        {cityOptions.map((c) => (
          <option value={c.id} key={c.id}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Address;
