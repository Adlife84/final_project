import React from 'react';
import ClientContainer from './clients/ClientContainer'
import { ClientsListJSON } from '../data/clients';

const Clients = () => (
  <div className="main-content">
    <h2>Clients page</h2>
    <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
    <ClientContainer data={ClientsListJSON}/>
  </div>
);

export default Clients;