(function(exports) {
  function SingleNoteView(notemodel) {
    this.createHTML = '<div>' + notemodel.text + '</div>';

    SingleNoteView.prototype.noteview = function() {
      return this.createHTML;
    }
  }
  exports.SingleNoteView = SingleNoteView;
})(this);
