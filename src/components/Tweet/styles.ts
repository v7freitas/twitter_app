import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${({ theme }) => theme.metrics.margin.sm}px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
`;

export const From = styled.View`
  margin-left: 63px;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  justify-content: center;

  align-items: center;
  gap: ${({ theme }) => theme.metrics.margin.sm}px;
`;

export const ProfileImage = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 30px;
  background-color: black;
`;

export const Content = styled.View`
  flex: 1;
  gap: 4px;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const UsernameContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const Username = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Name = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
`;

export const ContentText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
