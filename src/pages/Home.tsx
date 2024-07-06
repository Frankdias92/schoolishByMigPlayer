import styled from "styled-components";
import Navbar from "../components/Navbar";
import Space from "../components/Space";

function Page() {
  return (
    <>
      <Navbar />
      <Space height="80px" />
      <Overview>
        <div>
          <h1>Organização de turmas a um clique de distância.</h1>
          <Space height="25px" />
          <p>
            Conheça o Schoolish, a nova plataforma projetada para ajudar
            professores a se organizarem melhor em suas aulas e turmas. Com o
            Schoolish, você pode gerenciar horários, planejar lições de maneira
            eficiente e manter todas as informações importantes em um só lugar.
            Simplifique sua rotina escolar e tenha mais tempo para focar no que
            realmente importa:{" "}
            <span style={{ fontWeight: "bolder", textDecoration: "underline" }}>
              ensinar
            </span>
            .
          </p>
        </div>
      </Overview>
    </>
  );
}

const Overview = styled.main`
  width: calc(100vw - 40px);
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export default Page;
