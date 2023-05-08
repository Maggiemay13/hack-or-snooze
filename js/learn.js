async addStory(user, { title, author, url }) {
    const token = user.loginToken;
    const response = await axios({
      method: "POST",
      url: `${BASE_URL}/stories`,
      data: { token, story: { title, author, url } },
    });
    const story = new Story(response.data.story);
    this.stories.unshift(story);
    user.ownStories.unshift(story);

    return story;
  }
// aThe function takes two arguments, user and an object containing title, author, and url properties of the story to be added.

// The user argument contains a loginToken property that is used for authentication when making the API request.

// Axios is used to make a POST request to the API endpoint BASE_URL/stories with the data object that includes the token and the story object with title, author, and url properties.

// The response from the API is stored in the response variable.

// The response data is used to create a new Story object, which is then added to the stories list at the beginning using the unshift() method.

// The new Story object is also added to the ownStories list of the user using the unshift() method.

// The function returns the newly created Story object.

// // Overall, this function enables authenticated users to add new stories to the list of stories, and it updates both the stories list and the ownStories list of the user with the newly added story.





