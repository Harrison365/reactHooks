export default function BookCard({
  details,
  title,
  imgUrl,
  setIsOpen,
  setSelectedPublisher,
}) {
  const handleModal = () => {
    setIsOpen(true);
  };
  return (
    <div
      onClick={() => {
        setSelectedPublisher(details.volumeInfo.publisher);
        handleModal();
      }}
    >
      <p> {title}</p>
      <img src={imgUrl.imageLinks.thumbnail} alt="book thumbnail" />
    </div>
  );
}
