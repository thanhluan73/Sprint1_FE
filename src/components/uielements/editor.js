import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import QuillEditor from './styles/editor.style';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: this.props.value, readOnly: this.props.readOnly };
    this.quillModules = {
      toolbar: {
        container: [
          [{ header: [1, 2, false] }, { font: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image', 'video'],
          ['clean'],
        ],
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, value: nextProps.value })
  }

  handleChange(value) {
    this.setState({ value });
    this.props.action(value)
  }

  render() {
    const options = {
      theme: 'snow',
      formats: Editor.formats,
      placeholder: 'Write Something',
      value: this.state.value,
      onChange: this.handleChange,
      modules: this.quillModules,
      readOnly: this.state.readOnly
    };
    return (
      <QuillEditor>
        <ReactQuill {...options} />
      </QuillEditor>
    );
  }
}
