import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import GroceryList from './components/GroceryList';
import Footer from './components/Footer';


const groceryItems = [
  {
    id: 1,
    name: 'aerox',
    quantity: 1,
    checked: false,
  },
  {
    id: 2,
    name: 'sonic',
    quantity: 2,
    checked: false,
  },
  {
    id: 3,
    name: 'vario',
    quantity: 3,
    checked: false,
  },
  {
    id: 4,
    name: 'vixion',
    quantity: 4,
    checked: false,
  },
];

export default function App(item) {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}







