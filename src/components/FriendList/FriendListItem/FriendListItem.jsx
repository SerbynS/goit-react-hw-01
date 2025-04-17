import css from "./FriendListItem.module.css";

export default function FriendListItem({ info: { avatar, name, isOnline } }) {
  return (
    <div className={css.content}>
      <img src={avatar} alt={name} width={120} />
      <p>{name}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
