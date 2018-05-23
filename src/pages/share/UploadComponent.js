import React, { Component } from 'react'
import DropzoneComponent from 'react-dropzone-component'
import { HOST } from '../../Constants'

class UploadComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: this.props.token,
      file: null
    }
  }

  handleFileRemoved(file) {
    this.props.handleRemoveImage(file)
  }

  eventHandlers = {
    removedfile: this.handleFileRemoved.bind(this),
    success: (file, response) => {
      this.props.handleAddImageSuccess(response.data)
    }
  }

  render() {
    let componentConfig = {
      allowedFiletypes: ['.jpg', '.png', '.gif'],
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      uploadMultiple: true,
      postUrl: `${HOST}/upload`
    }

    let djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: 'image/*',
      headers: {
        Authorization: this.state.token
      }
    }

    return (
      <DropzoneComponent
        config={componentConfig}
        eventHandlers={this.eventHandlers}
        djsConfig={djsConfig}
      />
    )
  }
}

export default UploadComponent
