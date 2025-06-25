import "./ToggleSwitch.css";
function ToggleSwitch() {
  return (
    <label className="toggle-switch">
      <input type="checkbox" className="toggle-switch__checkbox" />
      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__text toggle-switch__text-f">F</span>
      <span className="toggle-switch__text toggle-switch__text-c">C</span>
    </label>
  );
}

export default ToggleSwitch;
