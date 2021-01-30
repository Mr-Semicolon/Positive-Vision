const ServerConfig = class config {
  constructor() {
    this.SERVER_ROOT_URL = "/";
    this.DEFAULT_USER_IMAGE_URL = `https://www.pngkit.com/png/detail/453-4535321_png-file-svg-girl-face-icon-png.png`;
    this.OTP_LENGTH = 4;
    this.APP_NAME = "PositiveVision";
    this.APP_MOBILE = "000";
    this.IMAGE_FILE_SIZE = 10000000;
    this.VIDEO_FILE_SIZE = 10000000;
    this.PDF_FILE_SIZE = 1000000;
    this.DOC_FILE_SIZE = 1000000;
    this.AUDIO_FILE_SIZE = 1000000;
    this.FILE_TYPES_IMAGE = ".jpg#.jpeg#.png#.gif";
    this.FILE_TYPES_DOC = ".doc#.docx";
    this.FILE_TYPES_AUDIO = ".mp3";
    this.FILE_TYPES_VIDEO = ".mp4";
    this.FILE_TYPES_PDF = ".pdf";
    this.DEFAULT_LIMIT = 5;
    this.DEFAULT_PAGE = 1;
  }
};

module.exports = new ServerConfig();
