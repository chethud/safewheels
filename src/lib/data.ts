export const siteConfig = {
  name: "Safe Wheels Tours & Travels",
  shortName: "Safe Wheels",
  established: 1999,
  years: 25,
  location: "Mysuru, Karnataka, India",
  phoneMain: "0821-4001100",
  phoneMainTel: "+918214001100",
  rentals: ["9945273815", "9945273814"],
  emails: {
    rentals: "carrentals@safewheelsindia.com",
    taxi: "taxi@safewheelsindia.com",
  },
  whatsapp: "919945273815",
  address: {
    title: "PRASHANTH PLAZA",
    lines: [
      "4th Main, 5th Cross, Saraswathipuram,",
      "Mysuru – 570009.",
    ],
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Prashanth+Plaza+Saraswathipuram+Mysuru",
  mapEmbed:
    "https://www.google.com/maps?q=Prashanth+Plaza,+4th+Main,+5th+Cross,+Saraswathipuram,+Mysuru+570009&output=embed",
  social: {
    facebook: "https://www.facebook.com/SafeWheelsIndia/",
  },
  siteUrl: "https://safewheelsindia.com",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/why-us", label: "Why Us" },
  { href: "/services", label: "Services" },
  { href: "/clientele", label: "Clientele" },
  { href: "/tourist-places", label: "Tourist Places" },
  { href: "/book", label: "Book Now" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "domestic",
    title: "Domestic Tours",
    description:
      "Curated journeys across India—hill stations, heritage cities and coastal escapes—planned with care.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: "international",
    title: "International Tours",
    description:
      "Thoughtfully arranged overseas travel with trusted partners and seamless ground support.",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "mysuru",
    title: "Mysuru Local Sightseeing",
    description:
      "Discover palaces, gardens and cultural landmarks with drivers who know the city intimately.",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "airport",
    title: "Airport Transfers",
    description:
      "Punctual pickups and drops to Bengaluru and Mysuru airports—day or night.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "corporate",
    title: "Corporate Transportation",
    description:
      "Reliable fleet support for executives, conferences, plant visits and employee travel.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "outstation",
    title: "Outstation Vehicle Rentals",
    description:
      "Comfortable long-distance travel to Coorg, Ooty, Wayanad, Bengaluru and beyond.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
  {
    id: "luxury",
    title: "Luxury Vehicle Rentals",
    description:
      "Premium cars for occasions that call for presence, comfort and refined presentation.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    id: "group",
    title: "Group Transportation",
    description:
      "Tempo travellers and larger vehicles for families, teams and tour groups.",
    image:
      "https://images.unsplash.com/photo-1544620341-1adc1baa4c76?auto=format&fit=crop&w=1200&q=80",
    featured: false,
  },
] as const;

export const fleet = [
  {
    id: "luxury",
    name: "Luxury Cars",
    description:
      "Premium chauffeured vehicles for weddings, VIP travel and occasions that demand distinction.",
    image: "https://safewheelsindia.com/wp-content/uploads/2024/07/byd.jpg",
  },
  {
    id: "innova",
    name: "Innova Crysta",
    description:
      "Spacious, comfortable and ideal for families and outstation journeys across Karnataka.",
    image:
      "https://safewheelsindia.com/wp-content/uploads/2024/07/innova-crysta.jpg",
  },
  {
    id: "tt",
    name: "Tempo Traveller",
    description:
      "Group-ready travel for tours, temple visits and corporate outings with room to spare.",
    image: "https://safewheelsindia.com/wp-content/uploads/2022/08/TT.jpg",
  },
  {
    id: "carens",
    name: "Kia Carens",
    description:
      "Modern MPV comfort for city runs and medium-distance travel with ease.",
    image:
      "https://safewheelsindia.com/wp-content/uploads/2024/07/Kia-Carens.jpg",
  },
  {
    id: "sedan",
    name: "Sedans & Hatchbacks",
    description:
      "Practical, well-maintained cars for airport transfers and everyday city travel.",
    image: "https://safewheelsindia.com/wp-content/uploads/2022/08/Etios.jpg",
  },
] as const;

export const whyUs = [
  {
    title: "Established in 1999",
    description: "Over twenty-five years of trusted travel experience in Mysuru.",
  },
  {
    title: "GPS-Tracked Vehicles",
    description: "Real-time tracking so every journey stays accountable and secure.",
  },
  {
    title: "Experienced Multilingual Drivers",
    description:
      "Drivers conversant in Kannada, English, Tamil, Telugu and other regional languages.",
  },
  {
    title: "Clean, Well-Maintained Fleet",
    description: "Vehicles kept in reliable condition for a truly safe drive.",
  },
  {
    title: "Punctual Pickup & Drop",
    description: "On-time service so you can plan your day with confidence.",
  },
  {
    title: "24/7 Cab Availability",
    description: "Early flights and late arrivals—we are ready around the clock.",
  },
  {
    title: "Breakdown Assistance",
    description: "Support when you need it, so you can travel with peace of mind.",
  },
  {
    title: "Infant Seats for Families",
    description: "High-quality infant seats to keep the youngest travellers secure.",
  },
  {
    title: "Complimentary Water & Newspaper",
    description: "Thoughtful in-cabin comforts on every trip.",
  },
] as const;

export const destinations = [
  {
    name: "Coorg",
    description: "Misty hills, coffee estates and quiet weekend escapes.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=80",
    tall: true,
  },
  {
    name: "Ooty",
    description: "Colonial charm, botanical gardens and cool Nilgiri air.",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    tall: false,
  },
  {
    name: "Wayanad",
    description: "Lush Kerala landscapes a few scenic hours from Mysuru.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    tall: false,
  },
  {
    name: "Bengaluru",
    description: "City transfers and airport runs planned around your schedule.",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1400&q=80",
    tall: true,
  },
  {
    name: "Mysuru Heritage",
    description: "Palaces, temples and local highlights with a private cab.",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    tall: false,
  },
  {
    name: "International Escapes",
    description: "Discover overseas tour ideas tailored with Safe Wheels support.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80",
    tall: false,
  },
] as const;

export const testimonials = [
  {
    name: "Shashi Campbell",
    quote:
      "This was my first ever visit to India. I am happy with the service and experience of this tour operator. Especially drivers are cooperative & polite. Mr. Sunil is one of them. Be on the same line.",
  },
  {
    name: "Sano Lekshman",
    quote:
      "Went to Madikeri from Mysore.. reasonable rates.. good professional driver. next time surely contact them.",
  },
  {
    name: "Shamseer V T",
    quote:
      "As the name it's always a Safe Wheel to me, my family and friends at Safe Wheels. We always choose Safe Wheels for the pick up and drop from Bangalore Airport to Wayanad. We travelled with Safe Wheels n number of times and we are not faced any bad experience with them. In my experience it's a safe journey with them for a kid alone.",
  },
] as const;

export const clients = [
  {
    name: "Asian Paints",
    src: "https://safewheelsindia.com/wp-content/uploads/2022/08/asian-paints.jpg",
  },
  {
    name: "SKF",
    src: "https://safewheelsindia.com/wp-content/uploads/2024/07/skf.jpg",
  },
  {
    name: "L&T",
    src: "https://safewheelsindia.com/wp-content/uploads/2022/08/lt.jpg",
  },
  {
    name: "LG",
    src: "https://safewheelsindia.com/wp-content/uploads/2022/08/lg.jpg",
  },
  {
    name: "JSS",
    src: "https://safewheelsindia.com/wp-content/uploads/2022/08/jss.jpg",
  },
  {
    name: "Client",
    src: "https://safewheelsindia.com/wp-content/uploads/2024/07/nhh.jpg",
  },
  {
    name: "Client",
    src: "https://safewheelsindia.com/wp-content/uploads/2024/07/03.jpg",
  },
  {
    name: "Viwah",
    src: "https://safewheelsindia.com/wp-content/uploads/2022/08/viwah-logonew.png",
  },
] as const;

export const blogs = [
  {
    title: "Airport Transfers Made Easy: Tips for Stress-Free Travel",
    date: "June 25, 2024",
    href: "https://safewheelsindia.com/blogs/airport-transfers-made-easy-tips-for-stress-free-travel/",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Exploring Mysuru Like a Local: Best Places to Visit with a Private Cab",
    date: "February 15, 2023",
    href: "https://safewheelsindia.com/blogs/exploring-mysuru-like-a-local-best-places-to-visit-with-a-private-cab/",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Best Taxi Services in Mysore for Airport, Coorg & Ooty Trips",
    date: "August 5, 2025",
    href: "https://safewheelsindia.com/blogs/best-taxi-services-in-mysore-for-airport-coorg-ooty-trips/",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const vehiclePreferences = [
  "Any / Advise me",
  "Sedan",
  "Innova Crysta",
  "Luxury Car",
  "Tempo Traveller",
  "Kia Carens",
  "Other",
] as const;
