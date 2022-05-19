import "./style.css";
import { useNavigate } from "react-router-dom";
export default function DirectoryItem({ category }) {
  const { title, imageUrl, routeName } = category;
  const navigate = useNavigate();

  const onNavigationHandler = () => navigate(routeName);

  return (
    <div className="directory-container" onClick={onNavigationHandler}>
      <div
        className="directory-background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="directory-body-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
