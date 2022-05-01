
import emailjs from "emailjs-com";
import React, { useState } from "react";
import "./BookAppointment.css";
import { db } from "./firebase";
import firebase from "firebase";
import Header from "./Component/Header";

function BookAppointment() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState()



  const sendAppointment = (e) => {
    e.preventDefault();
    console.log('yes');
    emailjs.sendForm(
      "service_okg8x5m",
      "template_kqdssep",
      e.target,
      "user_J6W3juMedwSXA7gsHUcA9"
    ).then((res)=>{
      db.collection('Bookings').add({
        name:name,
        email:email,
        address:address,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        phone:phone
      })
    }).catch((e)=>{
      console.log(e);
    })
  };

  return (
    <div>
    <Header/>
      <div className="bookAppointment">

        <div className="bookLeft">
          <h1>Book You New Slot and Save Your Time</h1>
          <p>
            Here we'll show welcome message and assurance of treatment of some
            positive words
          </p>
          <h2>For Help Call: +91 their Number</h2>
        </div>
        <form className="bookRight" onSubmit={sendAppointment}>
          <h1>Book Appointment</h1>
          <div className="rightContent">
            <div>
              <input type="text" name="name" placeholder="Enter Full Name" onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div>
              <input
                onChange={(e) => { setPhone(e.target.value) }}
                type="number"
                name="phone"
                placeholder="Entter Mobile Number"
              />
            </div>
            <div>
              <input onChange={(e) => { setEmail(e.target.value) }} type="email" name="user_email" placeholder="Entter Your Email " />
            </div>
            <div>
              <input type="datetime-local" placeholder="Entter Full Name" />
            </div>

            <div className="address">
              <p>Address Detail</p>
              <div style={{ display: "flex" }}>
                <input onChange={(e) => { setAddress(e.target.value) }} type="text" placeholder="Entter Address" />
                <input
                  style={{ marginLeft: "10px" }}
                  type="text"
                  placeholder="Entter City"
                />
              </div>
              <div style={{ display: "flex" }}>
                <input type="text" placeholder="Entter Area" />
                <input
                  style={{ marginLeft: "10px" }}
                  type="text"
                  placeholder="Enter Postal code"
                />
              </div>
            </div>
            <button >book appointmnet</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
