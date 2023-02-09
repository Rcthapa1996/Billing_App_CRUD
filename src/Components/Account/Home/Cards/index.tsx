import Card from "./Card";

const Cards = ({ data: allData }) => {
  return (
    <>
      {allData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </>
  );
};
export default Cards;
