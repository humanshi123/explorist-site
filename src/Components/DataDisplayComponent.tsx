type DataDisplayProps = {
  data: {
    id: number;
    title: string;
    description: string;
    price: string;
    duration: string;
  }[];
};

const DataDisplayComponent = ({ data }: DataDisplayProps) => {
  if (!data || data.length === 0) {
    return <div>No tours available</div>;
  }

  return (
    <div>
      <h2>Available Tours</h2>
      <div>
        {data.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <p>Duration: {item.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataDisplayComponent;
