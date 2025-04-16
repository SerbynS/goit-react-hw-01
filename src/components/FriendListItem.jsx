export default function FriendListItem({ info: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
