import { FormEvent, useState, useRef, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  UserCredential,
} from "firebase/auth";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

import { auth, errors } from "../services/firebase";
import setAlertMessage from "../utils/setAlertMessage";
import colors from "../styles/colors";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | UserCredential | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const alertMessageBox = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuário está logado
        setUser(user);
        setIsLogged(true);
      } else {
        // Usuário não está logado
        setUser(null);
      }
    });

    // Limpeza da subscrição
    return () => unsubscribe();
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("Cadastrando...");

    if (!email || !password) {
      setAlertMessage({
        ref: alertMessageBox,
        type: "info",
        message: "Preencha todos os campos!",
      });
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = String(error.message).replace("Firebase: Error (", "").replace(").", "")
        const errorMessage = (errors.auth[errorCode as keyof typeof errors.auth]) || "Erro desconhecido. Tente novamente mais tarde ou <a href=''>atualize a página</a>."
        setAlertMessage({
          ref: alertMessageBox,
          type: "warning",
          message: errorMessage,
        });
      });
  }

  return (
    <Container>
      <main>
        {isLogged && <Navigate to="/dashboard" replace={true} />}
        <h1>
          Crie sua conta
          <strong>
            <i> Schoolish</i>
          </strong>
        </h1>

        <div className="message" ref={alertMessageBox}></div>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Senha"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit">Entrar</button>
        </form>
      </main>
    </Container>
  );
}

export default Page;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & main {
    background-color: ${colors.mainColor};
    padding: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
`;
