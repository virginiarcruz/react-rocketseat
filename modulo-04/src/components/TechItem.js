import React, { Component } from 'react'
import PropTypes from 'prop-types'


function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button
        onClick={onDelete}
        type="button"
      > Remove
            </button>
    </li>
  )
}

TechItem.defaultProps = {
  tech: "ocult"
}

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;