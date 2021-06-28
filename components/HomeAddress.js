export default function HomeAddress({ address, city, state, zipcode }) {
  return (
    <div className="tracking-wide">
      <p className="font-semibold text-xl">{address}</p>
      <p>
        {city} {state} {zipcode}
      </p>
    </div>
  );
}
