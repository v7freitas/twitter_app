import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FloatingButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  bottom: 10px;
  right: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;
