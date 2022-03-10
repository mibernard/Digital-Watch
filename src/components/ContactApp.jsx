import React, { useState } from "react";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

let ContactApp = () => {
  let [state, setState] = useState({
    selectedContact: {},
  });
  let { selectedContact } = state;

  let receiveContact = (contact) => {
    setState((state) => ({
      selectedContact: contact,
    }));
  };
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(selectedContact)}</pre> */}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-success">Contact App</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              tempore maiores omnis totam, cumque aliquid vel illum nihil ea.
              Quis ut labore culpa veniam ex alias sunt quia. Maxime,
              perspiciatis.
            </p>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-9">
              <ContactList sendContact={receiveContact} />
            </div>
            <div className="col-md-3">
              <ContactCard selectedContact={selectedContact} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactApp;
