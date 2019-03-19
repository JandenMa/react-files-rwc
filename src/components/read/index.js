import React from "react";
import PropTypes from "prop-types";
import mimeTypes from "mime-types";

const FilesReader = props => {
  const { fileTypes, disabled, id, multi, getFiles, children } = props;

  const handleChange = e => {
    getFiles(e.target.files);
  };

  const openFile = () => {
    const input = document.getElementById(id);
    input.value = "";
    input.click();
  };

  return (
    <div>
      <input
        onChange={e => handleChange(e)}
        type="file"
        hidden
        accept={Array.isArray(fileTypes) ? fileTypes.join(",") : fileTypes}
        disabled={disabled}
        multiple={multi}
        id={id}
      />
      <div onClick={openFile}>{children}</div>
    </div>
  );
};

FilesReader.propsTypes = {
  getFiles: PropTypes.func.isRequired,
  fileTypes: PropTypes.string || PropTypes.array,
  disabled: PropTypes.bool,
  children: PropTypes.element.isRequired,
  id: PropTypes.string,
  multi: PropTypes.bool
};

FilesReader.defaultProps = {
  fileTypes: [
    mimeTypes.lookup(".csv"),
    mimeTypes.lookup(".txt"),
    mimeTypes.lookup(".doc"),
    mimeTypes.lookup(".xls"),
    mimeTypes.lookup(".pages"),
    mimeTypes.lookup(".numbers")
  ],
  disabled: false,
  id: Math.floor(Math.random() * new Date().getFullYear()),
  multi: false
};

export default FilesReader;
