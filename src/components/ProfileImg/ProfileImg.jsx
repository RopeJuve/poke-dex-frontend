export default function ProfileImg({ src, alt }) {
  return (
    <div className="rounded-full w-[4.5rem] h-[4.5rem] overflow-hidden bg-muted">
      <img
        src="https://woodfibreinsulation.co.uk/wp-content/uploads/2017/04/blank-profile-picture-973460-1-1-1024x1024.png"
        alt="profile"
        className=" w-full h-full object-cover"
      />
    </div>
  );
}
