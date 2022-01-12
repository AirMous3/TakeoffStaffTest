import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../redux/store/store";
import { logout } from "../../redux/reducers/appReducer/actions/appActions";
import ContactsMui from "./ContactsMui";
import { getContacts } from "../../redux/reducers/contactsReducer/middleware/contactsMiddleware";

interface ContactsProps {
  userId: number;
}

export const Contacts = ({ userId }: ContactsProps) => {
  const dispatch = useDispatch();

  const userContacts = useSelector(
    (state: RootStateType) => state.contacts.items
  );
  const onLogoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getContacts(userId));
  }, [userId]);

  return (
    <div>
      <h1>contacts</h1>
      <button onClick={onLogoutHandler}>logout</button>
      <ContactsMui rows={userContacts} />
    </div>
  );
};
