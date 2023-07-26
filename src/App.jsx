import React, { useState } from "react";
import "./App.css";
//import contacts from "./contacts.json";
import jsonData from "./contacts.json";

function App() {
    const [contactState, setContactState] = useState(jsonData.slice(0, 5));
    console.log(contactState);

    function handleDeletePerson(id) {
        const updatedContacts = contactState.filter((contact) => contact.id !== id);
        setContactState(updatedContacts);
    }

    // const handleAward = () => {
    //     const updatedContacts = contactState.contacts.filter((contact) => contact.wonOscar === true);
    //     setContactState({ contacts: updatedContacts });
    // };

    function handleRandomContact() {
        const randomPerson = jsonData[Math.floor(Math.random() * jsonData.length)];
        const copyContacts = [...contactState];
        copyContacts.push(randomPerson);
        setContactState(copyContacts);
    }

    // function handleSortByname() {
    //     const sortByName = [...contactState];
    //     sortByName.sort((a, b) => a.name.localeCompare(b.name));
    //     setContactState({ contacts: sortByName });
    // }

    //   function handleSortByname() {
    //       const sortByName = [...contactState.contacts];
    //       sortByName.sort((a, b) => a.name.localeCompare(b.name));
    //       setContactState({ contacts: sortByName });
    // }

    function handleSortByname() {
        const sortByName = [...contactState];
        sortByName.sort((a, b) => a.name.localeCompare(b.name));
        setContactState(sortByName);
    }

    function handleSortByPopularity() {
        const sortByPopularity = [...contactState];
        sortByPopularity.sort((a, b) => b.popularity - a.popularity);
        // setContactState(sortByPopularity);
        setContactState(sortByPopularity);
    }

    return (
        <div>
            <h1 className="title">IronContacts</h1>
            <div className="Actions">
                <button onClick={handleRandomContact}>Add a random Offer</button>
                <button onClick={handleSortByname}>Sort by Name</button>
                <button onClick={handleSortByPopularity}>Sort by Popularity</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won Oscar</th>
                        <th>Won Emmy</th>
                    </tr>
                </thead>
                <tbody>
                    {contactState.map((contact) => (
                        <tr key={contact.id}>
                            <td>
                                <img src={contact.pictureUrl} alt={contact.name} style={{ width: "50px" }} />
                            </td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity}</td>
                            <td>{contact.wonOscar ? "🏆" : ""}</td>
                            <td>{contact.wonEmmy ? "🏆" : ""}</td>
                            <td>
                                <button onClick={() => handleDeletePerson(contact.id)}>Delete</button>
                            </td>

                            {/* <td>{contact.wonOscar}</td> */}
                            {/* <button onClick={() => handleDeletePerson(contact)}>Delete</button> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
