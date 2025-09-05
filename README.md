# Swipe Post Manager (React Native / Expo)

A simple, clean mobile app that fetches posts from the public JSONPlaceholder API and lets you **swipe right to Save** and **swipe left to Delete**. Built with **React Native + Expo** and **TypeScript**, using a lightweight service + context architecture.

<p align="center">
  
![IMG_3092](https://github.com/user-attachments/assets/428277cb-eb70-444e-ad4d-c30b253c8f90)
![IMG_3091](https://github.com/user-attachments/assets/1b5448f0-9546-419d-bbf5-73476c070a2a)
![IMG_3090](https://github.com/user-attachments/assets/075f3fb7-93ae-457e-8483-addd973b3195)
![IMG_3089](https://github.com/user-attachments/assets/80be861b-318a-4bcf-b76c-1d6c0323c1f9)
![IMG_3088](https://github.com/user-attachments/assets/dcca46a8-9a70-4169-bf46-1ed72e2724a0)



</p>



---

## ✨ Features

- Fetch posts from `https://jsonplaceholder.typicode.com/posts`
- Render posts in card-style UI (title + body, trimmed for readability)
- **Swipe right → Save** the post to the Saved tab
- **Swipe left → Delete** the post from the Home list
- Saved/Deleted state persists for the current session
- Clean architecture: `api → service → context → screens → components`
- Type-safe models (`Post` type)

---

## 📦 Tech Stack

- **React Native** (Expo, TypeScript)
- **react-native-gesture-handler** (swipe gestures)
- **React Context** for lightweight state management

No `dotenv` runtime in the client (Expo injects env vars at build time).

---

## 🛠️ Getting Started

### Prerequisites

- Node.js ≥ 18
- npm (or yarn/pnpm)
- Expo CLI (`npx expo` is enough)
- Expo Go app on your device or iOS/Android simulator

### 1) Install

```
npm install
```
### 2) (Optional) Configure API URL via ENV

Expo reads public env vars that start with EXPO_PUBLIC_.

Create .env in the project root:

```
EXPO_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```
### 3) Run

```
npx expo start -c
```
### 📁 Project Structure
```
SwipePostManager/
├─ app.json
├─ package.json
├─ tsconfig.json
     
├─ docs/ //TODO
│  └─ screens/
│     ├─ home.png
│     ├─ swipe-save.png
│     ├─ swipe-delete.png
│     ├─ saved-empty.png
│     └─ saved-list.png
└─ src/
   ├─ api/
   │  └─ postsApi.ts          
   ├─ Service/
   │  └─ postsService.ts       
   ├─ components/
   │  └─ PostCard.tsx
   |  └─ Swipe.tsx
   ├─ context/
   │  └─ PostsContext.tsx     
   ├─ screens/
   │  ├─ HomeScreen.tsx        
   │  └─ SavedScreen.tsx       
   ├─ navigation/
   │  └─ index.tsx     
   └─ types/
      └─ post.ts               

```
### 📝 Summary
Create a React Native app that:

Fetches posts from https://jsonplaceholder.typicode.com/posts

Displays them in a mobile-friendly list

Supports swipe left to delete and swipe right to save

Provides a separate Saved view

Is clean, modular, and documented


# Enjoy :grin:
גגs








