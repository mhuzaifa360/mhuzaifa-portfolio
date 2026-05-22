import { changeTheme } from "../utils/theme";

export default function ThemeSwitcher() {
  return (
    <div style={{ position: "fixed", top: 20, right: 20, zIndex: 999 }}>
      <button onClick={() => changeTheme("blue")}>Blue</button>
      <button onClick={() => changeTheme("purple")}>Purple</button>
      <button onClick={() => changeTheme("green")}>Green</button>
      <button onClick={() => changeTheme("red")}>Red</button>
    </div>
  );
}