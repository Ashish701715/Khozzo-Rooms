const generateRandomProperties = (num: number) => {
  const properties = [];
  const titles = [
    "Beautiful Family Home",
    "Modern Apartment",
    "Cozy Cottage",
    "Luxurious Villa",
    "Charming Bungalow",
    "Spacious Townhouse",
    "Stylish Loft",
    "Contemporary Condo",
    "Rustic Cabin",
    "Elegant Mansion",
  ];

  const locations = [
    "123 Main St, City, Country",
    "456 Elm St, City, Country",
    "789 Oak St, City, Country",
    "101 Pine St, City, Country",
    "202 Maple St, City, Country",
    "303 Birch St, City, Country",
    "404 Cedar St, City, Country",
    "505 Walnut St, City, Country",
    "606 Spruce St, City, Country",
    "707 Ash St, City, Country",
  ];

  for (let i = 0; i < num; i++) {
    const title = titles[Math.floor(Math.random() * titles.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const price = `$${(Math.random() * (1000000 - 100000) + 100000).toFixed(2)}`;
    const size = `${Math.floor(Math.random() * (5000 - 800) + 800)} sqft`;
    const bedrooms = Math.floor(Math.random() * 5) + 1; 
    const bathrooms = Math.floor(Math.random() * 3) + 1; 

    properties.push({
      title,
      location,
      price,
      size,
      bedrooms,
      bathrooms,
    });
  }

  return properties;
};

const properties = generateRandomProperties(300);

export { properties };