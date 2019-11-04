
export function getUser(id, users) {
  const user = users.filter(_user => _user.ID === id)
  return user[0].firstname + " " + user[0].lastname
}

export function formatDate(date){
  var formatedDate = new Date(date * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = formatedDate.getFullYear();
  var month = months[formatedDate.getMonth()];
  var day = formatedDate.getDate();
  return day + ' ' + month + ' ' + year;
}

export function getProject(id, projects) {
  const project = projects.filter(_project => _project.ID === id)
  return project[0].label
}

export function getMilestone(id, milestones) {
  const milestone = milestones.filter(_milestone => _milestone.ID === id)
  return milestone[0].label
}