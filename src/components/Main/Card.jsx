const Card = (data) => {
  console.log(data);
  const { title, image, desc } = data;
  return (
    <div className="cards">
      <h1 className="title">{title}</h1>
      <img src={image} alt={title} />
      <p className="card-over">{desc}</p>
    </div>
  );
};

export default Card;
