# Hotel Booking Web Application

This is a simple web application for hotel booking, built using Express.js for the backend API and React.js for the frontend.

## Features

- List available hotels
- Book a hotel on a specific date
- View booking history for logged-in users

## Technologies Used

- Express.js
- React.js
- Node.js

## Installation

### Prerequisites

- Node.js installed on your local machine

### Setup

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/hotel-booking-app.git
   ```

### Backend Setup

1. Navigate to the backend directory:

```bash
cd hotel-booking-app/server
```

2. Install dependencies:

```bash
npm install
```

3. Run the backend server:

```bash
npm start
```

The backend server will start running at http://localhost:5000.

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd hotel-booking-app/hotel-booking
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will be available at http://localhost:3000.

## Usage

### Viewing Available Hotels

* Visit http://localhost:3000/ to view available hotels.
* Login with one of the following user credentials:

Username: user1, Password: password1
Username: user2, Password: password2

### Booking a Hotel
* After logging in, click on the "Book now" button next to the desired hotel.
* Select a date from the date picker in the modal and click "Book Now".

### Viewing Booking History
* After logging in, click on the "Booking History" link in the navigation bar.
* You will see a list of hotels you have booked.


