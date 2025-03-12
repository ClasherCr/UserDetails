# Random User Profile Viewer

## Overview

A React Native application built with Expo that fetches and displays 80 random user profiles from an external API. Features a modern interface with field labels on the left and values in rounded capsules, combined with intuitive navigation controls.

## Features

- **80 User Profiles:** Fetches 80 users from [Random Data API](https://random-data-api.com/) using `?size=80` parameter.
- **Capsule-style UI:**  
  - Left-aligned field labels (ID, UID, Password, etc.).  
  - Right-aligned values in rounded capsules.  
  - User avatar with border and shadow effects.  
- **Navigation System:**  
  - Symmetric bottom navigation bar.  
  - Previous/Next buttons with disabled states.  
  - Current position indicator (X of 80).  
- **Error Handling:** Graceful error states with retry capability.  
- **Responsive Design:** Optimized for various screen sizes using Flexbox.  
- **Type Safety:** Built with TypeScript for better code quality.  

## Installation & Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16 or later)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Steps

#### Clone the Repository

```bash
git clone <https://github.com/ClasherCr/UserDetails>
cd <UserDetails>
```

#### Install Dependencies

```bash
npm install
# or
yarn install
```

#### Start Development Server

```bash
expo start
```

#### Run the App

- **Mobile:** Scan QR code with Expo Go app (iOS/Android).  
- **Simulator:** Press `i` (iOS) or `a` (Android) in terminal.  

## Technical Details

### API Endpoint:

```bash
https://random-data-api.com/api/users/random_user?size=80
```

### Styling:

- Tailwind CSS via NativeWind.  
- Responsive layout using Flexbox.  
- Shadow effects and border radius for depth.  

### State Management:

- React `useState` / `useEffect`.  

### Type Safety:

- TypeScript interfaces for API responses.  

## Additional Notes

- **Internet Required:** Real-time API data fetching.  
- **Styling Setup:** Ensure NativeWind configuration:  

```bash
npm install nativewind
```

- **Error States:** Network errors show a retry prompt.  
- **Pagination:** Users are pre-loaded for smooth navigation.  

## License

MIT License - see `LICENSE` for details.
