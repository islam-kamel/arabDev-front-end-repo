/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class CreateButton extends React.Component {
  constructor(props) {
    super(props)
    this.fontAwesomeIcon = this.props.fontAwesomeIcon
    this.icon = this.props.icon
    this.type = this.props.type
    this.className = this.props.className
    this.text = this.props.text
    this.alt = this.props.alt
    this.onClick = this.props.onClink
    this.href = this.props.href
  }

  image() {
    return <img src={this.props.icon} alt={this.alt + '-icon'} width={'32px'} style={{ display: 'inline-block' }} />
  }

  hyperLink() {
    return (
      <a href={this.href} target={'_self'} rel={'noopener'}>
        {this.text}
      </a>
    )
  }

  button() {
    return (
      <button
        type={this.type ? this.type : 'button'}
        className={`px-3 py-2  text-bold transition all 0.5s text-[#3b49df] border-2 border-[#3b49df] hover:bg-[#3b49df] rounded-md hover:text-[white] md:w-[100%] ${this.props.className}`}
        onClick={this.props.onClick}
      >
        {this.href ? this.hyperLink() : this.text}
        {this.icon && this.fontAwesomeIcon ? <FontAwesomeIcon icon={this.icon} /> : this.icon ? this.image() : null}
      </button>
    )
  }

  render() {
    return this.button()
  }
}
