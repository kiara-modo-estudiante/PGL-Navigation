import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs, useSegments } from "expo-router";
import Card from "../../components/Card";
import { aboutMeCard } from "../../data/about";
import { githubCard } from "../../data/socials";

export default function Layout() {
  const segments = useSegments();
  const currentTab = segments[segments.length - 1];

  const cardData =
    currentTab === "about"
      ? aboutMeCard
      : currentTab === "repo"
      ? githubCard
      : null;

  return (
    <>
      {cardData && (
        <Card
          title={cardData.title}
          imageSource={cardData.image}
          bodyText={cardData.description}
        />
      )}
      <Tabs>
        <Tabs.Screen
          name="about"
          options={{
            headerShown: false,
            title: "About Me",
            tabBarIcon: () => <FontAwesome5 name="user" size={20} />,
            tabBarLabelStyle: { fontSize: 16 },
          }}
        />
        <Tabs.Screen
          name="repo"
          options={{
            headerShown: false,
            title: "Repository",
            tabBarIcon: () => <FontAwesome5 name="globe" size={20} />,
            tabBarLabelStyle: { fontSize: 16 },
          }}
        />
      </Tabs>
    </>
  );
}
