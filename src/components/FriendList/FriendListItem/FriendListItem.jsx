import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ info: { avatar, name, isOnline } }) {
  return (
    <div className={css.content}>
      <img src={avatar} alt={name} width={120} />
      <p>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
