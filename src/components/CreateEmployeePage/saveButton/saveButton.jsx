import "./saveButton.css";

const SaveButton = ({ onSave }) => {
  return (
    <button type="submit" className="save-button" onClick={onSave}>
      Save
    </button>
  );
};

export default SaveButton;
