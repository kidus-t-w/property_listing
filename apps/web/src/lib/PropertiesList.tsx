import { useEffect, useState } from 'react';
import { fetchProperties } from './api'; // Adjust the import path to match your project structure

const PropertiesList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const propertiesData = await fetchProperties();
        // Convert Decimal128 to string
        const convertedProperties = propertiesData.map((property: any) => ({
          ...property,
          price: property.price.$numberDecimal,
        }));
        setProperties(convertedProperties);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProperties();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Properties List</h1>
      <ul>
        {properties.map((property: any) => (
          <li key={property._id}>
            <h2>{property.description.title}</h2>
            <p>{property.description.description}</p>
            <p>Price: {property.price}</p>
            <p>Location: {property.location.address}, {property.location.city}</p>
            <img src={property.images[0]} alt={property.description.title} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertiesList;
