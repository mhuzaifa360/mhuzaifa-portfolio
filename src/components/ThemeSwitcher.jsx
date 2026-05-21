import { changeTheme } from "../utils/theme";

const ThemeSwitcher = () => {
  return (
    <div style={{ position: "fixed", right: 20, top: 20 }}>
      <button onClick={() => changeTheme("blue")}>Blue</button>
      <button onClick={() => changeTheme("purple")}>Purple</button>
      <button onClick={() => changeTheme("green")}>Green</button>
      <button onClick={() => changeTheme("red")}>Red</button>
    </div>
  );
};

export default ThemeSwitcher;