import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AllMeetups from "../screens/AllMeetups";
import MeetupDetails from "../screens/MeetupDetails";
import Header from "../shared/Header";
import { ParamListBase } from "@react-navigation/native";
import { MeetupItem } from "../features/meetups/meetupsSlice";

export interface MeetupStackParamList extends ParamListBase {
  AllMeetups: undefined;
  // MeetupDetails screen will take an object `{item: <item object>}` as prop; in other words: an object with property `item` and with value: the item object we want to pass down. This will be enforced in the `navigation.navigate()` function. <item object> must be of type `MeetupItem`
  MeetupDetails: { item: MeetupItem };
}

const Stack = createStackNavigator<MeetupStackParamList>();

const MeetupStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: "pacifico-regular",
          fontSize: 20,
          color: "#333",
          letterSpacing: 1,
        },
      }}
    >
      <Stack.Screen
        name="AllMeetups"
        component={AllMeetups}
        options={() => {
          return {
            header: () => <Header title={"All Meetups"} />,
          };
        }}
      />
      <Stack.Screen
        name="MeetupDetails"
        component={MeetupDetails}
        options={{
          title: "Meetup Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default MeetupStack;
