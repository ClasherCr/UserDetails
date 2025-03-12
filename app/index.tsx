import "../global.css";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";

// Define the user interface outside the main component
interface User {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string; // Added avatar field to the User interface
}

// A reusable capsule component for displaying field labels and values
const FieldCapsule = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => {
  return (
    <View className="flex-row items-center justify-between bg-gray-300 px-4 py-3 rounded-full mb-5 shadow-md">
      <Text className="text-black font-semibold">{label}</Text>
      <Text className="text-gray-700 underline">{value}</Text>
    </View>
  );
};

export default function App() {
  const [users, setUsers] = useState<User[]>([]); // State to store user data
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current user index
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Fetch user data from the API when the component mounts
    fetch("https://random-data-api.com/api/users/random_user?size=80")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // Set the fetched user data to state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  if (loading) {
    // Show a loading indicator while data is being fetched
    return (
      <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  const user = users[currentIndex]; // Get the current user based on the index

  return (
    <SafeAreaView className="flex-1 bg-gray-500">
      <StatusBar style="light" backgroundColor="#6b7280" />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 20,
          paddingBottom: 100, // Extra bottom padding so content doesn't overlap nav bar
        }}
      >
        <View className="items-center mb-8">
          <Image
            source={{ uri: user.avatar }} // Display user's avatar
            className="w-48 h-48 rounded-full mb-3"
          />
          <Text className="text-3xl mt-10 font-bold text-black">
            {user.first_name} {user.last_name}{/* Display user's full name */}
          </Text>
        </View>
        <FieldCapsule label="ID" value={user.id} />
        <FieldCapsule label="UID" value={user.uid} />
        <FieldCapsule label="Password" value={user.password} />
        <FieldCapsule label="First Name" value={user.first_name} />
        <FieldCapsule label="Last Name" value={user.last_name} />
        <FieldCapsule label="User Name" value={user.username} />
        <FieldCapsule label="Email" value={user.email} />
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 bg-gr-500 rounded-t-3xl shadow-xl flex-row justify-around items-center py-4 px-6">
        <TouchableOpacity
          className="bg-white rounded-full py-2 px-6"
          onPress={() => setCurrentIndex((i) => Math.max(i - 1, 0))} // Navigate to the previous user
          disabled={currentIndex === 0} // Disable button if at the first user
          style={{ opacity: currentIndex === 0 ? 0.5 : 1 }}
        >
          <Text className="text-black text-center">Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-black rounded-full py-2 px-6"
          onPress={() =>
            setCurrentIndex((i) => Math.min(i + 1, users.length - 1)) // Navigate to the next user
          }
          disabled={currentIndex === users.length - 1} // Disable button if at the last user
          style={{ opacity: currentIndex === users.length - 1 ? 0.5 : 1 }}
        >
          <Text className="text-white text-center">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}