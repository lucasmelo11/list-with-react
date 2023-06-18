import React, { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      text: e.target.item.value,
      checked: false,
    };
    setItems([...items, newItem]);
    e.target.item.value = "";
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" name="item" />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleItem(item.id)}
            />
            <label className={item.checked ? "checked" : ""}>{item.text}</label>
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
