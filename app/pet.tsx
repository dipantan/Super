import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import BubbleTabBar from "../component/tab";

const Home = () => {
  const rec = [
    "Now share the construction sectors with your anyone can save it as bookmark",
    "Now share the entertainment sectors with your anyone can save it as bookmark",
    "Now share the entertainment sectors with your anyone can save it as bookmark",
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <LinearGradient colors={["#feb5b0", "#f1a6bc"]} style={styles.background}>
        <View
          style={{
            height: "80%",
            justifyContent: "center",
            marginLeft: responsiveWidth(5),
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2.8),
              fontWeight: "700",
            }}
          >
            Hello,
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              fontWeight: "500",
            }}
          >
            Fancy for a wash today!
          </Text>
          <Image
            source={require("../assets/home/w.png")}
            style={{
              height: responsiveWidth(12),
              width: responsiveWidth(9),
              position: "absolute",
              bottom: 10,
            }}
          />
          <Image
            source={require("../assets/home/e.png")}
            style={{
              height: responsiveWidth(8),
              width: responsiveWidth(7),
              position: "absolute",
              top: "45%",
              right: 0,
            }}
          />
        </View>
      </LinearGradient>

      <Octicons
        style={{
          position: "absolute",
          top: 20,
          left: 20,
        }}
        name="three-bars"
        size={24}
        color="#000"
      />
      <Image
        source={require("../assets/Logo.png")}
        resizeMode="stretch"
        style={{
          height: responsiveFontSize(2.4),
          width: responsiveWidth(9),
          position: "absolute",
          top: 22,
          right: "46%",
        }}
      />
      <MaterialIcons
        style={{
          position: "absolute",
          top: 15,
          right: 15,
          padding: 5,
          borderRadius: 8,
          backgroundColor: "#fbc2c3",
        }}
        name="notifications-none"
        size={responsiveFontSize(3.5)}
        color="#000"
      />

      <View
        style={{
          marginTop: -responsiveHeight(5),
          backgroundColor: "#fff",
          borderTopLeftRadius: responsiveWidth(10),
          borderTopRightRadius: responsiveWidth(10),
          paddingTop: 20,
        }}
      >
        <Image
          source={require("../assets/home/catt.png")}
          style={{
            height: responsiveWidth(20),
            width: responsiveWidth(15),
            position: "absolute",
            top: -responsiveHeight(8.5),
            right: responsiveWidth(38),
          }}
        />
        <Image
          source={require("../assets/home/dog.png")}
          style={{
            height: responsiveWidth(20),
            width: responsiveWidth(18),
            position: "absolute",
            top: -responsiveHeight(8.5),
            right: responsiveWidth(20),
          }}
        />
        <Image
          source={require("../assets/home/cat.png")}
          style={{
            height: responsiveWidth(19),
            width: responsiveWidth(16.5),
            position: "absolute",
            top: -responsiveHeight(8),
            right: responsiveWidth(4),
          }}
        />
        <View
          style={{
            backgroundColor: "#FFEDF2",
            width: "90%",
            borderRadius: 10,
            marginTop: responsiveWidth(5),
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            columnGap: 10,
            justifyContent: "space-between",
            height: responsiveHeight(7),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 8,
            }}
          >
            <Feather
              name="search"
              size={responsiveFontSize(2.99)}
              color="#ff6593"
            />
            <Text style={{ color: "#ff6593" }}>What are you looking for?</Text>
          </View>
          <Image
            source={require("../assets/settings.png")}
            style={{
              height: 20,
              width: 20,
              resizeMode: "contain",
            }}
          />
        </View>

        <Image
          source={require("../assets/home/book.png")}
          resizeMode="stretch"
          style={{
            height: responsiveWidth(33),
            width: "90%",
            alignSelf: "center",
            marginTop: 18,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: responsiveHeight(2.4),
          }}
        >
          <Text
            style={{
              marginStart: responsiveWidth(4.5),
              fontSize: responsiveFontSize(2.2),
              fontWeight: "700",
            }}
          >
            Popular Service
          </Text>
          <Entypo
            style={{ marginEnd: responsiveWidth(4.5) }}
            name="dots-three-horizontal"
            size={responsiveFontSize(2.5)}
            color="black"
          />
        </View>
        <View
          style={{
            width: "92%",
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <Image
            resizeMode="stretch"
            source={require("../assets/home/pg.png")}
            style={[
              styles.image,
              { width: "48%", height: responsiveHeight(24), marginRight: 0 },
            ]}
          />
          <Image
            source={require("../assets/home/pw.png")}
            resizeMode="stretch"
            style={[
              styles.image,
              { width: "48%", height: responsiveHeight(17.3), marginRight: 0 },
            ]}
          />
        </View>
        <View
          style={{
            width: "92%",
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 14,
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../assets/home/pd.png")}
            resizeMode="stretch"
            style={[
              styles.image,
              { width: "48%", height: responsiveHeight(17.3), marginRight: 0 },
            ]}
          />
          <Image
            resizeMode="stretch"
            source={require("../assets/home/pt.png")}
            style={[
              styles.image,
              {
                width: "48%",
                height: responsiveHeight(24),
                marginRight: 0,
                marginTop: -responsiveHeight(3),
              },
            ]}
          />
        </View>
        <View
          style={{
            width: "92%",
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <Image
            resizeMode="stretch"
            source={require("../assets/home/pa.png")}
            style={[
              styles.image,
              { width: "48%", height: responsiveHeight(24), marginRight: 0 },
            ]}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: responsiveHeight(2.4),
        }}
      >
        <Text
          style={{
            marginStart: responsiveWidth(4.5),
            fontSize: responsiveFontSize(2.2),
            fontWeight: "700",
          }}
        >
          Service Providers
        </Text>
        <Entypo
          style={{ marginEnd: responsiveWidth(4.5) }}
          name="dots-three-horizontal"
          size={responsiveFontSize(2.5)}
          color="black"
        />
      </View>
      {rec.map((_, index) => (
        <View
          style={{
            width: "92%",
            alignSelf: "center",
            marginTop: 20,
            justifyContent: "center",
          }}
          key={index.toString()}
        >
          <Image
            resizeMode="stretch"
            source={require("../assets/home/tmd.png")}
            style={[
              styles.image,
              {
                width: "100%",
                height: responsiveHeight(13),
                marginRight: 0,
                marginBottom: 10,
              },
            ]}
          />
          {/* <Text numberOfLines={3} style={{position:'absolute',top:15,right:'18%',width:'50%',fontSize:responsiveFontSize(2),fontWeight:'bold',color:'#060047'}}>{item}</Text> */}
        </View>
      ))}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: responsiveHeight(2.4),
        }}
      >
        <Text
          style={{
            marginStart: responsiveWidth(4.5),
            fontSize: responsiveFontSize(2.2),
            fontWeight: "700",
          }}
        >
          Ratings
        </Text>
        <Entypo
          style={{ marginEnd: responsiveWidth(4.5) }}
          name="dots-three-horizontal"
          size={responsiveFontSize(2.5)}
          color="black"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: responsiveHeight(2.4),
          width: "95%",
        }}
      >
        <Text
          style={{
            marginStart: responsiveWidth(4.5),
            fontSize: responsiveFontSize(2),
            fontWeight: "500",
            color: "#ff6593",
          }}
        >
          13 Reviews
        </Text>
        <Text
          style={{
            marginStart: responsiveWidth(4.5),
            fontSize: responsiveFontSize(2),
            fontWeight: "500",
            color: "#ff6593",
          }}
        >
          WRITE A REVIEW{" "}
          <Entypo
            style={{ marginEnd: responsiveWidth(4.5) }}
            name="edit"
            size={responsiveFontSize(2.5)}
            color={"#ff6593"}
          />
        </Text>
      </View>
      {rec.map((_, index) => (
        <View
          style={{
            width: "92%",
            alignSelf: "center",
            marginTop: 20,
            justifyContent: "center",
          }}
          key={index.toString()}
        >
          <Image
            resizeMode="stretch"
            source={require("../assets/home/rate.png")}
            style={[
              styles.image,
              {
                width: "100%",
                height: responsiveHeight(13),
                marginRight: 0,
                marginBottom: 10,
              },
            ]}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const Search = () => {
  return <Text>search</Text>;
};

const Shorts = () => {
  return <Text>shorts</Text>;
};

const Profile = () => {
  return <Text>profile</Text>;
};

const Tabs = createBottomTabNavigator();

const Index = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{ backgroundColor: "#fff" }}
      tabBar={(props) => (
        <BubbleTabBar
          {...props}
          activeBackgroundColor={"#FFE7EA"}
          activeIconColor={"#CF76DD"}
        />
      )}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} component={Home} />
      <Tabs.Screen
        name="search"
        options={{ title: "Search" }}
        component={Search}
      />
      <Tabs.Screen
        name="shorts"
        options={{ title: "Shorts" }}
        component={Shorts}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile" }}
        component={Profile}
      />
    </Tabs.Navigator>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "42%",
    height: responsiveHeight(5.2),
    marginRight: responsiveWidth(1.5),
    resizeMode: "stretch",
  },
  background: {
    height: responsiveHeight(33),
    width: "100%",
  },
});
