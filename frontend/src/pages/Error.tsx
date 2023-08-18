import { useRouteError, useNavigate, NavigateFunction } from "react-router-dom";
import "../styles/error.css"

export default function Error() {
  const error: any = useRouteError();
  const navigate: NavigateFunction = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  console.error(error);

  return (
    <div className="errorMain">
      <h1 className = "errorNumber"> Ошибка 404 </h1>
      <p className = "errorInfo"> Страница не существует! </p>
      <button className = "toHome" onClick = { navigateToHome }> Перейти на главную страницу </button>
    </div>
  );
}