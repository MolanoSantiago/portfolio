import styled from "styled-components";

export const SkillsContainer = styled.div`
  padding: 5rem 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 5rem;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#fff" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
    padding: 0px 30px 0px 30px;
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 150px 150px; /* Establecer una altura fija para ambas filas */
  grid-gap: 18px;
  width: 70%;
  height: auto;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1120px) {
    grid-template-columns: 1fr;
    grid-template-rows: 150px 150px;
  }
`;

export const SkillCardLong = styled.div`
  border: 1px solid transparent;
  background-color: #010606;
  box-shadow: 0 2px 7px gray;
  text-align: center;
  border-radius: 30px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  height: -webkit-fill-available;

  @media screen and (max-width: 1120px) {
    grid-column-start: auto;
    grid-column-end: auto;
  }

  @media screen and (max-width: 570px) {
    width: 27rem;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 22rem;
  }
`;

export const SkillCard = styled.div`
  border: 1px solid transparent;
  background-color: #010606;
  box-shadow: 0 2px 7px gray;
  text-align: center;
  border-radius: 30px;
  text-align: center;
  height: -webkit-fill-available;

  @media screen and (max-width: 570px) {
    width: 27rem;
  }

  @media screen and (max-width: 480px) {
    width: 22rem;
  }
`;

export const SkillIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 68%;

  @media screen and (max-width: 570px) {
    transform: scale(0.6);
  }
`;

export const SkillIcon = styled.img`
  width: ${({ standarWidth }) => (standarWidth ? "280px" : "160px")};
  border-radius: 22px;
  padding: 20px 20px 20px 20px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 750px) {
    width: ${({ standarWidth }) => (standarWidth ? "250px" : "130px")};
  }
`;

export const SkillTitle = styled.h2`
  font-size: 3rem;
  color: #df2935;
  text-align: left;
  padding: 5px 35px;
`;

export const SkillSubtitle = styled.p`
  color: #ffffff;
  text-align: left;
  padding: 0px 35px;
  font-size: 18px;
`;
