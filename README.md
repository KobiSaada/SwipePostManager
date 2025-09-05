# Swipe Post Manager (React Native / Expo)

A simple, clean mobile app that fetches posts from the public JSONPlaceholder API and lets you **swipe right to Save** and **swipe left to Delete**. Built with **React Native + Expo** and **TypeScript**, using a lightweight service + context architecture.

<p align="center">
  <img src="./docs/screens/home.png" width="260" alt="Home screen" />
  <img src="./docs/screens/swipe-save.png" width="260" alt="Swipe right to save" />
  <img src="./docs/screens/swipe-delete.png" width="260" alt="Swipe left to delete" />
</p>

<p align="center">
  <img src="./docs/screens/saved-empty.png" width="260" alt="Saved empty state" />
  <img src="./docs/screens/saved-list.png" width="260" alt="Saved list screen" />
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
├─ assets/
│  └─ images/
│     └─ icon.png              # referenced from app.json (update path if needed)
├─ docs/
│  └─ screens/
│     ├─ home.png
│     ├─ swipe-save.png
│     ├─ swipe-delete.png
│     ├─ saved-empty.png
│     └─ saved-list.png
└─ src/
   ├─ api/
   │  └─ postsApi.ts           # network calls (fetches Post[])
   ├─ Service/
   │  └─ postsService.ts       # domain helpers (filtering, save/delete sets)
   ├─ components/
   │  └─ PostCard.tsx          # UI card for a single post
   ├─ providers/
   │  └─ PostsProvider.tsx     # Context: loading/error/posts/saved/deleted
   ├─ screens/
   │  ├─ HomeScreen.tsx        # list with swipe actions
   │  └─ SavedScreen.tsx       # displays saved posts
   ├─ navigation/
   │  └─ RootNavigator.tsx     # bottom tabs: Home / Saved
   └─ types/
      └─ post.ts               # Post model (userId, id, title, body)

```
### 📝 Original Assignment (Summary)
Create a React Native app that:

Fetches posts from https://jsonplaceholder.typicode.com/posts

Displays them in a mobile-friendly list

Supports swipe left to delete and swipe right to save

Provides a separate Saved view

Is clean, modular, and documented



גגs







📁 Project Structure
