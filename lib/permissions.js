// check that the userId specified owns the documents
// for debug, we'll say everyone owns a document
// we don't have ownership ironed out yet and need to test otherwise
ownsDocument = function(userId, doc) {
  return true;
  // return doc && doc.userId === userId;
}