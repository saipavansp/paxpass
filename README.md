# PaxPass - Airport Luggage Assistance Service

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsaipavansp%2Fpaxpass)

PaxPass is a modern, responsive website for an airport luggage assistance service based in India. The service allows customers to schedule luggage pickup from their home to the airport and vice versa, making travel hassle-free.

## Features

- Responsive design with blue and white theme
- Multiple pages: Home, Booking, About Us, and Contact
- Interactive booking form with real-time price calculation
- Contact form for customer inquiries
- Mobile-friendly navigation
- Testimonials section
- Pricing information
- Team information

## Technologies Used

- React.js
- React Router
- Bootstrap 5
- Font Awesome
- Parcel bundler

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/paxpass.git
cd paxpass
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open your browser and navigate to:
```
http://localhost:1234
```

### Building for Production

To create a production build:

```
npm run build
```

The build files will be generated in the `dist` directory.

## Project Structure

```
paxpass/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   └── placeholder/
│   └── js/
│       └── main.js
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Booking.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── index.html
│   └── index.js
├── package.json
└── README.md
```

## Image Placeholders

The website uses placeholder images that should be replaced with actual high-quality images for production. See the `public/images/placeholder/README.md` file for more information.

## Service Details

- Base price: ₹999 for up to 2 bags
- Additional bags: ₹300 per bag (up to 10 bags total)
- Service areas: Major cities across India
- Contact: +91 8328367636, support@paxpass.in

## License

This project is licensed under the ISC License.

## Acknowledgments

- Font Awesome for icons
- Bootstrap for the responsive framework
- React for the UI library