export default function TabButton({ children, handleSelect, isSelected }) {

    return (
      <li onClick={handleSelect}>
        <button className={isSelected ? "active" : ""}>{children}</button>
      </li>
    );
  }
  