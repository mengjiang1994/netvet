import axios from 'axios';

export async function getAllAppointmentsAsync(){
    try {
        const { data } = await axios.get('/appointments');
        return data;
    } catch(err) {
        alert('Error getting all appointments');  // TODO: use modal to display message
    }
}

export function getAllAppointments(){
    return axios.get(`/appointments`);
}

//get Appointments by Date
//example: /appointments?date=2017-04-07
export function getAppointmentsbyDate(date){
    return axios.get(`/appointments?date=${date}`);
}

//get Appointments by Name
//example: /appointments?pet_name=Riffpath
export function getAppointmentsbyName(name){
    return axios.get(`/appointments?pet_name=${name}`);
}
