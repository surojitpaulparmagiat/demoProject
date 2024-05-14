class MultipleError extends Error {
  constructor(error_messages, http_code=400) {
    const single_message_string = error_messages.join("\n");
    super(single_message_string);
    this.errors = error_messages;
    this.http_code = http_code;
  }
}
module.exports = { MultipleError };