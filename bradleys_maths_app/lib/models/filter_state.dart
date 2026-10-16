class FilterState {
  String? board; // null means 'Random'
  String? level; // null means 'Random'
  String? branch; // null means 'Random' (excludes Comprehension)
  String? majorArea; // null means 'Random'
  String? topic; // null means 'Random'

  FilterState({
    this.board,
    this.level,
    this.branch,
    this.majorArea,
    this.topic,
  });

  bool get isRandomBoard => board == null || board == 'Random';
  bool get isRandomLevel => level == null || level == 'Random';
  bool get isRandomBranch => branch == null || branch == 'Random';
  bool get isRandomMajorArea => majorArea == null || majorArea == 'Random';
  bool get isRandomTopic => topic == null || topic == 'Random';

  void setBranch(String? newBranch) {
    if (branch != newBranch) {
      branch = newBranch;
      // Reset cascading children when branch changes
      majorArea = null;
      topic = null;
    }
  }

  void setMajorArea(String? newArea) {
    if (majorArea != newArea) {
      majorArea = newArea;
      // Reset topic when major area changes
      topic = null;
    }
  }

  void reset() {
    board = null;
    level = null;
    branch = null;
    majorArea = null;
    topic = null;
  }
}