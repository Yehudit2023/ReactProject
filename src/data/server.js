import axios from "axios";
import DataStore from "./dataStore";
import Swal from 'sweetalert2';
import dataStore from "./dataStore";
import {defaultBD} from "./allData";

export async function CheckLogin(name, password) {
    try {

        const res = await axios.post('http://localhost:8787/login', { name, password });
        if (res.status === 200) {
            console.log('success');
            Swal.fire({
                icon: "success",
                title: "כניסתך נקלטה בהצלחה",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            DataStore.setIsLogin(true);
        }
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.log('login failed!');
            Swal.fire({
                icon: "error",
                title: "שם משתמש / סיסמא שגויים",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Server Failed",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            console.log(error);
        }
    }
}

export async function getServices() {
    try {
        const response = await axios.get('http://localhost:8787/services');
        const services = response.data;
         console.log("services.length",services.length)
         console.log("ki",services)
        dataStore.setServices(services);
        return;
    } catch (error) {
        console.error(error);
    }
}

export async function addServiceToServer(service) {
    try {
        const res = await axios.post('http://localhost:8787/service', service)
        if (res.status === 200) {
            console.log("hhhhhh")
            console.log(res.status)
            dataStore.addService(service);
            console.log('addService success');
            return 'success';
        }
    }
    catch (error) {
        if (error.response && error.response.status === 400) {
            console.log('addService failed!');
        } else {
            console.log(error);
        }
    }
}
export async function getMeetings() {
    try {
        const res = await axios.get('http://localhost:8787/appointments');
        // const meetings = res.data;
        console.log(res.data)
        DataStore.setMeetings(res.data);
        
        return;
    } catch (error) {
        console.error(error);
    }
}

export async function addMeeting(meeting) {
    try {
        const res = await axios.post('http://localhost:8787/appointment', meeting)
        if (res.status === 200) {
            dataStore.addMeeting(meeting);
            dataStore.setIsAdd(true);    
            Swal.fire({
                icon: "success",
                title: "Great!",
                text: "הפגישה נקבעה בהצלחה",
                footer: '<a href="#">Why do I have this issue?</a>'
              })
            console.log('meeeting added sucsessfuly');
        }
    }
    catch (error) {
        dataStore.setIsAdd(false);    
    }
}
export async function getBusinessData() {
    try {
        const response = await axios.get('http://localhost:8787/businessData');
        const businessData = response.data;
        DataStore.setBusinessData(businessData);
        return;
    } catch (error) {
        console.error(error);
    }
}
export async function editedBusinessData(businessData) {
    try {
        const res = await axios.post('http://localhost:8787/businessData', businessData)
        if (res.status === 200) {
            DataStore.setBusinessData(businessData);
            console.log('edit Business Data success');
            return 'sucsess';
        }
    }
    catch (error) {
        if (error.response && error.response.status === 400) {
            console.log('edit Business Data failed!');
        } else {
            console.log(error);
        }
    }
}