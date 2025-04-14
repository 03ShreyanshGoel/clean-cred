# 🌐 CleanCred Web – Smart Waste Management & Cleanliness Tracker

**CleanCred Web** is a full-stack, responsive web application designed to promote hygiene and waste segregation in shared living spaces like college hostels. It encourages accountability and cleanliness through gamification, real-time tracking, and smart notification systems for janitors, students, and administrators.

---

## 🚀 Live Demo

🔗 [Visit CleanCred Web](https://clean-cred-web-mvp.vercel.app/)

---

## 📌 Features

### 🧑‍🎓 User Dashboard (Students)
- View personal & flat cleanliness score
- Track bin submissions and waste segregation stats
- Earn digital badges (e.g., **Segregation Star**, **Clean Champion**)
- Get notified for pending actions, warnings, and rewards

### 🏆 Leaderboard
- Flat-wise and floor-wise rankings
- Weekly/monthly highlights
- Publicly visible to encourage healthy competition

### 🗑️ Smart Dustbin Tracker
- Each dustbin has a unique **QR code**
- Students scan to report "Bin Full" status
- Option to upload bin image
- Future-ready for sensor integration

### 🧹 Janitor Portal
- See real-time full-bin alerts
- Mark cleaning as complete
- Provide feedback on repeated cleanliness violations

### 🧼 Clean Drive Events
- Organize and track monthly hostel clean-up drives
- Registration portal for volunteers
- Display gallery and recognize winners

### 📚 Awareness & Learning Hub
- Interactive segregation and hygiene tutorials
- Monthly quizzes per flat
- Room/kitchen hygiene best practices

---

## 🛠️ Tech Stack

- **Frontend + Backend:** Next.js + TypeScript
- **QR Code Generation:** `qrcode` npm package  
- **Image Upload:** Cloudinary API  
- **Deployment:** Vercel (Frontend)

---

## 📲 Responsive Design

Built to work flawlessly on:
- 📱 Mobile devices
- 💻 Laptops and desktops
- 📟 Tablets

Tested with responsive design tools and real devices for optimal user experience.

---

## 💡 Future Enhancements

- Sensor-based bin fill detection (IoT integration)
- Push notifications (Web + App PWA support)
- Dark mode UI
- Advanced admin analytics dashboard
- Multi-language & accessibility support

#### 🛡️ Admin Panel (Warden/Mess Committee)
- Monitor reports, activity, and trends
- Schedule penalty tasks or reward sessions
- Push announcements, appreciation, or warnings
- Create reward schemes like **canteen coupons**

#### 🎯 Nudging & Motivation
- Pop-up reminders for inaction
- Inspirational or guilt-inducing quotes (e.g., _"Would you live in your trash?"_)
- Notifications when your neighboring flat performs better

---

## 📦 Setup Instructions

### 🧭 Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/cleancred-web.git
cd cleancred-web
```

### 📥 Step 2: Install Dependencies
```bash
npm install
```

### 🔐 Step 3: Set Up Environment Variables
Create a `.env.local` file in the root directory.

Add the required environment variables using the `.env.example` file as reference. Example:

```ini
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
```

### 🚀 Step 4: Run the Development Server
```bash
npm run dev
```

### 🌐 Step 5: Open the App in Your Browser
Visit:

```
http://localhost:3000
```

---

## 🙌 Contribution Guidelines
We welcome contributions to improve functionality, design, and usability.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Create a Pull Request

---

## 📄 License
This project is licensed under the MIT License.

---

## 👨‍💻 Made with ❤️ by CredClean
Cleanliness begins with accountability. Let's gamify it!
