import React, { useEffect, useState } from "react";
import { Container, FloatingButton } from "./styles";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import Tweet from "@/components/Tweet";
import api from "@/service/api";
import { ITweetDTO } from "@/@types/dtos/FeedDTO";
import { AntDesign } from "@expo/vector-icons";
import theme from "@/styles/theme";
import { useQuery } from "@tanstack/react-query";

const Home: React.FC = () => {
  const loadFeed = async () => {
    const response = await api.get("/feed");
    return response.data;
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["queryFeed"],
    queryFn: loadFeed,
  });

  const renderItem = ({ item }: { item: ITweetDTO }) => <Tweet tweet={item} />;
  if (isPending) {
    return (
      <Container>
        <ActivityIndicator color={theme.colors.primary} />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Text>{error.message}</Text>
      </Container>
    );
  }
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
      <FloatingButton>
        <AntDesign name="plus" size={24} color={theme.colors.background} />
      </FloatingButton>
    </Container>
  );
};

export default Home;
