class FilterState {
  String? board; // null means 'Random'
  String? level; // null means 'Random'
  String? branch; // null means 'Random' (excludes Comprehension)
  String? majorArea; // null means 'Random'
  String? topic; // null means 'Random'
  String? subtopic; // null means 'Random'

  FilterState({
    this.board,
    this.level,
    this.branch,
    this.majorArea,
    this.topic,
    this.subtopic,
  });

  bool get isRandomBoard => board == null || board == 'Random';
  bool get isRandomLevel => level == null || level == 'Random';
  bool get isRandomBranch => branch == null || branch == 'Random';
  bool get isRandomMajorArea => majorArea == null || majorArea == 'Random';
  bool get isRandomTopic => topic == null || topic == 'Random';
  bool get isRandomSubtopic => subtopic == null || subtopic == 'Random';

  void setBranch(String? newBranch) {
    if (branch != newBranch) {
      branch = newBranch;
      // Reset cascading children when branch changes
      majorArea = null;
      topic = null;
      subtopic = null;
    }
  }

  void setMajorArea(String? newArea) {
    if (majorArea != newArea) {
      majorArea = newArea;
      // Reset cascading children when major area changes
      topic = null;
      subtopic = null;
    }
  }

  void setTopic(String? newTopic) {
    if (topic != newTopic) {
      topic = newTopic;
      // Reset subtopic when topic changes
      subtopic = null;
    }
  }

  void reset() {
    board = null;
    level = null;
    branch = null;
    majorArea = null;
    topic = null;
    subtopic = null;
  }
}