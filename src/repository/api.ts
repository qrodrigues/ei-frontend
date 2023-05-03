import axios from 'axios';

interface Ticket {
  id: number,
  title: string,
  description: string,
  statut: string
}

const url = 'http://localhost:8000/'

export async function getTickets(): Promise<Ticket[]> {
  try {
    const response = await axios.get<Ticket[]>(url + "tickets");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getTicket(id : number): Promise<Ticket> {
  try {
    const response = await axios.get<Ticket>(url + "tickets/" + id);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("erreur getting ticket");
    
  }
}

export async function deleteTicket(id: number): Promise<boolean> {
  try {
    const response = await axios.delete<Ticket[]>(url + `tickets/${id}`);
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Error deleting ticket");
  }
}

export async function createTicket(title : string, description : string) {
  try {
    const response = await axios.post(url + 'tickets', {
      title,
      description
    });
    return response.data;
  } catch (error) {
    throw new Error("error posting ticket");
  }
}

export async function updateTicket(title : string, description : string, statut: string, id: number) {
  try {
    const response = await axios.put(url + 'tickets/'+id, {
      title,
      description,
      statut
    });
    return response.data;
  } catch (error) {
    throw new Error("error posting ticket");
  }
}