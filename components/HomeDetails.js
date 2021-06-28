export default function HomeDetails({ beds, baths, sqft, lot_sqft }) {
  return (
    <div className="flex flex-row space-x-6 tracking-wide">
      <p className="font-semibold">
        {beds}
        <span className="font-normal"> bed</span>
      </p>
      <p className="font-semibold">
        {baths}
        <span className="font-normal"> bath</span>
      </p>
      <p className="font-semibold">
        {sqft}
        <span className="font-normal"> sqft</span>
      </p>
      <p className="font-semibold">
        {lot_sqft}
        <span className="font-normal"> sqft lot</span>
      </p>
    </div>
  );
}
