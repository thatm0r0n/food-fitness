import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class Reschedule extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);   
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTiming = this.onChangeTiming.bind(this); 
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={
            username : '',
            description:'',
            timing: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/appointments/' + this.props.match.params.id)
        .then(response =>{
            this.setState({
                username:response.data.username,
                description: response.data.description,
                timing:response.data.timing,
                date: new Date(response.data.date)
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    componentDidMount(){
       axios.get('http://localhost:5000/users/')
       .then(response =>{
           if(response.data.length > 0){
               this.setState({
                   users: response.data.map(user => user.username)
               })
           }
       })
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }

    onChangeTiming(e){
        this.setState({
            timing:e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date:date
        });
    }
    
    onSubmit(e){
        e.preventDefault();

        const appointment = {
            username: this.state.username,
            description: this.state.description,
            timing: this.state.timing,
            date: this.state.date
        }

        console.log(appointment);
        axios.post('http://localhost:5000/appointments/update/'+this.props.match.id,appointment)
        .then(res=> console.log(res.data));
        
        window.location = '/';
    }

    render() {
        return(
            <div>
                <h3>Edit your Appointment</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}>
                                    {
                                      this.state.users.map(function(user){
                                          return <option
                                          key={user}
                                          value={user}>{user}
                                          </option>;
                                      })
                                    }
                        </select>
                        </div>
                    <div className="form-group">
                            <label>Description: </label>
                            <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.description}
                                    onChange={this.onChangeDescription} />
                        </div>
                    <div className="form-group">
                            <label>Timing: </label>
                            <input type="text"
                                    required
                                    className="form-control"
                                    value={this.state.timings}
                                    onChange={this.onChangeTiming} />
                        </div>
                    <div className="form-group">
                            <label>Date: </label>
                            <div>
                                <DatePicker
                                   selected={this.state.date}
                                   onChange={this.onChangeDate}/>
                            </div>
                        </div>
                <div className="form-group">
                            <input type="submit" value="Edit Appointment list" className="btn btn-primary"/>
                        </div>
                </form>
            </div>
        )
    }
}