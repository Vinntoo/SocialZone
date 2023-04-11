import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import LikeImage from "../../assets/images/like.png";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function FeedPost({ post }) {
  const [isLiked, setIsLiked] = useState(false);

  const navigation = useNavigation();

  return (
    <Pressable style={styles.post}>
      {/* {Header} */}
      <Pressable
        style={styles.header}
        onPress={() => navigation.navigate("Profile", {id: post.User.id})}
      >
        <Image source={{ uri: post.User.image }} style={styles.profileImage} />

        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.substitute}>{post.createdAt}</Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={18}
          color="gray"
          style={styles.icon}
        />
      </Pressable>

      {/* {Body} */}

      {post.description && (
        <Text style={styles.description}>{post.description}</Text>
      )}

      {post.image && (
        <Image source={{ uri: post.User.image }} style={styles.image} />
      )}

      {/* {Footer} */}
      <View style={styles.footer}>
        {/* Stats Row */}
        <View style={styles.statsRow}>
          <Image source={LikeImage} style={styles.likeIcon} />

          <Text style={styles.likedBy}>
            Vince and {post.numberOfLikes} others
          </Text>

          <Text style={styles.shares}>{post.numberOfShares} shares</Text>
        </View>

        {/* Buttons row*/}
        <View style={styles.buttonsRow}>
          <View style={styles.iconButton}></View>

          <Pressable
            onPress={() => setIsLiked(!isLiked)}
            style={styles.iconButton}
          >
            <AntDesign
              name="like2"
              size={18}
              color={isLiked ? "royalblue" : "gray"}
            />
            <Text style={styles.iconButtonText}>Like</Text>
          </Pressable>

          <View style={styles.iconButton}>
            <FontAwesome5 name="comment-alt" size={16} color="gray" />
            <Text
              style={[
                styles.iconButtonText,
                { color: isLiked ? "royalblue" : "gray" },
              ]}
            >
              Like
            </Text>
          </View>

          <View style={styles.iconButton}>
            <MaterialCommunityIcons
              name="share-outline"
              size={18}
              color="gray"
            />
            <Text style={styles.iconButtonText}>Like</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  post: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "fff",
  },

  // Header
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },
  //Body
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },
  footer: {
    paddingHorizontal: 10,
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  likeIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  likeBy: {
    color: "gray",
  },
  shares: {
    marginLeft: "auto",
  },
  //Buttons
  buttonsRow: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  iconButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButtonText: {
    marginLeft: 5,
    color: "gray",
    fontWeight: "500",
  },
});

//export default FeedPost;
