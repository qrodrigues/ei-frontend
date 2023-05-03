import { getTickets, deleteTicket } from "../repository/api"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets().then(tickets => {
      setTickets(tickets);
    });
  }, []);

 async function handleDelete(event) {
    const id = Number(event.currentTarget.getAttribute('data-id'));
    try {
      await deleteTicket(id)
      const filteredTickets = tickets.filter (ticket => ticket.id !== id);
      setTickets(filteredTickets);
    } catch (error) {
      console.error(error);
    }
  }

    return (
      <>
        <div>
        <div className="sectiontitle">
          <h1 className='page-title'>Liste des tickets</h1>
        </div>
        <table className="rwd-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Titre</th>
                <th>Description</th>
                <th>Statut</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map(item =>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  {item.description ? (<td>{item.description}</td>) : <td><span className="no-desc">Pas de description</span></td>}
                  <td>{item.statut}</td>
                  <td className="actions-icons">
                    <Link to={`/tickets/${item.id}`}>
                      <FontAwesomeIcon 
                        icon={faPencil}
                      />
                    </Link>
                    {item.statut !== 'TERMINE' ? (
                      <a>
                        <FontAwesomeIcon 
                          icon={faTrash}
                          data-id={item.id}
                          onClick={handleDelete}
                        />
                      </a>
                    ) : null}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </>
    )
  }
  
  export default Tickets