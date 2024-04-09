class File {
  constructor(file) {
    this.fieldname = file.fieldname;
    this.originalname = file.originalname;
    this.encoding = file.encoding;
    this.mimetype = file.mimetype;
    this.destination = file.destination;
    this.filename = file.filename;
    this.path = file.path;
    this.size = file.size;
  }

  get data() {
    return {
      fieldname: this.fieldname,
      originalname: this.originalname,
      encoding: this.encoding,
      mimetype: this.mimetype,
      destination: this.destination,
      filename: this.filename,
      path: this.path,
      size: this.size,
    };
  }

  get nameOfFile() {
    return this.originalname;
  }

  get sizeOfFIle() {
    return this.size;
  }
}

module.exports = File;
