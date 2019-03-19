import React from "react";
import { saveAs } from "file-saver";
import mimeTypes from "mime-types";
import PropTypes from "prop-types";
import { GenerateUid } from "../../utils/uid";

const FilesWriter = props => {
  const { datas, extension, fileName, children, ...rest } = props;

  const handleGenerate = () => {
    var blob = new Blob([datas], { type: `${mimeTypes.lookup(extension)};charset=utf-8` });
    saveAs(blob, `${fileName}.${extension}`);
  };

  return (
    <div onClick={handleGenerate} {...rest}>
      {children}
    </div>
  );
};

FilesWriter.propsTypes = {
  datas: PropTypes.array.isRequired || PropTypes.object.isRequired,
  fileName: PropTypes.string.isRequired,
  extension: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

FilesWriter.defaultProps = {
  fileName: `${GenerateUid(20)}`,
  extension: 'txt'
};

export default FilesWriter;
