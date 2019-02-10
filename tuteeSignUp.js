function tuteeProfile(name, email, courses, topics, match) {
  this.tuteeName = name;
  this.tuteeEmail = email;
  this.tuteeCourses = courses;
  this.tuteeCourses = topics;
  this.tuteeMatch = false;
}

function newTutee() {
  var tuteeName = document.getElementById('tuteeName').value;
  var tuteeEmail = document.getElementById('tuteeEmail').value;
  var tuteeCourses = document.getElementById('tuteeCourses').value;
  tuteeCourses = tuteeCourses.split(",");
  var tuteeTopics = document.getElementById('tuteeTopics').value;
  var tuteeMatch = false;

  var person = new tuteeProfile(tuteeName, tuteeEmail, tuteeCourses, tuteeCourses, tuteeMatch);

  allProfiles.splice(allProfiles.length, 0, person);

}
