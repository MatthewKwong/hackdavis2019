function tuteeProfile(name, email, courses, questions, match) {
  this.tuteeName = name;
  this.tuteeEmail = email;
  this.tuteeCourses = courses;
  this.tuteeQuestions = question;
  this.tuteeMatch = false;
}

function newTutee() {
  var tuteeName = document.getElementById('tuteeName').value;
  var tuteeEmail = document.getElementById('tuteeEmail').value;
  var tuteeCourses = document.getElementById('tuteeCourses').value;
  tuteeCourses = tuteeCourses.split(",");
  var tuteeQuestions = document.getElementById('tuteeQuestions').value;
  var tuteeMatch = false;

  var person = new tuteeProfile(tuteeName, tuteeEmail, tuteeCourses, tuteeCourses, tuteeMatch);

  allProfiles.splice(allProfiles.length, 0, person);

}
