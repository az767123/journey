let city = "贵阳"
try {
  if(localStorage.city) {
    city = localStorage.city
  }
}catch (e) {
}
const state = {
  city :city
}

export default state