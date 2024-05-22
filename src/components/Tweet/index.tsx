import React from "react";
import {
  Container,
  ContentText,
  Content,
  ContentContainer,
  Info,
  Name,
  ProfileImage,
  Username,
  UsernameContainer,
  Action,
  ActionsContainer,
  From,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { ITweetDTO } from "@/@types/dtos/FeedDTO";
import { Alert, Share, View } from "react-native";
interface ITweet {
  tweet: ITweetDTO;
}

const Tweet: React.FC<ITweet> = ({ tweet }) => {
  const theme = useTheme();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Twitter | veja este Tweet",
        url: "https://twitter.com",
        title: "Twitter",
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <Container>
      <From>
        {tweet.from && (
          <Action>
            {tweet.from.type === "like" ? (
              <AntDesign
                name="heart"
                size={14}
                color={theme.colors.secondary}
              />
            ) : (
              <AntDesign
                name="retweet"
                size={14}
                color={theme.colors.secondary}
              />
            )}
            <Info>{tweet.from.content}</Info>
          </Action>
        )}
      </From>

      <ContentContainer>
        <ProfileImage source={{ uri: tweet.author.avatar_url }} />
        <Content>
          <UsernameContainer>
            <Name>{tweet.author.name}</Name>
            <Username>@{tweet.author.username} 12h</Username>
          </UsernameContainer>
          <ContentText>{tweet.content}</ContentText>
          <ActionsContainer>
            <Action>
              <AntDesign
                name="message1"
                size={14}
                color={theme.colors.secondary}
              />
              <Info>{tweet.comments.length}</Info>
            </Action>
            <Action>
              <AntDesign
                name="retweet"
                size={14}
                color={theme.colors.secondary}
              />
              <Info>{tweet.retweets}</Info>
            </Action>
            <Action>
              <AntDesign
                name="hearto"
                size={14}
                color={theme.colors.secondary}
              />
              <Info>{tweet.likes}</Info>
            </Action>
            <Action onPress={onShare}>
              <AntDesign
                name="sharealt"
                size={14}
                color={theme.colors.secondary}
              />
            </Action>
          </ActionsContainer>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Tweet;
