# VibeStage 🎭

VibeStage is an interactive audience engagement platform that creates a dynamic, real-time emoji wall experience. It enables workshop attendees, both in-person and remote, to participate in creating a collective emotional expression through emojis displayed on a large screen.

## 🌟 Features

### Core Functionality
- **Real-time Emoji Wall**: A large display showing emojis sent by participants
- **Mobile Controller**: A web-based mobile interface for participants to send emojis
- **Live Animation**: Emojis appear with engaging animations and effects
- **Temporary Display**: Each emoji appears for 20 seconds before fading out
- **Multi-platform Support**: Works on any device with a web browser

### Technical Features
- **Real-time Communication**: WebSocket-based instant updates
- **Responsive Design**: Works seamlessly on mobile devices
- **Cross-platform Compatibility**: Supports both iOS and Android
- **Scalable Architecture**: Handles multiple concurrent users
- **Low Latency**: Near-instant emoji display on the main screen

## 🏗 Architecture

### Frontend Components
1. **Main Display**
   - Large screen interface showing the emoji wall
   - Canvas-based rendering for smooth animations
   - Responsive layout adapting to different screen sizes
   - Emoji animation system with various effects

2. **Mobile Controller**
   - Mobile-optimized web interface
   - Grid of selectable emojis
   - Simple, intuitive user experience
   - One-tap emoji sending

### Backend Components
1. **WebSocket Server**
   - Real-time communication between mobile clients and main display
   - Handles emoji broadcasting and synchronization
   - Manages connection states and user sessions

2. **Database**
   - Stores emoji usage statistics
   - Tracks session information
   - Maintains user engagement metrics

## 🛠 Technical Stack

### Frontend
- React.js for the main display
- React Native Web for the mobile controller
- Canvas API for animations
- WebSocket client for real-time updates

### Backend
- Node.js with Express
- Socket.IO for WebSocket communication
- MongoDB for data storage
- Redis for real-time data caching

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Redis
- Modern web browser
- Mobile device for testing

### Installation
1. Clone the repository
2. Install dependencies
3. Set up environment variables
4. Start the development server

## 📱 User Experience

### For Participants
1. Open the mobile controller URL
2. Select an emoji from the grid
3. Tap to send
4. Watch the emoji appear on the main screen with animation

### For Presenters
1. Set up the main display
2. Share the mobile controller URL with participants
3. Monitor the emoji wall
4. Adjust settings as needed

## 🔧 Configuration Options

- Emoji display duration
- Animation styles
- Screen layout
- Emoji selection
- Color schemes
- Background effects

## 🔒 Security Considerations

- Rate limiting for emoji sending
- Session management
- Input validation
- CORS configuration
- WebSocket authentication

## 📈 Future Enhancements

- Custom emoji uploads
- Multiple animation styles
- Sound effects
- Voting system
- Analytics dashboard
- Custom themes
- Integration with presentation software

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Emoji data from [Emoji One](https://emojione.com/)
- Animation inspiration from various open-source projects
- Community feedback and suggestions
