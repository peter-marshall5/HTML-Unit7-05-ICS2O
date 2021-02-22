const ageInput = document.getElementById('age')
const dayInput = document.getElementById('day')
const checkButton = document.getElementById('check')

function weekend () {
  alert('Time to relax for the weekend!')
}

function work () {
  alert('Time to go to work!')
}

function school () {
  alert('Time for school!')
}

function onclick () {
  const age = parseInt(ageInput.value)
  const weekday = parseInt(dayInput.value)
  // 2 = Tuesday, 4 = Thursday
  if (weekday == 0 || weekday == 6) {
    noSchool()
    return
  }
  if (age >= 18) {
    work()
  } else {
    school()
  }
}

checkButton.addEventListener('click', onclick)
