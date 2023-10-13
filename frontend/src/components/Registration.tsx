import "../styles/registration.css";

export default function Registration() {
  return (
    <div className = "registrationDiv">
      <div className = "registrationBox">
        <div className = "startTextDiv">
          <div className = "startTextDivInternal">
            <p className = "startExaMindsText"> НАЧНИ ГОТОВИТСЯ <br /> К ЭКЗАМЕНАМ С <br /> <span style = {{color: "#DB7F4F"}}>ExaM</span>inds </p>
            <p className = "notMissText"> Не упусти возможность записаться одним из <br /> первых </p>
          </div>
        </div>

        <div className = "inputsDiv">
          <div className = "namesDiv">
            <div>
              <p className = "label"> Имя ученика </p>
              <input type = "text" className = "registrationInput" />
            </div>
            
            <div>
              <p className = "label"> Имя родителя </p>
              <input type = "text" className = "registrationInput" />
            </div>
          </div>

          <div className = "numbersDiv">
            <div>
              <p className = "label"> Номер ученика </p>
              <input type = "text" className = "registrationInput" />
            </div>

            <div>
              <p className = "label"> Номер родителя </p>
              <input type = "text" className = "registrationInput" />
            </div>
          </div>

          <div className = "emailDiv">
            <p className = "label"> E-mail ученика </p>
            <input type = "email" className = "emailInput" />
          </div>

          <button type = "submit" className = "submitButton"> Отправить заявку </button>
        </div>
      </div>
    </div>
  )
}