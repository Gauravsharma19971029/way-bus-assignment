import React, { Component } from "react";
import CardList from "../cards-list/cards-list.component.jsx";
import Search from "../search-component/search.component.jsx"
import Name from '../modal/name.component'
import data from "../../json/data.json"

class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: ""
        };
    }

    componentDidMount() {
        this.setState({ users: data });

    }

    // eslint-disable-next-line react/require-render-return
    render() {

        return (<div>
            <Name name={"Gaurav"}></Name>
            <h1>WayBus</h1>
            <Search placeholder="search here" handleChange={e => this.setState({
                searchField: e.target.value
            })}></Search>

            <CardList users={this.state.users} searchElement={this.state.searchField}></CardList>


        </div>);
    }
}

export default Home;
