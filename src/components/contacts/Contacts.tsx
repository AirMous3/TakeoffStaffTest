import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../redux/store/store";
import DataGrid from "./DataGrid";
import { getContacts } from "../../redux/reducers/contactsReducer/middleware/contactsMiddleware";

interface ContactsProps {
  userId: number;
}

export const Contacts = ({ userId }: ContactsProps) => {
  const dispatch = useDispatch();

  const userContacts = useSelector(
    (state: RootStateType) => state.contacts.items
  );

  useEffect(() => {
    dispatch(getContacts(userId));
  }, [userId]);

  return (
    <div>
      <DataGrid rows={userContacts} userId={userId} />
    </div>
  );
};
