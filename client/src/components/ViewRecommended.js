import React, { Component } from 'react';

import axios from 'axios';

import TableRowVacancyMember from './TableRowVacancyMember';

//  import {createStackNavigator, createAppContainer} from 'react-navigation';


export default class ViewRecommendations extends Component {

 

  constructor(props) {

      super(props);

      this.state = {vacancy: []};

    }
//na2es nehot id partner w negeeb ele events beta3to howa bas 3ashan y delete w edit 
//de hansebha bas hansheel menha delete w edit buttons
    componentDidMount(){

      axios.get('http://localhost:4000/api/member/viewRecommendedVacancies/'+this.props.match.params.id,{},{
        headers: {
        'Content-Type': 'application/json'
    }})

        .then(vacancy => {

          this.setState({vacancy: vacancy.data.data });

        })

        .catch(function (error) {

          console.log(error);

        })

    }

    tabRow(){

      return this.state.vacancy.map(function(object, i){

          return <TableRowVacancyMember obj={object} key={i} />;

      });

    }

 

    render() {

      return (

        <div>

          <h3 align="center">Recommended Vacancies:</h3>

          <table className="table table-striped" style={{ marginTop: 10 }}>

            <thead>

              <tr>

                <th>Daily Hours</th>

                <th>Description</th>

                <th>Duration</th>

                <th>Start Date</th>

                <th>End Date</th>

                <th>Monthly Wage</th>

                <th>Required Skills</th>

                <th>Location</th>

                {/* <th>Monthly Wage</th> */}

                {/* <th>Start Date</th> */}

                {/* <th>Daily Hours</th> */}

                {/* <th>End Date</th> */}

                <th colSpan="1">Action</th>

              </tr>

            </thead>

            <tbody>

              { this.tabRow() }

            </tbody>

          </table>

        </div>

      );

    }

  }