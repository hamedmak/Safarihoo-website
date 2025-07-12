# Development Guide - Safarihoo Website

## Overview

This is a static website for Safarihoo, a travel booking platform. The website is built using HTML5, CSS3 (with Tailwind CSS), and JavaScript.

## Project Structure

```
safarihoo-website/
├── index.html              # Main HTML file
├── package.json            # Project configuration
├── README.md              # Project documentation
├── DEVELOPMENT.md         # This file
├── .gitignore            # Git ignore rules
└── assets/               # Static assets (if any)
    ├── css/
    ├── js/
    └── images/
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Styling with Tailwind CSS
- **JavaScript**: Interactive functionality
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **Remix Icons**: Icon library (CDN)
- **Google Fonts**: Typography (Pacifico, Poppins)

## External Integrations

### Booking Services
- **Flights**: Aviasales integration via TPMD scripts
- **Hotels**: Hotellook integration via TPMD scripts
- **Activities**: WeGoTrip integration
- **Car Rentals**: GetRentACar integration

### Search Widget
The main search functionality is powered by TPMD scripts that provide:
- Flight search with real-time pricing
- Hotel search with interactive maps
- Combined search capabilities

## Development Setup

### Prerequisites
- Python 3.7+ (for local development server)
- Modern web browser
- Text editor (VS Code, Sublime Text, etc.)

### Quick Start
1. Clone or download the project
2. Navigate to the project directory
3. Start the development server:
   ```bash
   python -m http.server 8000
   ```
4. Open your browser and go to `http://localhost:8000`

## Customization

### Colors
The website uses a custom color scheme defined in Tailwind config:
- Primary: `#3A6B35` (Jungle Green)
- Secondary: `#FFA62B` (Saffron Orange)
- Background: `#F8F5F0` (Safari White)

### Fonts
- **Pacifico**: Used for the logo
- **Poppins**: Used for body text and headings

### Adding New Destinations
To add new destinations to the "Popular Destinations" section:

1. Find the destinations grid in `index.html`
2. Copy an existing destination card
3. Update the following:
   - Image URL (using Readdy AI API)
   - Destination name
   - Price
   - Booking link
   - View count

### Adding New Special Offers
To add new special offers:

1. Find the offers carousel in `index.html`
2. Copy an existing offer card
3. Update the following:
   - Image URL
   - Offer title and description
   - Original and discounted prices
   - Booking link

## External Scripts

The website uses several external scripts for functionality:

### Search Widget
```html
<script async src="https://tpemd.com/content?currency=usd&trs=429016&shmarker=569298&combine_promos=101_7873&show_hotels=true&powered_by=true&locale=en&searchUrl=www.aviasales.com%2Fsearch&primary_override=%23FFA62B&color_button=%23FFA62B&color_icons=%23FFA62B&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%23FFA62B&border_radius=0&no_labels=&plain=true&promo_id=7879&campaign_id=100" charset="utf-8"></script>
```

### Flight Deals Widget
```html
<script async src="https://tpemd.com/content?currency=usd&trs=429016&shmarker=569298&target_host=www.aviasales.com%2Fsearch&locale=en&limit=6&powered_by=true&primary=%23FFA62B&promo_id=4044&campaign_id=100" charset="utf-8"></script>
```

### Hotel Map Widget
```html
<script async src="https://tpemd.com/content?currency=usd&trs=429016&shmarker=569298&lat=51.51&lng=0.06&powered_by=true&search_host=www.aviasales.com%2Fsearch&locale=en&origin=LON&value_min=0&value_max=1000000&round_trip=true&only_direct=false&radius=1&draggable=true&disable_zoom=false&show_logo=false&scrollwheel=false&primary=%23FFA62B&secondary=%23FFA62B&light=%23ffffff&width=1500&height=500&zoom=2&promo_id=4054&campaign_id=100" charset="utf-8"></script>
```

## Contact Form

The contact form is configured to send emails to `support@safarihoo.com`. The form uses the `mailto:` protocol which opens the user's default email client.

## Deployment

This is a static website that can be deployed to any web hosting service:

### Netlify
1. Drag and drop the project folder to Netlify
2. The site will be automatically deployed

### Vercel
1. Connect your repository to Vercel
2. Deploy automatically on push

### Traditional Hosting
1. Upload all files via FTP
2. Ensure `index.html` is in the root directory

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Optimization

- Images are loaded from Readdy AI API with optimized queries
- CSS and JavaScript are loaded from CDNs
- Fonts are loaded from Google Fonts with preconnect
- Icons are loaded from Remix Icons CDN

## Troubleshooting

### Search Widget Not Loading
- Check if the TPMD scripts are loading correctly
- Verify internet connection
- Check browser console for errors

### Images Not Displaying
- Verify the Readdy AI API queries
- Check if the image URLs are accessible
- Ensure proper image dimensions

### Contact Form Issues
- Verify the email client is configured
- Check if the form fields are properly named
- Test the form submission

## Contributing

1. Make changes to the HTML file
2. Test locally using the development server
3. Ensure all links are working correctly
4. Test on different browsers and devices
5. Deploy to staging environment if available

## Support

For technical support or questions, contact the development team or refer to the main README.md file. 