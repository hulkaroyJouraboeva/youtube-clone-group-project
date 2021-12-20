# Team 5 YouTube Clone Project

## About this Project

YouTube Clone application that lets you search for YouTube videos using the YouTube API, then choose a video from a list to watch. For this project, we collaborated to recreate components similar to the YouTube application.

## Team Members

- Eric Cave
- Hulkaroy Jouraboeva
- Stephanie Lucano
- Triane Peart

<hr/>

## Project Workflow
We created a [Trello](https://trello.com/b/yNG0Heo0) board for project management. The Kanban board was regularly utilized to update the group on the project's progress.
![trello board](./assets/Trello.png)

We used [Miro](https://miro.com/app/board/uXjVOd8J-Tk=/) to create a wire frame of our pending project.
![Miro](./assets/Miro.png)

YouTube Clone
![YouTube Clone](assets/home-2.png)

We created a YouTube Clone with the following criteria 

### Acceptance criteria

1. I can use the nav bar to navigate between the "Home" page and "About" page.
1. I can see an "About" page at the URL `/about` that has:

   - The nav bar.
   - A brief project description.
   - A short bio of each teammate.
   - Links to each teammate's GitHub.

1. I can see the "Home" page at the URL `/` which has:

   - The nav bar.
   - A search bar and submit button.
     - After submitting a search, a list of videos should appear.
     - After submitting a search, the search bar should be cleared of any input.
   - Each video that appears on this page should have a thumbnail and title that the user can click on to see a new page.
     - After clicking on the title, the user should be brought to a new page for that specific video.

1. I can see the individual "View" page of a video. The URL should be `/videos/:id` where `:id` is the video ID from the Youtube API. The page should have:
   - The nav bar.
   - The individual video view.
     - This video view should, at minimum, have a playable video from YouTube.
<hr/>

## Used Resources

We used the following resources to create our code:

- [`create-react-app`](https://www.npmjs.com/package/create-react-app)
- [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)
- [`youtube-react`](https://www.npmjs.com/package/youtube-react)