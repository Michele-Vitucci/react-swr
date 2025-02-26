export const colorData = [
    { id: 1, name: "Bianco" },
    { id: 2, name: "Nero" },
    { id: 3, name: "Giallo" }
  ];

const Color = ({ color }) => {
    return <li>{color.name}</li>;
  };
  
  const Colors = ({ colors }) => {
    return (
      <ul>
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    );
  };

export default Colors

