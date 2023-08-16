import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>C'est une grosse erreur!</h1>
      <p>Veuillez de nous excuser</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}