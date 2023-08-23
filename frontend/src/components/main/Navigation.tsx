export default function Navigation() {
  return (
    <div className = "nav">
      <p className = "logo"> ExaM<span className = "logoEnd">inds </span> </p>
      <div className = "navSansLogo">
        <button className = "navButton"> Главная </button>
        <button className = "navButton"> О нас </button>
        <button className = "navButton"> Курсы </button>
        <button className = "navButton"> Преподаватели </button>
        <button className = "navButton"> Запись </button>
      </div>
      <button className = "logIn"> ВОЙТИ </button>
    </div>
  )
}