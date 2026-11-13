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
  { href: "/services", label: "Services" },
  { href: "/tourist-places", label: "Tourist Places" },
  { href: "/clientele", label: "Clientele" },
  { href: "/why-us", label: "Why Us" },
  { href: "/about", label: "About" },
] as const;

export const homeServices = [
  {
    id: "local",
    title: "Local / City Cabs",
    description:
      "Point-to-point rides across Mysuru — shopping, meetings, sightseeing and same-day drops.",
    href: "/book",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "airport",
    title: "Airport Transfers",
    description:
      "Punctual pickups and drops to Bengaluru and Mysuru airports — day or night.",
    href: "/book",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "outstation",
    title: "Outstation Cabs",
    description:
      "Comfortable highway runs to Coorg, Ooty, Wayanad, Bengaluru and beyond.",
    href: "/book",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "rentals",
    title: "Vehicle Rentals",
    description:
      "Innova, Tempo Traveller, sedans and luxury cars — chauffeured for the trip you need.",
    href: "/#fleet",
    image: "/images/fleet/innova.jpg",
  },
] as const;

/** Primary services shown on /services (4-card grid). */
export const pageServices = [
  {
    id: "domestic",
    title: "Domestic Tours",
    description:
      "Curated journeys across India — hill stations, heritage cities and coastal escapes.",
    href: "/book",
    cta: "Explore Tours",
    icon: "car",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "airport",
    title: "Airport Transfers",
    description:
      "Punctual pickups and drops to Bengaluru and Mysuru airports — day or night.",
    href: "/book",
    cta: "Learn More",
    icon: "plane",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "luxury",
    title: "Luxury Vehicle Rentals",
    description:
      "Premium cars for occasions that call for presence, comfort and refined presentation.",
    href: "/book",
    cta: "View Fleet",
    icon: "gem",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "places",
    title: "Tourist Places",
    description:
      "Discover remarkable destinations and memorable experiences across India.",
    href: "/tourist-places",
    cta: "Explore Places",
    icon: "pin",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const serviceProcess = [
  {
    step: "01",
    title: "Choose a Service",
    description: "Select from our range of travel solutions.",
    icon: "calendar",
  },
  {
    step: "02",
    title: "Share Your Details",
    description: "Tell us your travel requirements.",
    icon: "clipboard",
  },
  {
    step: "03",
    title: "Get Confirmation",
    description: "Receive a quick booking confirmation.",
    icon: "check",
  },
  {
    step: "04",
    title: "Travel Hassle-Free",
    description: "Enjoy a comfortable and safe journey.",
    icon: "car",
  },
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
      "Chauffeured luxury cabs for weddings, VIP guests and occasions that need a polished presence.",
    image: "/images/fleet/luxury.jpg",
  },
  {
    id: "innova",
    name: "Innova Crysta",
    description:
      "Our most booked family cab — spacious, AC comfort for outstation and airport runs.",
    image: "/images/fleet/innova.jpg",
  },
  {
    id: "tt",
    name: "Tempo Traveller",
    description:
      "Group cab hire for tours, temple visits and corporate outings with room for everyone.",
    image: "/images/fleet/tempo.jpg",
  },
  {
    id: "carens",
    name: "Kia Carens",
    description:
      "Modern MPV rental for city trips and medium-distance travel with easy luggage space.",
    image: "/images/fleet/carens.jpg",
  },
  {
    id: "sedan",
    name: "Sedans & Hatchbacks",
    description:
      "Everyday city cabs and airport transfers — clean, reliable and budget-friendly.",
    image: "/images/fleet/sedan.jpg",
  },
] as const;

export const aboutPillars = [
  {
    title: "Our Vision",
    description:
      "To mount a progressing structure in the years ahead — becoming Mysuru’s most trusted name for safe, seamless travel across India and beyond.",
  },
  {
    title: "Our Mission",
    description:
      "Deliver safe, reliable and hassle-free travel with experienced drivers, a well-maintained fleet and genuine hospitality on every trip.",
  },
  {
    title: "Our Promise",
    description:
      "Punctual pickups, transparent communication and journeys planned around your comfort — whether it is a city transfer or a long outstation tour.",
  },
] as const;

export const aboutMilestones = [
  {
    year: "1999",
    title: "Founded in Mysuru",
    description:
      "Safe Wheels began with a simple idea — travel that lives up to its name.",
  },
  {
    year: "2000s",
    title: "Fleet & reach grow",
    description:
      "Expanded rentals, airport transfers and domestic tour packages across Karnataka.",
  },
  {
    year: "2010s",
    title: "Trusted by institutions",
    description:
      "Became a preferred partner for hospitals, campuses and corporate travellers.",
  },
  {
    year: "Today",
    title: "25+ years of journeys",
    description:
      "Still family-rooted in Saraswathipuram — still focused on safety and care.",
  },
] as const;

export const aboutOffers = [
  {
    title: "Domestic & International Tours",
    description:
      "Curated itineraries with dependable ground support from Mysuru outwards.",
  },
  {
    title: "Airport Transfers",
    description:
      "Punctual Bengaluru and Mysuru airport pickups — day or night.",
  },
  {
    title: "Corporate Travel",
    description:
      "Executive transfers, plant visits and employee travel with account-friendly service.",
  },
  {
    title: "Luxury & Group Rentals",
    description:
      "From premium cars to tempo travellers — vehicles matched to the occasion.",
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
    name: "Narayana Health",
    src: "https://safewheelsindia.com/wp-content/uploads/2024/07/nhh.jpg",
  },
  {
    name: "BEML",
    src: "/images/clientele/beml-v2.png",
  },
  {
    name: "Vivah",
    src: "/images/clientele/vivah-v2.png",
  },
  {
    name: "Manipal Hospitals",
    src: "/images/clientele/manipal-hospitals.png",
  },
  {
    name: "Forward",
    src: "/images/clientele/forward-logo.png",
  },
  {
    name: "BEL",
    src: "/images/clientele/bel-v2.png",
  },
] as const;

/** Featured clientele logos on /clientele (brochure + site assets). */
export const clienteleLogos = [
  { name: "BEML", src: "/images/clientele/beml-v2.png" },
  {
    name: "L&T",
    src: "https://safewheelsindia.com/wp-content/uploads/2022/08/lt.jpg",
  },
  {
    name: "LG",
    src: "https://safewheelsindia.com/wp-content/uploads/2022/08/lg.jpg",
  },
  { name: "Manipal Hospitals", src: "/images/clientele/manipal-hospitals.png" },
  {
    name: "Narayana Health",
    src: "https://safewheelsindia.com/wp-content/uploads/2024/07/nhh.jpg",
  },
  { name: "Forward", src: "/images/clientele/forward-logo.png" },
  { name: "BEL", src: "/images/clientele/bel-v2.png" },
  {
    name: "JSS Mahavidyapeetha",
    src: "https://safewheelsindia.com/wp-content/uploads/2022/08/jss.jpg",
  },
  {
    name: "Asian Paints",
    src: "https://safewheelsindia.com/wp-content/uploads/2022/08/asian-paints.jpg",
  },
  {
    name: "SKF",
    src: "https://safewheelsindia.com/wp-content/uploads/2024/07/skf.jpg",
  },
  {
    name: "Vivah",
    src: "/images/clientele/vivah-v2.png",
  },
] as const;

/** Partners & associations logos on /clientele. */
export const partnerLogos = [
  {
    name: "Government of Karnataka",
    src: "/images/clientele/govt-karnataka.png",
  },
  {
    name: "Incredible India",
    src: "/images/clientele/incredible-india-v2.png",
    dark: true,
  },
  { name: "All India Car Rentals (AICR)", src: "/images/clientele/aicr-v2.png" },
  { name: "IATO", src: "/images/clientele/iato-v2.png" },
  { name: "TAAI", src: "/images/clientele/taai-v3.png" },
  { name: "SKÅL International", src: "/images/clientele/skal-v2.png" },
  { name: "Karnataka Tourism Society", src: "/images/clientele/kts-v2.png" },
  { name: "TAFI", src: "/images/clientele/tafi-v2.png" },
] as const;

/** Full esteemed clientele list (names without logo tiles). */
export const clienteleNames = [
  "Asian Paints Ltd",
  "BEML",
  "Deputy Director Information",
  "DC Office",
  "Forward",
  "GSSS Institute of Engineering",
  "Ifimed Pharmaceuticals Pvt Ltd",
  "J.S.S Ayurveda Hospital",
  "J.S.S College of Nanjangud",
  "J.S.S Hospital",
  "J.S.S Medical College",
  "J.S.S Travel Desk SJCE Campus",
  "J.S.S.Ayurveda Medical College",
  "J.S.S.University",
  "L & T Electrical & Automation",
  "L & T Technology Services",
  "Narayana Hrudayalaya",
  "Properties in Mysore",
  "Religare Health Insurance",
  "RIIIT",
  "S.J.C.E",
  "Zoo",
] as const;

export const blogs = [
  {
    title: "Why Choosing a Taxi in Mysore is Best for Tourists and Families",
    date: "August 5, 2025",
    href: "/blogs/why-choosing-a-taxi-in-mysore-is-best-for-tourists-and-families",
    image: "/images/blogs/blog-taxi-families.jpg",
  },
  {
    title: "Best Taxi Services in Mysore for Airport, Coorg & Ooty Trips",
    date: "August 5, 2025",
    href: "/blogs/best-taxi-services-in-mysore-for-airport-coorg-ooty-trips",
    image: "/images/blogs/blog-airport-coorg.jpg",
  },
  {
    title: "How to Choose the Right Taxi Services in Mysore for Your Travel",
    date: "August 5, 2025",
    href: "/blogs/how-to-choose-the-right-taxi-services-in-mysore-for-your-travel",
    image: "/images/blogs/blog-choose-taxi.jpg",
  },
  {
    title: "Airport Transfers Made Easy: Tips for Stress-Free Travel",
    date: "June 25, 2024",
    href: "/blogs/airport-transfers-made-easy-tips-for-stress-free-travel",
    image: "/images/blogs/safewheelblog2.jpg",
  },
  {
    title: "Exploring Mysuru Like a Local: Best Places to Visit with a Private Cab",
    date: "February 15, 2023",
    href: "/blogs/exploring-mysuru-like-a-local-best-places-to-visit-with-a-private-cab",
    image: "/images/blogs/safewheelblog3.jpg",
  },
  {
    title:
      "Top 5 Reasons to Choose Safe Wheels India for Your Mysuru to Bengaluru Airport Transfers",
    date: "August 3, 2022",
    href: "/blogs/top-5-reasons-to-choose-safe-wheels-india-for-your-mysuru-to-bengaluru-airport-transfers",
    image: "/images/blogs/safewheelblog1.jpg",
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
