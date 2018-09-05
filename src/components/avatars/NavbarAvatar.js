import React, { Component } from 'react'

export default class NavbarAvatar extends Component {
    
    render() {
        return (
            <img className="user-avatar-sm mr-2" src={this.props.user.avatar_url} alt={this.props.user.name}/>
        );
    }
}