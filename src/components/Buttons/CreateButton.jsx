/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class CreateButton extends React.Component {
  constructor(props) {
    super(props)
    this.fontAwesomeIcon = null
    this.withIcon = null
    this.icon = null
    this.type = false
    this.className = null
    this.text = null
    this.alt = null
    this.path = null
    this.onClick = null
  }

  image() {
    return <img src={this.props.path} alt={this.alt + '-icon'} />
  }

  button() {
    return (
      <button
        type={this.props.type ? this.props.type : 'button'}
        className={`px-3 py-2  text-bold transition all 0.5s text-[#3b49df] border-2 border-[#3b49df] hover:bg-[#3b49df] rounded-md hover:text-[white] md:w-[100%] ${this.props.className}`}
        onClick={this.props.onClick}
      >
        {this.props.text}
        {this.props.withIcon && this.props.fontAwesomeIcon ? (
          <FontAwesomeIcon icon={this.props.icon} />
        ) : this.props.path ? (
          this.image()
        ) : (
          ''
        )}
      </button>
    )
  }

  render() {
    return this.button()
  }
}
