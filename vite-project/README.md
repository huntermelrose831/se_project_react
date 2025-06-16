# WTWR (What to Wear?)

## About

WTWR (What to Wear?) is a React-based web application that helps users decide what clothing to wear based on current weather conditions. The application integrates with a Weather API to fetch real-time weather data and recommends appropriate clothing items from the user's wardrobe.

## Functionality

- **Weather Integration**: Fetches current weather data from a Weather API
- **Smart Clothing Recommendations**: Suggests appropriate clothing based on temperature and weather conditions
- **Personal Wardrobe Management**: Users can add, view, and manage their clothing items
- **Interactive Clothing Cards**: Click on clothing items to view detailed information
- **Responsive Design**: Works seamlessly across different device sizes
- **Modal Interfaces**: Clean, user-friendly popups for adding new items and viewing details

## Technologies & Techniques Used

- **React**: Frontend framework for building the user interface
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with modern CSS techniques
- **JavaScript ES6+**: Modern JavaScript features and syntax
- **Component-Based Architecture**: Modular, reusable React components
- **State Management**: React hooks (useState, useEffect) for managing application state
- **API Integration**: Weather API calls for real-time data
- **Responsive Design**: Mobile-first approach with flexible layouts
- **Modal Components**: Interactive popup interfaces

## Project Structure

```
src/
├── components/
│   ├── App/
│   ├── Header/
│   ├── Main/
│   ├── ItemCard/
│   ├── ItemModal/
│   ├── ModalWithForm/
│   └── Footer/
├── utils/
└── assets/
```

## Features

### Weather-Based Recommendations

The application analyzes current weather conditions and automatically filters clothing items suitable for the weather.

### Add New Clothing Items

Users can add new clothing items to their wardrobe through an intuitive modal form interface.

### Interactive Item Cards

Each clothing item is displayed as an interactive card that users can click to view detailed information.

### Responsive Modal System

Clean, modern modal interfaces for both viewing item details and adding new items to the wardrobe.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the local development URL

## Future Enhancements

- Backend integration for user accounts and data persistence
- Advanced weather forecasting
- Outfit combination suggestions
- Social sharing features
- Seasonal clothing organization

---

\*This project was developed as part of a React fundamentals course, focusing on component-based architecture, state management, and modern frontend development
