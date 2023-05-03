import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTicket } from "../repository/api";
import { createTicket, updateTicket } from "../repository/api";

function Create() {
  const params = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState();

  useEffect(() => {
    async function GetTicketFetch() {
      if (params.id) {
        const ticket = await getTicket(Number(params.id));
        setTicket(ticket);
      }
    }
    GetTicketFetch();
  }, [params.id]);

  function handleSubmit(event) {
    event.preventDefault();
    const title = (event.currentTarget.elements[0]).value;
    const description = (event.currentTarget.elements[1]).value;
    createTicket(title, description)
    navigate('/tickets')
  }

  function handleUpdate(event) {
    event.preventDefault();
    const title = (event.currentTarget.elements[0]).value;
    const description = (event.currentTarget.elements[1]).value;
    const statut = (event.currentTarget.elements[2]).value;
    updateTicket(title, description, statut, Number(params.id))
    navigate('/tickets')
  }

  return (
    <>
      <div>
        <div className="sectiontitle">
          <h1 className='page-title'>{params.id ? `Modifier le ticket ${params.id}` : 'Créer un ticket'}</h1>
        </div>
        <div className="ticket-form-container">
          <form className="ticketForm" onSubmit={ticket ? handleUpdate : handleSubmit}>
            <input type="text" maxLength={100} placeholder="Titre" defaultValue={ticket?.title || ''} />
            <input type="text" placeholder="Description" defaultValue={ticket?.description || ''} />
            {ticket ? (
              <select name="statut" defaultValue={ticket?.statut}>
                <option disabled>Statut...</option>
                <option value="AFAIRE">À faire</option>
                <option value="ENCOURS">En cours</option>
                <option value="TERMINE">Terminé</option>
              </select>
            ) : null}
            <input type="submit" value={ticket ? 'Modifier le ticket' : 'Créer le ticket'} />
          </form>
        </div>
      </div>
    </>
  )
}

export default Create