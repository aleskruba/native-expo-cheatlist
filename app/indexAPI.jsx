import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Button,
  StatusBar
} from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [errors, setErrors] = useState(""); // Fixed typo

  const handleRefresh = async () => {
      setRefreshing(true);
      await fetchData(20); // Ensure fetchData completes before resetting
      setRefreshing(false);
  };

  const fetchData = async (limit = 10) => {
      try {
          const response = await fetch(
              `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
          );
          const data = await response.json();
          setPostList(data);
      } catch (err) {
          console.error("Fetch error:", err);
          setErrors("Failed to fetch data");
      } finally {
          setIsLoading(false);
      }
  };

  const addPost = async () => {
      try {
          setIsPosting(true);
          const response = await fetch(
              `https://jsonplaceholder.typicode.com/posts`,
              {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      title: postTitle,
                      body: postBody
                  })
              }
          );

          if (!response.ok) throw new Error("Failed to add new post");

          const newPost = await response.json();
          setPostList([newPost, ...postList]);
          setPostTitle("");
          setPostBody("");
          setErrors(""); // Clear errors on success
      } catch (err) {
          console.error("Error adding new post:", err);
          setErrors("Failed to add new post");
      } finally {
          setIsPosting(false);
      }
  };

  useEffect(() => {
      fetchData();
  }, []);

  if (isLoading) {
      return (
          <SafeAreaView style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="blue" />
              <Text>Loading...</Text>
          </SafeAreaView>
      );
  }

  return (
      <SafeAreaView style={styles.container}>
          {errors ? (
              <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{errors}</Text>
              </View>
          ) : (
              <>
                  <View style={styles.inputContainer}>
                      <TextInput
                          style={styles.input}
                          placeholder="Post title"
                          value={postTitle}
                          onChangeText={setPostTitle}
                      />
                      <TextInput
                          style={styles.input}
                          placeholder="Post body"
                          value={postBody}
                          onChangeText={setPostBody}
                      />
                      <Button
                          title={isPosting ? "Adding..." : "Add Post"}
                          onPress={addPost}
                          disabled={isPosting}
                      />
                  </View>
                  <View style={styles.listContainer}>
                      <FlatList
                          data={postList}
                          keyExtractor={(item) => item.id.toString()} // Use item.id for uniqueness
                          renderItem={({ item }) => (
                              <View style={styles.card}>
                                  <Text style={styles.titleText}>{item.title}</Text>
                                  <Text style={styles.bodyText}>{item.body}</Text>
                              </View>
                          )}
                          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                          ListEmptyComponent={<Text>No posts found</Text>}
                          refreshing={refreshing}
                          onRefresh={handleRefresh}
                      />
                  </View>
              </>
          )}
      </SafeAreaView>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingTop: StatusBar.currentHeight,
    },
    listContainer: {
      flex: 1,
      paddingHorizontal: 16,
    },
    card: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
    titleText: {
      fontSize: 30,
    },
    bodyText: {
      fontSize: 24,
      color: '#666666',
    },
    headerFooterText: {
      fontSize: 18,
      textAlign: 'center',
      paddingVertical: 8,
      backgroundColor: '#dcdcdc',
      borderRadius: 5,
      marginVertical: 8,
    },loadingContainer:{
        flex: 1,
        backgroundColor: 'red',
        paddingTop:StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        backgroundColor: 'white',
        padding:16,
        borderRadius: 8,
        borderWidth:1,
        margin:16
    },
    input:{
        height:40,
        borderColor: 'grey',
        borderWidth:1,
        marginBottom:8,
        padding:8,
        borderRadius:8
    },errorText:{
      color:'red',
      marginBottom:10,
  },errorContainer:{
      backgroundColor:"red",
      padding:16,
      borderRadius:8,
      borderWidth:1,
      margin:16,
      alignItems: 'center',
  },errorText:{
    colosr:"green",
    fontSize:16,
    textAlign: 'center',
  }
  });
  