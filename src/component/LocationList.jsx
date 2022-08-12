function LocationList({ imgNo, name: listName, cost: listCost }) {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: "5px",
        padding: "5px",
      }}
    >
      <img src={`https://picsum.photos/id/${imgNo}/200/200`} />
      <div style={{ textAlign: `center`, color: `gray` }}>{listName}</div>
      <div style={{ textAlign: `center` }}>{listCost}원</div>
    </div>
  );
}

export default LocationList;