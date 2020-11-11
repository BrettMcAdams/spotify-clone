import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

const album = {
  id: "11",
  name: "Good Vibez",
  by: "Spotify",
  numberOfLikes: 38,
  imageUri: "https://images-na.ssl-images-amazon.com/images/I/818W3I9zksL.jpg",
  artistHeadline: "Taylor Swift, Kygo Objective A, Avicii",
  songs: [
    {
      id: "1",
      imageUri: "https://i.pinimg.com/736x/ad/8e/04/ad8e046bbc7780c544bf1a23056de5d1.jpg",
      title: "Candy Shop",
      artist: "50 Cent",
    },
    {
      id: "2",
      imageUri: "https://i.pinimg.com/736x/ad/8e/04/ad8e046bbc7780c544bf1a23056de5d1.jpg",
      title: "Lorem Ipsum",
      artist: "Yo Gaba Gaba",
    },
    {
      id: "3",
      imageUri: "https://images-na.ssl-images-amazon.com/images/I/818W3I9zksL.jpg",
      title: "Suge",
      artist: "DaBaby",
    },
    {
      id: "4",
      imageUri: "https://images-na.ssl-images-amazon.com/images/I/91Qydi%2B0SbL._AC_SL1500_.jpg",
      title: "Foo Bar",
      artist: "Bar Foo",
    },
    {
      id: "5",
      imageUri: "https://e.snmc.io/i/600/w/a55d4bbb298b9dff337b2d02633a6993/4012564",
      title: "Back in the past",
      artist: "Kenny Chesney",
    },
  ],
};

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <Text style={{ color: "white" }}>Hello for the album screen</Text>
    </View>
  );
};

export default AlbumScreen;
