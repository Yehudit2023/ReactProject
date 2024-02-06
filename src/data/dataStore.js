import { action, makeObservable, observable } from 'mobx';
import { defaultServices } from "./allData";
import { defaultBD } from "./allData";
import { addServiceToServer } from "./server";

class DataStore {
    isLogin = false;// isEdit = false;
    isAdd = true;
    servicesArray = [];
    meetingsArray = [];
    BusinessData = {};
    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
            servicesArray: observable,
            setServices: action,
            addService: action,
            meetingsArray: observable,
            setMeetings: action,
            addMeeting: action,
            BusinessData: observable,
            setBusinessData: action,
            isAdd: observable,
            setIsAdd: action,
        })};
    setIsLogin(status) {
        this.isLogin = status;
    }
    setIsAdd(status) {
        this.isAdd = status;
    }
    setServices = (services) => {
        if (Object.keys(services).length === 0) {
            defaultServices.map(s => addServiceToServer(s))
            console.log("the new length is: ", this.servicesArray.length)
        }else {
            this.servicesArray = services;}
    }
    addService = (serviceToAdd) => {
        this.servicesArray = [...this.servicesArray, serviceToAdd];
    }
    setMeetings = (meetings) => {
        this.meetingsArray = meetings;
    }
    addMeeting = (meeting) => {
        this.meetingsArray = [...this.meetingsArray, meeting];
    }
    setBusinessData = (data) => {
        if (Object.keys(data).length === 0) {
            this.BusinessData = defaultBD;
        }else {
            this.BusinessData = data;
        } }
}
export default new DataStore()
