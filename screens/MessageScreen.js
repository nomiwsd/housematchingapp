import React from "react";
import {
  FlatList,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

const Messages = [
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../assets/users/user-3.jpg"),
    messageTime: "4 mins ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../assets/users/user-1.jpg"),
    messageTime: "2 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../assets/users/user-4.jpg"),
    messageTime: "1 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "4",
    userName: "Selina Paul",
    userImg: require("../assets/users/user-6.jpg"),
    messageTime: "1 day ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "5",
    userName: "Christy Alex",
    userImg: require("../assets/users/user-7.jpg"),
    messageTime: "2 days ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
];

const MessageScreen = ({ navigation }) => {
  return (
    
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={Messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                width: "100%",
              }}
              onPress={() =>
                navigation.navigate("Chat", { userName: item.userName })
              }
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                  <Image
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: '25px',
                    }}
                    source={item.userImg}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "15px",
                    paddingLeft: "0px",
                    marginLeft: "10px",
                    width: "300px",
                    borderBottomWidth: "1px",
                    borderBottomColor: "#cccccc",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "5px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        fontfamily: "Lato-Regular",
                      }}
                    >
                      {item.userName}
                    </Text>
                    <Text
                      style={{
                        fontSize: "12px",
                        color: "#666",
                        fontFamily: "Lato-Regular",
                      }}
                    >
                      {item.messageTime}
                    </Text>
                  </View>
                  <Text style={{ fontSize: "14px", Color: "#333333" }}>
                    {item.messageText}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default MessageScreen;

